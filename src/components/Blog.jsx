import { H3 } from './Typography.jsx';
import BlogItem from './BlogItem.jsx';

export default function Blog() {
	const blogPosts = [
		{
			title: 'The Value Beyond Syntax',
			description:
				'Exploring what makes great engineers more than coders — a look at the thinking, creativity, and empathy behind building meaningful software that solves real problems.',
			tags: [
				'Programming Philosophy',
				'Problem Solving',
				'Critical Thinking',
				'Software Development',
			],
			url: 'https://medium.com/@Habbeyunik/the-value-beyond-syntax-147e34214488',
			date: 'Dec 2024',
			readTime: '6 min read',
		},
		{
			title: 'Writing a Custom REST API Hook',
			description:
				'A practical guide to building reusable API hooks in React. Covers patterns for error handling, loading states, and caching that make API integration cleaner and more maintainable.',
			tags: [
				'React',
				'Custom Hooks',
				'REST API',
				'JavaScript',
			],
			url: 'https://medium.com/@Habbeyunik/writing-a-custom-rest-api-hook-e31a3218f512',
			date: 'Dec 2024',
			readTime: '8 min read',
		},
		{
			title:
				'Can AI Learn Like Humans? Exploring World Models in Artificial Intelligence',
			description:
				'Examining how AI systems build understanding through world models — and what this means for the future of intelligent systems and human-AI collaboration.',
			tags: [
				'Artificial Intelligence',
				'Machine Learning',
				'World Models',
				'Neural Networks',
			],
			url: 'https://medium.com/@Habbeyunik/can-ai-learn-like-humans-exploring-world-models-in-artificial-intelligence-d9b6483d541e',
			date: 'Dec 2024',
			readTime: '12 min read',
		},
		{
			title:
				'Building Modern Web Applications with React and TypeScript',
			description:
				'Architecture patterns and practices for building scalable web applications. How to structure components, manage state, and maintain type safety as products grow.',
			tags: [
				'React',
				'TypeScript',
				'Web Development',
				'Architecture',
			],
			url: 'https://medium.com/@Habbeyunik/building-modern-web-applications-react-typescript',
			date: 'Dec 2024',
			readTime: '10 min read',
		},
	];

	return (
		<section
			id="blog"
			className="w-full h-full flex flex-col fade-in gap-8 md:gap-12 px-4 md:px-12 py-10 md:py-20">
			<div className="text-center max-w-3xl mx-auto">
				<H3 className="text-2xl md:text-4xl font-bold mb-4">
					Latest Articles
				</H3>
			</div>

			<div className="max-w-6xl mx-auto w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{blogPosts.map((post, index) => (
						<BlogItem
							key={index}
							title={post.title}
							description={post.description}
							tags={post.tags}
							url={post.url}
							date={post.date}
							readTime={post.readTime}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
