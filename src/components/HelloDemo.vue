<template>
<!-- eslint-disable -->
  <div v-title="$route.meta.title">
    <h3>{{msg}}</h3>
    <!-- 解释一下这里有什么区别 -->
    <!-- 这是之前发现的一个v-for对不同类型处理方式区别 -->
    <!-- 数组 index 从 0 开始 -->
    <h3>typeOf Array</h3>
    <div v-for="(item, index) in Arrays">{{index}}</div>
    <!-- 数值 num 从 1 开始 -->
    <h3>typeOf Number</h3>
    <div v-for="num in Nums">{{num}}</div>
    <!-- 在查看了源码得知 在设计时当遍历的参数类型为数值时会对该数值的起始值进行了+1的操作 -->
    <!-- 详参vue源码 全局搜索for 大约在3800多行左右 -->
  </div>
</template>

<script>
export default {
  name: 'HelloDemo',
  data () {
    return {
      msg: 'This is demo',
      Arrays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Nums: 10
    }
  },
  methods: {
    deletePerson (a) {
      console.log(a)
      this.people.splice(a, 1)
    }
  }
}
</script>

<style scoped>
  h3 {
    font-size: 16px;
    color: #42b983;
  }
</style>
