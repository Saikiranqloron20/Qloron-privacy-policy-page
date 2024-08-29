/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    lineHeight: {
      'tight': '1.2', 
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'], 
      arial: ['Arial'],
    },
    colors : {
      customBg : "#E7EFFD",
      customBlue : "#1967D2"
    }
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'p': { margin: '0' },
      });
    },
  ],
}

