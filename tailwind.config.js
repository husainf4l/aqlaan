/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'ui-sans-serif', 'system-ui'],
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'network-line': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'network-line-vertical': {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
        'node-pulse': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0.7' },
        },
        'slow-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'reverse-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'data-flow-1': {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { transform: 'translate(150%, 100%)', opacity: '0' },
        },
        'data-flow-2': {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { transform: 'translate(-100%, 100%)', opacity: '0' },
        },
        'data-flow-3': {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { transform: 'translate(-100%, -100%)', opacity: '0' },
        },
        'data-stream-out': {
          '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0.7' },
          '100%': { transform: 'translate(-50%, -50%) scale(20)', opacity: '0' },
        },
        'binary-fade': {
          '0%': { opacity: '0.1' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '0.1' },
        },
        'glow': {
          '0%': { textShadow: '0 0 0px rgba(79, 70, 229, 0.1)' },
          '50%': { textShadow: '0 0 10px rgba(79, 70, 229, 0.3)' },
          '100%': { textShadow: '0 0 0px rgba(79, 70, 229, 0.1)' },
        },
        'expand': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'holographic': {
          '0%': { opacity: '0.3', transform: 'scale(1.01)' },
          '50%': { opacity: '0.5', transform: 'scale(1.03)' },
          '100%': { opacity: '0.3', transform: 'scale(1.01)' },
        },
        'scan-line': {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'network-line': 'network-line 2s forwards',
        'network-line-vertical': 'network-line-vertical 2s forwards',
        'node-pulse': 'node-pulse 2s forwards',
        'slow-spin': 'slow-spin 20s linear infinite',
        'reverse-spin': 'reverse-spin 30s linear infinite',
        'data-flow-1': 'data-flow-1 4s infinite',
        'data-flow-2': 'data-flow-2 5s infinite 1s',
        'data-flow-3': 'data-flow-3 4.5s infinite 2s',
        'binary-fade': 'binary-fade 3s infinite',
        'glow': 'glow 3s infinite',
        'expand': 'expand 1s forwards 0.5s',
        'fade-in': 'fade-in 1s forwards',
        'data-stream-out': 'data-stream-out 3s infinite',
        'holographic': 'holographic 4s ease-in-out infinite',
        'scan-line': 'scan-line 4s linear infinite',
      },
    },
  },
  plugins: [],
};
