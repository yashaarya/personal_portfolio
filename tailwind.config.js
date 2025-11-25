/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   extend: {
  colors: {
    primary: {
      50: "#faf5f0",
      100: "#e8ded3",
      500: "#4a2c2a",
      600: "#3b2220",
      700: "#2c1917",
      800: "#1f110f",
      900: "#140a08",
    },
    secondary: {
      50: "#fff8e8",
      100: "#fce7c2",
      500: "#d9a441",
      600: "#b58530",
      700: "#916820",
      800: "#6d4c15",
      900: "#4a3410",
    },
    accent: "#f5deb3", // wheat/gold tone
  },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0, -15px, 0)' },
          '70%': { transform: 'translate3d(0, -7px, 0)' },
          '90%': { transform: 'translate3d(0, -2px, 0)' },
        },
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}