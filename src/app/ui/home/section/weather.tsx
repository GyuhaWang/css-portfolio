'use client';
import useFlipBox from '@/app/customHook/useFlipBox';
import { useMemo, useRef } from 'react';
import FallingImage from '../falling_image';
import FlipBox from '../flipBox';
import FlipText from '../flipText';

const Weather = () => {
	const boxRef = useRef(null);
	const {
		boxState,
		frontColors,
		backColors,
		frontText,
		backText,
		currentIndex,
		flipBoxs,
	} = useFlipBox(boxRef);
	const backgroundImage = useMemo(() => {
		return <FallingImage index={currentIndex} />;
	}, [currentIndex]);

	return (
		<section
			ref={boxRef}
			className=" h-screen w-full  relative flex flex-col justify-between ">
			<div className="flex w-full h-screen flex-col">
				<div className="flex w-full h-[50%] gap-4 ">
					<FlipBox
						index={0}
						isFirst={true}
						colorFront={frontColors[0]}
						colorBack={backColors[0]}
						flip={boxState[0]}
					/>
					<FlipBox
						index={1}
						colorFront={frontColors[1]}
						colorBack={backColors[1]}
						flip={boxState[1]}
					/>
					<FlipBox
						index={2}
						colorFront={frontColors[2]}
						colorBack={backColors[2]}
						flip={boxState[2]}
					/>
				</div>
				<div className="flex w-full h-[50%] gap-4">
					<FlipBox
						index={3}
						isFirst={true}
						colorFront={frontColors[3]}
						colorBack={backColors[3]}
						flip={boxState[3]}
					/>
					<FlipBox
						index={4}
						colorFront={frontColors[4]}
						colorBack={backColors[4]}
						flip={boxState[4]}
					/>
					<FlipBox
						index={5}
						colorFront={frontColors[5]}
						colorBack={backColors[5]}
						flip={boxState[5]}
					/>
				</div>
				<FlipText
					index={6}
					textFront={frontText}
					textBack={backText}
					flip={boxState[5]}
				/>
			</div>
			{backgroundImage}
		</section>
	);
};

export default Weather;
