import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'red-primary': "#BD021D",
				'red-secondary': "#A40018",
				'yellow-primary': "#FBED20",
				'yellow-secondary': "#FCD000",
				'green-primary': "#59C00B",
				'green-secondary': "#479908",
				'blue-primary': "#0086FF",
				'blue-secondary': "#0468C3",
				
				
				
				'theme-primary': "#0086FF",
				'theme-secondary': "#0468C3",
			},
		},
	},
	plugins: [],
}
export default config
