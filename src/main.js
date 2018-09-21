import Vue from 'vue'
import App from './App'
import router from './router'

// 没有登录的话，不进行渲染

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
