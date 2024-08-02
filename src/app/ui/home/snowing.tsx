'use client';
import { useEffect, useState } from 'react';

const Snowing = () => {
	const [snowFlake, setsnowFlake] = useState<any[]>([]);

	useEffect(() => {
		const drops = [];
		for (let i = 0; i < 50; i++) {
			const dropStyle = {
				left: `${Math.random() * 100}%`,
				animationDelay: `${Math.random() * 7}s`,
			};
			drops.push(
				<div
					key={i}
					style={dropStyle}
					className="snow animate-snow"></div>
			);
		}
		setsnowFlake(drops);
	}, []);

	return <>{snowFlake}</>;
};
export default Snowing;
