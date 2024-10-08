/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D2026",
        primary_orange: "#FF6636",
        primary_purple: "#564FFD",
        success: "#23BD33",
        warning: "#FD8E1F",
        error: "#E34444",
        light_gray: "#F5F7FA",
      },
      fontSize: {
        heading: "72px",
        sub_heading: "40px",
        hero_text: "24px",
        small_text: "14px",
      },
    },
  },
  plugins: [],
};
