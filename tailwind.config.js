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
        '250': '250ms'
      },
      height:{
        'card-height': '37rem',
        'lg-card-height':'34rem',
        'h-9/10' : '90%',
      },
      width:{
        'card-width': '39rem',
        'm-card-width':'30rem',
        'lg-card-width':'35rem'
      },
      letterSpacing: {
        'header' : '1.1rem',
      },
      colors: {
        'lighter-white': '#F8F9FA',
        'primary-white': '#E9ECEF',
        'darker-white': '#DEE2E6',
        'lighter-gray': '#CED4DA',
        'primary-gray': '#ADB5BD',
        'darker-gray': '#6C757D',
        'darkest-gray': '#495057',
        'lighter-black': '#343A40',
        'primary-black': '#212529',

      },
  },
  fontFamily: {
    body:['Lora']
},
  plugins: [],
}
}
