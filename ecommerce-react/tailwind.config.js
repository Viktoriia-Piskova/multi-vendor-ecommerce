/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'est-light-grey': '#d0d2d6',
        'est-violet-bright': '#6a5fdf',

      }
    },
  },
  plugins: [],
}