/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./!node_modules", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
      'bg': '#171717',
      'primary': '#3c3cfa',
      'light-gray': '#2e2e2e'
      }
    }
  },
  plugins: [],
}

