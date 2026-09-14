import { Code2, ExternalLink } from 'lucide-react'
import Button from './Button'

export default function ProjectCard({ project }) {
	return <article className="project-card">
		<div className={`project-visual visual-${project.visual}`} aria-label={`${project.title} preview`} role="img">
			<div className="visual-content"><span className="visual-kicker">{project.category}</span><strong>{project.title}</strong><span className="visual-line" /></div>
		</div>
		<div className="project-meta"><span className="category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-actions"><Button href={project.liveUrl}>Live Demo</Button><a className="button button-secondary" href={project.githubUrl}><Code2 size={16} /> GitHub <ExternalLink size={13} aria-hidden="true" /></a></div></div>
	</article>
}
