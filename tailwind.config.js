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
          "about" : "url('https://res.cloudinary.com/dgzvju87l/image/upload/v1685421203/pexels-i%CC%87sra-nilg%C3%BCn-%C3%B6zkan-14416770_tvgwic.jpg')",
          "who": "url('https://res.cloudinary.com/dgzvju87l/image/upload/v1685451278/about_pklrxt.jpg')"
      }
    },
    backgroundSize: {
      '16': '1.5rem',
      "100%": "100%",
    },
    backgroundPosition: {
      'searchBt': '1rem',
      "aboutPos": "center top -100px",
        "identityPos": "center bottom -120px"

    },
    screens: {
      wide: {min: "2200px"},
      xxl: { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
  },
  },
  plugins: [],
}
