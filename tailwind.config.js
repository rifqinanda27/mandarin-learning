/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        vermilion: {
          50: '#fdf3f2',
          100: '#fbe4e2',
          200: '#f7cdc9',
          300: '#f0aaa4',
          400: '#e57971',
          500: '#d95349',
          600: '#c23531',
          700: '#b93b3b',
          800: '#8c2424',
          900: '#752323',
          950: '#400e0e',
        },
        cream: {
          50: '#fdfbf7',
          100: '#faf7f2',
          200: '#f5efe6',
          300: '#ece2d3',
          400: '#ded0ba',
          500: '#cbb69b',
        },
        ink: {
          50: '#f6f7f9',
          100: '#edeff2',
          200: '#d8dce2',
          300: '#b5bdc8',
          400: '#8c98a9',
          500: '#6d7b8f',
          600: '#566376',
          700: '#465060',
          800: '#2c333e',
          900: '#1c222b',
          950: '#12161c',
        },
        jade: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        amberGold: {
          500: '#d97706',
          600: '#b45309',
        }
      },
      fontFamily: {
        chinese: ['"PingFang SC"', '"Hiragino Sans GB"', '"Microsoft YaHei"', '"Noto Sans SC"', 'SimHei', 'sans-serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Noto Sans SC"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 10px -2px rgba(0, 0, 0, 0.05), 0 4px 20px -2px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px -4px rgba(28, 34, 43, 0.06), 0 2px 6px -1px rgba(28, 34, 43, 0.04)',
        'vermilion': '0 4px 14px 0 rgba(185, 59, 59, 0.28)',
      }
    },
  },
  plugins: [],
}
