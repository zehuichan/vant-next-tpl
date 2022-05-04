import { ref, watchEffect } from 'vue'
import { useUrlSearchParams } from '@vueuse/core'

const SCOPES = ['snsapi_base', 'snsapi_userinfo']

export default function useAuth(scope = 1) {
  const auth_code = ref(undefined)

  function redirectTo(redirect_uri) {
    const { protocol, host, pathname, hash } = location
    const r_url = `${protocol}//${host}${pathname}${redirect_uri ? '#' + redirect_uri : hash}`
    location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${import.meta.env.VITE_WECHAT_APPID}&redirect_uri=${encodeURIComponent(r_url)}&response_type=code&scope=${SCOPES[scope]}&state=STATE#wechat_redirect`
  }

  watchEffect(() => {
    const { code } = useUrlSearchParams('history')
    auth_code.value = code
  })

  return [auth_code, redirectTo]
}