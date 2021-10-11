import router from './router'
import { useTitle } from './hooks/useTitle'

router.beforeEach(async (to, from) => {

  // set page title
  document.title = useTitle(to.meta.title)
})

router.afterEach((to, from) => {

})