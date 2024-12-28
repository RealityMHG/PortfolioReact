/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["League Spartan", "sans-serif"] },
      animation: {
        typwriter: "typewriter 3s steps(21) forwards",
        caret:
          "typewriter 3s steps(21) forwards, blink 1s steps(21) infinite 3s",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
    colors: {
      background: "#e8ffe3",
      text: "#2f4858",
      light: "#b7dac7",
      stronger: "#668f92",
      strong: "#8bb4ad",
      strong_tranparent: "#8bb4ad80",
      green: "#31d84d",
    },
  },
  plugins: [],
};
