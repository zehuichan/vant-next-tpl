import { defineStore } from 'pinia'
import { store } from '..'

export const useErrorLogStore = defineStore({
  id: 'errorLog',
  state: () => ({
    logs: []
  }),
  actions: {
    addErrorLog(log) {
      this.logs.push(log)
    },
    clearErrorLog() {
      this.logs.splice(0)
    }
  }
})

// Need to be used outside the setup
export function useErrorLogStoreWithOut() {
  return useErrorLogStore(store)
}
