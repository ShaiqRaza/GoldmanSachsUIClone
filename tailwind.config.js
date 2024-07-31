/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html"
  ],
  safelist: [
    'shadow-xl',
    'md:h-20',
    'h-16',
    'bg-cyan-500',
    'visible',
    'bg-white',
    'text-cyan-500',
    'hidden',
    'grid',
    'bg-red-200',
    'opacity-100',
  ],
  theme: {
    extend: {
      flexGrow: {
        '3': 3,
        '2': 2,
      }
    },
    screens:{
        'xss': '400px',
        'xs': '480px', // Custom breakpoint for xs
        'sm': '576px',
        'md': '770px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1430px',
        '3xl': '1600px',
        '4xl': '1800px',
        '5xl': '2000px',
    }
  },
  plugins: [],
}

