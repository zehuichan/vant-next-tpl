import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    mode: useStorage('vantTheme', 'light')
  }),
  getters: {
    isDark() {
      return this.mode === 'dark'
    }
  },
  actions: {
    changeMode(mode) {
      this.mode = mode
    }
  }
})
