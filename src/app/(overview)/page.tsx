import Header from '@/app/ui/header/header';
import HomeBody from '../ui/home/body';

export default function Home() {
	return (
		<div className="flex overflow-y-scroll overflow-x-hidden h-screen w-screen flex-col  justify-between  ">
			<Header />
			<HomeBody />
		</div>
	);
}
