import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News'
import Find from '@/components/Find'
import Me from '@/components/Me'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/news',
    name: 'HelloWorld',
    component: News
  }, {
    path: '/find',
    name: 'HelloWorld',
    component: Find
  }, {
    path: '/me',
    name: 'HelloWorld',
    component: Me
  }]
})
