/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   fontFamily:{
     Inter:["Inter", 'serif']
    },
    extend: { 
      colors:{
      primary:'#7E3AF2',
      mainText:'#111928'

    }},
  },
  plugins: [],
}