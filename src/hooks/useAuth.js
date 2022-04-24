const SCOPES = ['snsapi_base', 'snsapi_userinfo']

export default function useAuth(scope) {
  function redirectTo(redirect_uri) {
    const { protocol, host, pathname, hash } = location
    const r_url = `${protocol}//${host}${pathname}${redirect_uri ? '#' + redirect_uri : hash}`
    location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${import.meta.env.VITE_WECHAT_APPID}&redirect_uri=${encodeURIComponent(r_url)}&response_type=code&scope=${scope || SCOPES[1]}&state=STATE#wechat_redirect`
  }

  return [redirectTo]
}