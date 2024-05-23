/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", 'sans-serif']
      }
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [
    require('daisyui'),
  ],
}

