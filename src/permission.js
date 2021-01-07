import router from './router'

router.beforeEach(async (to, from) => {
  console.log(to, from)
})

router.afterEach(() => {

})