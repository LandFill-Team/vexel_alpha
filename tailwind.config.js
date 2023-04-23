/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/style/styles.css/**/*.{html,js}"],
  theme: {
    fontFamily: {
      henny: ['Henny Penny'],
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {    
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        corner: 'rgba(108, 104, 104, 1)',
        // torin: 'rgba(239,129,111,255)',
        torin: 'rgba(241,150,108,255)',
        twib: 'rgba(255, 193, 56, 1)',
        wall: 'rgba(112, 77, 55, 1)',
      },  
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },
  plugins: [],
}
