/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'avatar-border': "#4A82E9"
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

