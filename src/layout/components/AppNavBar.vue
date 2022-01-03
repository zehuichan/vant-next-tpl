<template>
  <van-nav-bar
    class="v-nav-bar"
    v-bind="attrs"
    @click-left="onClickLeft"
  />
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// settings
import defaultSettings from '@/settings'

export default defineComponent({
  name: 'AppNavBar',
  inheritAttrs: false,
  setup() {
    const router = useRouter()
    const route = useRoute()

    const attrs = computed(() => Object.assign(
      {},
      { ...defaultSettings.navbar },
      route.meta.navbar?.showTitle && { title: route.meta.title },
      !route.meta.navbar?.showTitle && { leftText: route.meta.title },
      { ...route.meta.navbar }
    ))

    const onClickLeft = () => {
      router.back()
    }

    return {
      attrs,
      onClickLeft
    }
  },
})
</script>

<style lang="less">
.v-nav-bar {

}
</style>