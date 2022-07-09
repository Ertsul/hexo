(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{474:function(e,t,v){e.exports=v.p+"assets/img/git-27.10655e2a.png"},475:function(e,t,v){e.exports=v.p+"assets/img/git-28.0d490d35.png"},476:function(e,t,v){e.exports=v.p+"assets/img/git-29.d8beed7f.png"},477:function(e,t,v){e.exports=v.p+"assets/img/git-30.433f9a29.png"},478:function(e,t,v){e.exports=v.p+"assets/img/git-31.899009f1.png"},479:function(e,t,v){e.exports=v.p+"assets/img/git-32.756a1273.png"},480:function(e,t,v){e.exports=v.p+"assets/img/git-33.1c676473.png"},481:function(e,t,v){e.exports=v.p+"assets/img/git-34.9028e0bf.png"},482:function(e,t,v){e.exports=v.p+"assets/img/git-35.7eeb5bba.png"},483:function(e,t,v){e.exports=v.p+"assets/img/git-36.be908b68.png"},484:function(e,t,v){e.exports=v.p+"assets/img/git-37.ceed2ca2.png"},485:function(e,t,v){e.exports=v.p+"assets/img/git-38.a64e93d1.png"},486:function(e,t,v){e.exports=v.p+"assets/img/git-39.8c10cdc3.png"},487:function(e,t,v){e.exports=v.p+"assets/img/git-40.3f454cd0.png"},488:function(e,t,v){e.exports=v.p+"assets/img/git-41.7b9d4d2f.png"},489:function(e,t,v){e.exports=v.p+"assets/img/git-42.05a42038.png"},490:function(e,t,v){e.exports=v.p+"assets/img/git-43.ce6690f3.png"},491:function(e,t,v){e.exports=v.p+"assets/img/git-44.12c14cb1.png"},543:function(e,t,v){"use strict";v.r(t);var a=v(18),_=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"cherry-pick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cherry-pick"}},[e._v("#")]),e._v(" cherry-pick")]),e._v(" "),a("p",[a("em",[e._v("cherry-pick")]),e._v(" 可以将分支 "),a("em",[e._v("B")]),e._v(" 的任何"),a("strong",[e._v("一个")]),e._v(" "),a("em",[e._v("commit")]),e._v(" 合并到分支 "),a("em",[e._v("A")]),e._v("。")]),e._v(" "),a("p",[a("strong",[e._v("情景")]),e._v("："),a("em",[e._v("dev")]),e._v(" 分支有两个 "),a("em",[e._v("commit")]),e._v("，分别是：创建 "),a("em",[e._v("b.txt")]),e._v(" 文件 "),a("em",[e._v("commitB")]),e._v("、创建 "),a("em",[e._v("c.txt")]),e._v(" 文件 "),a("em",[e._v("commitC")]),e._v("。现在我们只想要合并 *commitAB 到 "),a("em",[e._v("master")]),e._v(" 分支。下面是 "),a("em",[e._v("master")]),e._v(" 和 "),a("em",[e._v("dev")]),e._v(" 两个分支的情况：")]),e._v(" "),a("p",[a("img",{attrs:{src:v(474),alt:"image.png"}})]),e._v(" "),a("p",[a("img",{attrs:{src:v(475),alt:"image.png"}})]),e._v(" "),a("p",[e._v("如果直接用 "),a("em",[e._v("git merge")]),e._v(" 会将 "),a("em",[e._v("commitC")]),e._v(" 也合并到 "),a("em",[e._v("master")]),e._v("，这不是我们想要的结果。这时候，"),a("em",[e._v("cherry-pick")]),e._v(" 就派上用场了。用法如下：")]),e._v(" "),a("ul",[a("li",[e._v("切换到目标分支。")]),e._v(" "),a("li",[a("em",[e._v("cherry-pick")]),e._v(" 待合并的 "),a("em",[e._v("commitID")]),e._v("。")])]),e._v(" "),a("p",[e._v("上面的情景，只需要：")]),e._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[e._v("git checkout master\ngit cherry-pick 8f2aa26\n")])])]),a("p",[e._v("结果如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:v(476),alt:"image.png"}})]),e._v(" "),a("p",[e._v("不过，"),a("em",[e._v("cherry-pick")]),e._v(" 只能合并单个指定的 "),a("em",[e._v("commit")]),e._v("。☞ "),a("a",{attrs:{href:"http://git-scm.com/docs/git-cherry-pick",target:"_blank",rel:"noopener noreferrer"}},[e._v("cherry-pick 更多操作"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebase"}},[e._v("#")]),e._v(" rebase")]),e._v(" "),a("p",[a("em",[e._v("rebase变基")]),e._v(" 是 "),a("em",[e._v("Git")]),e._v(" 中整合来自不同分支修改的一种操作。（另一种是 "),a("em",[e._v("merge")]),e._v("）")]),e._v(" "),a("p",[a("strong",[e._v("情景1")]),e._v("："),a("em",[e._v("dev")]),e._v(" 分支有两个 "),a("em",[e._v("commit")]),e._v(" ，分别是：创建 "),a("em",[e._v("d.txt")]),e._v(" 文件 "),a("em",[e._v("commitD")]),e._v("、创建 "),a("em",[e._v("e.txt")]),e._v(" 文件 "),a("em",[e._v("commitE")]),e._v("。现在我们想要将 "),a("em",[e._v("dev")]),e._v(" 分支的所有 "),a("em",[e._v("commit")]),e._v(" 合并到 "),a("em",[e._v("master")]),e._v("。下面是 "),a("em",[e._v("dev")]),e._v(" 分支的情况：")]),e._v(" "),a("p",[a("img",{attrs:{src:v(477),alt:"image.png"}})]),e._v(" "),a("p",[e._v("想要通过 "),a("em",[e._v("rebase")]),e._v(" 变基将 "),a("em",[e._v("commit")]),e._v(" 合并到 "),a("em",[e._v("master")]),e._v("，只需要：")]),e._v(" "),a("ul",[a("li",[e._v("将 "),a("em",[e._v("dev")]),e._v(" 分支变基到 "),a("em",[e._v("master")]),e._v(" 分支。")]),e._v(" "),a("li",[e._v("切换到 "),a("em",[e._v("master")]),e._v(" 分支。")]),e._v(" "),a("li",[e._v("执行 "),a("em",[e._v("merge")]),e._v(" 操作。")])]),e._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[e._v("git rebase master\ngit checkout master \ngit merge "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("no-ff dev\n")])])]),a("p",[e._v("最后结果如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:v(478),alt:"1570868576457.png"}})]),e._v(" "),a("p",[e._v("通过 "),a("em",[e._v("rebase")]),e._v(" 合并分支跟 "),a("em",[e._v("merge")]),e._v(" 合并是不一样的。☞ "),a("a",{attrs:{href:"%5Bhttp://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%8F%98%E5%9F%BA%5D(http://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%8F%98%E5%9F%BA)"}},[e._v("点击查看区别")])]),e._v(" "),a("p",[a("strong",[e._v("情景2")]),e._v("："),a("em",[e._v("dev")]),e._v(" 分支上有四个 "),a("em",[e._v("commit")]),e._v("，顺序分别是：创建 "),a("em",[e._v("f.txt")]),e._v(" 文件 "),a("em",[e._v("commitF")]),e._v("、增加 "),a("em",[e._v("f.txt")]),e._v(" 文件内容 "),a("em",[e._v("commitF1")]),e._v("、创建 "),a("em",[e._v("g.txt")]),e._v(" 文件 "),a("em",[e._v("commitG")]),e._v("、增加 "),a("em",[e._v("g.txt")]),e._v(" 文件内容 "),a("em",[e._v("commitG1")]),e._v("。现在只想要将 "),a("em",[e._v("dev")]),e._v(" 分支上关于文件 "),a("em",[e._v("f.txt")]),e._v(" 的所有操作合并到 "),a("em",[e._v("master")]),e._v(" 分支。下面是 "),a("em",[e._v("dev")]),e._v(" 分支的情况：")]),e._v(" "),a("p",[a("img",{attrs:{src:v(479),alt:"image.png"}})]),e._v(" "),a("p",[e._v("现在只想要将 "),a("em",[e._v("dev")]),e._v(" 分支上关于文件 "),a("em",[e._v("f.txt")]),e._v(" 的所有操作合并到 "),a("em",[e._v("master")]),e._v(" 分支，需要：")]),e._v(" "),a("ul",[a("li",[e._v("以 "),a("em",[e._v("f.txt")]),e._v(" 的最后一个修改的 "),a("em",[e._v("commitID")]),e._v(" 新建一个分支 "),a("em",[e._v("dev-temp")]),e._v("。")]),e._v(" "),a("li",[e._v("将以 "),a("em",[e._v("dev-temp")]),e._v(" 分支上关于 "),a("em",[e._v("f.txt")]),e._v(" 的第一个修改的 "),a("em",[e._v("commitID")]),e._v(" "),a("em",[e._v("rabase")]),e._v(" 变基到 "),a("em",[e._v("master")]),e._v(" 分支。")]),e._v(" "),a("li",[e._v("切换到 "),a("em",[e._v("master")]),e._v(" 分支。")]),e._v(" "),a("li",[a("em",[e._v("merge")]),e._v(" "),a("em",[e._v("dev-temp")]),e._v(" 分支到 "),a("em",[e._v("master")]),e._v(" 分支。")])]),e._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[e._v("git checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("b dev-temp 884c858\ngit rebase "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("onto master 3b0bfd7^\ngit checkout master \ngit merge "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("no-ff dev-temp\n")])])]),a("p",[a("img",{attrs:{src:v(480),alt:"image.png"}})]),e._v(" "),a("p",[a("strong",[e._v("情景3")]),e._v("："),a("em",[e._v("dev")]),e._v(" 分支上有四个 "),a("em",[e._v("commit")]),e._v("，顺序分别是：创建 "),a("em",[e._v("i.txt")]),e._v(" 文件 "),a("em",[e._v("commitI")]),e._v("、增加 "),a("em",[e._v("i.txt")]),e._v(" 文件内容 "),a("em",[e._v("commitI1")]),e._v("、创建 "),a("em",[e._v("j.txt")]),e._v(" 文件 "),a("em",[e._v("commitJ")]),e._v("、增加 "),a("em",[e._v("j.txt")]),e._v(" 文件内容 "),a("em",[e._v("commitJ1")]),e._v("。现在只想要将 "),a("em",[e._v("dev")]),e._v(" 分支上关于文件 "),a("em",[e._v("j.txt")]),e._v(" 的所有操作合并到 "),a("em",[e._v("master")]),e._v(" 分支。下面是 "),a("em",[e._v("dev")]),e._v(" 分支的情况：（其实跟上面的情况和操作一样）")]),e._v(" "),a("p",[a("img",{attrs:{src:v(481),alt:"image.png"}})]),e._v(" "),a("p",[e._v("现在只想要将 "),a("em",[e._v("dev")]),e._v(" 分支上关于文件 "),a("em",[e._v("j.txt")]),e._v(" 的所有操作合并到 "),a("em",[e._v("master")]),e._v(" 分支，需要：")]),e._v(" "),a("ul",[a("li",[e._v("以 "),a("em",[e._v("j.txt")]),e._v(" 的最后一个修改的 "),a("em",[e._v("commitID")]),e._v(" 新建一个分支 "),a("em",[e._v("dev-temp1")]),e._v("。")]),e._v(" "),a("li",[e._v("将以 "),a("em",[e._v("dev-temp1")]),e._v(" 分支上关于 "),a("em",[e._v("j.txt")]),e._v(" 的第一个修改的 "),a("em",[e._v("commitID")]),e._v(" "),a("em",[e._v("rabase")]),e._v(" 变基到 "),a("em",[e._v("master")]),e._v(" 分支。")]),e._v(" "),a("li",[e._v("切换到 "),a("em",[e._v("master")]),e._v(" 分支。")]),e._v(" "),a("li",[a("em",[e._v("merge")]),e._v(" "),a("em",[e._v("dev-temp1")]),e._v(" 分支到 "),a("em",[e._v("master")]),e._v(" 分支。")])]),e._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[e._v("git checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("b dev-temp1 54ea4bd\ngit rebase "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("onto master e31249b^\ngit checkout master \ngit merge "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("no-ff dev-temp1\n")])])]),a("p",[a("img",{attrs:{src:v(482),alt:"image.png"}})]),e._v(" "),a("p",[a("a",{attrs:{href:"%5Bhttp://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%8F%98%E5%9F%BA%5D(http://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%8F%98%E5%9F%BA)"}},[e._v("rebase更多操作")])]),e._v(" "),a("h2",{attrs:{id:"合并多个-commit-为一个-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并多个-commit-为一个-commit"}},[e._v("#")]),e._v(" 合并多个 commit 为一个 commit")]),e._v(" "),a("p",[e._v("合并多个 "),a("em",[e._v("commit")]),e._v(" 为一个 "),a("em",[e._v("commit")]),e._v(" 同样需要 "),a("em",[e._v("rebase")]),e._v("。")]),e._v(" "),a("p",[e._v("如下图：要将最新的两个 "),a("em",[e._v("commit")]),e._v(" 合并为一个 "),a("em",[e._v("commit")]),e._v("。具体操作如下：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("找到这三个 "),a("em",[e._v("commit")]),e._v(" 的前一个 "),a("em",[e._v("commit")]),e._v(" 的 "),a("em",[e._v("commitID")]),e._v("，执行 "),a("code",[e._v("git rebase -i commitID")])])]),e._v(" "),a("li",[a("p",[e._v("这时候会进入 "),a("em",[e._v("vi")]),e._v(" 编辑。")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("pick")]),e._v(" 的意思是要会执行这个 "),a("em",[e._v("commit")])]),e._v(" "),a("li",[a("code",[e._v("squash")]),e._v(" 的意思是这个 commit 会被合并到前一个 "),a("em",[e._v("commit")])])])]),e._v(" "),a("li",[a("p",[e._v("之后会进入 "),a("em",[e._v("vi")]),e._v(" 编辑 "),a("em",[e._v("commit")]),e._v(" 信息。只需要将原先的 "),a("em",[e._v("commit")]),e._v(" 信息注释，在顶部添加新的 "),a("em",[e._v("commit")]),e._v(" 信息。")])]),e._v(" "),a("li",[a("p",[e._v("完成。")]),e._v(" "),a("p",[a("img",{attrs:{src:v(483),alt:"image.png"}})]),e._v(" "),a("p",[a("img",{attrs:{src:v(484),alt:"image.png"}})]),e._v(" "),a("p",[a("img",{attrs:{src:v(485),alt:"image.png"}})]),e._v(" "),a("p",[a("img",{attrs:{src:v(486),alt:"image.png"}})]),e._v(" "),a("p",[a("img",{attrs:{src:v(487),alt:"image.png"}})])])]),e._v(" "),a("h2",{attrs:{id:"删除分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除分支"}},[e._v("#")]),e._v(" 删除分支")]),e._v(" "),a("p",[e._v("删除分支包括删除本地分支和远程分支：")]),e._v(" "),a("ul",[a("li",[e._v("删除本地分支\n"),a("ul",[a("li",[e._v("如本地分支不是打开状态，则："),a("code",[e._v("git branch -d branchName")])]),e._v(" "),a("li",[e._v("如本地分支是打开状态，则："),a("code",[e._v("git branch -D branchName")])])])]),e._v(" "),a("li",[e._v("删除远程分支\n"),a("ul",[a("li",[a("code",[e._v("git push origin --delete branchName")])])])])]),e._v(" "),a("h2",{attrs:{id:"恢复分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#恢复分支"}},[e._v("#")]),e._v(" 恢复分支")]),e._v(" "),a("p",[e._v("恢复分支，我们只需要以之前分支的 "),a("em",[e._v("commitID")]),e._v(" 新开一个分支即可。")]),e._v(" "),a("p",[a("img",{attrs:{src:v(488),alt:"image.png"}})]),e._v(" "),a("p",[e._v("如果不记得 "),a("em",[e._v("commitID")]),e._v("，可以通过 "),a("em",[e._v("git reflog")]),e._v(" 进行查看。")]),e._v(" "),a("p",[a("img",{attrs:{src:v(489),alt:"1570871432663.png"}})]),e._v(" "),a("h2",{attrs:{id:"撤销本地修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤销本地修改"}},[e._v("#")]),e._v(" 撤销本地修改")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("撤销指定本地文件的修改（未提交状态）："),a("code",[e._v("git checkout -- fileName")])]),e._v(" "),a("p",[a("img",{attrs:{src:v(490),alt:"image.png"}})])]),e._v(" "),a("li",[a("p",[e._v("撤销本地的所有修改（未提交状态）："),a("code",[e._v("git reset --hard")])]),e._v(" "),a("p",[a("img",{attrs:{src:v(491),alt:"image.png"}})])])]),e._v(" "),a("h2",{attrs:{id:"其他基本操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他基本操作"}},[e._v("#")]),e._v(" 其他基本操作")]),e._v(" "),a("ul",[a("li",[e._v("生成本地的 "),a("em",[e._v("key")]),e._v("，并添加到远程仓库")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ssh-keygen -t rsa\n")])])]),a("ul",[a("li",[e._v("初始化本地目录")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git init\n")])])]),a("ul",[a("li",[e._v("添加到本地仓库")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git add filename\n")])])]),a("ul",[a("li",[e._v("提交到仓库（"),a("em",[e._v("git")]),e._v(" 提交的是修改）")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('git commit -m "description"\n')])])]),a("ul",[a("li",[e._v("查看仓库状态")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git status\n")])])]),a("ul",[a("li",[e._v("查看不同点")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git diff filename\n")])])]),a("ul",[a("li",[e._v("版本回退")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git reset --hard\n")])])]),a("ul",[a("li",[e._v("第一分支 "),a("em",[e._v("master")]),e._v(" 创建分支 "),a("em",[e._v("v1")]),e._v(" （"),a("em",[e._v("HEAD")]),e._v(" 指向当前分支）")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 创建并指向新分支\ngit checkout -b v1 \n// 分步执行\ngit branch v1\ngit checkouut v1\n")])])]),a("ul",[a("li",[e._v("合并到当前分支")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git merge v1\n")])])]),a("ul",[a("li",[e._v("删除指定分支")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git branch -d v1\n")])])]),a("ul",[a("li",[e._v("指定分支将远程仓库的代码拉到本地")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone gitAddress -b branchName\n")])])]),a("ul",[a("li",[e._v("将本地的代码提交到远程仓库")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('git pull    //获取最新的更改\ngit add modefied_filename\ngit commit -m "description"\ngit push  // 推送\n')])])]),a("ul",[a("li",[e._v("冲突解决\n可以用上面的方法解决就解决，不行的话就用下面的方法：\n"),a("ul",[a("li",[e._v("用远程仓库的代码完全覆盖本地代码。")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git reset --hard // 版本回退\ngit pull\n\n")])])]),a("ul",[a("li",[e._v("修改 commit 提交的内容")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git commit --amend\n\n")])])]),a("ul",[a("li",[e._v("打印 log 数量")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git log -p -3\n\n")])])]),a("ul",[a("li",[e._v("文件被添加到暂存区，撤销该文件到工作目录")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git reset HEAD fliename\n\n")])])]),a("ul",[a("li",[e._v("工作目的删除文件后，还有在暂存区中删除该文件")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rm filename\ngit rm filename\n\n")])])]),a("ul",[a("li",[e._v("撤销对当前文件的修改，恢复到上一次快照的状态")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git checkout -- filename\n\n")])])]),a("ul",[a("li",[a("em",[e._v("HEAD")]),e._v(" 指针指向当前的分支，提交后都会快进（"),a("em",[e._v("fast-forward")]),e._v(" ：指针右移）。")]),e._v(" "),a("li",[a("em",[e._v("rebase")]),e._v(" 合并分支\n变基是将一系列提交按照原有次序依次应用到另一分支上，而合并是把最终结果合在一起。使得提交历史更加整洁。 你在查看一个经过变基的分支的历史记录时会发现，尽管实际的开发工作是并行的，但它们看上去就像是串行的一样，提交历史是一条直线没有分叉。")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('git checkout dev\n......修改......\ngit add filename\ngit commit -m "......"\ngit rebase master\ngit checkout master\ngit merge dev\n\n')])])])])}),[],!1,null,null,null);t.default=_.exports}}]);