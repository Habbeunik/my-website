import { H4, P, Small, Muted } from './Typography.jsx';

export default function FunItem({
	title,
	description,
	tags = [],
	url,
	emoji,
	index = 0,
	totalItems = 0,
}) {
	const isFirstRow = index < 2;
	const isLastRow =
		index >= totalItems - (totalItems % 2 === 0 ? 2 : 1);
	const isFirstColumn = index % 2 === 0;

	const borderClasses = [
		isFirstRow ? 'border-t border-slate-700' : '',
		!isLastRow ? 'border-b border-slate-700' : '',
		isFirstColumn ? 'border-r border-slate-700' : '',
	]
		.filter(Boolean)
		.join(' ');

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className={`group block bg-card p-6 hover:bg-muted/50 transition-all duration-300 hover:shadow-md hover:border-muted-foreground/20 h-full ${borderClasses}`}>
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center gap-3">
					<span className="text-2xl">{emoji}</span>
					<H4 className="text-lg font-semibold text-foreground group-hover:text-foreground transition-colors duration-300">
						{title}
					</H4>
				</div>

				<svg
					className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
					/>
				</svg>
			</div>

			<Muted
				className="text-sm text-muted-foreground leading-relaxed mb-4 overflow-hidden"
				style={{
					display: '-webkit-box',
					WebkitLineClamp: 3,
					WebkitBoxOrient: 'vertical',
				}}>
				{description}
			</Muted>

			{tags.length > 0 && (
				<div className="flex flex-wrap gap-2">
					{tags.slice(0, 4).map((tag, index) => (
						<span
							key={index}
							className="text-xs text-muted-foreground border-b border-muted pb-0.5">
							{tag}
						</span>
					))}
					{tags.length > 4 && (
						<span className="text-xs text-muted-foreground">
							+{tags.length - 4} more
						</span>
					)}
				</div>
			)}
		</a>
	);
}
