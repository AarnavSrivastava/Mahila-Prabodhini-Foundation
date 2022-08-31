/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
        colors: {
          'background-blue' : '#284465',
          'defpink' : '#EA4C89',
          'white-transparent': 'rgba(255, 255, 255, 0.9)',
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        merriweather: ['Merriweather', 'sans-serif']
      },
  },
  plugins: [],
}
