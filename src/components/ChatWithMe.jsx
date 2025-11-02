import { H3, Lead } from './Typography.jsx';
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
} from './Card.jsx';
import { useState } from 'react';

export default function ChatWithMe() {
	const [copiedHandle, setCopiedHandle] = useState(null);

	const copyToClipboard = async (text, handleName) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopiedHandle(handleName);
			setTimeout(() => setCopiedHandle(null), 2000);
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	};

	const statements = [
		{
			id: 1,
			text: 'I can deadlift 2.5x my body weight and have been powerlifting for 5 years.',
			category: 'Fitness',
		},
		{
			id: 2,
			text: 'I once scored a hat-trick in a local football tournament and was named MVP.',
			category: 'Football',
		},
		{
			id: 3,
			text: "I've read all of Nietzsche's major works and wrote my thesis on existentialism.",
			category: 'Philosophy',
		},
	];

	const socialHandles = [
		{
			platform: 'Email',
			handle: 'abbey@example.com',
			url: 'mailto:abbey@example.com',
			icon: '📧',
		},
		{
			platform: 'LinkedIn',
			handle: '@abbeykumapayi',
			url: 'https://linkedin.com/in/abbeykumapayi',
			icon: '💼',
		},
		{
			platform: 'Twitter',
			handle: '@abbeykumapayi',
			url: 'https://twitter.com/abbeykumapayi',
			icon: '🐦',
		},
		{
			platform: 'GitHub',
			handle: '@abbeykumapayi',
			url: 'https://github.com/abbeykumapayi',
			icon: '💻',
		},
	];

	return (
		<section
			id="chat-with-me"
			className="w-full h-full flex flex-col fade-in gap-8 md:gap-12 px-4 md:px-12 py-10 md:py-20">
			<div className="text-center max-w-3xl mx-auto mb-12">
				<div className="space-y-4 mb-8">
					<H3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
						Let's Work Together
					</H3>
					<div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full mx-auto"></div>
				</div>
				<Lead className="text-base md:text-lg text-muted-foreground leading-relaxed tracking-wide">
					Whether you're building an AI product, refining a
					digital experience, or scaling your engineering
					systems — I can help you bring it to life.
					<br />
					<br />I collaborate with teams to design and ship
					intelligent solutions that create measurable
					impact.
				</Lead>
			</div>

			<div className="max-w-6xl mx-auto w-full">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<Card className="text-center hover:bg-transparent hover:translate-y-0">
						<CardHeader className="justify-center">
							<CardTitle className="text-xl text-center">
								Product Engineering
							</CardTitle>
						</CardHeader>
					</Card>

					<Card className="text-center hover:bg-transparent hover:translate-y-0">
						<CardHeader className="justify-center">
							<CardTitle className="text-xl text-center">
								AI Systems
							</CardTitle>
						</CardHeader>
					</Card>

					<Card className="text-center hover:bg-transparent hover:translate-y-0">
						<CardHeader className="justify-center">
							<CardTitle className="text-xl text-center">
								Technical Strategy
							</CardTitle>
						</CardHeader>
					</Card>
				</div>
			</div>
		</section>
	);
}
