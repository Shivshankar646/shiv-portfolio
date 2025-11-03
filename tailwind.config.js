module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#ebfbf7',
          100: '#cff7ee',
          300: '#7ef3d9',
          500: '#34d9b2',
        },
        primary: {
          50: '#eef7ff',
          100: '#dbeefe',
          400: '#60a5fa',
          600: '#2563eb',
        }
      },
      borderRadius: { 'xl': '1rem' }
    }
  },
  plugins: []
}
