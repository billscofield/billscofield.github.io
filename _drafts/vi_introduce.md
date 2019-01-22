vim是什么？如果你从未听所过或者对其了解甚少，你来对地方了，本文将以简洁的语言讲述文本编辑器的诞生发展历程。

## 什么是编辑器？
1. 编辑器就是一种软件，用来让我们编写和查看文本文件。比如我们熟知的记事本、word、福昕PDF、Typroa等。这些软件一般都是面向普通使用者的，面向对象比较广，使用门槛比较低，不需要学习专业的计算机知识就可以快速使用。

1. 除了这些面向普罗大众的编辑器外，还存在着世外桃源，和计算机打交道最多的程序员所使用的编辑器。这些编辑器通常被命名为IDE(Integrated Development Environment )，虽然名字上高大上很多，但本质上依旧是个文字处理的东西。下面列举一下程序员常用的文本编辑器IDE:
    1. Dreamweaver
    1. Sublime Text
    1. Visual Studio Code
    1. Atom
    1. WebStorm
    1. HBuilder
    1. ...

1. 如果我们对上面所列举的所有面向普罗大众的编辑器，或者程序员专用的编辑器都稍微了解一些的话，就会发现一个共同点，那就是他们必须在配合鼠标的状态下才能更好的完成任务。试想一下加入你在编写一个HTML文件，而此时没有鼠标，Oh no, this is awful...

1. 读者可能会说了，我们可以买一个鼠标啊。但是我要告诉读者下面一个事实
    1. 最早的计算机是没有鼠标的，输入设备只有键盘而已
    1. 最早的计算机是没有图形化的概念的，计算机屏幕上只能显示黑底白字
    1. 鼠标是在有了图形化系统之后才有的产物
        1. 鼠标的产生
            1. 1981年，施乐推出了他们的“施乐之星（Xerox Star）”，这台电脑运行着用户图形界面，鼠标，位图显示，窗口以及桌面概念，但是因为售价太过于昂贵，所以没有取得商业上的成功。
            1. 乔布斯看到施乐的产品后，非常激动，看到了计算机的发展方向，于是也利用各种手段（额、不对，是方法），发展自家的视窗操作系统以及鼠标。后来比尔盖茨也加入到了视窗操作的行列中来，并一次成就了微软在面向普通消费者领域的操作系统霸主地位。

1. 所以在没有视窗操作系统之前，程序员应该如何写程序呢？
    1. 这就要把时间前移，回到 Unix 诞生之前的一段时间

## 从Multics一路走来
最为经典的编辑器有 Vi 和 Emacs，因为这里主要是 Vi 的介绍，所以本文选择性忽略 Emacs。

### Unix 诞生
1. 1966年，Ken Thompson 在加州大学伯克利分校完成了硕士学位，那时 Thompson 使用的是一款名为 QED 的文本编辑器。
1. 后来 Thompson 加入到了AT&T贝尔实验室，并参与到由贝尔实验室、麻省理工学院及美国通用电气公司所共同参与研发的multics分时操作系统项目，其目的是为了开发出一套安装在大型主机上多人多工的操作系统。
    1. 分时操作系统是使一台计算机采用时间片轮转的方式同时为几个、几十个甚至几百个用户服务的一种操作系统。
1. Multics其目的是想要让大型主机可以达成提供300个以上的终端机连线使用，后来因 multics 计划的工作进度过于缓慢，资金短缺，宣告失败。
1. Thompson 撰写了一个名为 Space Travel（星际旅行）的游戏，因为退出了 Multics 项目而无权使用实验室的大型机，只好在以太PDP-7 小型机上重写了程序，并写出了 Unix系统，（为什么叫Unix呢？历史原因不明，但是和 Multics 是有关联的）
1. 与此同时，Dennis Ritchie 开发出了 C 语言
1. Thompson 联手 Denni Ritchie 用C语言重写了Unix，越来越多的大型机、小型机开始采用Unix，这使得操作系统得到统一。

### qed、ed、em、ex、vi、vim
1. Thompson 在伯克利分校的时候使用一款名为QED的编辑器，当其加入到multics项目的时候，重写了QED，并添加、修改、删除了一些特性，并将其命名为 ed。
1. 1975 年，一个名叫 George Coulouris 的人在伦敦玛丽皇后学院的 Unix 系统上开发了一个改进版 ed ，Coulouris 将他的程序命名为 em，或者“为凡人而生的编辑器”。
1. 1976年，Coulouris 把 em 引入了加州大学伯克利分校，在伯克利，Coulouris 遇到了 Bill Joy，Joy 以 Coulouris 的源代码为基础，为扩展 ed 建立了一个名为 ex 的改进版 ed。
1. 1978年，1.1 版本的 ex 与第 1 个版本的 BSD Unix 捆绑在一起。
1. 1979 年的第 2 版 BSD 引入了一个名为 vi 的可执行文件，它只在可视模式下打开 ex 。ex/vi （后来称为 vi）建立了我们现在使用的 Vim 中大多数的约定
1. vi 是除 ed 之外唯一与 BSD Unix 捆绑的文本编辑器。在那个时候，Emacs 可能会花费数百美元（这是在 GNU Emacs 之前），所以 vi 变得非常流行。但是 vi 是 ed 的直接衍生版本，这意味着如果没有 AT&T 的源代码，源代码就不能被修改。这促使一些人创建了 vi 的开源版本。
1. Bram Moolenaar 创建了 Vim
    1. Bram Moolenaar 想要为他全新的 Amiga 2000 准备一款类似于 vi 的编辑器。Moolenaar 已经习惯了在大学时使用的 Unix 系统上的 vi ，当时他 已经对vi了如指掌。所以在 1988 年，Moolenaar 使用当时的 STEVIE vi克隆版本开始在 Vim 上工作。
    1. 注意到其缺失了很多 vi 命令。因此，在第一次发布 Vim 时，Moolenaar 优先考虑了 vi 的兼容性。
    1. 1991年，Vim 以 Vi模拟为名第一次发布。在 1993 年通过 FTP 发布 Vim 2.0 之前，Vim 都仍以 Vi模拟 的身份存在。
    1. 2006 年，Vim 被 Linux Journal 读者评为最受欢迎的编辑器。


Vim无处不在，vim 是 Unix、Linux 的默认编辑器，很多热门的命令行工具都默认使用Vim的工作方式，以至于那些未入门的人会被困到Vim中，有个段子：”如何生成一段随机字符？打开vim，让一个从未接触过vim的人去敲键盘”。

很多软件都集成了 Vim 插件，比如Chrome浏览器，用户可以安装一个名为 vimium 的插件，这样当你按下j键之后，页面会滚到下面（同向下的光标键），而当按下k键则会滚到上面（同向上的光标键）。

这里笔者向赞赏一下微软的高明，想当年微软为了快速占领市场，采取了默许普通用户使用盗版的行为，所以很大一部分人群第一次接触计算机都是从 window 开始，但是作为一家商业公司，windows 

随着Linux的全球性传播，如果一个计算机使用者不知道Vim，那真是 Oh no, it's awful!






一文带你了解 Vim 的起源

http://blog.jobbole.com/114461/

Unix
https://www.cnblogs.com/Dodge/articles/4264833.html

https://blog.csdn.net/flynetcn/article/details/1757794

https://en.wikipedia.org/wiki/Bram_Moolenaar

ex and vi editors and the C shell



https://en.wikipedia.org/wiki/Bill_Joy 搜索‘ ex ’

https://baike.baidu.com/item/VIM/60410?fr=aladdin
https://www.oschina.net/translate/where-vim-came-from
https://twobithistory.org/2018/08/05/where-vim-came-from.html

Amiga
http://nb.zol.com.cn/625/6252712.html
http://digi.163.com/17/0123/09/CBF27CMI001687H3.html
https://en.wikipedia.org/wiki/Amiga


显示器发展史

诞生到现在 浅析屏幕和显示器的发展历程
https://display.ofweek.com/2015-01/ART-8321305-8500-28926053.html

15件在计算机发展史中具有里程碑意义的事件
http://blog.sina.com.cn/s/blog_3fd2c7f30102xe2p.html

计算机发展史
https://www.jd.com/phb/zhishi/6c8c1d55ff623b9f.html

计算机硬件历史
http://www.cnblogs.com/bypp/p/7157282.html





还是老古董会玩 上世纪的电脑都长这样

http://nb.zol.com.cn/582/5825809_all.html





ed是面向行的编辑器

http://book.51cto.com/art/201001/179460.htm

http://book.51cto.com/art/201001/179461.htm





最早的显示器到底是什么样子的？

1. 可以显示多少行？

1. 是实时刷新整个屏幕吗？

