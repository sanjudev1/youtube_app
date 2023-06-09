/** @type {import('tailwindcss').Config} */


// import withMT from '@material-tailwind/react/utils/withMT'
 
// export default withMT({
//   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}","path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
//   "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",],

//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {spacing: {
      '100vh': '100vh',
    },},
  },
  variants: {},
  plugins: [],

}
// tailwind.config.js

