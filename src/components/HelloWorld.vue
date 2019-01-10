<template>
<!-- 请进入链接通读： http://vuejs-templates.github.io/webpack/ -->
<!-- 关于vu-loader https://vue-loader.vuejs.org/#what-is-vue-loader -->
  <div v-title="$route.meta.title">
    <div class="hello">
      <h1 @click="btnClick()">{{ msg }}</h1>
      <h2>Essential Links</h2>
      <ul>
        <li>
          <a href="https://vuejs.org" target="_blank">Core Docs</a>
        </li>
        <li>
          <a href="https://forum.vuejs.org" target="_blank">Forum</a>
        </li>
        <li>
          <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
        </li>
        <li>
          <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
        </li>
        <br>
        <li>
          <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
        </li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
        </li>
        <li>
          <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
        </li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 这个是用来关闭eslint警告的 /* eslint-disable */
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // 在运行项目之后你可以看看他们的输出顺序
  beforeCreate () {
    console.log('我beforeCreate来也')
  },
  created () {
    console.log('created到了')
  },
  beforeMount () {
    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
    console.log('beforeMount驾到')
  },
  mounted () {
    console.log('我mounted也来了')
  },
  // 以下钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行
  beforeUpdate () {
    console.log('我是beforeUpdate')
  },
  // 方法写入
  methods: {
    btnClick () { }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only
    添加“作用域”属性以仅将CSS限制在此组件中
 -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
