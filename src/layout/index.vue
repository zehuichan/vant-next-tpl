<template>
  <div class="basic-layout app-wrapper">
    <app-nav-bar v-if="$route.meta.navbar"/>
    <!--app-main-->
    <app-main/>
    <!--tabbar-->
    <app-tabbar v-if="$route.meta.tabbar"/>
  </div>
</template>

<script setup>
// components
import { AppMain, AppNavBar, AppTabbar } from './components'
</script>

<style lang="less">
.app-wrapper {
  position: relative;
  height: 100%;
}
</style>
