(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{485:function(t,e,n){"use strict";n.r(e);var v=n(56),s=Object(v.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"px"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px"}},[t._v("#")]),t._v(" px")]),t._v(" "),n("p",[t._v("对于"),n("strong",[t._v("px")]),t._v("，大家都不陌生。它是一个相对于屏幕的相对长度单位。")]),t._v(" "),n("h2",{attrs:{id:"em"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#em"}},[t._v("#")]),t._v(" em")]),t._v(" "),n("p",[n("strong",[t._v("em")]),t._v("也是一个相对长度单位，但它相对的是父级元素的字体大小。\n对于em有一个推算过程：\n如果没有定义自己的font-size，则：浏览器默认："),n("em",[t._v("1em = 16px")]),t._v("\n所以：\n"),n("em",[t._v("12px = 0.75em")]),t._v(" "),n("em",[t._v("10px = 0.625em")]),t._v("\n但是如果每次都这样进行计算很麻烦，而且开发效率也很低，因此为了简化计算，我们将浏览器的font-size设置为"),n("strong",[t._v("62.5%")]),t._v("，这样：\n"),n("strong",[t._v("1em = （16px * 62.5%） = 10px； 1.2em = 12px")]),t._v("\n依次类推，要使用em这个相对长度单位，只要我们在body标签里面设置了font-size为62.5%，这样只要就可以得到计算公式："),n("strong",[t._v("(n)px = (n \\ 10)em")])]),t._v(" "),n("p",[t._v("但是，em单位是相对的，不是固定的，是逐级继承的（一层一层向上计算），举个例子：\n比如，一个div里面嵌套了一个div，这两个div都设置了font-size为1.2em，浏览器的font-size设置为62.5%，此时，最里层的div的font-size大小是："),n("strong",[t._v("（1.2 * 1.2） = 1.44em")]),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"rem"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rem"}},[t._v("#")]),t._v(" rem")]),t._v(" "),n("p",[n("strong",[t._v("rem")]),t._v("也是相对长度单位，从它的单位也可以看出，它跟"),n("strong",[t._v("em")]),t._v("比较，多了个 "),n("strong",[t._v("r")]),t._v(" 字母，它的意思就是"),n("strong",[t._v("root（根）"),n("strong",[t._v("的意思。简单来说，就是它是相对于根节点（html标签）的font-size而言的。这样子，就消除了")]),t._v("em")]),t._v("单位逐级继承的缺点。\n举个例子：\n先将"),n("strong",[t._v("html")]),t._v("标签设置为62.5%，这样，html里面的任何子标签都是继承于这个标签，也就是说相对于这个标签。所以，不论标签中有多少级的嵌套，最里层标签的font-size的计算公式永远是："),n("strong",[t._v("(n)px = (n \\ 10)rem")])])])}),[],!1,null,null,null);e.default=s.exports}}]);