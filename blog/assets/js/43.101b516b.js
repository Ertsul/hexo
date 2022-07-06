(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{554:function(e,t,l){"use strict";l.r(t);var o=l(18),v=Object(o.a)({},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h2",{attrs:{id:"nodejs-event-loop"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-event-loop"}},[e._v("#")]),e._v(" Nodejs Event Loop")]),e._v(" "),l("ul",[l("li",[e._v("Timer: setTimeout setInterval（在 poll 空闲时执行）")]),e._v(" "),l("li",[e._v("Pending Callback: 上一轮遗留的 callBack，执行一些错误的系统回调。")]),e._v(" "),l("li",[e._v("Idle、prepare: nodejs 内部调用")]),e._v(" "),l("li",[e._v("poll: I/O等\n"),l("ul",[l("li",[e._v("轮询队列不为空\n"),l("ul",[l("li",[e._v("执行轮询队列，之后执行 check")])])]),e._v(" "),l("li",[e._v("轮询队列为空\n"),l("ul",[l("li",[e._v("如果有 setImmediate 在等待执行，则会执行 check")]),e._v(" "),l("li",[e._v("没有 setImmediate，如果有超时的 timer，则会执行超时的 timer，没有则"),l("a",{attrs:{href:"http://lynnelv.github.io/js-event-loop-nodejs",target:"_blank",rel:"noopener noreferrer"}},[e._v("阻塞挂起该阶段，下一轮 loop 会去 timer 检查有无需要执行的 timer"),l("OutboundLink")],1)])])])])]),e._v(" "),l("li",[e._v("check: setImmediate（在 poll 执行完之后执行）")]),e._v(" "),l("li",[e._v("close callback")])]),e._v(" "),l("p",[e._v("在每次事件循环运行之间，Node.js会检查它是否正在等待任何异步"),l("code",[e._v("I/O")]),e._v("或"),l("code",[e._v("timers")]),e._v("，如果没有，则将其干净地关闭。")]),e._v(" "),l("p",[e._v("process.nextTick 独立的队列，会先清空该队列再执行 event loop。")]),e._v(" "),l("p",[e._v("通过 v8 引擎解析 js 代码，然后解析后的代码调用 node API，node API 通过 libuv 执行，最后通过 v8 引擎返回执行结果。")])])}),[],!1,null,null,null);t.default=v.exports}}]);