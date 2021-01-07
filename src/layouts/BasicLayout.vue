<template>
  <div class="basic-layout app-wrapper">
    <!--app-main-->
    <app-main/>
    <!--tabbar-->
    <van-tabbar route fixed placeholder>
      <van-tabbar-item replace to="/home">
        <template #icon>
          <i class="iconfont icon-shouye"></i>
        </template>
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/message">
        <template #icon>
          <i class="iconfont icon-xiaoxi"></i>
        </template>
        信息
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine">
        <template #icon>
          <i class="iconfont icon-wode"></i>
        </template>
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  // components
  import AppMain from './components/AppMain'

  export default {
    name: 'basic-layout',
    components: {
      AppMain
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
