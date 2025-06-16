/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // CloutCraft Color Palette
        'clout-yellow': '#FFCC00',
        'clout-blue': '#66CCFF',
        'clout-pink': '#FF99CC',
        'clout-teal': '#33CCCC',
        'clout-navy': '#3366CC',
        'clout-red': '#FF3333',
        'clout-orange': '#FF9933',
        'clout-gray': '#333333',
        'clout-light-blue': '#CCCCFF',
        'clout-light-gray': '#DDDDDD',
      },
      fontFamily: {
        sans: ['Quicksand', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 