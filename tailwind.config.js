/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: { sm: "375px", md: "780px", lg: "1440px" },
    fontFamily: {
      rubik: "Rubik , sans-serif",
    },
    listStyleType: {
      square: "square",
      disc: "disc",
    },
    extend: {
      colors: {
        "very-dark-gray": "hsl(0, 0%, 17%)",
        "dark-gray": " hsl(0, 0%, 59%)",
      },
    },
  },
  plugins: [],
};
