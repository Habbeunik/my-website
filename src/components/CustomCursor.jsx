import { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});
	const [isHovering, setIsHovering] = useState(false);
	const cursorRef = useRef(null);
	const trailRef = useRef(null);
	const ringRef = useRef(null);

	useEffect(() => {
		let animationFrameId;

		const updateMousePosition = (e) => {
			// Use requestAnimationFrame for smoother performance
			animationFrameId = requestAnimationFrame(() => {
				setMousePosition({ x: e.clientX, y: e.clientY });
			});
		};

		const handleMouseEnter = () => setIsHovering(true);
		const handleMouseLeave = () => setIsHovering(false);

		// Add event listeners
		window.addEventListener(
			'mousemove',
			updateMousePosition
		);

		// Add hover listeners to interactive elements
		const interactiveElements = document.querySelectorAll(
			'a, button, [role="button"]'
		);
		interactiveElements.forEach((el) => {
			el.addEventListener('mouseenter', handleMouseEnter);
			el.addEventListener('mouseleave', handleMouseLeave);
		});

		// Cleanup
		return () => {
			window.removeEventListener(
				'mousemove',
				updateMousePosition
			);
			interactiveElements.forEach((el) => {
				el.removeEventListener(
					'mouseenter',
					handleMouseEnter
				);
				el.removeEventListener(
					'mouseleave',
					handleMouseLeave
				);
			});
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}
		};
	}, []);

	return (
		<>
			{/* Main cursor - fastest response */}
			<div
				ref={cursorRef}
				className="fixed pointer-events-none z-50 will-change-transform"
				style={{
					left: mousePosition.x - 6,
					top: mousePosition.y - 6,
					transform: `translate3d(0, 0, 0) ${isHovering ? 'scale(1.3)' : 'scale(1)'}`,
					transition: 'transform 0.08s ease-out',
				}}>
				<div
					className={`w-3 h-3 rounded-full border-2 transition-colors duration-100 ${
						isHovering
							? 'bg-blue-500/20 border-blue-400/60'
							: 'bg-transparent border-muted-foreground/40'
					}`}
				/>
			</div>

			{/* Cursor trail - slightly delayed for smooth effect */}
			<div
				ref={trailRef}
				className="fixed pointer-events-none z-40 will-change-transform"
				style={{
					left: mousePosition.x - 3,
					top: mousePosition.y - 3,
					transform: `translate3d(0, 0, 0) ${isHovering ? 'scale(0.7)' : 'scale(1)'}`,
					transition: 'transform 0.15s ease-out',
				}}>
				<div
					className={`w-1.5 h-1.5 rounded-full transition-colors duration-150 ${
						isHovering
							? 'bg-blue-400/40'
							: 'bg-muted-foreground/25'
					}`}
				/>
			</div>

			{/* Outer ring - slowest for depth effect */}
			<div
				ref={ringRef}
				className="fixed pointer-events-none z-30 will-change-transform"
				style={{
					left: mousePosition.x - 12,
					top: mousePosition.y - 12,
					transform: `translate3d(0, 0, 0) ${isHovering ? 'scale(1.1)' : 'scale(1)'}`,
					transition: 'transform 0.2s ease-out',
				}}>
				<div
					className={`w-6 h-6 rounded-full border transition-colors duration-200 ${
						isHovering
							? 'border-blue-400/15'
							: 'border-muted-foreground/8'
					}`}
				/>
			</div>

			{/* Subtle background glow */}
			<div
				className="fixed pointer-events-none z-10 will-change-transform"
				style={{
					left: mousePosition.x - 50,
					top: mousePosition.y - 50,
					transform: `translate3d(0, 0, 0) ${isHovering ? 'scale(1.2)' : 'scale(1)'}`,
					transition: 'transform 0.3s ease-out',
				}}>
				<div
					className={`w-24 h-24 rounded-full blur-xl transition-opacity duration-300 ${
						isHovering
							? 'bg-blue-500/5'
							: 'bg-muted-foreground/3'
					}`}
				/>
			</div>
		</>
	);
}
