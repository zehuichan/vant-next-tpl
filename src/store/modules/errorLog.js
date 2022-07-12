import { defineStore } from 'pinia'
import { store } from '../'

export const useErrorLogStore = defineStore({
  id: 'errorLog',
  state: () => {
    return {
      logs: []
    }
  },
  actions: {
    addErrorLog(log) {
      this.logs.push(log)
    },
    clearErrorLog() {
      this.logs.splice(0)
    }
  }
})

export function useErrorLogStoreWithOut() {
  return useErrorLogStore(store)
}
