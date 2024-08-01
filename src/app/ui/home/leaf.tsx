import Image from 'next/image';
const FallLeaf = () => {
	return (
		<>
			<Image
				className=" absolute animate-blossom rotate-180"
				height={25}
				width={25}
				src={'/fall_leaf.svg'}
				alt="가을낙엽"></Image>
		</>
	);
};
export default FallLeaf;
