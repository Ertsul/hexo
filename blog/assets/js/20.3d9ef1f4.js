(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{473:function(t,s,a){t.exports=a.p+"assets/img/js-prototype-01.a828065e.png"},518:function(t,s,a){"use strict";a.r(s);var n=a(35),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"原型模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型模式"}},[t._v("#")]),t._v(" 原型模式")]),t._v(" "),n("p",[t._v("原型模式在《JavaScript高级程序设计》中的定义：")]),t._v(" "),n("blockquote",[n("p",[t._v("我们创建的每个函数都有一个prototype（原型）属性，这个属性是一个指针，指向一个对象，而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。如果按照字面意思来理解，那么prototype就是通过调用构造函数而创建的那个对象实例的原型对象。使用这个对象的好处就是可以让所有对象实例共享它包含的属性和方法。")])]),t._v(" "),n("p",[t._v("这里还有一个__proto__属性，每一个对象都拥有这个属性，这个属性指向对应的构造函数的prototype属性。")]),t._v(" "),n("p",[t._v("通过原型对象，我们就不用将信息添加到构造函数中了。")]),t._v(" "),n("h4",{attrs:{id:"实例对象共享原型对象的属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实例对象共享原型对象的属性"}},[t._v("#")]),t._v(" 实例对象共享原型对象的属性")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实例对象共享原型对象的属性")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A 1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A 1")]),t._v("\n")])])]),n("h4",{attrs:{id:"constructor-构造函数-属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#constructor-构造函数-属性"}},[t._v("#")]),t._v(" constructor（构造函数）属性")]),t._v(" "),n("p",[t._v("每个原型对象在默认情况下都会自动获取一个constructor（构造函数）属性，这个属性包含一个指针，指向这个原型所在的函数。在上面的例子中，创建Person函数后，它的prototype指向它的原型对象，这个原型对象就会获取获取constructor属性，指向Person函数。")]),t._v(" "),n("h4",{attrs:{id:"判断实例对象与原型对象之间的关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#判断实例对象与原型对象之间的关系"}},[t._v("#")]),t._v(" 判断实例对象与原型对象之间的关系")]),t._v(" "),n("ul",[n("li",[t._v("Obj.prototype.isPrototypeOf(obj)")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPrototypeOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),n("ul",[n("li",[t._v("Object.getPrototypeOf(obj)：返回对象实例的原型[es5]")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPrototypeOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPrototypeOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A")]),t._v("\n")])])]),n("ul",[n("li",[t._v("obj.hasOwnPrototype(attr)：检测一个属性是否存在于实例中。只有当实例对象重写原型对象的属性后（非原型属性）才会返回true。")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\np1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ertsul'")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasOwnProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])])]),n("ul",[n("li",[n("p",[t._v("in操作符：通过in操作符和hasOwnProperty()可以判断某属性存在于实例还是原型对象中【in判断是否存在属性，hasOwnProperty()判断存在于哪里。】可以单独使用和for-in循环使用：无论属性属于实例还是原型中，都会返回true。(‘name’ in person1)")])]),t._v(" "),n("li",[n("p",[t._v("获取所有实例的属性名字，无论是否可以枚举。")])])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOwnPropertyNames")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ["name"]')]),t._v("\n")])])]),n("ul",[n("li",[t._v("instanceof")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1 "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),n("h4",{attrs:{id:"更简单的语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更简单的语法"}},[t._v("#")]),t._v(" 更简单的语法")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'001'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("这里的例外是：constructor属性不再指向Person；本质上相当于完全重写了Person对象了。注：重写原型对象切断了现有原型与任何之前已经存在的对象实例之间的联系，它们引用的仍然是最初的原型。[详见《JavaScript高级程序设计》P156-P157，原型的动态性]")]),t._v(" "),n("h4",{attrs:{id:"搜索机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#搜索机制"}},[t._v("#")]),t._v(" 搜索机制")]),t._v(" "),n("ul",[n("li",[t._v("解释器会现在目标对象中搜索目标属性，如果当前对象没有目标属性，解释器继续在目标对象的原型对象中搜索。")]),t._v(" "),n("li",[t._v("通过delete只能删除对象的属性，而不能删除原型对象中的属性。")])]),t._v(" "),n("h4",{attrs:{id:"组合模式-默认类型-构造函数模式-原型模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组合模式-默认类型-构造函数模式-原型模式"}},[t._v("#")]),t._v(" 组合模式（默认类型）：构造函数模式 + 原型模式")]),t._v(" "),n("p",[t._v("构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性。")]),t._v(" "),n("h2",{attrs:{id:"继承"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[t._v("#")]),t._v(" 继承")]),t._v(" "),n("h4",{attrs:{id:"原型链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父亲")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Father")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fatherProperty "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Father")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getFatherValue")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fatherProperty\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 儿子")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Son")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sonProperty "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 继承父亲：通过实例化父亲，将实例化对象作为儿子的原型，这样儿子就继承了父亲的属性")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Son")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Father")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Son")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getSonValue")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sonProperty\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Son")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fatherProperty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),n("p",[t._v("上面例子中，通过实例化父亲，将实例化对象作为儿子的原型，这样儿子就继承了父亲的属性。（重写儿子的原型）。这里，儿子原型对象的[[prototype]]（注：不是prototype，[[prototype]]存在于原型中）指向的是父亲的原型对象，而父亲的原型对象的[[prototype]]指向的是Object Prototype。（由于所有函数的默认原型都是Object的实例，所以默认原型都会包含一个内部指针，指向Object.prototype）")]),t._v(" "),n("h4",{attrs:{id:"借用构造函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#借用构造函数"}},[t._v("#")]),t._v(" 借用构造函数")]),t._v(" "),n("ul",[n("li",[t._v("主要是为了解决因为引用类型值的原型属性会被所有实例共享的问题。")]),t._v(" "),n("li",[n("strong",[t._v("借用构造函数/伪造对象/经典继承")]),t._v("：在子类型构造函数的内部调用超类型构造函数。")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父亲")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Father")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Zero'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 儿子")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Son")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 继承父亲：在子类型构造函数的内部调用超类型构造函数")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 《JavaScript高级程序设计》：函数只不过是在特定环境中执行代码的对象，因此通过使用 apply()和 call() 可以在新创建的对象上执行构造函数。 ")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Father")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 借用超类的构造函数")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" f "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Father")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ["Zero", "100"]')]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Son")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ["Zero"]')]),t._v("\n")])])]),n("p",[t._v("如果在继承的时候要传递参数，则在后面添加参数即可。如：Father.call(this， param1, param2)")]),t._v(" "),n("h4",{attrs:{id:"proto"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#proto"}},[t._v("#")]),t._v(" __proto__")]),t._v(" "),n("p",[t._v("通过**__proto__**也可以实现子类型对超类型的继承。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("num")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("__proto__")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" obj\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123")]),t._v("\n")])])]),n("h4",{attrs:{id:"object-create-source"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#object-create-source"}},[t._v("#")]),t._v(" Object.create(source)")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("num")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123")]),t._v("\n")])])]),n("h4",{attrs:{id:"object-assign-object-create-obj"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#object-assign-object-create-obj"}},[t._v("#")]),t._v(" Object.assign(Object.create(obj), {…})")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("num")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("num2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("234")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" obj3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123 234")]),t._v("\n")])])]),n("h2",{attrs:{id:"补充"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[t._v("#")]),t._v(" 补充")]),t._v(" "),n("h4",{attrs:{id:"继承机制如下图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#继承机制如下图"}},[t._v("#")]),t._v(" 继承机制如下图：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(473),alt:"image.png"}})]),t._v(" "),n("h4",{attrs:{id:"测试代码如下"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试代码如下"}},[t._v("#")]),t._v(" 测试代码如下：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父类")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SuperType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子类")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SubType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子类继承父类")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SubType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SuperType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实例化父类和子类")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" superIns "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SuperType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" subIns "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SubType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子类")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SubType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SuperType {}")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subIns"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SuperType {}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父类")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SuperType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {constructor: ƒ} ")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("superIns"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {constructor: ƒ}")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SuperType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 即： Object prototype")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SuperType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("__proto__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ƒ Object() { [native code] } 即：Object")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);