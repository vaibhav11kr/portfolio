module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'plus-jakarta': ['"Plus Jakarta Sans ExtraBold"', 'sans-serif'],
      },
      keyframes: {
        'infinite-scroll-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-right': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "60vw"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        'infinite-scroll-left': 'infinite-scroll-left 15s linear infinite',
        'infinite-scroll-right': 'infinite-scroll-right 15s linear infinite',
        typing: "typing 2s steps(20) alternate, blink .7s infinite"
      }
    },
  },
  plugins: [],
};
