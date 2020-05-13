<template>
  <div class="article-list">
    <van-pull-refresh
      v-model="isRefreshLoading"
      :success-text="refreshSuccessText"
      :success-duration="1500"
      @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="(article, index) in articles"
          :key="index"
          :title="article.title"
        />
      </van-list>
    </van-pull-refresh>
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
      articles: [], // 数据列表
      loading: false, // 控制加载中的 loading 状态
      finished: false, // 控制加载结束的状态，当加载结束时，不再触发加载更多
      timestamp: null, // 获取下一页数据的时间戳
      isRefreshLoading: false, // 下拉刷新的 loading 状态
      refreshSuccessText: '' // 下拉刷新成功的提示文本
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLoad () {
      // console.log('onload')
      // 1.请求获取数据
      const { data } = await getArticles({
        channel_id: this.channel.id,
        timestamp: this.timestamp || Date.now(), // 时间戳
        with_top: 1 //  是否包含置顶，进入页面第一次请求时要包含置顶文章，1-包含置顶，0-不包含
      })

      // console.log(data)
      // 2.把数据缩放到 list 数组中
      const { results } = data.data
      this.articles.push(...results)

      // 3.设置本次加载状态结束，它才可以判断是否需要加载下一次，否则就会永远的停在这里
      this.loading = false

      // 4.数据全部加载完成
      if (results.length) {
        // 更新获取下一页数据的页码
        this.timestamp = data.data.pre_timestamp
      } else {
        // 没有数据了，把加载状态设置结束，不再触发加载更多
        this.finished = true
      }
    },
    async onRefresh () {
      // 下拉刷新，组件自己就会展示 loading 状态
      // 1.请求获取数据
      const { data } = await getArticles({
        channel_id: this.channel.id, // 频道ID
        timestamp: Date.now(),
        with_top: 1
      })

      // 2.把数据放到数据列表中（往顶部追加）
      const { results } = data.data
      this.articles.unshift(...results)

      // 3.关闭刷新的状态 loading
      this.isRefreshLoading = false

      this.refreshSuccessText = `更新了${results.length}条数据`
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
