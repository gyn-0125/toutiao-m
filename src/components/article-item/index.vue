<template>
  <div class="article-item">文章列表项</div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {},
  components: {},
  data () {
    return {
      article: {
        type: Object,
        required: true
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
