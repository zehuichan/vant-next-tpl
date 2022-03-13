import { defineStore } from 'pinia'
import { useDark, useStorage } from '@vueuse/core'

export const useAppStore = defineStore({
  id: 'app',
  state: () => {
    return {
      mode: useStorage('vantTheme'),
      isDark: useDark({
        selector: 'body',
        valueDark: 'van-theme-dark',
        valueLight: 'van-theme-ligtht',
        storageKey: 'vantTheme'
      })
    }
  },
  actions: {
    changeMode(mode) {
      this.isDark = mode === 'dark'
      this.mode = mode
    }
  },
})
