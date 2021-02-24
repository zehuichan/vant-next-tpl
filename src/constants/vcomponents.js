import { createApp } from 'vue'

const app = createApp({})

// components
import VSvgIcon from '@/components/VSvgIcon'

const components = [
  VSvgIcon,
]

components.forEach(component => {
  app.component(component.name, component)
})