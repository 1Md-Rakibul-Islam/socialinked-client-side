/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // daisyui: {
  //   themes: [
  //     {
  //       socialinked: {     
  //         primary: "#6d28d9",
  //         secondary: "#a21caf",         
  //         accent: "#0e7490",         
  //         neutral: "#191D24",         
  //         "base-100": "#2A303C",         
  //         info: "#3ABFF8",
  //         success: "#22c55e",
  //         warning: "#FBBD23",        
  //         error: "#F87272",
  //       },
  //     },
  //   ],
  // },
  plugins: [require("daisyui")],
}
