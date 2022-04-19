import { nextTick, ref } from 'vue'
import { useScript } from '.'
import { wxconfig } from '@/api/user'

export default function useWeixin(options = { debug: false }) {
  const ready = ref(false)
  const wx = ref(undefined)
  const { toPromise } = useScript('//res.wx.qq.com/open/js/jweixin-1.6.0.js')

  async function initWxConfig() {
    await toPromise()
    await nextTick()
    wx.value = window.wx
    const url = encodeURIComponent(location.href.split('#')[0])
    const res = await wxconfig(url)
    const config = Object.assign({}, res, options)
    wx.value.config(config)
    wx.value.ready(() => {
      ready.value = true
    })
    wx.value.error(() => {
      ready.value = false
    })
  }

  !ready.value && initWxConfig()

  return [ready, wx]
}