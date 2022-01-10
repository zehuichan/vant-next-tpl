import { Lazyload } from 'vant'
import 'vant/es/toast/style/index'
import 'vant/es/dialog/style/index'
import 'vant/es/notify/style/index'

export function setupVant(app) {
  app.use(Lazyload)
}