import VSvgIcon from './VSvgIcon'
import ModePicker from './ModePicker'
import Divider from './Divider'
import VToolBar from './VToolBar'

const components = [VSvgIcon, ModePicker, Divider, VToolBar]

export function registerComponents(app) {
  components.map((item) => {
    if (item.install) {
      app.use(item)
    } else if (item.name) {
      app.component(item.name, item)
    }
  })
}
