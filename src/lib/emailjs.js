import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export async function sendContactEmail({ fromEmail, toEmail, subject, message }) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('EmailJS is not configured. Check your .env file.')
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_email: fromEmail,
      to_email: toEmail,
      subject,
      message,
    },
    { publicKey: PUBLIC_KEY }
  )
}