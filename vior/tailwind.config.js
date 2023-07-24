/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lora': ["Lora'", "serif"],
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'play': ['Playfair Display', 'serif'],
        'caveat': ['Caveat', 'cursive'],
        'Robot': ['Roboto', 'sans-serif'],
        'ysa': ['Ysabeau Office', 'sans-serif']
      },

      gridTemplateColumns: {

        'feat': 'repeat(4, minmax(150px, 250px))',
      },
      gridTemplateRows: {
        
        'feat1': 'repeat(2, minmax(160px, 300px))',
        'feat2': 'repeat(4, minmax(90px, 240px))'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}

