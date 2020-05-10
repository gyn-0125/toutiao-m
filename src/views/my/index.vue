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
