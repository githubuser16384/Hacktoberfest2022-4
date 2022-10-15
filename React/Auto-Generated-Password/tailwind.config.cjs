/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        spark: '#ffe27d',
        surf: '#64e2ff',
        psybeam: '#9092ff',
        giga: '#b4ff39',
        manga: '#e5e1e6',
        body: '#170F1E',
      },
    },
    fontFamily: {
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
      sans: ['Jet Brains Mono', 'monospace'],
      special: ['Orbitron', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
