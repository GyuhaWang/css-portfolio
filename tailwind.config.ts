import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'c-blue': '#180161',
				'c-purple': '#4F1787',
				'c-pink': '#EB3678',
				'c-orange': '#FB773C',
				'spring-s': '#FFDDCC',
				'spring-m': '#FFCCCC',
				'spring-l': '#FEBBCC',
				'summer-s': '#CAF4FF',
				'summer-m': '#A0DEFF',
				'summer-l': '#5AB2FF',
				'fall-s': '#D06224',
				'fall-m': '#AE431E',
				'fall-l': '#8A8635',
				'winter-s': '#EEEEEE',
				'winter-m': '#134B70',
				'winter-l': '#201E43',
			},
			keyframes: {
				leaf: {
					'0%': { top: '-10%', left: '50%', transform: 'rotate(180deg)' },
					'40%': { left: '80%', transform: 'rotate(90deg)' },
					'70%': { left: '20%', transform: 'rotate(140deg)' },
					'85%': { left: '50%', transform: 'rotate(90deg)' },
					'100%': { top: '110%', left: '35%', transform: 'rotate(140deg)' },
				},
				flip: {
					'0%': { transform: 'none' },
					'100%': { transform: 'rotateY(180deg)' },
				},
				flipFirst: {
					'0%': { transform: 'none' },
					'10%': { transform: 'rotateY(-10deg)' },
					'100%': { transform: 'rotateY(180deg)' },
				},
				flipLast: {
					'0%': { transform: 'none' },
					'90%': { transform: 'rotateY(190deg)' },
					'100%': { transform: 'rotateY(180deg)' },
				},
				rain: {
					'0%': {
						top: '-10%',
					},
					'80%': {
						top: '60%',
						opacity: '0.9',
					},
					'100%': {
						top: '60%',
						opacity: '0',
					},
				},
				snow: {
					'0%': {
						top: '-10%',
					},
					'80%': {
						top: '90%',
					},
					'100%': {
						top: '90%',
						opacity: '0',
					},
				},
				splat: {
					'0% ': {
						top: '90%',
						opacity: '1',
						transform: 'scale(0)',
					},
					'80%': {
						opacity: '1',
						transform: 'scale(0)',
					},
					'90%': {
						opacity: '0.5',
						transform: 'scale(1)',
					},
					'100%': {
						top: '90%',
						opacity: ' 0',
						transform: 'scale(1.5)',
					},
				},
			},
			animation: {
				blossom: 'leaf 7s ease-in-out infinite',
				flip: 'flip 1s ease-in',
				flipFirst: ' flipFirst 1.2s ease-in-out',
				flipLast: ' flipLast 1.2s ease-in-out',
				rain: 'rain 2s linear infinite',
				splat: 'splat 3s linear infinite',
				snow: 'snow 7s ease-in-out infinite',
			},
		},
	},
	plugins: [],
	safelist: [
		{
			pattern:
				/(bg|text|border)-(spring-(s|m|l)|summer-(s|m|l)|fall-(s|m|l)|winter-(s|m|l))/,
		},
	],
};
export default config;
