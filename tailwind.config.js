/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray_default': '#BDBDBD',
      }
    },
    fontFamily:{
      pop:['Poppins'] 
    },
    screens: {
      'sm': '500px',


      'md': '768px',


      'lg': '1024px',
 

      'xl': '1280px',
 

      '2xl': '1536px',


    },
  },
  plugins: [],
}

