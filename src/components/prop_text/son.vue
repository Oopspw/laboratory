<template>
  <div v-title="$route.meta.title">
    <div>{{myNumber}}</div>
  </div>
</template>

<script>
export default {
  name: 'son',
  // props 接收父组件传递过来的值
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
      this.myNumber = this.number + 1
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
