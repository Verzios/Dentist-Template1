module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				pc: '1450px',
				'2xl': '1536px',
			},
			backgroundImage: {
				'hero-pattern':
					"linear-gradient(0deg,rgba(16,66,109,0.95) 25%,rgba(16,66,109,0.37) 85%),url('assets/bg.jpg')",
				'after-footer':
					'linear-gradient(0deg,rgba(16,66,109,0.95) 25%,rgba(16,66,109,0.37) 85%)',
			},

			colors: {
				'blue-button': '#10426d',
				'gold-button': '#b98f46',
				'after-image': 'rgba(26,38,48,0.63)',
			},
			shadow: {
				'after-image': '0px 2px 18px 0px rgba(26,38,48,0.58)',
			},
		},
	},
	plugins: [],
};
