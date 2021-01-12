import router from './router'

router.beforeEach(async (to, from) => {
  console.log('to', to.meta, 'from', from.meta)
})

router.afterEach(() => {

})