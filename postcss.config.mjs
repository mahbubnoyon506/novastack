// const config = {
//   plugins: {
//     "@tailwindcss/postcss": {},
//   },
// };
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A0A0A",
        neutral: "#000000",
        tertiary: "#0C0C0C",
        offwhite: "#FAFAFA",
        graywhite: "#956F39",
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};


export default config;
