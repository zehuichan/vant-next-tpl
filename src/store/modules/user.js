import { defineStore } from 'pinia'

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
    getUserInfo() {
      const userinfo = {
        avatar: 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLYMVgaumib5h42GP4pAlLTQCpzFAmUZTVUg4MmH9eFyb4shrm6Ux2Ocic1ic0ekTWEYVfxibGcMMC3UQ/132',
        cellphone: '15800066380',
        username: 'chan_',
        realname: '陈泽辉',
        github: 'https://github.com/zehuichan'
      }
      this.userinfo = userinfo
    },
  }
})