/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        '#505B5F': '#505B5F',
      },
      fontFamily: {
        Baskerville: ['Baskerville'],
      },
      margin: {
        '12px': '12px',
        '42px': '42px',
      },
      background: {
        '#B8B8B8': '#B8B8B8',
        orange: '#F5B05F',
        // 'B5D3F7':'#B5D3F7',
      },
      border: {
        '0.5px': '0.5px',
        'blight-grey': '#D9D9D9',
      },
      backgroundImage: {
        'gallery-image': "url('/assets/gallery.png')",
      },
    },
  },
  plugins: [],
}
