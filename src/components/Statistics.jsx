const statistics = [['3+', 'Years Experience'], ['20+', 'Projects Shipped'], ['100%', 'Client Satisfaction'], ['5k+', 'Commits Pushed']]

export default function Statistics() {
	return <section className="statistics" id="about"><div className="container stats-grid">{statistics.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
}
