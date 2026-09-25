import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import ContactModal from './ContactModal'

export default function Footer() {
	const [email, setEmail] = useState('')
	const [modalOpen, setModalOpen] = useState(false)

	const handleSubmit = (event) => {
		event.preventDefault()
		if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) setModalOpen(true)
	}

	return <>
		<footer className="footer section-grid" id="contact"><div className="container footer-layout"><div><h2>Have an idea?<br /><span>Let&apos;s build it.</span></h2><form className="email-form" onSubmit={handleSubmit}><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" aria-label="Email address" required /><button type="submit" aria-label="Open contact form"><ArrowRight size={22} /></button></form></div><div className="socials"><span className="eyebrow">Socials</span><a href="#contact">GitHub</a><a href="#contact">LinkedIn</a><a href="#contact">Twitter</a><p>© {new Date().getFullYear()} Alex Dev.<br />Built with precision &amp; passion.</p></div></div></footer>
		<ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} senderEmail={email} />
	</>
}
