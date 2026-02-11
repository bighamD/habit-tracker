/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        // NYC Rebel 主题 - 直接定义
        'nyc-bg': '#0A0A0A',
        'nyc-card': '#18181B',
        'nyc-border': '#27272A',
        'nyc-accent': '#C4F82A',
        'nyc-accent-text': '#0A0A0A',
        'nyc-progress': '#FA541C',
        'nyc-purple': '#7C3AED',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '22px',
      }
    },
  },
  plugins: [],
}
