/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'media', // ou remova se não precisar
  theme: {
    extend: {
      colors: {
        meuTema: {
          primary: '#ffcbdb',  // rosa personalizado
          secondary: '#a4fff7', // verde-agua personalizado
        }
      },
    },
  },
  plugins: [],
}

