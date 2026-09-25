import { LayoutGrid } from 'lucide-react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const container = {
	hidden: {},
	show: { transition: { staggerChildren: 0.12 } },
}

const item = {
	hidden: { opacity: 0, y: 24 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function FeaturedProjects() {
	return <section className="section section-grid" id="work"><div className="container"><div className="section-heading"><div><h2>Selected Works</h2></div><a className="button button-primary" href="#work">View All Projects <LayoutGrid size={16} /></a></div><motion.div className="project-grid" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>{projects.map((project) => <motion.div key={project.id} variants={item}><ProjectCard project={project} /></motion.div>)}</motion.div></div></section>
}
