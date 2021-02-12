import {useRect} from '@vant/use'
import {ref, onMounted, nextTick} from 'vue'

export const useHeight = (element) => {
  const height = ref(0)

  onMounted(() => {
    nextTick(() => {
      height.value = useRect(element).height
    })
  })

  return height
}
