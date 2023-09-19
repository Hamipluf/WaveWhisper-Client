/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Ubuntu': ['Ubuntu', 'sans'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {        
          "primary": "#5c72ee",        
          "secondary": "#1f2060",        
          "accent": "#9BA8F4",        
          "neutral": "#23262e",        
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
