<template>
  <van-nav-bar
    class="v-nav-bar"
    v-bind="attrs"
    @click-left="onClickLeft"
  />
</template>

<script>
// settings
import defaultSettings from '@/settings'

export default {
  name: 'AppNavBar',
  inheritAttrs: false,
  computed: {
    attrs() {
      return Object.assign(
        {},
        { ...defaultSettings.navbar },
        this.$route.meta.navbar.showTitle && { title: this.$route.meta.title },
        !this.$route.meta.navbar.showTitle && { leftText: this.$route.meta.title },
        { ...this.$route.meta.navbar }
      )
    },
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less">
.v-nav-bar {

}
</style>