/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '25px'
    },
    extend: {
      colors: {
        dark: '#404040',
        light: '#737373',
        second: '#ca8a04',
      },
      screen: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

