/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        pomodoro: {
          "primary": "#FE4869",
          "secondary": "#40C355",
          "accent": "#22AC38",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#40C355",
          "warning": "#fbbd23",
          "error": "#EB1649",
        },
      },
      "dark",
    ],
  },
}
