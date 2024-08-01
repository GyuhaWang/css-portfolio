import Image from 'next/image';
import { useMemo } from 'react';
import FallLeaf from './leaf';
import Raining from './raining';
import Snowing from './snowing';
const FallingImage = ({ index }: { index: number }) => {
	const Image = useMemo(() => {
		if (index == 0) {
			return <CherryBlossom />;
		}
		if (index == 1) {
			return <Raining />;
		}
		if (index == 2) {
			return <FallLeaf />;
		}
		if (index == 3) {
			return <Snowing />;
		}
	}, [index]);
	return <div className="absolute h-full w-full overflow-hidden">{Image}</div>;
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
