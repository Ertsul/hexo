(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{464:function(t,s,a){t.exports=a.p+"assets/img/low-code-06.58dd3ef3.png"},465:function(t,s,a){t.exports=a.p+"assets/img/low-code-07.4a3edc16.png"},466:function(t,s,a){t.exports=a.p+"assets/img/low-code-08.b32aace2.png"},513:function(t,s,a){"use strict";a.r(s);var n=a(35),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"痛点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#痛点"}},[t._v("#")]),t._v(" 痛点")]),t._v(" "),n("p",[n("img",{attrs:{src:a(464),alt:"image.png"}})]),t._v(" "),n("p",[t._v("痛点：右侧样式组件有很多相同的样式，如：margin、padding 等。这样每次都重复开发相同样式，不仅浪费时间和精力，而且代码量也会大大增多。")]),t._v(" "),n("h2",{attrs:{id:"解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),n("p",[t._v("解决方案：将多个样式抽离成单一样式组件。（一个组件对应一个样式）")]),t._v(" "),n("p",[t._v("有两种使用方式：")]),t._v(" "),n("ul",[n("li",[t._v("常规方式：将单一组件当作普通组件使用，需要用到该样式的组件独自 import。")]),t._v(" "),n("li",[t._v("可配置方式：将用到的样式通过配置方式进行组装成包含多种样式的样式聚合组件。")])]),t._v(" "),n("p",[t._v("之前的流程：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(465),alt:"image.png"}})]),t._v(" "),n("p",[t._v("现在的流程：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(466),alt:"image.png"}})]),t._v(" "),n("p",[t._v("在页面预览区域点击组件后，右侧样式修改组件多加一层处理逻辑，添加一个 "),n("code",[t._v("<styleCollection />")]),t._v(" 组件对各个单一样式进行聚合和数据派发。")]),t._v(" "),n("p",[t._v("当单一样式组件内部样式更改后，向样式聚合组件 "),n("code",[t._v("<styleCollection />")]),t._v(" 组件派发 "),n("code",[t._v("changeStyleItem")]),t._v(" 事件，然后样式聚合组件 "),n("code",[t._v("<styleCollection />")]),t._v(" 组件再向上派发事件 "),n("code",[t._v("changeStyle")]),t._v(" 事件。")]),t._v(" "),n("h2",{attrs:{id:"数据格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据格式"}},[t._v("#")]),t._v(" 数据格式")]),t._v(" "),n("p",[t._v("之前外部传入基本数据信息 data 格式：")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染组件")]),t._v("\n        styleComponent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染组件对应修改样式的组件")]),t._v("\n        dynamicStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件样式 props")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...       ")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[t._v("更改为：")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染组件")]),t._v("\n        styleComponent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染组件对应修改样式的单一组件列表")]),t._v("\n        dynamicStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件样式 props")]),t._v("\n        customSingleStyles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义单一组件 map")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...       ")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("ul",[n("li",[t._v("更改 styleComponent 数据格式")]),t._v(" "),n("li",[t._v("新增 customSingleStyles 属性")])]),t._v(" "),n("h3",{attrs:{id:"stylecomponent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stylecomponent"}},[t._v("#")]),t._v(" styleComponent")]),t._v(" "),n("p",[t._v("兼容旧的逻辑，仍然可以传入一整个样式修改组件。")]),t._v(" "),n("p",[t._v("新的格式为：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("styleComponent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单一样式组件名")]),t._v("\n    label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// label 名")]),t._v("\n    name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dynamicStyle 中对应的对象属性名")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("之所以这么设计，是考虑到单一组件复用的情况。如：一个 Color 组件，可能同时拥有背景色 backgroundColor 和文本颜色 Color。那么外部传入基本数据信息 data 格式为：")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        component"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'Color'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        label"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'Background Color'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'backgroundColor'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        component"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'Color'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        label"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'Text Color'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'color'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("h3",{attrs:{id:"customsinglestyles"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#customsinglestyles"}},[t._v("#")]),t._v(" customSingleStyles")]),t._v(" "),n("p",[t._v("该属性为拓展除了框架提供的单一样式组件，自定义的单一样式组件数据。")]),t._v(" "),n("p",[t._v("数据格式为：")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    componentName"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Component "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件名： 样式组件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);