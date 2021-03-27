import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase/app'
import 'firebase/analytics'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

Vue.use(VueMeta)
var config = {
  apiKey: 'AIzaSyCTOyYY-0sewMZHr4EMiDntui2_thczkUg',
  projectId: 'my-website-8f6a4',
  appId: '1:588740314554:web:5d2e08493ed85bbd370983',
  measurementId: 'G-P08KP2P2K2'
}

firebase.initializeApp(config)
Vue.prototype.$analytics = firebase.analytics();

new Vue({
  render: h => h(App),
}).$mount('#app')
