/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'stripe': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
      },
      colors: {
        'cold-light-grey': '#DDE6ED',
        'cold-dark-grey': '#9DB2BF',
        'cold-light-blue': '#526D82',
        'cold-dark-blue': '#27374D',
      },
      fontFamily: {
        'Satoshi': ['Satoshi', 'sans-serif'],
        'Switzer': ['Switzer', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

