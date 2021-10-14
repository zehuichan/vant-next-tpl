import { addClass, removeClass } from '@/utils/dom'
import cache from '@/utils/cache'

const state = {
  theme: cache.getItem('theme') || 'light'
}

const mutations = {
  SET_THEME_MODE: (state, theme) => {
    const isDark = theme === 'dark'
    isDark ? addClass(document.documentElement, 'dark') : removeClass(document.documentElement, 'dark')
    cache.setItem('theme', theme)
    state.theme = theme
  }
}

const actions = {
  setThemeMode({ commit, state }, theme) {
    commit('SET_THEME_MODE', theme)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}