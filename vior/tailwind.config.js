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
        'Robot': ['Roboto', 'sans-serif']
      },

      gridTemplateColumns: {

        'feat': 'repeat(4, minmax(120px, 180px))',
      },
      gridTemplateRows: {
        
        'feat1': 'repeat(2, minmax(140px, 220px))',
        'feat2': 'repeat(4, minmax(60px, 180px))'
      }
    },
  },
  plugins: [],
}

