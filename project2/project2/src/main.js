import Vue from 'vue'
import App from './App'
import router from './router'
import GAuth from 'vue-google-oauth2'

Vue.config.productionTip = false
const gauthOption = {
  clientId: '648961129122-75ad3tmu4j89bffa66itlnj2i4d6d7kh.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'consent',
  fetch_basic_profile: true
}
Vue.use(GAuth, gauthOption)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
