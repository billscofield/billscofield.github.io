## 名词
* typography [taɪˈpɑ:grəfi] 排印，印刷术
* typeface ['taɪpfeɪs]  字形

* x-height or corpus size is the distance between the baseline and the mean line of lower-case letters in a typeface. 
* 升部（ascenders）：像小写字母b、d、f、h、k、l这样从x字高向上延伸的部分成为升部，其高度成为升部高，升部顶部的对齐线称为升部线。
* 升部线（ascender height）：有些元素可能超过大写字母高度，这个高度就是升部线的高度。

* 降部（descenders）：像小写字母g、j、p、q、y这样从基线向下延伸的部分称为降部。
* 降部线(descender height)：字母向下延长部分的长度，它决定着这套字体的风格和态度。

* 大写字母高度（cap height）：Cap是capital（大写字母）的简称，有时也用capital height全称，是指H或E等直线型大写字母从基线到字母顶部的高度。而H或E等顶部这条对齐线叫作都大写线（cap line）。

* 基线（baseline）：所有字母放置的标准线。它是文本中一条稳定的轴线，它是校准文本与图片，文本与文本的一条重要的参考线。

* EM Square
    * 也被称作“EM size”或者“UPM”。在一个字体中，每个字符都放置在其空间容器内。在传统的金属字模中，这个容器就是每个字符的实际金属块。每个字符的高度是统一的，这样每个字模可以整齐地放进行和块中
    * 字模的高度被称为“em”，起源于大写的字符“M”的宽度；这个字母的比例被做成了方形（因此有了“EM Square”的称呼）。em size 是根据字模计算出的点值。因此一个 10 磅的字体 em 也是 10 磅
    * 在数字化字体中，em 是空间的数字化定义总量。在 OpenType 字体中，UPM 或 em 大小通常是 1000 单位。在 TrueType 字体中，UPM 约定是 2 的幂，通常是 1024 或 2048。

        * 当时用字体来设置样式时，em 将会缩放到需要的点值。这意味着对于 10 磅的字体样式，1000 单位在这个实例中将会缩小到 10 磅。

        * 因此如果你的大写的“H”时 700 单位高，那么它在一个 10 磅的字体中将会被缩放到 7 磅高。


* font-size 定义了字体框（em-box）的大小，最后具体决定高度的是字体本身，因为规定1000单位，有的字体超出，有的字体小于，所以font-size的高度和font-family有关，同样的font-size，高度不一定相等。


## 引用
1. <a href='https://en.wikipedia.org/wiki/X-height'>维基百科</a>
1. <a href=''></a>
1. <a href=''></a>
1. <a href=''></a>
1. <a href=''></a>
