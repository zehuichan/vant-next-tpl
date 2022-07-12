import { createI18n } from 'vue-i18n'

// vant
import { Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US'
import zhCN from 'vant/es/locale/lang/zh-CN'

// locale
import enLocale from './en'
import zhLocale from './zh'

// utils
import cache from '@/utils/cache'

const messages = {
  en: enLocale,
  zh: zhLocale
}

const options = {
  zh: ['zh-CN', zhCN],
  en: ['en-US', enUS]
}

export function getLanguage() {
  const chooseLanguage = cache.getItem('language')
  if (chooseLanguage) return chooseLanguage

  // if has not choose language
  const language = (
    navigator.language || navigator.browserLanguage
  ).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'en'
}

export function initVantLocale(lang) {
  if (lang) return Locale.use(...options[lang])

  // if has not choose language
  Locale.use(...options[getLanguage()])
}

initVantLocale()

const i18n = createI18n({
  locale: getLanguage(),
  fallbackLocale: 'zh',
  messages
})

export function setupI18n(app) {
  app.use(i18n)
}
