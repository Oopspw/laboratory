<template>
  <div v-title="$route.meta.title">
    <h3>子组件传值给父组件</h3>
    <!-- 点击传值 -->
    <button @click="seedMsgToParent()">Get my childB message</button>
  </div>
</template>

<script>
export default {
  name: 'childB',
  // props
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // myNumber: 0 // 组件定义的值
    }
  },
  mounted () {
    // 主动传值
    // this.seedMsgToParent()
  },
  methods: {
    // 响应点击事件的函数seedMsgToParent中使用$emit来触发一个自定义事件，并传递一个参数
    seedMsgToParent () {
      this.$emit('listenToChildEvent', "Woo~,You found me,This is childB's message")
    }
  }
}
</script>

<style scoped>

</style>
