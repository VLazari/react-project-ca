/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
    extend: {
      colors: {
        red: {
          new: '#FF0000',
        },
      }
    },
  },
	plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
};
