import { A as storeToRefs, x as ref, f as createElementBlock, h as createBaseVNode, B as toDisplayString, D as unref, j as createVNode, w as withCtx, I as Image, E as CellGroup, o as openBlock, F as Field, G as Cell } from "./vendor.83a4d0dd.js";
import { u as useUserStore, M as ModePicker } from "./index.d1432ae4.js";
var index$3 = "";
var index$2 = "";
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
    const appInfo = { "name": "vant-next-tpl", "version": "0.0.0", "lastBuildTime": "2022-01-05 11:29:34" };
    const value = ref("");
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
              modelValue: value.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
              label: "\u6635\u79F0",
              placeholder: "\u6635\u79F0"
            }, null, 8, ["modelValue"]),
            createVNode(_component_van_field, {
              modelValue: value.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
              label: "\u624B\u673A",
              placeholder: "\u624B\u673A"
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
                createVNode(unref(ModePicker))
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
              label: "name",
              readonly: ""
            }, null, 8, ["modelValue"]),
            createVNode(_component_van_field, {
              modelValue: unref(appInfo).version,
              label: "version",
              readonly: ""
            }, null, 8, ["modelValue"]),
            createVNode(_component_van_field, {
              modelValue: unref(appInfo).lastBuildTime,
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
