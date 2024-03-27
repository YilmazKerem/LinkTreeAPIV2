/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
				custoum: "10px 10px 0px -1px rgba(0,0,0,1)",
			},
      width: {
        '69em': '69em'
      },
      height :{
        '100vh' : '100vh'
      }
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}

