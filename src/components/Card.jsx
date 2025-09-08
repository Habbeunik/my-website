import React from 'react';
import { cn } from '../lib/utils';

const Card = React.forwardRef(
	(
		{ className, children, asChild = false, ...props },
		ref
	) => {
		const Comp = asChild ? React.Fragment : 'div';

		if (asChild) {
			return (
				<React.Fragment>
					{React.cloneElement(children, {
						className: cn(
							'group block bg-transparent border border-border rounded-xl p-6 hover:bg-muted/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:border-muted-foreground/30 hover:-translate-y-1 h-full hover-lift',
							className
						),
						ref,
						...props,
					})}
				</React.Fragment>
			);
		}

		return (
			<Comp
				ref={ref}
				className={cn(
					'group block bg-transparent border border-border rounded-xl p-6 hover:bg-muted/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:border-muted-foreground/30 hover:-translate-y-1 h-full hover-lift',
					className
				)}
				{...props}>
				{children}
			</Comp>
		);
	}
);

Card.displayName = 'Card';

const CardHeader = React.forwardRef(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn('relative mb-4', className)}
			{...props}
		/>
	)
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef(
	({ className, children, ...props }, ref) => (
		<h4
			ref={ref}
			className={cn(
				'text-lg font-semibold text-foreground mb-3 group-hover:text-foreground transition-colors duration-300 pr-8',
				className
			)}
			{...props}>
			{children}
		</h4>
	)
);
CardTitle.displayName = 'CardTitle';

const CardIcon = React.forwardRef(
	({ className, ...props }, ref) => (
		<svg
			ref={ref}
			className={cn(
				'w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all duration-300',
				'absolute top-0 right-0 z-10',
				className
			)}
			style={{
				position: 'absolute',
				top: '0',
				right: '0',
				zIndex: 10,
			}}
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			{...props}>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
			/>
		</svg>
	)
);
CardIcon.displayName = 'CardIcon';

const CardContent = React.forwardRef(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn('', className)}
			{...props}
		/>
	)
);
CardContent.displayName = 'CardContent';

const CardDescription = React.forwardRef(
	({ className, children, ...props }, ref) => (
		<p
			ref={ref}
			className={cn(
				'text-sm text-muted-foreground group-hover:text-foreground/80 leading-relaxed mb-4 overflow-hidden transition-colors duration-300',
				className
			)}
			style={{
				display: '-webkit-box',
				WebkitLineClamp: 3,
				WebkitBoxOrient: 'vertical',
			}}
			{...props}>
			{children}
		</p>
	)
);
CardDescription.displayName = 'CardDescription';

const CardMeta = React.forwardRef(
	({ className, children, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				'flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 mb-3 transition-colors duration-300',
				className
			)}
			{...props}>
			{children}
		</div>
	)
);
CardMeta.displayName = 'CardMeta';

const CardFooter = React.forwardRef(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn('flex flex-wrap gap-2', className)}
			{...props}
		/>
	)
);
CardFooter.displayName = 'CardFooter';

export {
	Card,
	CardHeader,
	CardTitle,
	CardIcon,
	CardContent,
	CardDescription,
	CardMeta,
	CardFooter,
};
