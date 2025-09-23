/** @type {import('tailwindcss').Config} */
module.exports = {
  
  darkMode: 'class',
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],

    safelist: [
    'border-blue-500', 'border-green-500', 'border-yellow-500',
    'bg-blue-500', 'bg-green-500', 'bg-yellow-500',
    'hover:shadow-blue-500', 'hover:shadow-green-500', 'hover:shadow-yellow-500', 'hover:shadow-sky-500'
  ],
  theme: {
    extend: {
      fontFamily: {
      sans: ["Inter", "sans-serif"], // replaces default font
    },
    },
  },
  plugins: [],
}
