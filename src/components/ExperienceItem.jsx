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
		<div className="flex flex-col gap-y-2 animate-fade-in-up">
			<H4 className="text-lg font-semibold hover-scale cursor-default">
				{title}
			</H4>
			<div>
				<P className="flex flex-wrap items-center gap-2 text-base mt-0">
					<span className="font-medium">{company}</span>
					<span>•</span>
					<span className="text-muted-foreground">
						{location}
					</span>
					<span>•</span>
					<span className="text-muted-foreground">
						{period}
					</span>
				</P>
			</div>
			<Muted className="text-base leading-8">
				{description}
			</Muted>

			{tools.length > 0 && (
				<div className="flex flex-wrap gap-2 mt-3">
					{tools.map((tool, index) => (
						<Badge
							key={index}
							variant="muted"
							size="sm"
							className="font-medium hover-scale">
							{tool}
						</Badge>
					))}
				</div>
			)}
		</div>
	);
}
