/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans"],
      },
      boxShadow: {
        BigCard: " 6px 7px 5px -3px rgba(255,255,255,1)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5c72ee",
          secondary: "#1f2060",
          accent: "#9BA8F4",
          neutral: "#23262e",
          "base-100": "#18171d",
          info: "#fafafa",
          success: "#2dd4bf",
          warning: "#fcd34d",
          error: "#831843",
          default: "#0F1012",
        },
      },
    ],
  },
};
