import { MutableRefObject, useEffect, useState } from 'react';

const WEATHER = ['spring', 'summer', 'fall', 'winter'];

export default function useFlipBox(boxRef: MutableRefObject<null>) {
	const intervalTime = 7000;
	const flipInterval = 300;
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isIntervalOn, setIsIntervalOn] = useState(false);
	const [boxState, setBoxState] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
	]);
	const [frontColors, setFrontColors] = useState([
		'bg-spring-s',
		'bg-spring-m',
		'bg-spring-l',
		'bg-spring-s',
		'bg-spring-m',
		'bg-spring-l',
	]);
	const [backColors, setBackColors] = useState([
		'bg-summer-s',
		'bg-summer-m',
		'bg-summer-l',
		'bg-summer-s',
		'bg-summer-m',
		'bg-summer-l',
	]);
	const [frontText, setFrontText] = useState('spring');
	const [backText, setBackText] = useState('summer');
	let intervalId: any = null;

	useEffect(() => {
		if (isIntervalOn) {
			let index = 0;
			setCurrentIndex(index);
			intervalId = setInterval(() => {
				index = (index + 1) % WEATHER.length;
				setCurrentIndex(index);
				flipBoxs().then(() => updateBoxBackSide(index));
			}, intervalTime);
		} else {
			clearInterval(intervalId);
		}
		return () => clearInterval(intervalId);
	}, [isIntervalOn]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsIntervalOn(true);
				} else {
					setIsIntervalOn(false);
				}
			},
			{ threshold: 0.01 }
		);

		if (boxRef.current) {
			observer.observe(boxRef.current);
		}

		return () => {
			clearInterval(intervalId);
			if (boxRef.current) {
				observer.unobserve(boxRef.current);
			}
		};
	}, []);

	const flipBoxs = async () => {
		for (let current = 0; current < boxState.length; current++) {
			await flipBox(current);
		}

		await new Promise((resolve) => setTimeout(resolve, flipInterval));
	};

	const flipBox = async (index: number) => {
		await new Promise((resolve) => setTimeout(resolve, flipInterval));
		updateBoxState(index);
	};

	const updateBoxState = (step: number) => {
		setBoxState((prevState) => {
			const newState = [...prevState];
			if (step < 6) {
				newState[step] = !newState[step];
			}
			return newState;
		});
	};

	const updateBoxBackSide = (index: number) => {
		const next = (index + 1) % 4;
		const isBack = index % 2 != 0;
		if (isBack) {
			const tmpFontColors = frontColors.map((color) => {
				const colors = color.split('-');
				return `${colors[0]}-${WEATHER[next]}-${colors[2]}`;
			});
			setFrontColors(tmpFontColors);
			setFrontText(WEATHER[next]);
		} else {
			const tmpBackColors = backColors.map((color) => {
				const colors = color.split('-');
				return `${colors[0]}-${WEATHER[next]}-${colors[2]}`;
			});
			setBackColors(tmpBackColors);
			setBackText(WEATHER[next]);
		}
	};

	return {
		boxState,
		frontColors,
		backColors,
		frontText,
		backText,
		currentIndex,
		flipBoxs,
	};
}
