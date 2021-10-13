<template>
  <div class="mode-picker">
    <v-svg-icon v-if="theme !== 'dark'" name="icon-Daytimemode" @click="toggle"/>
    <v-svg-icon v-else name="icon-nightmode" @click="toggle"/>
  </div>
</template>

<script setup>
// vuex
import { useStore } from 'vuex'
// components
import VSvgIcon from '@/components/VSvgIcon'

const store = useStore()
const theme = store.getters.theme
const toggle = () => {
  store.dispatch('app/setThemeMode', 'dark')
}
</script>

<style lang="less">
.mode-picker {
  .iconfont {
    font-size: 24px;
  }
}
</style>