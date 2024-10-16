import FuturaBold from '/Users/chaithanya/Documents/Sheryians Coding School/agromate/Agromate/src/assets/Fonts/Futura-Bold.ttf'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        FuturaBold:"FuturaBold",
        Poppins:"Poppins"
      }
    },
  },
  plugins: [],
}