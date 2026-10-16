/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple-bg': '#f5f5f7',
        'apple-dark': '#1d1d1f',
        'apple-card': '#ffffff',
        'apple-blue': '#0071e3',
        'apple-blue-hover': '#0077ed',
        'apple-gray': {
          50: '#fbfbfd',
          100: '#f5f5f7',
          200: '#e8e8ed',
          300: '#d2d2d7',
          400: '#86868b',
          500: '#6e6e73',
          600: '#424245',
          700: '#333336',
          800: '#1d1d1f',
          900: '#161617',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"SF Pro Icons"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'apple-card': '0 4px 24px -2px rgba(0, 0, 0, 0.08)',
        'apple-hover': '0 12px 36px 0 rgba(0, 0, 0, 0.12)',
        'apple-phone': '0 25px 60px -15px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.08)',
        'apple-phone-dark': '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
      borderRadius: {
        'apple': '24px',
        'phone': '44px',
      }
    },
  },
  plugins: [],
}

