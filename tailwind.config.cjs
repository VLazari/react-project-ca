/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
    extend: {
      colors: {
        red: {
          new: '#FF0000',
        },
				gold: {
          new: '#FBB03B',
        },
      },
			gridTemplateRows: {
				'[auto,auto,1fr]': 'auto auto 1fr',
			},
    },
  },
	plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
};
