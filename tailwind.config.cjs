/** @type {import('tailwindcss').Config} */

//import back1 from './src/assets/home/background-home-desktop.jpg'

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-background":
          "url('./src/assets/home/background-home-desktop.jpg')",
        "home-background-table":
          "url('./src/assets/home/background-home-tablet.jpg')",
        "home-background-mobile":
          "url('./src/assets/home/background-home-mobile.jpg')",
        "destination-background":
          "url('./src/assets/destination/background-destination-desktop.jpg')",
        "destination-background-tablet":
          "url('./src/assets/destination/background-destination-tablet.jpg')",
        "destination-background-mobile":
          "url('./src/assets/destination/background-destination-mobile.jpg')",
        "crew-background":
          "url('./src/assets/crew/background-crew-desktop.jpg')",
        "crew-background-tablet":
          "url('./src/assets/crew/background-crew-tablet.jpg')",
        "crew-background-mobile":
          "url('./src/assets/crew/background-crew-mobile.jpg')",
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
