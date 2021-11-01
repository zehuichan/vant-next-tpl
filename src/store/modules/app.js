import { defineStore } from 'pinia'
import { addClass, removeClass } from '@/utils/dom'
import cache from '@/utils/cache'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    theme: cache.getItem('theme') || 'light'
  }),
  getters: {},
  actions: {
    setThemeMode(theme) {
      const isDark = theme === 'dark'
      isDark ? addClass(document.documentElement, 'dark') : removeClass(document.documentElement, 'dark')
      cache.setItem('theme', theme)
      this.theme = theme
    }
  },
})