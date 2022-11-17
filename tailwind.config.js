/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
        'bg-color' : "#EEFBF9",
        'text-color': "#718096",
        'border-color' : "#0000FF",
        'white' : "#FFFFFF",
        'form-color' : "#1D4ED8",
        'login' : "#1B1855",
        'black' : "#000000",
        'yellow': "#FAB415"
    },
    extend: {
      backgroundImage:{
        'background' : "url('/image/image.png')"
      }
    },
  },
  plugins: [],
}