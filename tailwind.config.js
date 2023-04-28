/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        primaryColor: "#D0D6F9",
      },
    },
  },
  plugins: [],
};
