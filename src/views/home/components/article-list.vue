<template>
  <div class="article-list">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item"
        :title="item"
      ></van-cell>
    </van-list>
  </div>
</template>

<script>
import { getArticles } from '@/api/article'

export default {
  name: 'ArticleList',
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  components: {},
  data () {
    return {
      list: [], // 数据列表
      loading: false, // 控制加载中的 loading 状态
      finished: false // 控制加载结束的状态，当加载结束时，不再触发加载更多
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLoad () {
      console.log('onload')
      // 1.请求获取数据
      const { data } = await getArticles({
        channel_id: this.channel.id,
        timestamp: 1589337751688,
        with_top: 1 //  是否包含置顶，进入页面第一次请求时要包含置顶文章，1-包含置顶，0-不包含
      })

      console.log(data)
    }
  }
}
</script>

<style lang='less' scoped>
.article-list {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
  top: 90px;
  overflow-y: auto;
}
</style>
