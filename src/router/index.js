import Vue from 'vue'
import Router from 'vue-router'
import Entry from '@/components/Entry'
import News from '@/components/News'
import Find from '@/components/Find'
import Me from '@/components/Me'
import ok from '@/components/ok'
import beforeEnter from './beforeEnter'

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
    beforeEnter: beforeEnter
  }, {
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
