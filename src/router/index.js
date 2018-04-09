import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = r =>
  require.ensure([], () => r(require('@/page/HelloWorld')), 'HelloWorld')
const home = r =>
  require.ensure([], () => r(require('@/page/home/home')), 'home')
const details = r =>
  require.ensure([], () => r(require('@/page/details/details')), 'details')

const newPage = r =>
  require.ensure([], () => r(require('@/page/newPage/newPage')), 'newPage')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/details/:id',
      name: 'details',
      component: details
    },
    {
      path: '/newPage',
      name: 'newPage',
      component: newPage
    }
  ]
})
