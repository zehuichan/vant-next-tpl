<template>
  <div class="app-main">
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </router-view>
    <div class="divider-wrapper">
      <divider>Zehui Design.</divider>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less">
.app-main {
  position: relative;
  -webkit-overflow-scrolling: touch;
  flex: 1;
  overflow-y: auto; // 关键， 超出部分滚动
}
</style>
