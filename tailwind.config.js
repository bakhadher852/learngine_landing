/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "200px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      borderRadius: { custom: "50px" },
      // borderRadius: { secondCustom: "120px" },
      colors: {
        primary: "#8AC247",
        secondry: "#E1FFBD",
        Third: "#55772E",
        textColor: "#707070",
      },
    },
  },
  plugins: [],
};
