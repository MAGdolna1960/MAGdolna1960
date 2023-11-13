/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainblue: {
          light: '#3182ce',
          DEFAULT: '#3182ce',
          dark: '#3182ce',
        },
        'main-head-tx-color': '#4a5568',
        'light-blue-bg': '#ebf8ff'
      },
      fontFamily: {
        'sans': ['"Montserrat"'],
        'nice': ['"Marck Script"']
      }
    },
  },
  plugins: [],
}

