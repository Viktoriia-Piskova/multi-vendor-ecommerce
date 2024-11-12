/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "est-light-grey": "#d0d2d6",
        "est-violet-bright": "#6a5fdf",
        "est-violet-medium": "#b1addf",
        "est-violet-light": "#cdcae9",
        "est-violet-additional": "#8288ed",
        "est-blue-light": "#8288ed",
        "est-blue-bright": "#06b6d4",
        "est-gray-meduim": "#475569",
      },
    },
  },
  plugins: [],
};
