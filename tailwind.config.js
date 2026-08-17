// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#ff6b00',
        },
        secondary: {
        
          500: '#050404',
        },
        light: '#f1f0f0',
        textcolor:'#D1D5DB',
        buttoncolor: '#ffbc8d',
        greyColor:'#1a1919',
        tertiary:'#202122',
        lightgray:'#54595d'
      },
    },
  },
};