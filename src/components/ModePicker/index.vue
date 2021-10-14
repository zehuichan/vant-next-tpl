<template>
  <div class="mode-picker">
    <v-svg-icon v-if="theme === 'dark'" name="icon-Daytimemode" @click="toggle('light')"/>
    <v-svg-icon v-else name="icon-nightmode" @click="toggle('dark')"/>
  </div>
</template>

<script setup>
import { computed } from 'vue'
// vuex
import { useStore } from 'vuex'
// components
import VSvgIcon from '@/components/VSvgIcon'

const store = useStore()
const theme = computed(() => store.getters.theme)
const toggle = (theme) => {
  store.dispatch('app/setThemeMode', theme)
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