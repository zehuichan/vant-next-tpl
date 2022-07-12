<!--https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95-->
<template>
  <van-config-provider :theme="appStore.mode">
    <router-view />
  </van-config-provider>
</template>

<script setup>
import { useAppStore } from '@/store'

const appStore = useAppStore()
</script>

<style>
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
