import { H4, P, Small, Muted } from './Typography.jsx';
import { Badge } from './Badge.jsx';
import {
	Card,
	CardHeader,
	CardTitle,
	CardIcon,
	CardContent,
	CardDescription,
	CardFooter,
} from './Card.jsx';

export default function ProjectItem({
	title,
	description,
	technologies = [],
	githubUrl,
	liveUrl,
	status = 'completed',
	index = 0,
	totalItems = 0,
}) {
	// Use liveUrl as primary link, fallback to githubUrl
	const projectUrl = liveUrl || githubUrl;

	return (
		<Card asChild>
			<a
				href={projectUrl}
				target="_blank"
				rel="noopener noreferrer">
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					<CardIcon />
				</CardHeader>

				<CardContent>
					<CardDescription>{description}</CardDescription>
				</CardContent>

				{/* Technologies */}
				{technologies.length > 0 && (
					<CardFooter>
						{technologies.slice(0, 4).map((tech, index) => (
							<Badge
								key={index}
								variant="muted"
								size="sm"
								className="font-medium">
								{tech}
							</Badge>
						))}
						{technologies.length > 4 && (
							<Badge
								variant="outline"
								size="sm"
								className="font-medium">
								+{technologies.length - 4} more
							</Badge>
						)}
					</CardFooter>
				)}
			</a>
		</Card>
	);
}
