/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'ngopic-2': "url('/src/components/images/ngopic2.png')",
        'contact-pic': "url('/src/components/images/contact_image.jpg')",
      },
        colors: {
          'background-blue-transparent' : 'rgba(17, 31, 61, 0.9)',
          'background-blue' : 'rgba(40, 68, 120)',
          'defpink' : '#EA4C89',
          'white-transparent': 'rgba(255, 255, 255, 0.9)',
          'cream' : '#FFD3BA',
          'sand' : '#EF8E78',
          'black-transparent': 'rgba(0, 0, 0, 0.6)'
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        merriweather: ['Merriweather', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
  },
  plugins: [],
}