<template>
  <div class="my-container">
    <div class="user-info">
      <van-cell-group>
        <van-cell
          title="单元格"
          value="内容"
          center
        >
          <van-image
            slot="icon"
            width="50"
            height="50"
            round
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <div slot="title">昵称</div>
          <van-button
            size="small"
            round
          >编辑资料</van-button>
        </van-cell>
        <van-grid>
          <van-grid-item>
            <div slot="text">
              <div class="span">123</div>
              <div class="text">头条</div>
            </div>
          </van-grid-item>
          <van-grid-item>
            <div slot="text">
              <div class="span">123</div>
              <div class="text">关注</div>
            </div>
          </van-grid-item>
          <van-grid-item>
            <div slot="text">
              <div class="span">123</div>
              <div class="text">粉丝</div>
            </div>
          </van-grid-item>
          <van-grid-item>
            <div slot="text">
              <div class="span">123</div>
              <div class="text">获赞</div>
            </div>
          </van-grid-item>
        </van-grid>
        <van-grid :column-num="2">
          <van-grid-item
            icon-prefix="iconfont icon"
            icon="shoucang"
            text="收藏"
          />
          <van-grid-item
            icon-prefix="iconfont icon"
            icon="lishi"
            text="历史"
          />
        </van-grid>

        <van-cell title="消息通知" is-link to="/" />
        <van-cell title="小智同学" is-link to="/" />
        <van-cell title="退出登录" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyIndex',
  props: {},
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang='less' scoped></style>
