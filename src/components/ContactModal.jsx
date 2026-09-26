import { useState } from 'react'
import Modal from './Modal'
import { sendContactEmail } from '../lib/contact'

const TO_EMAIL = 'mrgideontech@gmail.com' 

export default function ContactModal({ isOpen, onClose, senderEmail }) {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const resetAndClose = () => {
    setSubject('')
    setMessage('')
    setStatus('idle')
    onClose()
  }

  const handleSend = async (e) => {
    e.preventDefault()
    if (!subject.trim() || !message.trim()) return

    setStatus('sending')
    try {
      await sendContactEmail({
        fromEmail: senderEmail,
        subject,
        message,
      })
      setStatus('success')
      setTimeout(resetAndClose, 1800)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={resetAndClose} title="Send a message">
      <form onSubmit={handleSend} className="space-y-4">
        <div>
          <label className="mb-1 block text-xs font-medium text-secondary-text">
            From
          </label>
          <input
            type="email"
            value={senderEmail}
            readOnly
            className="w-full rounded-lg border border-white/10 bg-background-dark px-3 py-2 text-sm text-secondary-text"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-secondary-text">
            To
          </label>
          <input
            type="email"
            value={TO_EMAIL}
            readOnly
            className="w-full rounded-lg border border-white/10 bg-background-dark px-3 py-2 text-sm text-secondary-text"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-secondary-text">
            Subject
          </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            placeholder="What's this about?"
            className="w-full rounded-lg border border-white/10 bg-background-dark px-3 py-2 text-sm text-off-white placeholder:text-secondary-text/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-secondary-text">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            placeholder="Tell me about your project..."
            className="w-full resize-none rounded-lg border border-white/10 bg-background-dark px-3 py-2 text-sm text-off-white placeholder:text-secondary-text/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {status === 'error' && (
          <p className="text-sm text-red-400">
            Something went wrong. Please try again.
          </p>
        )}
        {status === 'success' && (
          <p className="text-sm text-primary">Message sent successfully!</p>
        )}

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={resetAndClose}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-secondary-text hover:text-off-white hover:bg-white/5 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-background-dark hover:bg-primary-hover transition-colors disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </Modal>
  )
}