<template>
  <div class="login-container">
    <van-nav-bar
      title="登录"
      left-arrow
      @click-left="$router.back()"
    />

    <!-- 登录表单 -->
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        left-icon="smile-o"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user.code"
        clearable
        left-icon="music-o"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-button size="mini" round>发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <van-button type="info" block>登录</van-button>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  props: {},
  components: {},
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang='less' scoped></style>
