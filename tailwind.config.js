/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        dark: {
          base: '#070a12',
          card: 'rgba(15, 23, 42, 0.65)',
          'card-hover': 'rgba(23, 37, 84, 0.45)',
          elevated: 'rgba(30, 41, 59, 0.7)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-glow': 'rgba(56, 189, 248, 0.35)',
        },
        neon: {
          cyan: '#06b6d4',
          sky: '#38bdf8',
          blue: '#3b82f6',
          purple: '#a855f7',
          violet: '#8b5cf6',
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -3px rgba(6, 182, 212, 0.35)',
        'neon-purple': '0 0 25px -3px rgba(168, 85, 247, 0.35)',
        'neon-blue': '0 0 30px -4px rgba(59, 130, 246, 0.35)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'glass-glow': '0 12px 40px -10px rgba(6, 182, 212, 0.25), 0 0 0 1px rgba(56, 189, 248, 0.35)',
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'spin-reverse-slow': 'spin 30s linear infinite reverse',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
