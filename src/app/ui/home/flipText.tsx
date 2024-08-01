export default function FlipText({
	textFront,
	textBack,
	flip,
	isFirst = false,
	isLast = false,
	index,
}: {
	textFront: string;
	textBack: string;
	flip: boolean;
	isFirst?: boolean;
	isLast?: boolean;
	index: number;
}) {
	return (
		<div className="absolute top-[50%] left-[50%] uppercase text-[18em] translate-x-[-50%] translate-y-[-50%] text-white">
			<div
				className={`container3D flipper relative flex grow ${
					flip ? 'flipped' : ''
				}`}>
				<div
					className={`front absolute w-full h-full  text-white flex items-center justify-center `}>
					{textFront}
				</div>
				<div
					className={`back absolute w-full h-full  text-white flex items-center justify-center `}>
					{textBack}
				</div>
			</div>
		</div>
	);
}
