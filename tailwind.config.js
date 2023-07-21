/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'lighter-white': '#F8F9FA',
        'primary-black': '#212529',
        'primary-white': '#E9ECEF',

      },
  },
  fontFamily: {
    body:['Lora']
},
  plugins: [],
}
}
