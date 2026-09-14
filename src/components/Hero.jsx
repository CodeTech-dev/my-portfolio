import { ArrowRight, Download, Terminal } from 'lucide-react'

export default function Hero() {
	return (
		<section className="hero section-grid" id="top">
			<div className="container hero-layout">
				<div className="hero-copy">
					<div className="availability"><span className="pulse-dot" /> Available for work</div>
					<h1>Building digital<br /><span>experiences</span><br />with precision.</h1>
					<p className="hero-description">Full-stack developer specializing in modern web technologies. I craft clean, performant, and interactive applications that solve real problems.</p>
					<div className="hero-actions">
						<a className="button button-primary" href="#work">View Projects <ArrowRight size={17} /></a>
						<a className="button button-secondary" href="/resume.pdf"><Download size={16} /> Resume</a>
					</div>
				</div>
				<div className="code-window" aria-label="Developer configuration code example">
					<div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>config.ts</span><Terminal size={15} /></div>
					<pre><code><em>const</em> developer = {'{'}{`\n`}  name: <b>&quot;Alex Creative&quot;</b>,{`\n`}  role: <b>&quot;Full Stack Engineer&quot;</b>,{`\n`}  stack: [{`\n`}    <b>&quot;React&quot;</b>, <b>&quot;Next.js&quot;</b>, <b>&quot;TypeScript&quot;</b>{`\n`}  ],{`\n`}  hardWorker: <strong>true</strong>,{`\n`}  hire() {'{'}{`\n`}    <b>return</b> <b>&quot;Let&apos;s build something!&quot;</b>;{`\n`}  {'}'}{`\n`}{'}'};</code></pre>
					<span className="code-cursor" />
				</div>
			</div>
		</section>
	)
}
