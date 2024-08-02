'use client';
import Image from 'next/image';
const GridImage = ({
	onClick,
	imageUrl,
	size,
}: {
	onClick: () => void;
	imageUrl: string;
	size: number;
}) => {
	return (
		<div
			onClick={onClick}
			className={` group relative flex aspect-square md:aspect-auto md:grow-[${size}] md:h-auto hover:z-10 hover:scale-110 transition-transform `}>
			<Image
				src={imageUrl}
				alt={imageUrl}
				fill
				style={{ objectFit: 'cover' }}
			/>
			<div className="absolute hidden h-full w-full bg-gray-50 opacity-50 group-hover:flex justify-center items-center"></div>
		</div>
	);
};

export default GridImage;
