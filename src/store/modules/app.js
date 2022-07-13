import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { store } from '..'

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

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store)
}
