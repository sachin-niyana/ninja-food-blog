/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      Merriweather: ["Merriweather", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
    },
    fontSize: {
      xxs: "14px",
      xs: "16px",
      md: "18px",
      lg: "20px",
      xl: "24px",
      xxl: "26px",
      "2xxl": "36px",
      "2xl": "46px",
      "3xl": "48px",
    },
    extend: {
      colors: {
        "dark-black": "#000638",
        "lite-black": "#303030",
        gray: "#515151",
        "dark-gray": "#434343",
        "white-gray": "#dfe1e7",
        "lite-gray": "#f5f5f5",
        "dark-blue": "#283a61",
        "email-text": "#605C59",
        "lite-blue": "#DFE6FF;",
        "footer-li": "#544B44;",
        "copyright-color": "#3E3E3E;",
      },
    },
  },
  plugins: [],
};
