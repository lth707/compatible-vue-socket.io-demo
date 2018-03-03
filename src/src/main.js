// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Store from './store'
import CVueSocketio from 'compatible-vue-socket.io'
import Socket from 'socket.io-client'

Vue.config.productionTip = false
const $socket = Socket('http://localhost:3000', {
  transports: ['polling', 'websocket']
})
const store = Store($socket)
Vue.use(CVueSocketio, $socket, store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
