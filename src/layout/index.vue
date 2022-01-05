<template>
  <div class="basic-layout app-wrapper">
    <app-nav-bar v-if="route.meta.navbar"/>
    <!--app-main-->
    <app-main/>
    <!--tabbar-->
    <app-tabbar v-if="route.meta.tabbar"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
// components
import { AppMain, AppNavBar, AppTabbar } from './components'

const route = useRoute()

export default defineComponent({
  name: 'Layout',
  setup() {
    const route = useRoute()

    return {
      route
    }
  },
  components: {
    AppMain,
    AppNavBar,
    AppTabbar
  }
})
</script>

<style lang="less">
.basic-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.app-wrapper {
  position: relative;
}
</style>