import Image from 'next/image';
import { useMemo } from 'react';
import FallLeaf from './leaf';
import Raining from './raining';
import Snowing from './snowing';
const FallingImage = ({ index }: { index: number }) => {
	const Image = (index: number) => {
		if (index == 0) {
			return <CherryBlossom key={0} />;
		}
		if (index == 1) {
			return <Raining key={1} />;
		}
		if (index == 2) {
			return <FallLeaf key={2} />;
		}
		if (index == 3) {
			return <Snowing key={3} />;
		}
	};
	return (
		<div className="absolute h-full w-full overflow-hidden">{Image(index)}</div>
	);
};

const CherryBlossom = () => {
	return (
		<>
			<Image
				className=" absolute animate-blossom rotate-180"
				height={25}
				width={25}
				src={'/벚꽃잎.svg'}
				alt="벚꽃잎"></Image>
		</>
	);
};
export default FallingImage;
