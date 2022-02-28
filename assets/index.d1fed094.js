import { f as createElementBlock, g as createVNode, w as withCtx, F as Fragment, D as renderList, E as CellGroup, o as openBlock, j as createBaseVNode, G as Cell } from "./vendor.646982f2.js";
/* empty css                */import { _ as _export_sfc } from "./index.2f3d5ddf.js";
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
