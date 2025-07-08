/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'pink-punch': '#F055A5',     // Pink Punch
        'lemon-drop': '#FABE37',     // Lemon Drop
        'lime-wedge': '#CCD537',     // Lime Wedge
        'violet-syrup': '#7A88FE',   // Violet Syrup
        'orange-paloma': '#FF9B28',  // Orange Paloma
        'blue-crystal': '#BFDFF3',   // Blue Crystal

        // Semantic mappings (if preferred)
        'light-bg': '#BFDFF3',       // mapped to Blue Crystal
        'muted': '#CCD537',          // mapped to Lime Wedge
        'card': '#FF9B28',           // mapped to Orange Paloma
        'dark-bg': '#7A88FE',        // mapped to Violet Syrup
      },
    },
  },
  plugins: [],
}
