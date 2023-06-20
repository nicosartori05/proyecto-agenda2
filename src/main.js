import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
// Importa el archivo CSS
import './assets/styles.css'; // Asegúrate de ajustar la ruta si es necesario

// ...


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
