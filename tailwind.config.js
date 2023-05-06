/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      display: ['Manrope', 'sans-serif'],
    },
    colors: {
      'orange': '#D87D4A',
      'dark': '#101010',
      'light': '#F1F1F1',
      'transparent': '#FAFAFA',
      'black': '#000000',
      'white': '#FFFFFF',
      'pink': '##fbaf85',
    },
  },
  plugins: [],
}

