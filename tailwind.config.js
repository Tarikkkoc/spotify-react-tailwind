/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      tablet: { max: "1350px", min: "768px" },
      // => @media (max-width: 991px) { ... }
      desktop: { max: "1500px", min: "1351px" },
      // => @media (max-width: 1231px) { ... }
    },
    extend: {
      backgroundColor: {
        contextColor: "#134e4a",
        anotherColor: "#23867d",
        colorTwo: "#134e4a",
        colorThree: "#134e4a",
        colorFour: "#134e4a",
        colorFive: "#134e4a",
        colorSix: "#134e4a",
      },
      colors: {
        darkHorizon: "#09090b",
        transparentGray: "#71717a4d",
        softGray: "#A1A1AA4D",
        play: "#22C55E",
        contextColor: "#134e4a",
        colorTwo: "#134e4a",
        colorThree: "#134e4a",
        colorFour: "#134e4a",
        colorFive: "#134e4a",
        colorSix: "#134e4a",
      },
    },
  },
  plugins: [],
};
