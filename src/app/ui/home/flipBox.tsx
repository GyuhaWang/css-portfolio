export default function FlipBox({
	colorFront,
	colorBack,
	flip,
	isFirst = false,
	isLast = false,
	index,
}: {
	colorFront: string;
	colorBack: string;
	flip: boolean;
	isFirst?: boolean;
	isLast?: boolean;
	index: number;
}) {
	const bgFront = colorFront;
	const bgBack = colorBack;
	return (
		<div
			className={`container3D flipper relative flex grow ${
				flip ? 'flipped' : ''
			}`}>
			<div
				className={`front absolute w-full h-full ${bgFront} text-white flex items-center justify-center text-2xl`}></div>
			<div
				className={`back absolute w-full h-full ${bgBack} text-white flex items-center justify-center text-2xl`}></div>
		</div>
	);
}
