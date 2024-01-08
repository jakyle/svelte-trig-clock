const plugin = require('tailwindcss/plugin');

const selectors = Object.entries({
	'>': 'child',
	'+': 'next',
	'~': 'sibling',
	' ': 'desc',
})

const values = [
	'div', 'span', 'a', 'button', 'input', 'textarea', 'select', 'label', 'img', 'svg', 'path', 'circle', 'rect', 'p',
	'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'li', 'ol', 'table', 'tr', 'td', 'th', 'thead', 'tbody', 'tfoot', 'form',
	'fieldset', 'legend', 'pre', 'code', 'blockquote', 'cite', 'iframe', 'audio', 'video', 'canvas', 'details', 'summary',
	'figure', 'figcaption', 'footer', 'header', 'main', 'mark', 'nav', 'section', 'time', 'progress', 'meter', 'ruby', 'rt',
	'rp', 'b', 'strong', 'i', 'em', 'u', 's', 'small', 'sub', 'sup', 'ins', 'del', 'kbd', 'samp', 'var', 'dfn', 'abbr',
	'address', 'bdo', 'caption', 'col', 'colgroup', 'dd', 'dl', 'dt', 'hr', 'li', 'optgroup', 'option', 'q', 'thead',
	'tbody', 'tfoot', 'tr', 'th', 'td', 's', 'strike', 'wbr', 'aside', 'article', 'datalist', 'object', 'math', 'dialog',
	'slot', 'template'
].reduce((acc, curr) => ({
		...acc,
		[curr]: curr
	}), {})

export default plugin(({
		matchVariant
	}) => selectors.forEach(([selector, name]) => matchVariant(name, (value) => `& ${selector} ${value}`, {
			values
		})))
