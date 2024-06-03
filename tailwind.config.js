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
				hover: '#372C44',
				icon: '#C6ACEB',
				iconDark: '#7F778B',
				darker: '#2E263C',
				border: '#3A3348'
			}
		}
	},
	plugins: []
};
