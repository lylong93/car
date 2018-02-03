import Vue from 'vue'
import Router from 'vue-router'
import Entry from '@/components/Entry'
import News from '@/components/News'
import Find from '@/components/Find'
import Me from '@/components/Me'
import ok from '@/components/ok'
import Add from '@/components/Add'
import Collect from '@/components/Collect'
// import beforeEnter from './beforeEnter'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Entry',
    component: Entry
  }, {
    path: '/ok',
    name: 'Ok',
    component: ok,
    redirect: 'News',
    children: [{
      path: '/news',
      name: 'News',
      component: News
    }, {
      path: '/find',
      name: 'Find',
      component: Find
    }, {
      path: '/me',
      name: 'Me',
      component: Me
    }, {
      path: '/add',
      name: 'Add',
      component: Add
    }, {
      path: '/collect',
      name: 'Collect',
      component: Collect
    }]
  }]
})
