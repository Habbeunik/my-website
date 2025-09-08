import React from 'react';
import { cn } from '../lib/utils';

export default function SectionContainer({
	children,
	className,
	...props
}) {
	return (
		<div
			className={cn(
				'w-full h-full p-8 apple-fade-in',
				className
			)}
			{...props}>
			{children}
		</div>
	);
}
