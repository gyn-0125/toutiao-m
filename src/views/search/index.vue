<template>
  <div class="search-container">
    <!-- 搜索栏 -->
    <form action="/">
      <van-search
        v-model="searchText"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="$router.back()"
      />
    </form>

    <!-- 联想建议 -->
    <search-suggestion />

    <!-- 历史记录 -->

    <!-- 搜索结果 -->
  </div>
</template>

<script>
import SearchSuggestion from './components/search-suggestion'

export default {
  name: 'SearchIndex',
  props: {},
  components: {
    SearchSuggestion
  },
  data () {
    return {
      searchText: '' // 搜索输入框的内容
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onSearch () {
      console.log('onSearch')
    }
  }
}
</script>

<style lang='less' scoped></style>
