/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '69em': '69em'
      },
      height :{
        '100vh' : '100vh'
      }
    },
  },
  plugins: [],
}

