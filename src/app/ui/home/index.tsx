import Fashion from './section/grid';
import Weather from './section/weather';

export default function HomeBody() {
	return (
		<div className="flex grow flex-col gap-16  ">
			<Weather />
			<Fashion />
		</div>
	);
}
