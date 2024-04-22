import { ref, computed } from 'vue'

const useModal = () => {
  const isOpen = ref(false)
  return {
    isModalVisible: computed(() => isOpen.value),
    onToggle: () => {
      isOpen.value = !isOpen.value
    }
  }
}
export default useModal
