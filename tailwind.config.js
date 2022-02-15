module.exports = {
  content: [
    './index.html',
    './public/images',
  ],
  theme: {
    extend: {
      colors: {
        // Primary color of the project
        'd-blue': "hsl(243, 87%, 12%)",
        'de-blue': 'hsl(238, 22%, 44%)',
        
        // Accent color of the project
        'br-blue': 'hsl(224, 93%, 58%)',
        'mod-cyan': 'hsl(170, 45%, 43%)',

        // Neutrals colors of the project
        'li-gray-blue': 'hsl(240, 75%, 98%)',
        'li-gray': 'hsl(0, 0%, 75%)'
      },
      fontFamily: {
        'primary': ['Raleway', 'sans-serif'],
        'secondary': ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
