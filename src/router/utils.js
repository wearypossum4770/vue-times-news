import useModal from '@/stores/modal.js'

// sendToAnalytics
export const closeHamburgerMenu = ({ failure }) => {
  const modal = useModal()
  if (!failure) modal.closeHamburgerMenu()
}

export const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) return savedPosition
  else return { top: 0, behavior: 'smooth' }
}
