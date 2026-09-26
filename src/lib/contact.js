export async function sendContactEmail({ fromEmail, subject, message }) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fromEmail, subject, message }),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.error || 'Failed to send message')
  }

  return data
}