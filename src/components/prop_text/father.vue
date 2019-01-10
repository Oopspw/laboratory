<template>
  <div v-title="$route.meta.title">
    <!-- 子组件 进行绑定后传递 -->
    <son :number=numbers></son>
  </div>
</template>

<script>
// 引入子组件
import son from './son.vue'
export default {
  name: 'father',
  // 注册组件
  components: {
    son: son
  },
  data () {
    return {
      numbers: 0
    }
  },
  mounted () {
    this.numbers = 1
  }
}
</script>

<style scoped>

</style>
