<template>
  <div class="basic-layout app-wrapper">
    <!--nav-bar-->
    <app-nav-bar v-if="route.meta.navbar" v-bind="navbar" />
    <!--app-main-->
    <app-main />
    <!--tabbar-->
    <app-tabbar v-if="route.meta.tabbar" v-bind="tabbar" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// components
import { AppMain, AppNavBar, AppTabbar } from './components'
// settings
import defaultSettings from '@/settings'

const router = useRouter()
const route = useRoute()

const navbar = computed(() =>
  Object.assign(
    {},
    { ...defaultSettings.navbar },
    route.meta.navbar?.showTitle && { title: route.meta.title },
    !route.meta.navbar?.showTitle && { leftText: route.meta.title },
    { ...route.meta.navbar }
  )
)
const tabbar = computed(() =>
  Object.assign({}, { ...defaultSettings.tabbar }, { ...route.meta.tabbar })
)
</script>

<style lang="less">
.basic-layout {
  height: 100%;
}

.app-wrapper {
  position: relative;
}
</style>
