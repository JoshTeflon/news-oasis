/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'white': '#ffffff',
      'text': '#545f7d',
      'primary': '#213f7d',
      'secondary': '#39cdcc'
    },
    fontFamily: {
      'karla': ['Karla', 'sans-serif']
    },
    boxShadow: {
      'custom': '3px 5px 20px rgba(0, 0, 0, 0.04)',
    },
    extend: {},
  },
  plugins: [],
}