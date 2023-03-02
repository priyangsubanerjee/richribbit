/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        greenPrimary: "#01E375",
        greenSecondary: "#30C952",
      },
      textColor: {
        greenPrimary: "#01E375",
        greenSecondary: "#30C952",
        grayPrimary: "#EDEDED",
        graySecondary: "#D7D7D7",
        grayTeritary: "#ACACAC",
        grayLight: "#CCCCCC",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
