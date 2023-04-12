/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '90': '90%',
        '50': '3.12em'
      },
      backgroundImage: {
        'fondo': "url('../src/img/destiny-2-beyond-light-uhdpaper.com-hd-5.2062.jpg')"
      },
      margin: {
        '6.25': '6.25'
      },
      maxWidth: {
        '1/2': '50%',
      }
    },
    fontFamily: {
      "body": ['Open Sans', 'sans-serif'],
      "name": ['Bebas Neue', 'cursive']
    },
    fontSize: {
      '40': '40px',
      '16': '16px',
      '50': '3.12em',
      '18': '1.12em',
    },
    minHeight: {
      '650': '40.62em'
    }
  },
  plugins: [],
}

