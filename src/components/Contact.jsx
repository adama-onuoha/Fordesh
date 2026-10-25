import { useEffect, useState } from 'react'
import { businessEmail } from '../data/contact.js'

// Messages are collected by Netlify Forms (form "contact", declared in index.html)
// and emailed to the business address from Netlify's form notifications.
const FORM_NAME = 'contact'
const emptyForm = { name: '', email: '', phone: '', subject: '', message: '', 'bot-field': '' }
const SUCCESS_VISIBLE_MS = 5000

function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  // Hide the success message after a few seconds; errors stay until the next attempt
  useEffect(() => {
    if (status !== 'sent') return
    const timer = setTimeout(() => setStatus('idle'), SUCCESS_VISIBLE_MS)
    return () => clearTimeout(timer)
  }, [status])

  const handleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value })

  const handleSubmit = async (event) => {
    event.preventDefault()

    setStatus('sending')
    setError('')

    const fields = Object.fromEntries(
      Object.entries(form).map(([key, value]) => [key, value.trim()]),
    )

    let sent = false
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': FORM_NAME, ...fields }).toString(),
      })
      sent = response.ok
    } catch {
      // network error: handled below like any other failure
    }

    if (!sent) {
      setStatus('error')
      setError(`Sorry, your message could not be sent. Please try again or email ${businessEmail}.`)
      return
    }

    setStatus('sent')
    setForm(emptyForm)
  }

  return (
    <section className="contact" id="contact">
      <div className="row">
        <form
          name={FORM_NAME}
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <h3 className="heading">
            contact <span>us</span>
          </h3>

          <div className="contact-business">
            <strong>FORDESH AFRICA</strong>
            <a href={`mailto:${businessEmail}`}>
              <i className="fa-solid fa-envelope"></i> {businessEmail}
            </a>
          </div>

          {status === 'sent' && (
            <span className="success-msg">
              Thank you! Your message has been sent. We will get back to you soon.
            </span>
          )}
          {status === 'error' && <span className="error-msg">{error}</span>}

          {/* Hidden from people; spam bots fill it in and Netlify discards those messages */}
          <p hidden>
            <label>
              Leave this empty:{' '}
              <input name="bot-field" value={form['bot-field']} onChange={handleChange} />
            </label>
          </p>

          <div className="form-control">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
              className="box"
              required
              maxLength={120}
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              className="box"
              required
              maxLength={200}
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone no."
              autoComplete="tel"
              className="box"
              maxLength={40}
              value={form.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="box"
              maxLength={200}
              value={form.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="box"
              required
              maxLength={5000}
              value={form.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'sending…' : 'send'}{' '}
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
