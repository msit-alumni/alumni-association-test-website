/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "facebook":"#3B5998",
        "google":"#666600",
        'linkedin':"#0A66C2",
         "theme":"#F5EBE0"
      },
      fontFamily:{
        "Inter":"Inter"
      },
      screens: {
  
        'mmd': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
      },
      
    },
  },
  plugins: [],
}