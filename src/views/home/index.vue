<template>
  <div class="home-contianer">
    <!-- 导航栏 -->
    <van-nav-bar class="app-nav-bar">
      <van-button
        slot="title"
        class="search-btn"
        icon="search"
        type="info"
        round
        size="small"
        to="/search"
      >搜索</van-button>
    </van-nav-bar>

    <!-- 文章频道列表 -->
    <van-tabs v-model="active" class="channel-tabs">
      <van-tab
        :title="channel.name"
        v-for="channel in channels"
        :key="channel.id"
      >
        <!-- 文章列表 -->
        <article-list :channel="channel" />
      </van-tab>
      <div slot="nav-right" class="wap-nav-placeholder"></div>
      <div
        slot="nav-right"
        @click="isChannelEditShow = true"
        class="wap-nav-wrap"
      >
        <van-icon name="wap-nav"/>
      </div>
    </van-tabs>

    <!-- 频道弹出层 -->
    <van-popup
      v-model="isChannelEditShow"
      position="bottom"
      class="channel-edit-popup"
      closeable
      close-icon-position="top-left"
      get-container="body"
      style="height: 100%;"
    >
      <channel-edit
        :user-channels="channels"
        :active='active'
        @close="isChannelEditShow = false"
        @update-activ="active = $event"
      />
    </van-popup>
  </div>
</template>

<script>
import { getUserChannels } from '@/api/user'
import ArticleList from './components/article-list'
import ChannelEdit from './components/channel-edit'
import { mapState } from 'vuex'
import { getItem } from '@/utils/storage'

export default {
  name: 'HomeIndex',
  props: {},
  components: {
    ArticleList,
    ChannelEdit
  },
  data () {
    return {
      active: 0, // 控制被激活的标签
      channels: [],
      isChannelEditShow: false // 控制编辑频道的显示状态
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  created () {
    this.loadChannels()
  },
  mounted () {},
  methods: {
    async loadChannels () {
      let channels = []
      if (this.user) {
        // 已登录，请求获取线上的用户频道列表数据
        const { data } = await getUserChannels()
        channels = data.data.channels
      } else {
        // 没有登录，判断是否本地存储的频道列表数据
        const loadChannels = getItem('user-channels')

        // 如果有本地存储的频道列表则使用
        if (loadChannels) {
          channels = loadChannels
        } else {
          // 用户没有登录，也没有本地存储的频道，那就请求获取默认推荐的频道列表
          const { data } = await getUserChannels()
          channels = data.data.channels
        }
      }

      // 把处理好的数据放到data以供模板使用
      this.channels = channels
      // 请求获取频道数据
      // const { data } = await getUserChannels()
      // this.channels = data.data.channels
    }
  }
}
</script>

<style lang='less' scoped>
.home-contianer {
  /deep/ .van-nav-bar__title {
    max-width: none;
  }
  .search-btn {
    width: 277px;
    height: 32px;
    background-color: #5babfb;
    .van-icon {
      font-size: 16px;
    }
    .van-button__text {
      font-size: 14px;
    }
  }
  .channel-tabs {
    /deep/ .van-tab {
      border-right: 1px solid #edeff3;
      border-bottom: 1px solid #edeff3;
    }
    /deep/ .van-tabs__line {
      bottom: 20px;
      width: 15px !important;
      height: 3px;
      background: #3296fa;
    }
  }
  .wap-nav-placeholder {
    width: 33px;
    flex-shrink: 0;
  }
  .wap-nav-wrap {
    position: fixed;
    right: 0;
    width: 33px;
    height: 43px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: .9;
    .van-icon {
      font-size: 24px;
    }
    &:before {
      content: '';
      width: 1px;
      height: 38px;
      position: absolute;
      background-color: #c8c8c8;
      left: 0;
      top: 3px;
      bottom: 0;
    }
  }
}
</style>
