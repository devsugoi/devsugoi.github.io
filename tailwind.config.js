module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#E0E0E0',
        secondary: '#78909C',
        tertiary: "url('/public/clouds.png')",
      },
    },
    fontFamily: {
      'intro': ["Courier New"],
      'about-me': ["Century Gothic", "Rockwell", "Roboto Slab", "Helvetica", "Roboto", "Trebuchet MS"],
      'skills': ['Arial']
    },
    
  },
  plugins: [require("daisyui")],
}
