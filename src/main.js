// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import 'jquery'
// import 'bootstrap/dist/js/bootstrap.min'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/js/bootstrap.min'

// require('./mock') //不用mock了
Vue.use(VueResource)
Vue.http.options.emulateHTTP = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  http: {
    root: '/api',     // 指定资源根目录
    headers: {},      // 添加自定义的http头变量,
    crossOrigin: true
  },
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
