import ModePicker from './index.vue'

ModePicker.install = function (app) {
  app.component(ModePicker.name, ModePicker)
}

export default ModePicker
