import StatItem from './StatsItem'

const statistics = [
	{ value: 3, suffix: '+', label: 'Years Experience' },
	{ value: 20, suffix: '+', label: 'Projects Shipped' },
	{ value: 100, suffix: '%', label: 'Client Satisfaction' },
	{ value: 5, suffix: 'k+', label: 'Commits Pushed' },
]

export default function Statistics() {
	return <section className="statistics" id="about"><div className="container stats-grid">{statistics.map((stat) => <StatItem key={stat.label} {...stat} />)}</div></section>
}
