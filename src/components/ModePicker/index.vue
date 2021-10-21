<template>
  <div class="mode-picker">
    <v-svg-icon v-if="theme === 'dark'" name="icon-Daytimemode" @click="toggle('light')"/>
    <v-svg-icon v-else name="icon-nightmode" @click="toggle('dark')"/>
  </div>
</template>

<script>
export default {
  name: 'ModePicker'
}
</script>

<script setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/modules/app'
// components
import VSvgIcon from '@/components/VSvgIcon'

const appStore = useAppStore()
const theme = computed(() => appStore.theme)
const toggle = (theme) => {
  appStore.setThemeMode(theme)
}
</script>

<style lang="less">
.mode-picker {
  .iconfont {
    font-size: 20px;
    color: var(--vant-FG-0);
  }
}
</style>