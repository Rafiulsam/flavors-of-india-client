/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", 'sans-serif']
      }
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [
    require('daisyui'),
  ],
}

