import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
// Supabase's "Connect" dialog names this key differently depending on project age
const publicKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY ||
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY

// null until the keys are added to .env, so the site still runs without them
export const supabase = url && publicKey ? createClient(url, publicKey) : null
