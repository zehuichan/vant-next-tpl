import VToolBar from './index.vue'

VToolBar.install = function (app) {
  app.component(VToolBar.name, VToolBar)
}

export default VToolBar
