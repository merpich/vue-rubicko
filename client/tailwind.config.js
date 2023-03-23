/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,scss}"
  ],
  theme: {
    screens: {
      'sm': '30rem',
      'md': '48rem',
      'lg': '64rem',
      'xl': '80rem'
    },
    container: {
      center: true,
      padding: '0.8rem'
    },
    extend: {},
  },
  plugins: [],
}
