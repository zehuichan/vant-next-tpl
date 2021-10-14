import router from './router'
import store from './store'
import { useTitle } from './hooks/useTitle'

router.beforeEach(async (to, from) => {

  // set page title
  document.title = useTitle(to.meta.title)

  await store.dispatch('app/setThemeMode', store.getters.theme)
})

router.afterEach((to, from) => {

})