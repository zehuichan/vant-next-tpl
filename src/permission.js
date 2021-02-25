import router from './router'
import store from './store'
// progress bar
import NProgress from 'nprogress'
// progress bar style
import 'nprogress/nprogress.css'
// NProgress Configuration
NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from) => {
  // start progress bar
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})