<template>
  <div class="basic-layout app-wrapper">
    <!--app-main-->
    <app-main/>
    <!--tabbar-->
    <van-tabbar route fixed placeholder>
      <van-tabbar-item replace to="/components">
        <template #icon>
          <v-svg-icon name="icon-all"/>
        </template>
        components
      </van-tabbar-item>
      <van-tabbar-item replace to="/api">
        <template #icon>
          <i class="iconfont icon-xiaoxi"></i>
        </template>
        api
      </van-tabbar-item>
      <van-tabbar-item replace to="/about">
        <template #icon>
          <i class="iconfont icon-xiaoxi"></i>
        </template>
        about
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  // vue
  import {ref} from 'vue'
  // components
  import AppMain from './components/AppMain'

  export default {
    name: 'basic-layout',
    setup() {
      const {active} = ref()
      return {
        active
      }
    },
    components: {
      AppMain,
    }
  }
</script>

<style lang="less">
  .app-wrapper {
    position: relative;
    height: 100%;
  }

  .van-tabbar-item__icon {
    .iconfont {
      font-size: inherit;
    }
  }
</style>
