import {useRect} from '@vant/use'
import {ref, onMounted, nextTick} from 'vue'

export const useHeight = (element) => {
  const height = ref()

  onMounted(() => {
    nextTick(() => {
      height.value = useRect(element).height
    })
  })

  return height
}
