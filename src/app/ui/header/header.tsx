import Link from 'next/link';

const Header = () => {
	return (
		<div className="sticky top-0 flex bg-white h-16 min-h-16 justify-center items-center gap-7  px-6 z-10">
			<Link href={'/'}>Home</Link>

			<Link href={'/animation'}>animation</Link>

			<Link href={'/scroll'}>scroll</Link>
		</div>
	);
};
export default Header;
