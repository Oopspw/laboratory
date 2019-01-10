<template>
  <div v-title="$route.meta.title">
    <!-- 子组件 进行绑定后传递 -->
    <childA :number=numbers></childA>
    <childB v-on:listenToChildEvent=showThisMsg></childB>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
// 引入子组件
import childA from './childA.vue'
import childB from './childB.vue'
export default {
  name: 'parent',
  // 注册组件
  components: {
    childA,
    childB
  },
  data () {
    return {
      numbers: 0,
      msg: 'This is parent message'
    }
  },
  mounted () {
    this.numbers = 1
  },
  methods: {
    // 显示message
    showThisMsg (data) {
      // console.log(data)
      this.msg = data
    }
  }
}
</script>

<style scoped>

</style>
