/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // themes
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted'),
          accent: withOpacity(`--color-text-accent`),
          button: withOpacity(`--color-text-button`),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-base': withOpacity('--color-text-base'),
          'button-muted': withOpacity('--color-button-muted'),
        },
      },
      borderColor: {
        skin: {
          accent: withOpacity(`--color-text-accent`),
          button: withOpacity(`--color-text-button`),
        },
      },
      // themes end
      colors: {
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        lavender: '#9BAED8',
      },
      fontFamily: {
        typewriter: ['Special Elite'],
        roboto: ['Roboto'],
        mono: ['monospace', 'SFMono-Regular'],
      },
      animation: {
        'bounce-pulse': 'bounce 1s',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [],
};
