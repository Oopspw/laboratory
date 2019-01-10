<template>
  <div v-title="$route.meta.title">
    <h3>父组件传值给子组件</h3>
    <div>{{myNumber}}</div>
  </div>
</template>

<script>
export default {
  name: 'son',
  // props
  props: {
    number: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      myNumber: 0 // 组件定义的值
    }
  },
  methods: {
    change () {
      // 将父组件传递过来的值进行处理后复制给组件内定义的值
      this.myNumber = this.number + 99
    }
  },
  watch: {
    number () {
      this.change()
    }
  },
  mounted () {
    this.change()
  }
}
</script>

<style scoped>

</style>
