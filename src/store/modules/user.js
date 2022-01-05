import { defineStore } from 'pinia'
import { userInfo } from '@/api/user'

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      token: undefined,
      userinfo: null
    }
  },
  getters: {},
  actions: {
    async getUserInfo() {
      try {
        const res = await userInfo()
        this.userinfo = res.data
        return Promise.resolve()
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
})