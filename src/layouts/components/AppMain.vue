<template>
  <div class="app-main" ref="$main">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="key"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="key"/>
  </div>
</template>

<script>
  // vue
  import {ref} from 'vue'
  // hooks
  import {useHeight} from '@/hooks/use-height'

  export default {
    name: 'AppMain',
    computed: {
      key() {
        return this.$route.path
      },
    },
    setup() {
      const root = ref()

      console.log(root)
      console.log(useHeight(root))
      return {}
    },
    mounted() {
    },
  }
</script>

<style lang="less">
  .app-main {
    position: relative;
    -webkit-overflow-scrolling: touch;
  }
</style>
