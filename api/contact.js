import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { fromEmail, subject, message } = req.body || {}

  if (!fromEmail || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(fromEmail)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // swap once your domain is verified
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: fromEmail,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${fromEmail}\n\n${message}`,
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ success: true, id: data.id })
  } catch (err) {
    console.error('Server error:', err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}