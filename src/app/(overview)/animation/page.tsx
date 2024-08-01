'use client';
import { useState } from 'react';
const colors = [
	'bg-red-500',
	'bg-yellow-500',
	'bg-green-500',
	'bg-blue-500',
	'bg-purple-500',
];
export default function Animation() {
	const [flipped, setFlipped] = useState(false);

	const [frontColor, setFrontColor] = useState(0);
	const [backColor, setBackColor] = useState(1);
	const handleFlip = () => {
		setFlipped(!flipped);
		setFrontColor((frontColor + 1) % colors.length);
		setBackColor((backColor + 1) % colors.length);
	};

	const changeColors = () => {
		setFrontColor((frontColor + 1) % colors.length);
		setBackColor((backColor + 1) % colors.length);
	};
	return (
		<main className="flex flex-col  justify-between ">
			<div className="flex flex-col items-center justify-center h-screen space-y-4">
				<div
					className="container"
					onClick={handleFlip}>
					<div
						className={`flipper relative w-48 h-48 ${
							flipped ? 'flipped' : ''
						}`}>
						<div
							className={`front absolute w-full h-full ${colors[frontColor]} text-white flex items-center justify-center text-2xl`}>
							앞면
						</div>
						<div
							className={`back absolute w-full h-full ${colors[backColor]} text-white flex items-center justify-center text-2xl`}>
							뒷면
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
