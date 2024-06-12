/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#261E35',
				secondary: '#3C354A',
				input: '#2F293E',
				light: '#BA7DF4',
				button: '#AD6BEC',
				buttonDark: '#251D2B',
				buttonScroll: '#2D2346',
				circleButton: '#4A435C',
				hover: '#372C44',
				icon: '#C6ACEB',
				iconDark: '#7F778B',
				darker: '#2E263C',
				border: '#3A3348',
				boxBorder: '#615C6C',
				circleBorder: '#5D4490',
				linePurple: '#8519F5',
				lineLightPurple: '#C025E3',
				lineBlue: '#4CB4F0',
				changeGreen: '#168F70',
				changeRed: '#7E322F',
				textPurple: '#695D86'
			}
		}
	},
	plugins: []
};
