/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");
export default {
  content: [
    "./src/**/*.{html,jsx,js,tsx,ts}",
    "./index.html",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
}

