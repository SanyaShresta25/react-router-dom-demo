/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-bg': '#F2F2F2',
        'muted': '#B6B09F',
        'card': '#EAE4D5',
        'dark-bg': '#1A1A1A', 
      },
    },
  },
  plugins: [],
}
