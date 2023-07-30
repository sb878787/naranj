/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'silver': '#C9C9C9',
      },
      fontFamily: {
        'YekanL': ['YekanBakhL'],
        'YekanM': ['YekanBakhM'],
        'YekanB': ['YekanBakhB']
      },
      backgroundImage: {
        'responsive-hrader': "url('/src/assets/131211_keenio_01 1.png')",
      }
    },
  },
  plugins: [],
}

