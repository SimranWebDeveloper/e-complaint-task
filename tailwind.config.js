/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray_default': '#BDBDBD',
        'blue_default': '#3C6CB4',
      },
      borderRadius: {
        'default': '1.25rem',
      },
      fontSize:{
        'my_default': '0.875rem',
      },
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

