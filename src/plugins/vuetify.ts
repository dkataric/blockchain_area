import { createVuetify } from 'vuetify'
import 'vuetify/styles'

export default createVuetify({
  theme: {
    defaultTheme: 'areaOneTheme',
    themes: {
      areaOneTheme: {
        dark: false,
        colors: {
          primary : '#4C69AC',
          secondary: '#89B9D8',
          accent: '#C2A8D8',
          info: '#AEAFB5',
        },
      },
    },
  },
})