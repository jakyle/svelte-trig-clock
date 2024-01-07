const plugin = require('tailwindcss/plugin');

const selectors = Object.entries({
  '>': 'child',
  '+': 'next',
  '~': 'sibling',
  ' ': 'desc',
})

const values = [
  'div', 'span', 'a', 'button', 'input', 'textarea', 'select', 'label', 'img', 'svg', 'path', 'circle', 'rect', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'li', 'ol', 'table', 'tr', 'td', 'th', 'thead', 'tbody', 'tfoot', 'form', 'fieldset', 'legend', 'pre', 'code', 'blockquote', 'cite', 'iframe', 'audio', 'video', 'canvas', 'details', 'summary', 'figure', 'figcaption', 'footer', 'header', 'main', 'mark', 'nav', 'section', 'time', 'progress', 'meter', 'ruby', 'rt', 'rp', 'b', 'strong', 'i', 'em', 'u', 's', 'small', 'sub', 'sup', 'ins', 'del', 'kbd', 'samp', 'var', 'dfn', 'abbr', 'address', 'bdo', 'caption', 'col', 'colgroup', 'dd', 'dl', 'dt', 'hr', 'legend', 'li', 'optgroup', 'option', 'q', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 's', 'strike', 'summary', 'wbr'
].reduce((acc, curr) => ({...acc, [curr]: curr}), {})

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
    },
  },
  plugins: [
    plugin(({
        matchVariant
      }) => selectors.forEach(([selector, name]) => matchVariant(name, (value) => `& ${selector} ${value}`, {
          values
        })))
  ],
}
