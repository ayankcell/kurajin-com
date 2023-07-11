import { ref } from 'vue'

const isOpen = ref(true)


export function useMenubar() {
  return {
    isOpen,
  }
}