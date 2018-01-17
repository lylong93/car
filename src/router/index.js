import Vue from 'vue'
import Router from 'vue-router'
import Entry from '@/components/Entry'
import News from '@/components/News'
import Find from '@/components/Find'
import Me from '@/components/Me'
import ok from '@/components/ok'
import Add from '@/components/Add'
// import beforeEnter from './beforeEnter'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Entry',
    component: Entry
  }, {
    path: '/ok',
    name: 'ok',
    component: ok,
    children: [{
      path: '/news',
      component: News
    }, {
      path: '/find',
      component: Find
    }, {
      path: '/me',
      component: Me
    }, {
      path: '/add',
      name: 'Add',
      component: Add
    }]
  }]
})
