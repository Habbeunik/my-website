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
				<H3 className="text-2xl md:text-4xl font-bold mb-6">
					Let's Work Together
				</H3>
				<Lead className="text-base md:text-lg text-muted-foreground leading-relaxed">
					Whether you're building an AI-powered product,
					refining a digital experience, or scaling your
					engineering systems, I help teams turn ideas into
					intelligent, reliable, and human-centered
					software. Let's build something that works
					beautifully — for both people and the business
					behind it.
				</Lead>
			</div>

			<div className="max-w-6xl mx-auto w-full">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<Card className="text-center hover:bg-transparent hover:translate-y-0">
						<CardHeader className="justify-center">
							<CardTitle className="text-xl text-center">
								AI & Intelligent Systems
							</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription className="text-base leading-relaxed">
								Building smart, reliable systems that bring
								modern AI into real products — from
								conversational tools to document
								understanding and workflow automation.
							</CardDescription>
						</CardContent>
					</Card>

					<Card className="text-center hover:bg-transparent hover:translate-y-0">
						<CardHeader className="justify-center">
							<CardTitle className="text-xl text-center">
								Product Engineering
							</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription className="text-base leading-relaxed">
								Full-stack development with React, Node.js,
								and cloud platforms — focused on
								performance, scalability, and long-term
								maintainability.
							</CardDescription>
						</CardContent>
					</Card>

					<Card className="text-center hover:bg-transparent hover:translate-y-0">
						<CardHeader className="justify-center">
							<CardTitle className="text-xl text-center">
								Experience Design
							</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription className="text-base leading-relaxed">
								Creating design systems and user experiences
								that make complex interactions feel simple,
								natural, and effective.
							</CardDescription>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
