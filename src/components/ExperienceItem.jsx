import { H4, P, Small, Muted } from './Typography.jsx';
import { Badge } from './Badge.jsx';

export default function ExperienceItem({
	title,
	company,
	location,
	period,
	description,
	tools = [],
}) {
	return (
		<div className="animate-fade-in-up">
			{/* Header */}
			<div className="flex flex-col gap-4 mb-6">
				<H4 className="text-2xl font-bold text-foreground">
					{title}
				</H4>
				<div className="flex flex-wrap items-center gap-3">
					<span className="text-lg font-semibold text-foreground">
						{company}
					</span>
					<div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
					<span className="text-muted-foreground font-medium">
						{location}
					</span>
					<div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
					<span className="text-muted-foreground font-medium">
						{period}
					</span>
				</div>
			</div>

			{/* Description */}
			<Muted className="text-lg leading-8 mb-8">
				{description}
			</Muted>

			{/* Tools */}
			{tools.length > 0 && (
				<div className="flex flex-wrap gap-3">
					{tools.map((tool, index) => (
						<Badge
							key={index}
							variant="tech"
							size="sm"
							className="font-medium">
							{tool}
						</Badge>
					))}
				</div>
			)}
		</div>
	);
}
