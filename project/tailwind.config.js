/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: '#0B5ED7',
          50: '#E8F1FE',
          100: '#D0E3FD',
          200: '#A3C7FB',
          300: '#76ABF9',
          400: '#498FF7',
          500: '#0B5ED7',
          600: '#094BB0',
          700: '#073A8A',
          800: '#052A64',
          900: '#04193E',
        },
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FBF6E3',
          100: '#F7ECC7',
          200: '#EFD98F',
          300: '#E7C657',
          400: '#D4AF37',
          500: '#B8962C',
          600: '#927822',
          700: '#6C5A19',
          800: '#463C10',
          900: '#201E09',
        },
        ink: {
          DEFAULT: '#222222',
          light: '#444444',
          muted: '#6B7280',
        },
        cloud: {
          DEFAULT: '#F8F9FA',
          50: '#FCFCFD',
          100: '#F8F9FA',
          200: '#F1F3F5',
          300: '#E5E8EB',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 10px 40px -12px rgba(11, 94, 215, 0.15)',
        'premium-lg': '0 25px 70px -20px rgba(11, 94, 215, 0.20)',
        soft: '0 4px 24px -8px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 12px 48px -12px rgba(0, 0, 0, 0.12)',
        gold: '0 8px 30px -8px rgba(212, 175, 55, 0.35)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'slide-down': 'slideDown 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
