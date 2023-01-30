(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{501:function(t,a,s){t.exports=s.p+"assets/img/low-code-01.41e1ff49.gif"},502:function(t,a,s){t.exports=s.p+"assets/img/low-code-02.cb7b3b0f.png"},503:function(t,a,s){t.exports=s.p+"assets/img/low-code-03.67dd1ced.png"},504:function(t,a,s){t.exports=s.p+"assets/img/low-code-04.4a3edc16.png"},561:function(t,a,s){"use strict";s.r(a);var n=s(18),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("做一个更加通用的可视化搭建平台，用户通过 npm 安装 h5-editor (包名)，就可以直接使用了。")]),t._v(" "),n("p",[t._v("可以使用的功能有：")]),t._v(" "),n("ul",[n("li",[t._v("拖拽组件、删除组件；")]),t._v(" "),n("li",[t._v("修改页面基本信息，如：页面标题、页面背景色等；")]),t._v(" "),n("li",[t._v("修改组件样式，如：组件大小、颜色等；")]),t._v(" "),n("li",[t._v("可以使用基础组件（组件内提供）；")]),t._v(" "),n("li",[t._v("可以使用自定义组件（用户自己实现的组件）；")]),t._v(" "),n("li",[t._v("打包生成静态化页面。")])]),t._v(" "),n("p",[t._v("应用场景：面对不同业务所需的组件不同，因此抽离并且封装内部数据流通，封装基础组件。")]),t._v(" "),n("p",[t._v("最终页面效果如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(501),alt:"h5_editor.gif"}})]),t._v(" "),n("h2",{attrs:{id:"页面布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#页面布局"}},[t._v("#")]),t._v(" 页面布局")]),t._v(" "),n("p",[n("img",{attrs:{src:s(502),alt:"image.png"}})]),t._v(" "),n("h2",{attrs:{id:"数据流转"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据流转"}},[t._v("#")]),t._v(" 数据流转")]),t._v(" "),n("p",[t._v("主要数据流转如下图：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(503),alt:"image.png"}})]),t._v(" "),n("p",[t._v("上图就是数据流转的使用图：通过将基础组件信息传入 h5-editor，然后输出一份 json 数据，然后通过这份 json 数据打包生成 html 页面。")]),t._v(" "),n("p",[t._v("组件最后的使用方式为：")]),t._v(" "),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h5-editor")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("jsonData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":data")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h5-editor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h2",{attrs:{id:"数据格式及流转"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据格式及流转"}},[t._v("#")]),t._v(" 数据格式及流转")]),t._v(" "),n("h3",{attrs:{id:"外部传入-h5-editor-组件信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#外部传入-h5-editor-组件信息"}},[t._v("#")]),t._v(" 外部传入 h5-editor 组件信息")]),t._v(" "),n("p",[t._v("外部传入基本数据信息 data 格式如下：")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染组件")]),t._v("\n        styleComponent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染组件对应修改样式的组件")]),t._v("\n        dynamicStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件样式 props")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...       ")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("ul",[n("li",[n("code",[t._v("component")]),t._v("：渲染组件，即拖拽添加到页面、最后显示到实际页面上的组件；")]),t._v(" "),n("li",[n("code",[t._v("styleComponent")]),t._v("：渲染组件对应的样式修改组件。即在中间预览区域点击了一个组件后，右边区域显示对应的样式修改组件。")]),t._v(" "),n("li",[n("code",[t._v("dynamicStyle")]),t._v("：该属性是传入到组件内部的 props 对象。")])]),t._v(" "),n("h3",{attrs:{id:"h5-editor-输出数据格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#h5-editor-输出数据格式"}},[t._v("#")]),t._v(" h5-editor 输出数据格式")]),t._v(" "),n("p",[t._v("h5-editor 调用者和 h5-editor 组件通过 v-model 共享一份 jsonData 数据。有两个作用：")]),t._v(" "),n("ul",[n("li",[t._v("调用者实时拿到 jsonData 数据；")]),t._v(" "),n("li",[t._v("可用于草稿 jsonData 数据的传入初始化 h5-editor 组件信息。")])]),t._v(" "),n("p",[t._v("jsonData 数据格式如下：")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基本配置信息")]),t._v("\n    pageInfo"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        title"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ''"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面标题")]),t._v("\n        description"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ''"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面描述")]),t._v("\n        backgroundColor"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ''"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面背景色")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面布局信息")]),t._v("\n    layout"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    \t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t\ttype"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ''"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件类型，对用 component.name")]),t._v("\n    \t\tdynamicStyle"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面样式信息 ")]),t._v("\n    \t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"数据流转过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据流转过程"}},[t._v("#")]),t._v(" 数据流转过程")]),t._v(" "),n("p",[t._v("渲染组件 component 和 样式修改组件 styleComponent 都包含这个 props 对象，这样一旦样式修改组件 styleComponent 修改了样式，就通过向父级组件派发样式修改事件 changeStyle（通过 "),n("code",[t._v("this.$emit('changeStyle', newDynamicStyleObj)")]),t._v("派发），这样父级组件 h5-editor 就可以接收到样式修改事件和新的样式值，然后将新的样式值注入到渲染组件 component 的 dynamicStyle props 中，最后将页面样式进行更新。")]),t._v(" "),n("p",[n("img",{attrs:{src:s(504),alt:"image.png"}})]),t._v(" "),n("p",[t._v("总结：h5-editor 在渲染组件 component 和样式修改组件 styleComponent 之间扮演的角色只是数据转发的作用。")])])}),[],!1,null,null,null);a.default=e.exports}}]);