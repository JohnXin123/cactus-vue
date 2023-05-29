/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './src/**/*.{html,js}',
  ],
  theme: {
    container:{
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        'mm-font': ['mm-font', 'sans-serif'],
      }
    },
  },
  plugins: [],
}