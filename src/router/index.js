import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'hash',
  routes: [
    // 功能组件 异步组件
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld.vue'], resolve),
      meta: {
        title: 'HelloWorld'
      }
    },
    {
      path: '/HelloDemo',
      name: 'HelloDemo',
      component: resolve => require(['@/components/HelloDemo.vue'], resolve),
      meta: {
        title: 'HelloDemo'
      }
    },
    {
      path: '/parent',
      name: 'parent',
      component: resolve => require(['@/components/communication/parent.vue'], resolve),
      meta: {
        title: 'parent'
      }
    },
    {
      path: '/childA',
      name: 'childA',
      component: resolve => require(['@/components/communication/childA.vue'], resolve),
      meta: {
        title: 'childA'
      }
    },
    {
      path: '/childB',
      name: 'childB',
      component: resolve => require(['@/components/communication/childB.vue'], resolve),
      meta: {
        title: 'childB'
      }
    }
  ]
})
