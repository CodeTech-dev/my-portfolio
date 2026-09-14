import { Braces, Cloud, Database, Layers3 } from 'lucide-react'

const stack = [
  ['Frontend', 'React & Next.js', Layers3],
  ['Backend', 'Node & Express', Braces],
  ['Database', 'PostgreSQL & Redis', Database],
  ['AI/ML', 'TensorFlow & PyTorch', Cloud],
]

export default function TechStack() {
  return <section className="section section-grid" id="stack"><div className="container"><h2 className="section-title">Tech Stack</h2><div className="stack-grid">{stack.map(([title, detail, Icon]) => <article className="stack-card" key={title}><span className="stack-icon"><Icon size={24} /></span><span><strong>{title}</strong><small>{detail}</small></span></article>)}</div></div></section>
}