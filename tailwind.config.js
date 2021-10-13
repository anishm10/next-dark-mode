module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', 
  theme: {
    extend: {
      colors:{
        'light-primary':'#E5E7EB',
        'light-secondary':'#D1D5DB',
        'dark-primary':'#1F2937',
        'dark-secondary':'#111827'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
