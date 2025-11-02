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
		<div className="group animate-fade-in-up flex flex-col gap-6 relative pl-6 md:pl-8 border-l-2 border-muted-foreground/20 hover:border-white/40 transition-colors duration-300">
			<div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-muted-foreground/40 group-hover:bg-white/60 transition-colors duration-300"></div>
			<div className="flex flex-col gap-4">
				<H4 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
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

			<Muted className="text-lg leading-8 text-muted-foreground/90">
				{description}
			</Muted>

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
