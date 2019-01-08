// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引用vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// 后续引入
// 引入vue-resource 的作用是提供使用XMLHttpRequest或JSONP 发出Web请求和处理响应的服务。
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 注册指令 标题
Vue.directive('title', {
  inserted (el, binding) {
    document.title = binding.value
    const iframe = document.createElement('iframe')
    iframe.style.cssText = 'display: none; width: 0; height: 0;'
    const listener = () => {
      setTimeout(() => {
        iframe.removeEventListener('load', listener)
        setTimeout(() => {
          document.body.removeChild(iframe)
        }, 0)
      }, 0)
    }
    iframe.addEventListener('load', listener)
    document.body.appendChild(iframe)
  }
})
