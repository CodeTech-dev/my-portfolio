import { LayoutGrid } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function FeaturedProjects() {
	return <section className="section section-grid" id="work"><div className="container"><div className="section-heading"><div><h2>Featured Projects</h2><p>A selection of recent full-stack applications built with modern tools and performance in mind.</p></div><a className="button button-primary" href="#work">View All Projects <LayoutGrid size={16} /></a></div><div className="project-grid">{projects.map((project) => <ProjectCard project={project} key={project.title} />)}</div></div></section>
}
