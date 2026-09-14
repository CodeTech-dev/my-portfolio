import { Menu, Terminal, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
	const [open, setOpen] = useState(false)
	const links = [['Work', '#work'], ['About', '#about'], ['Stack', '#stack']]

	return (
		<header className="navbar">
			<div className="container nav-inner">
				<a className="brand" href="#top" aria-label="Dev Portfolio home">
					<span className="brand-mark"><Terminal size={17} /></span>
					<span>Dev<span className="accent">.Portfolio</span></span>
				</a>
				<nav className={open ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
					{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
				</nav>
				<a className="talk-link" href="#contact">Let&apos;s Talk</a>
				<button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
					{open ? <X size={22} /> : <Menu size={22} />}
				</button>
			</div>
		</header>
	)
}
