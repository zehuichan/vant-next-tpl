import { x as ref, c as createBlock, w as withCtx, q as Toast, S as SubmitBar, o as openBlock, j as createVNode, y as createTextVNode, C as Checkbox } from "./vendor.83a4d0dd.js";
var index$4 = "";
var index$3 = "";
var index$2 = "";
var index$1 = "";
var index = "";
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u5168\u9009");
const _sfc_main = {
  setup(__props) {
    const checked = ref(false);
    const onSubmit = () => Toast("\u70B9\u51FB\u6309\u94AE");
    return (_ctx, _cache) => {
      const _component_van_checkbox = Checkbox;
      const _component_van_submit_bar = SubmitBar;
      return openBlock(), createBlock(_component_van_submit_bar, {
        price: 3050,
        "button-text": "\u63D0\u4EA4\u8BA2\u5355",
        onSubmit
      }, {
        default: withCtx(() => [
          createVNode(_component_van_checkbox, {
            modelValue: checked.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checked.value = $event)
          }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      });
    };
  }
};
export { _sfc_main as default };
