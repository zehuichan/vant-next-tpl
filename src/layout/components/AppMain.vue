<template>
  <div class="app-main">
    <keep-alive>
      <router-view v-if="route.meta.keepAlive" :key="key"/>
    </keep-alive>
    <router-view v-if="!route.meta.keepAlive" :key="key"/>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'AppMain',
  setup() {
    const route = useRoute()
    const key = computed(() => route.path)

    return {
      route,
      key
    }
  },
})
</script>

<style lang="less">
.app-main {
  position: relative;
  -webkit-overflow-scrolling: touch;
  flex: 1;
  overflow-y: auto;   // 关键， 超出部分滚动
}
</style>
