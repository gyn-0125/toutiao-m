<template>
  <div class="search-suggestion">
    <van-cell
      icon="search"
      title="hello"
    ></van-cell>
    <van-cell
      icon="search"
      title="hello 123"
    ></van-cell>
  </div>
</template>

<script>
export default {
  name: 'SearchSuggestion',
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {
    // 监视的完整写法
    searchText: {
      // 当数据发生变化则会执行 handler 处理函数
      handler () {
        // 找到数据接口
        // 请求获取数据
        // 模板绑定展示
      },
      immediate: true // 该回调将会在侦听开始之后被立即调用
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang='less' scoped></style>
