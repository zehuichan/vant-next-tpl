import { o as openBlock, f as createElementBlock, e as unref, c as createBlock, P as storeToRefs, I as ref, Q as Image, R as Field, F as CellGroup, E as Cell, n as createBaseVNode, U as toDisplayString, g as createVNode, w as withCtx } from "./vendor.a1806f2f.js";
/* empty css                */import { u as useAppStore, V as VSvgIcon, a as useUserStore } from "./index.1fd23af6.js";
const _hoisted_1$1 = { class: "mode-picker" };
const _sfc_main$1 = {
  setup(__props) {
    const appStore = useAppStore();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        unref(appStore).isDark ? (openBlock(), createBlock(unref(VSvgIcon), {
          key: 0,
          name: "icon-Daytimemode",
          onClick: _cache[0] || (_cache[0] = ($event) => unref(appStore).changeMode("light"))
        })) : (openBlock(), createBlock(unref(VSvgIcon), {
          key: 1,
          name: "icon-nightmode",
          onClick: _cache[1] || (_cache[1] = ($event) => unref(appStore).changeMode("dark"))
        }))
      ]);
    };
  }
};
var index$1 = "";
var index = "";
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "center" };
const _hoisted_2 = { class: "user-info" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", null, "ABOUT", -1);
const _hoisted_4 = { class: "user-info__bottom" };
const _hoisted_5 = { class: "user" };
const _hoisted_6 = { class: "name" };
const _hoisted_7 = { class: "text" };
const _hoisted_8 = { class: "avatar" };
const _sfc_main = {
  setup(__props) {
    const userStore = useUserStore();
    const { userinfo } = storeToRefs(userStore);
    const appInfo = { "name": "vant-next-tpl", "version": "0.0.1", "lastBuildTime": "2022-03-14 14:09:58" };
    ref("");
    return (_ctx, _cache) => {
      const _component_van_image = Image;
      const _component_van_field = Field;
      const _component_van_cell_group = CellGroup;
      const _component_van_cell = Cell;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, toDisplayString(unref(userinfo).username), 1),
              createBaseVNode("div", _hoisted_7, toDisplayString(unref(userinfo).github), 1)
            ]),
            createBaseVNode("div", _hoisted_8, [
              createVNode(_component_van_image, {
                src: unref(userinfo).avatar,
                width: "100%",
                height: "100%"
              }, null, 8, ["src"])
            ])
          ])
        ]),
        createVNode(_component_van_cell_group, {
          title: "info",
          inset: ""
        }, {
          default: withCtx(() => [
            createVNode(_component_van_field, {
              modelValue: unref(userinfo).realname,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(userinfo).realname = $event),
              label: "\u59D3\u540D",
              readonly: ""
            }, null, 8, ["modelValue"]),
            createVNode(_component_van_field, {
              modelValue: unref(userinfo).cellphone,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(userinfo).cellphone = $event),
              label: "\u624B\u673A",
              readonly: ""
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        createVNode(_component_van_cell_group, {
          title: "setting",
          inset: ""
        }, {
          default: withCtx(() => [
            createVNode(_component_van_cell, { title: "\u6A21\u5F0F" }, {
              value: withCtx(() => [
                createVNode(unref(_sfc_main$1))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_van_cell_group, {
          title: "about",
          inset: ""
        }, {
          default: withCtx(() => [
            createVNode(_component_van_field, {
              modelValue: unref(appInfo).name,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(appInfo).name = $event),
              label: "name",
              readonly: ""
            }, null, 8, ["modelValue"]),
            createVNode(_component_van_field, {
              modelValue: unref(appInfo).version,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(appInfo).version = $event),
              label: "version",
              readonly: ""
            }, null, 8, ["modelValue"]),
            createVNode(_component_van_field, {
              modelValue: unref(appInfo).lastBuildTime,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(appInfo).lastBuildTime = $event),
              label: "lastBuildTime",
              readonly: ""
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })
      ]);
    };
  }
};
export { _sfc_main as default };
