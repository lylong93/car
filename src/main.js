// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueTouch from 'vue-touch'

/* eslint-disable no-unused-vars */
// import { style } from 'cube-ui' // 全局使用cube-ui

Vue.use(Vuex)
Vue.use(VueTouch, { name: 'v-touch' })

Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
