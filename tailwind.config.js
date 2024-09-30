/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#6A9C89"
      }
    },
    
      
    
  },
  plugins: [
    require('daisyui'),
  ],
}