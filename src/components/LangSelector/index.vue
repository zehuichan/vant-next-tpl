<template>
  <div class="lang-selector">
    <van-button type="primary" size="mini" :disabled="language === 'zh'" @click="handleSetLanguage('zh')">
      中文
    </van-button>
    <divider type="vertical"></divider>
    <van-button type="info" size="mini" :disabled="language === 'en'" @click="handleSetLanguage('en')">
      English
    </van-button>
  </div>
</template>

<script>
export default {
  name: 'lang-selector',
  computed: {
    ...mapGetters([
      'language'
    ])
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('app/setLanguage', lang)
      this.$toast('Switch Language Success')
    }
  }
}
</script>

<style lang="less">

</style>
