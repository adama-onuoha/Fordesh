import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase.js'

const emptyForm = { name: '', email: '', phone: '', subject: '', message: '' }
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

    if (!supabase) {
      setStatus('error')
      setError('The contact form is not connected yet. Please email fordesh@gmail.com.')
      return
    }

    setStatus('sending')
    setError('')

    const { error: insertError } = await supabase.from('contact_messages').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      subject: form.subject.trim() || null,
      message: form.message.trim(),
    })

    if (insertError) {
      setStatus('error')
      setError('Sorry, your message could not be sent. Please try again or email fordesh@gmail.com.')
      return
    }

    setStatus('sent')
    setForm(emptyForm)
  }

  return (
    <section className="contact" id="contact">
      <div className="row">
        <form onSubmit={handleSubmit}>
          <h3 className="heading">
            contact <span>us</span>
          </h3>

          {status === 'sent' && (
            <span className="success-msg">
              Thank you! Your message has been sent. We will get back to you soon.
            </span>
          )}
          {status === 'error' && <span className="error-msg">{error}</span>}

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
