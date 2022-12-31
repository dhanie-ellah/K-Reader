/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "tertiary": "var(--tertiary)",
        "bg": "var(--bg)",
        "yellow": "var(--yellow)",
        "green": "var(--green)",
      }
    },
    screens: {
      xl: { max: "1279px" },
			lg: { max: "1023px" },
			md: { max: "800px" },
			sm: { max: "639px" },
    }
  },
  plugins: [],
}
