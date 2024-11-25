import { defineStore } from 'pinia'
import { KeepAliveState } from '@/store/interface'
import { usePiniaPersist } from '@/hooks/usePiniaPersist'

export const useKeepAliveStore = defineStore({
  id: 'KeepAliveStore',
  state: (): KeepAliveState => ({
    keepAliveName: []
  }),
  actions: {
    // Add KeepAliveName
    async addKeepAliveName(name: string) {
      !this.keepAliveName.includes(name) && this.keepAliveName.push(name)
    },
    // Remove KeepAliveName
    async removeKeepAliveName(name: string) {
      this.keepAliveName = this.keepAliveName.filter((item) => item !== name)
    },
    // Set KeepAliveName
    async setKeepAliveName(keepAliveName: string[] = []) {
      this.keepAliveName = keepAliveName
    }
  },
  persist: usePiniaPersist('KeepAliveStore')
})
