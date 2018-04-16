import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
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
  strict: process.env.NODE_ENV !== 'production',

  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '/',
          name: 'home',
          component: home,
          meta: {
            keepAlive: true
          }
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
    }
  ],
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     if (from.meta.keepAlive) {
  //       from.meta.savedPosition = document.body.scrollTop
  //     }
  //     return { x: 0, y: to.meta.savedPosition || 0 }
  //   }
  // }
})
