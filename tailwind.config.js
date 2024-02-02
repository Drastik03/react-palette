/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0366d6",
        secondary: "rgb(189, 185, 172)",
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}

