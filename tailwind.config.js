const relationsPlugin = require('./tailwind/plugins');

const tenths = Array.from({
  length: 9
}).reduce((acc, _, i) => ({
    ...acc,
    [`${i + 1}/10`]: `${i + 1}0%`
  }), {});

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-lg': 'inset 0 10px 15px -3px rgb(0 0 0 / 0.1), inset 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'inner-xl': 'inset 0 20px 25px -5px rgb(0 0 0 / 0.1), inset 0 8px 10px -6px rgb(0 0 0 / 0.1);',
      },
      keyframes: {
        'turn': {
          to: {
            transform: 'rotate(1turn)',
          }
        }
      },
      animation: {
        'seconds': 'turn 60s linear infinite;',
        'minutes': 'turn 3600s steps(60, end) infinite;',
        'hours': 'turn 43200s linear infinite;',
      },
      inset: {
        ...tenths
      }
    },
  },
  plugins: [relationsPlugin],
}
