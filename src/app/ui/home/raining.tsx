'use client';
import { useEffect, useState } from 'react';

const Raining = () => {
	const [raindrops, setRaindrops] = useState<any[]>([]);

	useEffect(() => {
		const drops = [];
		for (let i = 0; i < 50; i++) {
			const dropStyle = {
				left: `${Math.random() * 100}%`,
				animationDuration: `${Math.random() * 0.5 + 0.5}s`,
				animationDelay: `${Math.random() * 1}s`,
			};
			drops.push(
				<div
					key={i}
					style={dropStyle}
					className="raindrop animate-rain"></div>
			);
		}
		setRaindrops(drops);
	}, []);

	return <>{raindrops}</>;
};
export default Raining;
