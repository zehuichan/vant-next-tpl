import { useErrorLogStore } from '@/store/modules/errorLog'
import { is } from '../utils'
import settings from '../settings'

// you can set in settings.js
// errorLog: 'production' | ['production', 'development']
const { errorLog: needErrorLog } = settings

function checkNeed() {
  const env = import.meta.env.MODE
  if (is(needErrorLog, 'String')) {
    return env === needErrorLog
  }
  if (is(needErrorLog, 'Array')) {
    return needErrorLog.includes(env)
  }
  return false
}

export function setupErrorLog(app) {
  if (checkNeed()) {
    const errorLogStore = useErrorLogStore()

    app.config.errorHandler = (err, vm, info) => {
      // todo 前端错误上报到收集报错的平台
      errorLogStore.addErrorLog({
        err,
        info,
        url: location.href
      })
      console.error(err)
    }
  }
}
