import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
	CardMeta,
} from './Card.jsx';

export default function BlogItem({
	title,
	description,
	tags = [],
	url,
	date,
	readTime,
}) {
	return (
		<Card asChild>
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer">
				<CardHeader>
					<CardTitle>{title}</CardTitle>
				</CardHeader>

				<CardContent>
					<CardMeta>
						<span>{date}</span>
						<span>•</span>
						<span>{readTime}</span>
					</CardMeta>

					<CardDescription>{description}</CardDescription>
				</CardContent>
			</a>
		</Card>
	);
}
