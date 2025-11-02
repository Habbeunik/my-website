import React from 'react';
import { cn } from '../lib/utils';

const badgeVariants = {
	default:
		'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 shadow-lg',
	secondary:
		'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 shadow-lg',
	destructive:
		'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg',
	outline:
		'text-foreground border border-muted-foreground/30 bg-transparent hover:bg-muted/20 hover:border-muted-foreground/50',
	muted:
		'border border-muted-foreground/20 text-muted-foreground bg-muted/10 hover:border-muted-foreground/40 hover:bg-muted/20',
	success:
		'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg',
	warning:
		'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg',
	info: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg',
	tech: 'border border-white/30 text-white/80 bg-white/10 hover:bg-white/20 hover:border-white/50',
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
					'inline-flex items-center rounded-full border font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
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
