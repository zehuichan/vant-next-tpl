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
import { r as resolveComponent, o as openBlock, c as createBlock, L as Lazyload, a as createPinia, u as useRouter, b as useRoute, d as computed, N as NavBar, m as mergeProps, e as unref, f as createElementBlock, g as createVNode, w as withCtx, h as resolveDynamicComponent, K as KeepAlive, i as defineComponent, j as defineStore, k as useStorage, l as useDark, n as createBaseVNode, p as renderSlot, q as normalizeClass, T as TabbarItem, s as Tabbar, t as normalizeProps, v as createCommentVNode, x as createRouter, y as createWebHashHistory, z as createI18n, A as Locale, B as stdin_default, C as stdin_default$1, D as createApp } from "./vendor.a1806f2f.js";
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
function _sfc_render$2(_ctx, _cache) {
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createBlock(_component_router_view);
}
var App = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$2]]);
var index = "";
function setupVant(app) {
  app.use(Lazyload);
}
const store = createPinia();
function setupStore(app) {
  app.use(store);
}
const scriptRel = "modulepreload";
const seen = {};
const base = "/vant-next-tpl/";
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
var AppNavBar_vue_vue_type_style_index_0_lang = "";
const __default__$1 = {
  inheritAttrs: false
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign(__default__$1, {
  setup(__props) {
    const router2 = useRouter();
    const route = useRoute();
    const classname = computed(() => {
      var _a, _b;
      return (_b = (_a = route == null ? void 0 : route.meta) == null ? void 0 : _a.navbar) == null ? void 0 : _b.classname;
    });
    const onClickLeft = () => {
      router2.back();
    };
    return (_ctx, _cache) => {
      const _component_van_nav_bar = NavBar;
      return openBlock(), createBlock(_component_van_nav_bar, mergeProps({
        class: ["v-nav-bar", unref(classname)]
      }, _ctx.$attrs, { onClickLeft }), null, 16, ["class"]);
    };
  }
});
var AppMain_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = { class: "app-main" };
const _sfc_main$4 = {
  setup(__props) {
    const route = useRoute();
    const key = computed(() => route.path);
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createVNode(_component_router_view, null, {
          default: withCtx(({ Component, route: route2 }) => [
            (openBlock(), createBlock(KeepAlive, null, [
              (openBlock(), createBlock(resolveDynamicComponent(Component), { key: unref(key) }))
            ], 1024))
          ]),
          _: 1
        })
      ]);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$5 = "";
defineComponent({
  name: "DemoBlock",
  props: {
    card: Boolean,
    title: String
  }
});
const useAppStore = defineStore({
  id: "app",
  state: () => {
    return {
      mode: useStorage("vantTheme"),
      isDark: useDark({
        selector: "body",
        valueDark: "van-theme-dark",
        valueLight: "van-theme-ligtht",
        storageKey: "vantTheme"
      })
    };
  },
  actions: {
    changeMode(mode) {
      this.isDark = mode === "dark";
      this.mode = mode;
    }
  }
});
var index_vue_vue_type_style_index_0_lang$4 = "";
var index_vue_vue_type_style_index_0_lang$3 = "";
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
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
var VSvgIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1]]);
var index_vue_vue_type_style_index_0_lang$2 = "";
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
var index_vue_vue_type_style_index_0_lang$1 = "";
const _sfc_main$2 = defineComponent({
  name: "VToolBar",
  props: {
    align: {
      type: String,
      default: "left"
    }
  }
});
const _hoisted_1$2 = { class: "v-tool-bar__placeholder" };
const _hoisted_2$1 = { class: "v-tool-bar van-clearfix" };
const _hoisted_3$1 = { class: "fl" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("div", _hoisted_3$1, [
        renderSlot(_ctx.$slots, "extra")
      ]),
      createBaseVNode("div", {
        class: normalizeClass(["fr", "v-tool-bar__" + _ctx.align])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)
    ])
  ]);
}
var VToolBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("span", null, "\u5546\u57CE", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", null, "\u901B\u901B", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", null, "\u6D88\u606F", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "\u8D2D\u7269\u8F66", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", null, "\u6211\u7684", -1);
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_van_tabbar_item = TabbarItem;
      const _component_van_tabbar = Tabbar;
      return openBlock(), createBlock(_component_van_tabbar, mergeProps({ class: "v-tabbar" }, _ctx.$attrs, { route: "" }), {
        default: withCtx(() => [
          createVNode(_component_van_tabbar_item, {
            replace: "",
            to: "/home"
          }, {
            icon: withCtx((props) => [
              createVNode(unref(VSvgIcon), { name: "icon-feed-logo" })
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
              createVNode(unref(VSvgIcon), { name: "icon-dongtai" })
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
              createVNode(unref(VSvgIcon), { name: "icon-comments" })
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
              createVNode(unref(VSvgIcon), { name: "icon-cart-Empty" })
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
              createVNode(unref(VSvgIcon), { name: "icon-bussiness-man" })
            ]),
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 16);
    };
  }
});
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
    safeAreaInsetBottom: true
  },
  errorLog: ["production", "staging", "development"]
};
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "basic-layout app-wrapper" };
const _sfc_main = {
  setup(__props) {
    useRouter();
    const route = useRoute();
    const navbar = computed(() => {
      var _a, _b;
      return Object.assign({}, __spreadValues({}, settings.navbar), ((_a = route.meta.navbar) == null ? void 0 : _a.showTitle) && { title: route.meta.title }, !((_b = route.meta.navbar) == null ? void 0 : _b.showTitle) && { leftText: route.meta.title }, __spreadValues({}, route.meta.navbar));
    });
    const tabbar = computed(() => Object.assign({}, __spreadValues({}, settings.tabbar), __spreadValues({}, route.meta.tabbar)));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        unref(route).meta.navbar ? (openBlock(), createBlock(unref(_sfc_main$5), normalizeProps(mergeProps({ key: 0 }, unref(navbar))), null, 16)) : createCommentVNode("", true),
        createVNode(unref(_sfc_main$4)),
        unref(route).meta.tabbar ? (openBlock(), createBlock(unref(_sfc_main$1), normalizeProps(mergeProps({ key: 1 }, unref(tabbar))), null, 16)) : createCommentVNode("", true)
      ]);
    };
  }
};
const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/BasicLayout",
    component: _sfc_main,
    children: [
      {
        path: "/home",
        component: () => __vitePreload(() => import("./index.090e01a7.js"), true ? ["assets/index.090e01a7.js","assets/index.d54d9699.css","assets/index.f7de366d.css","assets/vendor.a1806f2f.js","assets/vendor.b3a0ed05.css"] : void 0),
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
        component: () => __vitePreload(() => import("./index.e94597ec.js"), true ? ["assets/index.e94597ec.js","assets/vendor.a1806f2f.js","assets/vendor.b3a0ed05.css"] : void 0),
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
        component: () => __vitePreload(() => import("./index.c11f730b.js"), true ? ["assets/index.c11f730b.js","assets/vendor.a1806f2f.js","assets/vendor.b3a0ed05.css"] : void 0),
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
        component: () => __vitePreload(() => import("./index.377e5203.js"), true ? ["assets/index.377e5203.js","assets/index.1e868721.css","assets/vendor.a1806f2f.js","assets/vendor.b3a0ed05.css"] : void 0),
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
        component: () => __vitePreload(() => import("./index.682b5a91.js"), true ? ["assets/index.682b5a91.js","assets/index.46722a09.css","assets/index.f7de366d.css","assets/vendor.a1806f2f.js","assets/vendor.b3a0ed05.css"] : void 0),
        meta: {
          title: "\u5173\u4E8E\u6211",
          tabbar: true
        }
      },
      {
        path: "/mockjs",
        component: () => __vitePreload(() => import("./mockjs.f8399f7b.js"), true ? ["assets/mockjs.f8399f7b.js","assets/index.f7de366d.css","assets/vendor.a1806f2f.js","assets/vendor.b3a0ed05.css"] : void 0),
        name: "Mockjs",
        meta: {
          title: "Mockjs",
          navbar: {
            showTitle: false
          },
          tabbar: false
        }
      }
    ]
  },
  { path: "/:path(.*)*", redirect: "/404" }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true
});
function setupRouter(app) {
  app.use(router);
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
        this.userinfo = {
          "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLYMVgaumib5h42GP4pAlLTQCpzFAmUZTVUg4MmH9eFyb4shrm6Ux2Ocic1ic0ekTWEYVfxibGcMMC3UQ/132",
          "cellphone": "15800066380",
          "username": "chan_",
          "realname": "\u9648\u6CFD\u8F89",
          "github": "https://github.com/zehuichan"
        };
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
  useAppStore();
  const userStore = useUserStore();
  router2.beforeEach(async (to, from) => {
    document.title = useTitle(to.meta.title);
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
const messages = {
  en: enLocale,
  zh: zhLocale
};
const options = {
  zh: ["zh-CN", stdin_default],
  en: ["en-US", stdin_default$1]
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
    const errorLogStore = useErrorLogStore();
    app.config.errorHandler = (err, vm, info) => {
      errorLogStore.addErrorLog({
        err,
        info,
        url: location.href
      });
      console.error(err);
    };
  }
}
async function bootstrap() {
  const app = createApp(App);
  setupVant(app);
  setupStore(app);
  setupRouter(app);
  setupRouterGuard(router);
  setupI18n(app);
  setupErrorLog(app);
  app.mount("#app");
}
void bootstrap();
export { VSvgIcon as V, _export_sfc as _, useUserStore as a, useErrorLogStore as b, VToolBar as c, useAppStore as u };
