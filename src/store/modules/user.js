import { defineStore } from 'pinia'
import { store } from '..'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: undefined,
    userinfo: null
  }),
  getters: {},
  actions: {
    async getUserInfo() {
      try {
        this.userinfo = {
          avatar:
            'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLYMVgaumib5h42GP4pAlLTQCpzFAmUZTVUg4MmH9eFyb4shrm6Ux2Ocic1ic0ekTWEYVfxibGcMMC3UQ/132',
          cellphone: '15800066380',
          username: 'chan_',
          realname: '陈泽辉',
          github: 'https://github.com/zehuichan'
        }
        return Promise.resolve()
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
})

export function useUserStoreWithOut() {
  return useUserStore(store)
}
