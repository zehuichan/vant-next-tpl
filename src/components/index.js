import DemoBlock from './DemoBlock'
import ModePicker from './ModePicker'
import VSvgIcon from './VSvgIcon'

const components = [
  DemoBlock,
  ModePicker,
  VSvgIcon
]

const install = (app, opts = {}) => {
  components.forEach(component => app.component(component.name, component))
}

export function setupGlobComponents(app) {
  app.use(install)
}
