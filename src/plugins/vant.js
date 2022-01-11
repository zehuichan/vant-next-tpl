import { Lazyload } from 'vant'
// todo https://github.com/antfu/unplugin-vue-components/issues/162
import 'vant/es/toast/style/index'
import 'vant/es/dialog/style/index'
import 'vant/es/notify/style/index'

export function setupVant(app) {
  app.use(Lazyload)
}