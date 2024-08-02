'use client';

import { useMemo, useState } from 'react';
import GridImage from '../gris_image';

const Fashion = () => {
	const [imgs, setImgs] = useState([
		'/shoe1.jpg',
		'/shoe2.jpg',
		'/shoe3.jpg',
		'/shoe4.jpg',
		'/shoe5.jpg',
		'/shoe6.jpg',
	]);
	function switchIndex(from: number, to: number, li: any[]) {
		if (from < 0 || from >= li.length || to < 0 || to >= li.length) {
			return li;
		}
		const tmpLi = [...li];
		const tmp = tmpLi[to];
		tmpLi[to] = tmpLi[from];
		tmpLi[from] = tmp;

		return tmpLi;
	}

	const handleClickBox = (index: number) => {
		const newLi = switchIndex(index, 0, imgs);
		setImgs(newLi);
		console.log('clicked', imgs[0]);
	};

	const ImgFirst = useMemo(() => {
		console.log('useMemo', imgs[0]);
		return (
			<GridImage
				onClick={() => handleClickBox(0)}
				imageUrl={imgs[0]}
				size={2}
			/>
		);
	}, [imgs[0]]);
	return (
		<section className="min-h-[100vh] w-screen flex flex-col p-16 gap-2 md:h-screen">
			<div
				className={` relative flex grow-0 min-h-[40vh] flex-col 
				md:flex-row
				 md:grow-[2] gap-2 md:min-h-0 `}>
				{ImgFirst}
				<div className={` relative flex  flex-col  md:grow  md:gap-2  `}>
					{[1, 2].map((index, key) => (
						<GridImage
							onClick={() => handleClickBox(index)}
							imageUrl={imgs[index]}
							key={key}
							size={2}
						/>
					))}
				</div>
			</div>
			<div className=" relative grow flex min-h-[40vh] flex-col md:min-h-0   md:flex-row  gap-2">
				{[3, 4, 5].map((index, key) => (
					<GridImage
						onClick={() => handleClickBox(index)}
						imageUrl={imgs[index]}
						key={key}
						size={2}
					/>
				))}
			</div>
		</section>
	);
};

export default Fashion;
