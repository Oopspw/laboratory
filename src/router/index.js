import Vue from 'vue'
import Router from 'vue-router'

// Vue.use(Router)
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/HelloDemo',
//       name: 'HelloDemo',
//       component: HelloDemo
//     }
//   ]
// })
Vue.use(Router)
export default new Router({
  mode: 'hash',
  routes: [
    // 功能组件
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
      path: '/father',
      name: 'father',
      component: resolve => require(['@/components/prop_text/father.vue'], resolve),
      meta: {
        title: 'father'
      }
    },
    {
      path: '/son',
      name: 'son',
      component: resolve => require(['@/components/prop_text/son.vue'], resolve),
      meta: {
        title: 'son'
      }
    }
  ]
})
