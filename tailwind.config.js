/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors:{
        'btn-color-nav': '#EA822A',
        'bgcolor-nav': '#FFFFFF',
        'btn-hover-bottom': '#C8070F'
      }
    },
  },
  plugins: [],
}
