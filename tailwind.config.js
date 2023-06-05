/** @type {import('tailwindcss').Config} */
const  {fontFamily} = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-poppins)", ...fontFamily.sans],
        gil: ["var(--font-gil-bold)", ...fontFamily.sans],
        gilLight: ["var(--font-gil-light)", ...fontFamily.sans],
      },

      backgroundImage: {
          "search" : "url('/search.svg')",
          "home" : "url('/images/home.jpg')",
          "about" : "url('/images/band.jpg')",
          "who" : "url('/images/who.jpg')",
          "sched": "url('/images/wheat.jpg')",
          "connect": "url('/images/connect.jpg')",
          "ministry": "url('/images/ministries.jpeg')",
          "devotion": "url('/images/devotion.jpeg')",
          "partners": "url('/images/partners.jpg')",
          "give": "url('/images/reachout.jpg')",

      }
    },
    backgroundSize: {
      'iconsize': '1.8rem',
      "ultrasc": "150rem",
      "widesc": "120rem",
      "mediumsc": "100rem",
      "smallsc": "93rem",
      "ultraschome": "143rem",
    },
    backgroundPosition: {
      'searchBt': '10px',
      "aboutPos": "center top -100px",
      "widePos": "center top -38rem",
      "mediumPos": "center top -160px",
      "home": "center top -22rem",
      "identityPos": "center bottom -120px"

    },
    screens: {

      wide: {max: "3000px"},

      lgDesktop: {max: "1920px"},

      sml: {max: "1500px"},
  
      xl: { max: "1200px" },
  
      lg: { max: "1023px" },
  
      md: { max: "767px" },
  
      sm: { max: "639px" },
  
      xs: { max: "479px" },
  },
  },
  plugins: [],
}
