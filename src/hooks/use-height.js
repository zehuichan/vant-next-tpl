import {useRect} from '@vant/use'
import {ref, onMounted} from 'vue'

const useHeight = (element) => {
  const height = ref(0)

  onMounted(() => {
    height.value = useRect(element).height
  })

  return {height}
}
export default useHeight