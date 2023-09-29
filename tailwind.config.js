/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans"],
      },
      boxShadow: {
        cardFloat: " 6px 7px 5px -3px rgba(145, 95, 243, 1)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#5c72ee",
          "ligth": "#f1f0f5",
          "secondary": "#1f2060",
          "accent": "#9BA8F4",
          "neutral": "#141130",
          "base-100": "#18171d",
          "info": "#fafafa",
          "success": "#2dd4bf",
          "warning": "#fcd34d",
          "error": "#831843",
         
        },
      },
    ],
  },
};
