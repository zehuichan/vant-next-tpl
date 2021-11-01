import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    avatar: '',
    cellphone: '',
    username: '',
    github: '',
  }),
  getters: {},
  actions: {}
})