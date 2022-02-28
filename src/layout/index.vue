<template>
  <div class="basic-layout app-wrapper">
    <!--nav-bar-->
    <app-nav-bar v-if="route.meta.navbar"/>
    <!--app-main-->
    <app-main/>
    <!--tabbar-->
    <app-tabbar v-if="route.meta.tabbar"/>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
// components
import { AppMain, AppNavBar, AppTabbar } from './components'

const route = useRoute()
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