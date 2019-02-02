import Vue from 'vue'
import './plugins/vuetify'
import router from './router'
import store from './store'
import BuyModalComponent from '@/components/Shared/BuyModal'
import App from './App.vue'
import * as fb from 'firebase'
import './stylus/main.styl'

Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyAXpE0kN-xR6K0X8N07YIBuDl1crKEOIUw',
      authDomain: 'itc-adpro.firebaseapp.com',
      databaseURL: 'https://itc-adpro.firebaseio.com',
      projectId: 'itc-adpro',
      storageBucket: 'itc-adpro.appspot.com',
      messagingSenderId: '863533153118'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
}).$mount('#app')
