import { ArrowRight } from 'lucide-react'

export default function Footer() {
	return <footer className="footer section-grid" id="contact"><div className="container footer-layout"><div><h2>Have an idea?<br /><span>Let&apos;s build it.</span></h2><form className="email-form" onSubmit={(event) => event.preventDefault()}><input type="email" placeholder="Enter your email" aria-label="Email address" required /><button type="submit" aria-label="Send email"><ArrowRight size={22} /></button></form></div><div className="socials"><span className="eyebrow">Socials</span><a href="#contact">GitHub</a><a href="#contact">LinkedIn</a><a href="#contact">Twitter</a><p>© {new Date().getFullYear()} Alex Dev.<br />Built with precision &amp; passion.</p></div></div></footer>
}
