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
        'btn-hover-bottom': '#C8070F',
      },
      keyframes: {
        sildeDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        sildeDown: 'wiggle 1s ease-in-out',
      }
    },
  },
  plugins: [],
}
