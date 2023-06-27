/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        redish: "#FF5757",
        yellowy: "#FFB01F",
        teal: "#00BD91",
        bluey: "#1125D4",
        levander: "#C8C7FF",
        dblue: "#303B5A",
        pale: "#E0EAFF",
        gradientLight: "hsl(252, 100%, 67%)",
        gradientDark: "hsl(241, 81%, 54%)",
        cicrcleLight: "hsla(256, 72%, 46%, 1)",
        circleDark: "hsla(241, 72%, 46%, 0)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
