import { ref, onMounted, onUnmounted } from 'vue'

const useScrollToTop = () => {
  const showScrollButton = ref(false)

  const handleScroll = () => {
    showScrollButton.value = window.scrollY > 500
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    showScrollButton,
    scrollToTop
  }
}
export default useScrollToTop
