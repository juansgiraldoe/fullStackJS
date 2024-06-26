/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      keyframes: {
        "fade-in-y": {
          "0%": { opacity: 0, transform: "translateY(25px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        "fade-in-y-slower": {
          "0%": { opacity: 0, transform: "translateY(25px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        "alert":{
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "90%": { opacity: 0.5},
          "100%": { opacity: 1, transform: "translateY(0px)" },  
        },
      },
    },
      animation: {
        "fade-in-y": "fade-in-y 300ms linear",
        "fade-in-y-slower": "fade-in-y-slower 700ms ease-in-out",
        "alert": "alert 150ms ease 0s 1 normal forwards"
      },
  },
  plugins: [],
}