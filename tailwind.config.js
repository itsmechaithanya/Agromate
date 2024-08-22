/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        FuturaBold:"Futura-Bold",
        Poppins:"Poppins"
      }
    },
  },
  plugins: [],
}