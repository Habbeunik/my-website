import React from 'react';
import { cn } from '../lib/utils';

const badgeVariants = {
	default:
		'bg-primary text-primary-foreground hover:bg-primary/80',
	secondary:
		'bg-secondary text-secondary-foreground hover:bg-secondary/80',
	destructive:
		'bg-destructive text-destructive-foreground hover:bg-destructive/80',
	outline:
		'text-foreground border border-input bg-background hover:bg-accent hover:text-accent-foreground',
	muted:
		'border border-muted-foreground/20 text-muted-foreground hover:border-muted-foreground/40',
	success:
		'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
	warning:
		'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
	info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
};

const badgeSizes = {
	sm: 'px-2 py-1 text-xs',
	default: 'px-2.5 py-0.5 text-sm',
	lg: 'px-3 py-1 text-base',
};

const Badge = React.forwardRef(
	(
		{
			className,
			variant = 'default',
			size = 'default',
			children,
			...props
		},
		ref
	) => {
		return (
			<span
				ref={ref}
				className={cn(
					'inline-flex items-center rounded-full border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
					badgeVariants[variant],
					badgeSizes[size],
					className
				)}
				{...props}>
				{children}
			</span>
		);
	}
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants, badgeSizes };
