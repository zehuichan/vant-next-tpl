<template>
  <div class="app-main">
    <router-view v-slot="{Component, route}">
      <keep-alive>
        <component
          :is="Component"
          :key="key"
        />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const key = computed(() => route.path)
</script>

<style lang="less">
.app-main {
  position: relative;
  -webkit-overflow-scrolling: touch;
  overflow-y: auto; // 关键， 超出部分滚动
}
</style>
