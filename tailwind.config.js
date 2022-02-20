module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    typography: (theme) => ({}),
    extend: {},
    colors: {
      "light-text": "#666",
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
