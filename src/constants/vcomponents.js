// components
import VSvgIcon from '@/components/VSvgIcon'

const components = [
  VSvgIcon,
]

function plugin(app) {
  components.forEach(component => {
    app.component(component.name, component)
    app.component(camelize(component.name), component)
  })
}

function camelize(str) {
  return str.replace(/-(\w)/g, (_, c) => c.toUpperCase())
}

export default plugin