import { defineStore, acceptHMRUpdate } from 'pinia'

const getters = {}
const actions = {
  async openHamburgerMenu() {
    this.expandHamburgerMenu = true
  },
  async closeHamburgerMenu() {
    this.expandHamburgerMenu = false
  }
}
const state = () => ({
  expandHamburgerMenu: false
})
const store = defineStore('modal', { getters, actions, state })
export default store
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(store, import.meta.hot))
}
