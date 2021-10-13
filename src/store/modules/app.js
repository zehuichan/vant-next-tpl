import { useToggleClass } from '@/hooks/useToggleClass'

const state = {
  theme: 'dark'
}

const mutations = {
  SET_THEME_MODE: (state, theme) => {
    state.theme = theme
  }
}

const actions = {
  setThemeMode({ commit, state }, theme) {
    commit('SET_THEME_MODE', theme)
    useToggleClass(document.documentElement, theme)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}