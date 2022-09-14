/** @type {import('tailwindcss').Config} */

//import back1 from './src/assets/home/background-home-desktop.jpg'

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-background":
          "url('./src/assets/home/background-home-desktop.jpg')",
        "destination-background":
          "url('./src/assets/destination/background-destination-desktop.jpg')",
        "crew-background":
          "url('./src/assets/crew/background-crew-desktop.jpg')",
        "techno-background":
          "url('./src/assets/technology/background-technology-desktop.jpg')",
      },
    },
    fontFamily: {
      bella: ["Bellefair", "serif"],
      barlow: ["Barlow", "sans-serif"],
      barlowCondense: ["Barlow Condensed", "sans - serif"],
    },
  },
  plugins: [],
};
