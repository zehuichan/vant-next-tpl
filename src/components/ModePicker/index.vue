<template>
  <div class="mode-picker">
    <v-svg-icon v-if="appStore.isDark" name="icon-Daytimemode" @click="appStore.changeMode('light')"/>
    <v-svg-icon v-else name="icon-nightmode" @click="appStore.changeMode('dark')"/>
  </div>
</template>

<script setup>
import { useAppStore } from '@/store'
const appStore = useAppStore()
</script>

<style lang="less">
.mode-picker {
  display: inline-block;
  line-height: 1;
  vertical-align: middle;

  .iconfont {
    font-size: 20px;
    color: var(--vant-FG-0);
  }
}
</style>