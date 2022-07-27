/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,css,js}"],
  theme: {
    extend: {
      colors: {
        'body': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        'alata': ["'Alata'", 'sans-serif'],
        'josefin': ["'Josefin Sans'", 'sans-serif']
      }
    },
  },
  plugins: [],
}
