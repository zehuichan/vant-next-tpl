import { f as createElementBlock, k as createVNode, w as withCtx, F as Fragment, B as renderList, C as CellGroup, o as openBlock, h as createBaseVNode, D as Cell } from "./vendor.95afa1b9.js";
/* empty css                */import { _ as _export_sfc } from "./index.c1f01905.js";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "text" }, "placeholder", -1);
const _hoisted_2 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  const _component_van_cell = Cell;
  const _component_van_cell_group = CellGroup;
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_van_cell_group, null, {
      default: withCtx(() => [
        createVNode(_component_van_cell, {
          title: "Mockjs",
          "is-link": "",
          to: "/mockjs"
        })
      ]),
      _: 1
    }),
    (openBlock(), createElementBlock(Fragment, null, renderList(20, (i) => {
      return createBaseVNode("div", {
        key: i,
        class: "box-card"
      }, _hoisted_2);
    }), 64))
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
