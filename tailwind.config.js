/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      transitionDelay: {
        '800': '800ms',
      },
      transitionDuration: {
        '800': '800ms',
      },
      colors: {
        'lighter-white': '#F8F9FA',
        'primary-black': '#212529',
        'primary-white': '#E9ECEF',
        'primary-gray': '#495057',


      },
  },
  fontFamily: {
    body:['Lora']
},
  plugins: [],
}
}
