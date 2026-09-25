import { ExternalLink } from 'lucide-react'

export default function ProjectCard({ project }) {
	return <article className="project-card">
		<div className={`project-visual visual-${project.visual}`}>
			<img className="project-image" src={project.image} alt={`${project.title} screenshot`} loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none' }} />
			<div className="visual-content"><span className="visual-kicker">{project.category}</span><strong>{project.title}</strong><span className="visual-line" /></div>
		</div>
		<div className="project-meta"><span className="category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-actions"><a className="button button-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} /> Live Demo</a></div></div>
	</article>
}
