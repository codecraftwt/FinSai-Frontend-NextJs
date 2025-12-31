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
        'ageo': ['sans-serif', 'AgeoTrial-Regular'],
      },
      backgroundImage: {
        'radial-faded': 'radial-gradient(circle, rgba(73, 109, 171, 1) 0%, rgba(160, 174, 175, 0.1) 100%)',
        'radial-market':
          'radial-gradient(circle, #5873FF 0%, #A0EAF5 100%)',
        'linear-hero':
         'linear-gradient(to right, #2C4FAC 0%, #3481CF 50%, #41ABE7 75%, #48C3F4 100%)',
        'radial-account-sm':
          'radial-gradient(circle, #496DAB 0%, #48C3F4 35%, #4982BD 100%)',
        'radial-account-md':
          'radial-gradient(circle, #496DAB 0%, #48C3F4 29%, #48C3F4 72%, #4982BD 100%)',
        'radial-account-lg':
          'radial-gradient(circle, #496DAB 0%, #48C3F4 29%, #48C3F4 72%, #4982BD 100%)',
      },
      animation: {
        grow: 'grow 1s ease-out'
      },
      keyframes: {
        grow: {
          from: { transform: 'scale(0)' },
          to: { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}

