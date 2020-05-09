<template>
  <div id="app">
    <h1>黑马头条</h1>

    <!-- 路由的出口 -->
    <router-view/>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>

    <i class="iconfont iconyoujiantou"></i>
    <i class="iconfont iconshipin"></i>
    <i class="iconfont iconwuwangluo"></i>
    <div>
      <van-icon name="chat-o" />
      <van-icon name="cart-o" dot />
      <van-icon name="cart-o" badge="123" />
    </div>
    <div>
      <van-button icon="star-o" type="primary" />
      <van-button icon="chat" type="primary" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less"></style>
