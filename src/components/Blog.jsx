import { H3 } from './Typography.jsx';
import BlogItem from './BlogItem.jsx';

export default function Blog() {
	const blogPosts = [
		{
			title: 'The Value Beyond Syntax',
			description:
				'Exploring the deeper meaning and value that lies beyond just knowing programming syntax. This article delves into the importance of problem-solving skills, critical thinking, and the ability to create meaningful solutions that go far beyond mere code implementation.',
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
				'Learn how to create reusable custom hooks for REST API interactions in React applications. This comprehensive guide covers error handling, loading states, caching strategies, and best practices for building maintainable API integration patterns.',
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
				'Dive deep into the fascinating world of AI learning mechanisms and how they compare to human cognition. Explore world models, neural networks, and the future of artificial intelligence as we examine whether machines can truly learn like humans.',
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
				'A comprehensive guide to building scalable web applications using React and TypeScript. Learn about component architecture, type safety, state management, and best practices for creating maintainable and performant applications.',
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
