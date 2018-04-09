// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import { InfiniteScroll } from 'mint-ui'
import "@/style/transition.css";


Vue.config.productionTip = false
Vue.use(InfiniteScroll);


try {
  doSomething(a[0])
} catch(e) {
  console.log(Object.prototype.toString.call(e))
  Raven.captureException(e)
}

// Raven.context(function () {
//   doSomething(a[0]);
// });

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
