import { defineStore, acceptHMRUpdate } from 'pinia'

export type NavigationMenuState = {
  expandHamburgerMenu: boolean
}
const getters = {
  isMenuOpen: ({ expandHamburgerMenu }: NavigationMenuState) => Boolean(expandHamburgerMenu)
}

const state = (): NavigationMenuState => ({
  expandHamburgerMenu: false
})
const store = defineStore('modal', {
  getters,
  state,
  actions: {
    async toggleMenu() {
      this.isMenuOpen ? this.closeHamburgerMenu() : this.openHamburgerMenu()
      return this
    },
    async openHamburgerMenu() {
      this.expandHamburgerMenu = true
      return this
    },
    async closeHamburgerMenu() {
      this.expandHamburgerMenu = false
      return this
    }
  }
})
export const postNavigationCloseMenu = () => {
  const modal = store()
  if (modal.isMenuOpen) return modal.closeHamburgerMenu()
  return void !1
}

export default store
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(store, import.meta.hot))
}
