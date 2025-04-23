const icons = require('@jcamp/tailwindcss-plugin-icons');

export const tailwindContent = [
  './src/theme/**/*.{js,ts,vue}',
  './docs_src/**/*.md',
  './docs_src/.vitepress/**/*.{js,ts,vue}',
];

module.exports = {
  content: [...tailwindContent],
  darkMode: 'class',
  plugins: [icons()],
};
