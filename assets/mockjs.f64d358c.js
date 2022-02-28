import { M as storeToRefs, f as createElementBlock, g as createVNode, w as withCtx, e as unref, E as CellGroup, o as openBlock, G as Cell, R as Button, U as Badge } from "./vendor.646982f2.js";
/* empty css                */import { h as http, a as useErrorLogStore, V as VToolBar, b as VSvgIcon } from "./index.d33fdc84.js";
function mockData(url) {
  return http({
    url: "/user/" + url,
    method: "post"
  });
}
const _hoisted_1 = { class: "mockjs" };
const _sfc_main = {
  setup(__props) {
    const errorLogStore = useErrorLogStore();
    const { logs } = storeToRefs(errorLogStore);
    const fetchData = async (url) => {
      await mockData(url);
    };
    return (_ctx, _cache) => {
      const _component_van_cell = Cell;
      const _component_van_cell_group = CellGroup;
      const _component_van_button = Button;
      const _component_van_badge = Badge;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_van_cell_group, null, {
          default: withCtx(() => [
            createVNode(_component_van_cell, {
              title: "mock 400",
              "is-link": "",
              onClick: _cache[0] || (_cache[0] = ($event) => fetchData("mock400"))
            }),
            createVNode(_component_van_cell, {
              title: "mock 401",
              "is-link": "",
              onClick: _cache[1] || (_cache[1] = ($event) => fetchData("mock401"))
            }),
            createVNode(_component_van_cell, {
              title: "mock 404",
              "is-link": "",
              onClick: _cache[2] || (_cache[2] = ($event) => fetchData("mock404"))
            }),
            createVNode(_component_van_cell, {
              title: "mock 500",
              "is-link": "",
              onClick: _cache[3] || (_cache[3] = ($event) => fetchData("mock500"))
            })
          ]),
          _: 1
        }),
        createVNode(unref(VToolBar), null, {
          default: withCtx(() => [
            createVNode(_component_van_badge, {
              content: unref(logs).length
            }, {
              default: withCtx(() => [
                createVNode(_component_van_button, {
                  size: "small",
                  type: "default"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(VSvgIcon), {
                      slot: "icon",
                      name: "icon-bug"
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          _: 1
        })
      ]);
    };
  }
};
export { _sfc_main as default };
