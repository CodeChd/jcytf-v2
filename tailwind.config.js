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
      colors: {
        dark: "#1b1b1b",
      },
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
      "ul-wide": "180rem",
      "ultrasc": "150rem",
      "widesc": "120rem",
      "mediumsc": "100rem",
      "smallsc": "93rem",
      "ultraschome": "143rem",
      "itemsc": "140rem",
    },
    backgroundPosition: {
      'searchBt': '10px',
      "aboutPos": "center top -100px",
      "widePos": "center top -38rem",
      "mediumPos": "center top -160px",
      "smallPos": "center top -20px",
      "itemPos": "center bottom -20px",
      "home": "center top -22rem",
      "identityPos": "center bottom -120px"

    },
    screens: {
      ultra : {min: "3001px"},

      wide: {max: "3000px"},

      llg: {max: "1920px"},

      sml: {max: "1500px"},
      
      mdDsk: {max: "1410px"},
  
      menu: { min: "1281px" },

      xxl: { max: "1280px" },

      xl: { max: "1200px" },
  
      lg: { max: "1080px" },
  
      mdItem: { max: "900px" },
      
      mdIcons: { min: "781px" },
      
      md: { max: "780px" },
  
      sm: { max: "670px" },
  
      xs: { max: "525px" },

      xxs: { max: "380px" },
  }
  },
  plugins: [],
}
