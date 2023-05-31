/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],

  theme: {
    container: {
      center: true,
      padding: '0.5em'
    },
    extend: {
      colors: {
        primary: {
          "teal": "#0d9488",
          "gray": "#4b5563"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

