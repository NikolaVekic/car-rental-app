module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}", // Adjusted for standard React directory structure
    "./src/components/**/*.{js,jsx,ts,tsx}", // Adjusted for standard React directory structure
    "./src/**/*.{js,jsx,ts,tsx}", // Broad pattern to include all JS/TSX files within the src directory
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
    },
  },
  plugins: [],
};
