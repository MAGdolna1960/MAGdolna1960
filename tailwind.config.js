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
        
      },
      fontFamily: {
        'sans': ['"Monserat"',],
      },
    },
  },
  plugins: [],
}

