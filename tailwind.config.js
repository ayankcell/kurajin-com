/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

