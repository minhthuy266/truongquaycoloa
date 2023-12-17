/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  optimizeDeps: {
    include: ["src/**/*.{js,jsx,ts,tsx}", "src/index.html"],
  },
  theme: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {
      addUtilities({
        ".global-text-base": {
          "font-size": "1.6rem",
        },
        ".custom-min-height": {
          "min-height": "calc(100vh - 120px - 50rem)",
        },
      })
    },
  ],
}
