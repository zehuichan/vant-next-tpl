import VSvgIcon from './VSvgIcon/index.vue'
import ModePicker from './ModePicker/index.vue'
import Divider from './Divider/index.vue'
import VToolBar from './VToolBar/index.vue'


const components = [
  VSvgIcon,
  ModePicker,
  Divider,
  VToolBar,
]

export function registerComponents(app) {
  components.map(item => {
    if (item.install) {
      app.use(item)
    } else if (item.name) {
      app.component(item.name, item)
    }
  })
}