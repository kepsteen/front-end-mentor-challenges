/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {colors: {
        'light-grey-blue': '#D5E1EF',
        'grey-blue': '#7D889E',
        'dark-navy': '#1F314F',
        'blue-shade': '#3685FF',
        'blue': '#2C7DFA',
      },},
  },
  plugins: [],
}
