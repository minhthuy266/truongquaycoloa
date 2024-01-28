/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  optimizeDeps: {
    include: ["src/**/*.{js,jsx,ts,tsx}", "src/index.html"],
  },
  theme: {
    extend: {
      colors: {
        "bg-header": "#066398",
      },
      container: {
        center: true,
        padding: "2rem",
      },

      screens: {
        sm: "640px",
        md: "768px",
        c1: "1000px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".global-text-base": {
          "font-size": "1.6rem",
        },
        ".custom-min-height": {
          "min-height": "calc(100vh - 120px - 50rem)",
        },
      });
    },
  ],
};
