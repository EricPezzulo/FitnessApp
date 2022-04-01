module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'top': '0px -1px 3px 0px rgba(0,0,0,0.1)',
        'inner-input': 'inset 0 0 4px 0 rgb(0,0,0,0.15)'
      },
      height:{
        children: "calc(100vh - 5rem)",
      },
      maxHeight:{
        108: "34rem"
      },
      minWidth:{
        hero: '40rem'
      },
      screens:{
        '3xl': '1800px',
        '4xl': '2000px'
      }

    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
}
