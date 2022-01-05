var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { r as resolveComponent, o as openBlock, c as createBlock, a as createPinia, d as defineComponent, u as useRouter, b as useRoute, e as computed, m as mergeProps, N as NavBar, f as createElementBlock, g as createCommentVNode, K as KeepAlive, h as createBaseVNode, i as defineStore, w as withCtx, T as Tabbar, j as createVNode, k as TabbarItem, l as createRouter, n as createWebHashHistory, p as axios, q as Toast, s as createI18n, L as Locale, z as zhCN, t as enUS, v as createApp } from "./vendor.83a4d0dd.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var App_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$6 = {};
function _sfc_render$6(_ctx, _cache) {
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createBlock(_component_router_view);
}
var App = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
var index = "";
var dark = "";
const store = createPinia();
function setupStore(app) {
  app.use(store);
}
const scriptRel = "modulepreload";
const seen = {};
const base = "/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
var settings = {
  title: "vant next tpl",
  copyright: "2018 - present Zehui Chan_",
  navbar: {
    showTitle: true,
    leftArrow: true,
    border: false,
    fixed: false,
    placeholder: false,
    safeAreaInsetTop: true
  },
  tabbar: {
    route: true,
    fixed: true,
    placeholder: true,
    items: []
  },
  errorLog: ["production", "staging"]
};
var AppNavBar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = defineComponent({
  name: "AppNavBar",
  inheritAttrs: false,
  setup() {
    const router2 = useRouter();
    const route = useRoute();
    const attrs = computed(() => {
      var _a, _b;
      return Object.assign({}, __spreadValues({}, settings.navbar), ((_a = route.meta.navbar) == null ? void 0 : _a.showTitle) && { title: route.meta.title }, !((_b = route.meta.navbar) == null ? void 0 : _b.showTitle) && { leftText: route.meta.title }, __spreadValues({}, route.meta.navbar));
    });
    const classname = computed(() => {
      var _a;
      return (_a = route.meta.navbar) == null ? void 0 : _a.classname;
    });
    const onClickLeft = () => {
      router2.back();
    };
    return {
      attrs,
      classname,
      onClickLeft
    };
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_nav_bar = NavBar;
  return openBlock(), createBlock(_component_van_nav_bar, mergeProps({
    class: ["v-nav-bar", _ctx.classname]
  }, _ctx.attrs, {
    fixed: false,
    onClickLeft: _ctx.onClickLeft
  }), null, 16, ["class", "onClickLeft"]);
}
var AppNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
var AppMain_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = defineComponent({
  name: "AppMain",
  setup() {
    const route = useRoute();
    const key = computed(() => route.path);
    return {
      route,
      key
    };
  }
});
const _hoisted_1$4 = { class: "app-main" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    (openBlock(), createBlock(KeepAlive, null, [
      _ctx.route.meta.keepAlive ? (openBlock(), createBlock(_component_router_view, { key: _ctx.key })) : createCommentVNode("", true)
    ], 1024)),
    !_ctx.route.meta.keepAlive ? (openBlock(), createBlock(_component_router_view, { key: _ctx.key })) : createCommentVNode("", true)
  ]);
}
var AppMain = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var index_vue_vue_type_style_index_0_lang$4 = "";
const _sfc_main$3 = defineComponent({
  name: "VSvgIcon",
  props: {
    name: String,
    classPrefix: String,
    size: [String, Number]
  },
  setup() {
    const addUnit = (value) => {
      return isNumeric(value) ? `${value}px` : String(value);
    };
    const isNumeric = (val) => {
      return typeof val === "number" || /^\d+(\.\d+)?$/.test(val);
    };
    return {
      addUnit
    };
  }
});
const _hoisted_1$3 = ["xlink:href"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    class: [_ctx.classPrefix, "iconfont"],
    style: { fontSize: _ctx.addUnit(_ctx.size) },
    "aria-hidden": "true"
  }, _ctx.$attrs), [
    createBaseVNode("use", {
      "xlink:href": `#${_ctx.name}`
    }, null, 8, _hoisted_1$3)
  ], 16);
}
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
var index_vue_vue_type_style_index_0_lang$3 = "";
defineComponent({
  name: "DemoBlock",
  props: {
    card: Boolean,
    title: String
  }
});
const trim = function(s) {
  return (s || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
};
function hasClass(el, cls) {
  if (!el || !cls)
    return false;
  if (cls.indexOf(" ") !== -1)
    throw new Error("className should not contain space.");
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return ` ${el.className} `.indexOf(` ${cls} `) > -1;
  }
}
function addClass(el, cls) {
  if (!el)
    return;
  let curClass = el.className;
  const classes = (cls || "").split(" ");
  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName)
      continue;
    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ` ${clsName}`;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}
function removeClass(el, cls) {
  if (!el || !cls)
    return;
  const classes = cls.split(" ");
  let curClass = ` ${el.className} `;
  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName)
      continue;
    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(` ${clsName} `, " ");
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}
const prefix = "test_appid";
class Cache {
  setItem(key, value) {
    try {
      localStorage.setItem(prefix + key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  }
  getItem(key) {
    try {
      return JSON.parse(localStorage.getItem(prefix + key));
    } catch (e) {
      return "";
    }
  }
  removeItem(key) {
    return localStorage.removeItem(prefix + key);
  }
  setSession(key, value) {
    try {
      sessionStorage.setItem(prefix + key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  }
  getSession(key) {
    try {
      return JSON.parse(sessionStorage.getItem(prefix + key));
    } catch (e) {
      return "";
    }
  }
  removeSession(key) {
    return sessionStorage.removeItem(prefix + key);
  }
}
var cache = new Cache();
const useAppStore = defineStore({
  id: "app",
  state: () => {
    return {
      theme: cache.getItem("theme") || "light"
    };
  },
  getters: {},
  actions: {
    setThemeMode(theme) {
      const isDark = theme === "dark";
      isDark ? addClass(document.documentElement, "dark") : removeClass(document.documentElement, "dark");
      cache.setItem("theme", theme);
      this.theme = theme;
    }
  }
});
var index_vue_vue_type_style_index_0_lang$2 = "";
const _sfc_main$2 = defineComponent({
  name: "ModePicker",
  setup() {
    const appStore = useAppStore();
    const theme = computed(() => appStore.theme);
    const toggle = (theme2) => {
      appStore.setThemeMode(theme2);
    };
    return {
      theme,
      toggle
    };
  },
  components: {
    VSvgIcon: __unplugin_components_0
  }
});
const _hoisted_1$2 = { class: "mode-picker" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_svg_icon = __unplugin_components_0;
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    _ctx.theme === "dark" ? (openBlock(), createBlock(_component_v_svg_icon, {
      key: 0,
      name: "icon-Daytimemode",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.toggle("light"))
    })) : (openBlock(), createBlock(_component_v_svg_icon, {
      key: 1,
      name: "icon-nightmode",
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.toggle("dark"))
    }))
  ]);
}
var ModePicker = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var index_vue_vue_type_style_index_0_lang$1 = "";
defineComponent({
  name: "Divider",
  props: {
    dashed: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "horizontal"
    },
    className: {
      type: String
    }
  },
  computed: {
    _type() {
      return `divider-${this.type}`;
    }
  }
});
const _sfc_main$1 = defineComponent({
  name: "AppTabbar",
  components: {
    VSvgIcon: __unplugin_components_0
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u5546\u57CE", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", null, "\u901B\u901B", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", null, "\u6D88\u606F", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "\u8D2D\u7269\u8F66", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", null, "\u6211\u7684", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_svg_icon = __unplugin_components_0;
  const _component_van_tabbar_item = TabbarItem;
  const _component_van_tabbar = Tabbar;
  return openBlock(), createBlock(_component_van_tabbar, {
    class: "v-tabbar",
    route: "",
    fixed: false,
    placeholder: "",
    "safe-area-inset-bottom": ""
  }, {
    default: withCtx(() => [
      createVNode(_component_van_tabbar_item, {
        replace: "",
        to: "/home"
      }, {
        icon: withCtx((props) => [
          createVNode(_component_v_svg_icon, { name: "icon-feed-logo" })
        ]),
        default: withCtx(() => [
          _hoisted_1$1
        ]),
        _: 1
      }),
      createVNode(_component_van_tabbar_item, {
        replace: "",
        to: "/circle"
      }, {
        icon: withCtx((props) => [
          createVNode(_component_v_svg_icon, { name: "icon-dongtai" })
        ]),
        default: withCtx(() => [
          _hoisted_2
        ]),
        _: 1
      }),
      createVNode(_component_van_tabbar_item, {
        replace: "",
        to: "/message"
      }, {
        icon: withCtx((props) => [
          createVNode(_component_v_svg_icon, { name: "icon-comments" })
        ]),
        default: withCtx(() => [
          _hoisted_3
        ]),
        _: 1
      }),
      createVNode(_component_van_tabbar_item, {
        replace: "",
        to: "/cart"
      }, {
        icon: withCtx((props) => [
          createVNode(_component_v_svg_icon, { name: "icon-cart-Empty" })
        ]),
        default: withCtx(() => [
          _hoisted_4
        ]),
        _: 1
      }),
      createVNode(_component_van_tabbar_item, {
        replace: "",
        to: "/center"
      }, {
        icon: withCtx((props) => [
          createVNode(_component_v_svg_icon, { name: "icon-bussiness-man" })
        ]),
        default: withCtx(() => [
          _hoisted_5
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var AppTabbar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var index_vue_vue_type_style_index_0_lang = "";
useRoute();
const _sfc_main = defineComponent({
  name: "Layout",
  setup() {
    const route = useRoute();
    return {
      route
    };
  },
  components: {
    AppMain,
    AppNavBar,
    AppTabbar
  }
});
const _hoisted_1 = { class: "basic-layout app-wrapper" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_nav_bar = resolveComponent("app-nav-bar");
  const _component_app_main = resolveComponent("app-main");
  const _component_app_tabbar = resolveComponent("app-tabbar");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _ctx.route.meta.navbar ? (openBlock(), createBlock(_component_app_nav_bar, { key: 0 })) : createCommentVNode("", true),
    createVNode(_component_app_main),
    _ctx.route.meta.tabbar ? (openBlock(), createBlock(_component_app_tabbar, { key: 1 })) : createCommentVNode("", true)
  ]);
}
var Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/BasicLayout",
    component: Layout,
    children: [
      {
        path: "/home",
        component: () => __vitePreload(() => import("./index.edf25f56.js"), true ? ["assets/index.edf25f56.js","assets/vendor.83a4d0dd.js","assets/vendor.1d99200a.css"] : void 0),
        meta: {
          title: "\u9996\u9875",
          navbar: {
            showTitle: false,
            leftArrow: false
          },
          tabbar: true
        }
      },
      {
        path: "/circle",
        component: () => __vitePreload(() => import("./index.b15fdbb7.js"), true ? ["assets/index.b15fdbb7.js","assets/vendor.83a4d0dd.js","assets/vendor.1d99200a.css"] : void 0),
        meta: {
          title: "\u901B\u901B",
          navbar: {
            showTitle: false,
            leftArrow: false
          },
          tabbar: true
        }
      },
      {
        path: "/message",
        component: () => __vitePreload(() => import("./index.84387be1.js"), true ? ["assets/index.84387be1.js","assets/vendor.83a4d0dd.js","assets/vendor.1d99200a.css"] : void 0),
        meta: {
          title: "\u6D88\u606F",
          navbar: {
            showTitle: false,
            leftArrow: false
          },
          tabbar: true
        }
      },
      {
        path: "/cart",
        component: () => __vitePreload(() => import("./index.94576e32.js"), true ? ["assets/index.94576e32.js","assets/index.5af66079.css","assets/vendor.83a4d0dd.js","assets/vendor.1d99200a.css"] : void 0),
        meta: {
          title: "\u8D2D\u7269\u8F66",
          navbar: {
            showTitle: false,
            leftArrow: false
          },
          tabbar: true
        }
      },
      {
        path: "/center",
        component: () => __vitePreload(() => import("./index.1069ba47.js"), true ? ["assets/index.1069ba47.js","assets/index.f427bcea.css","assets/vendor.83a4d0dd.js","assets/vendor.1d99200a.css"] : void 0),
        meta: {
          title: "\u5173\u4E8E\u6211",
          tabbar: true
        }
      }
    ]
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true
});
function setupRouter(app) {
  app.use(router);
}
let message = " -_- !~~ \u670D\u52A1\u5668\u5F00\u5C0F\u5DEE\u4E86\uFF0C\u7A0D\u540E\u91CD\u8BD5";
const http = axios.create({
  baseURL: "/api",
  timeout: 50 * 1e3
});
http.interceptors.request.use((config) => {
  return config;
}, (error) => {
  console.log(`err,${error}`);
  return Promise.reject(error);
});
http.interceptors.response.use((response) => {
  const res = response.data;
  if (res.code === 200) {
    return res;
  } else {
    Toast(`status: ${res.code}, ${res.msg}`);
    return Promise.reject({ message, name: "httpRequestError", response });
  }
}, (error) => {
  console.log(`err,${error}`);
  Toast(`err,${error}`);
  return Promise.reject(error);
});
function userInfo() {
  return http({
    url: "/user/info",
    method: "get"
  });
}
const useUserStore = defineStore({
  id: "user",
  state: () => {
    return {
      token: void 0,
      userinfo: null
    };
  },
  getters: {},
  actions: {
    async getUserInfo() {
      try {
        const res = await userInfo();
        this.userinfo = res.data;
        return Promise.resolve();
      } catch (error) {
        return Promise.reject(error);
      }
    }
  }
});
const title = settings.title;
function useTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
function setupRouterGuard(router2) {
  const appStore = useAppStore();
  const userStore = useUserStore();
  router2.beforeEach(async (to, from) => {
    document.title = useTitle(to.meta.title);
    appStore.setThemeMode(appStore.theme);
    const hasInfo = userStore.userinfo;
    if (hasInfo)
      ;
    else {
      try {
        userStore.getUserInfo();
      } catch (error) {
        console.log("error", error);
        userStore.resetUserInfo();
        return "/500";
      }
    }
  });
  router2.afterEach((to, from) => {
  });
  router2.onError((error) => {
    console.log(error, "\u8DEF\u7531\u9519\u8BEF");
  });
}
var enLocale = {
  navbar: {
    home: "Home",
    api: "Api",
    my: "About"
  }
};
var zhLocale = {
  navbar: {
    home: "\u9996\u9875",
    api: "api",
    my: "\u5173\u4E8E\u6211"
  }
};
const messages = {
  en: enLocale,
  zh: zhLocale
};
const options = {
  zh: ["zh-CN", zhCN],
  en: ["en-US", enUS]
};
function getLanguage() {
  const chooseLanguage = cache.getItem("language");
  if (chooseLanguage)
    return chooseLanguage;
  const language = (navigator.language || navigator.browserLanguage).toLowerCase();
  const locales = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }
  return "en";
}
function initVantLocale(lang) {
  if (lang)
    return Locale.use(...options[lang]);
  Locale.use(...options[getLanguage()]);
}
initVantLocale();
const i18n = createI18n({
  locale: getLanguage(),
  fallbackLocale: "zh",
  messages
});
function setupI18n(app) {
  app.use(i18n);
}
const useErrorLogStore = defineStore({
  id: "errorLog",
  state: () => {
    return {
      logs: []
    };
  },
  actions: {
    addErrorLog(log) {
      this.logs.push(log);
    },
    clearErrorLog() {
      this.logs.splice(0);
    }
  }
});
function is(val, type) {
  const typeArr = Array.isArray(type) ? type : [type];
  const valType = Object.prototype.toString.call(val);
  return typeArr.some((type2) => `[object ${type2}]` === valType);
}
const { errorLog: needErrorLog } = settings;
function checkNeed() {
  const env = "production";
  if (is(needErrorLog, "String")) {
    return env === needErrorLog;
  }
  if (is(needErrorLog, "Array")) {
    return needErrorLog.includes(env);
  }
  return false;
}
function setupErrorLog(app) {
  if (checkNeed()) {
    app.config.errorHandler = (err, vm, info) => {
      const errorLogStore = useErrorLogStore();
      errorLogStore.addErrorLog({
        err,
        info,
        url: location.href
      });
    };
  }
}
async function bootstrap() {
  const app = createApp(App);
  setupStore(app);
  setupRouter(app);
  setupRouterGuard(router);
  setupI18n(app);
  setupErrorLog(app);
  app.mount("#app");
}
void bootstrap();
export { ModePicker as M, _export_sfc as _, useUserStore as u };
