module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
         300: '#996DFF',
         500: '#8257E5'
       },
        text_on_brand_color: '#FFFFFF',
        light: {
          background: '#FFFFFF',
          surface_primary: '#FFFFFF',
          surface_secondary: {
            300:'#F4F4F5',
            500: '#E4E4E7'
          },
          text_primary: '#27272A',
          text_secondary: '#71717A',
          stroke: '#D4D4D8'
        },
        dark: {
          background: '#09090A',
          surface_primary: '#18181B',
          surface_secondary: {
            300:'#27272A',
            500: '#3F3F46'
          },
          text_primary: '#F4F4F5',
          text_secondary: '#A1A1AA',
          stroke: '#52525B'
        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
