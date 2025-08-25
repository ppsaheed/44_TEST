/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'uae-gold': '#D4AF37',
        'uae-red': '#FF0000',
        'uae-green': '#00732F',
        'uae-black': '#000000',
        'primary': '#F58220',
        'secondary': '#939598',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
