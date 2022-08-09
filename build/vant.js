import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export function configVantPlugin() {
  return Components({
    resolvers: [VantResolver()]
  })
}
