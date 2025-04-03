// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // 启用 JIT 模式以加快构建速度
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // 添加其他可能包含 Tailwind CSS 类的文件路径
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // 其他插件
  ],
};