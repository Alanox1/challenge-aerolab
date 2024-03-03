/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit-minmax': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      boxShadow: {
        '3xl': '0 0px 4px #000',
      }
    },
  },
  plugins: [],
}

