// Supabase Edge Function: emails each new contact form message to FORDESH AFRICA.
// Triggered by a Database Webhook on INSERT into public.contact_messages.
//
// Secrets (Supabase Dashboard -> Edge Functions -> Secrets):
//   RESEND_API_KEY  - from resend.com -> API Keys
//   TO_EMAILS       - optional, comma-separated recipients (defaults below)
//   FROM_EMAIL      - optional sender (defaults below)
// SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are provided by Supabase automatically.
//
// Sending from fordeshafrica.com needs that domain verified in Resend (Domains -> Add Domain).

const TO_EMAILS = (Deno.env.get('TO_EMAILS') ?? 'info@fordeshafrica.com,fordesh@gmail.com')
  .split(',')
  .map((address) => address.trim())
  .filter(Boolean)
const FROM_EMAIL = Deno.env.get('FROM_EMAIL') ?? 'FORDESH Website <website@fordeshafrica.com>'

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

// Server-side key for reading the table. Newer projects provide sb_secret_ keys
// (sent as `apikey` only); older ones provide a service_role JWT.
const serverKeyHeaders = (): Record<string, string> => {
  const legacy = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (legacy?.startsWith('eyJ')) return { apikey: legacy, Authorization: `Bearer ${legacy}` }

  let secret = legacy ?? ''
  try {
    const keys = JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS') ?? '{}')
    secret = (Array.isArray(keys) ? keys[0] : keys.default ?? Object.values(keys)[0]) ?? secret
  } catch {
    // not JSON; fall back to the legacy value
  }
  return { apikey: secret }
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 })

  let id: unknown
  try {
    id = (await req.json())?.record?.id
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }
  if (typeof id !== 'number') return new Response('Missing record id', { status: 400 })

  // Re-read the message from the database rather than trusting the request body,
  // so this function can only ever email real, recently submitted messages.
  const dbUrl = `${Deno.env.get('SUPABASE_URL')}/rest/v1/contact_messages?id=eq.${id}&select=*`
  const dbRes = await fetch(dbUrl, { headers: serverKeyHeaders() })
  const [message] = dbRes.ok ? await dbRes.json() : []
  if (!message) return new Response('Message not found', { status: 404 })

  const ageMinutes = (Date.now() - new Date(message.created_at).getTime()) / 60000
  if (ageMinutes > 10) return new Response('Message too old to email', { status: 409 })

  const rows: [string, string | null][] = [
    ['Name', message.name],
    ['Email', message.email],
    ['Phone', message.phone],
    ['Subject', message.subject],
  ]
  const html = `
    <h2 style="color:#15472f;font-family:Arial,sans-serif">New message from the FORDESH AFRICA website</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      ${rows
        .filter(([, value]) => value)
        .map(
          ([label, value]) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#546a57"><b>${label}</b></td><td style="padding:4px 0">${escapeHtml(value!)}</td></tr>`,
        )
        .join('')}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap;border-left:3px solid #2c7d4b;padding-left:12px;margin-top:16px">${escapeHtml(message.message)}</p>
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#888">Sent ${new Date(message.created_at).toUTCString()}. Reply to this email to answer ${escapeHtml(message.name)} directly.</p>
  `

  const emailRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: TO_EMAILS,
      reply_to: message.email,
      subject: `Website message: ${message.subject || 'New enquiry'} (from ${message.name})`,
      html,
    }),
  })

  if (!emailRes.ok) {
    const detail = await emailRes.text()
    console.error('Resend error', emailRes.status, detail)
    return new Response(`Email failed: ${detail}`, { status: 502 })
  }

  return new Response('Email sent', { status: 200 })
})
