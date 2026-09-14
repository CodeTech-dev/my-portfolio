import { ArrowUpRight, Download } from 'lucide-react'

export default function Button({ children, href = '#', variant = 'primary', download = false }) {
	const Icon = download ? Download : ArrowUpRight
	return (
		<a className={`button button-${variant}`} href={href} download={download || undefined}>
			{children}
			<Icon size={16} strokeWidth={2.2} aria-hidden="true" />
		</a>
	)
}
