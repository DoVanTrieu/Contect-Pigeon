module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      "body": "'Inter', sans-serif"
    },
    extend: {
      colors: {
        "blue": "#71B8FA",
        "violet": "#5E5CC2",
        "secondary": "#1C2B45",
        "primary": "#E5E5E5",
        "background": "#F3F4F6"
      },
      backgroundImage: theme => ({
        'conclusion': "url('public/images/video box.jpg')",
        'banner': "url('public/images/Banner-area.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}