# 
鑫三无:无宽度，无浮动，无图片

* 块级元素 和 display 为 block 的元素不是一个概念，例如 li display 是 list-item, table display是 table, 但它们均是块级元素，即符合**块计元素的基本特征：一个水平流上只能单独显示一个元素，多个块级元素则换行显示**

* 内联元素 和 display 为 inline 的元素不是一个概念， 例如 inline-block 和 inline-table 都是内联元素，因为它们的 "外在盒子" 都是内联元素

## 流
* 图文信息展示
    * CSS 世界的诞生就是为 图文信息展示 服务的
* 流
    * 一种基本的 定位 和 布局 机制, 可以理解为现实世界的一套物理规则，同现实世界的 "水流" 有异曲同工的表现

* HTML是CSS世界的基石
    * div 和 span 正是 CSS世界中 块级元素 和 内联级元素的代表，它们对应盛水容器中的 水 和 木头
    
* 流体布局
    * 利用 "流" 本身具有自适应的特性
    * 流体布局 要比 自适应布局狭隘的多，例如表格布局也可设置为100%自适应，但是不一样的，并不属于流体布局
    * table 是HTML，要比 CSS 出现的早得多

## 术语和概念
* number + 长度单位 = length
    * 100% 不是流体，而是具体值

* 长度单位
    * 相对"字体"长度单位
        * em, ex, rem, ch(字符0的宽度)
    * 相对"视区"长度单位
        * vh, vw, vmin, vmax

* 未定义行为
    * spec 也不可能是面面俱到的，也会存在规范描述以外的场景，不同厂家不同的理解，就是未定义行为

* 功能符
    * 值以函数形式指定
        * url()
        * calc(100%-20)
        * rgba(0,0,0,.5)
        * attr('href')
        * scale(-1)

## 流、元素和基本尺寸
* 几种盒子
    * 元年
        * 只有 block-level box 和 inline box, 块级盒子负责结构，内联盒子负责内容
    * list-item 出现
        * list-item 有两个盒子
        * 命名为 "附加盒子(标记盒子 marker box)"好了，外面的那个 就叫 "主块级盒子"
    * display:inline-block 出现
        * inline-block 有两个盒子
        * 命名为 "外在盒子" 和 "内在盒子(容器盒子)"
        * 外在盒子负责元素是可以一行显示，还是只能换行显示
        * 内在盒子负责 宽高、内容呈现
        * 以此类推
            * inline 的元素内外均是 内连盒子;
            * block 的元素内外均是 块级盒子
            * table 的元素是 block-table

* 深藏不漏的 width:auto

    1. 充分利用可用空间

    1. 收缩与包裹(shrink to fit)
        1. **absolute/fixed**
            * 有一种情况下是由外部尺寸决定，即非替换元素left/right,top/bottom 对立属性同时出现时
        1. inline-block元素
        1. float
        1. table元素
            * 有 display:table

    1. 收缩到最小(针对表格table-layout:auto) min-content
        * 最容易出现在 table-layout 为 auto 的表格中
        * white-space:nowrap;
        * 首选最小宽度

    1. 超出容器限制
        * 除非有明确的 width 设置，上述 3 种情况尺寸一般不会主动超过父级容器限制
        * 特殊情况
            1. 内容很长的英文和数字(没有中文), 
            1. white-space:nowrap, 

    1. 上面 4 个，第一个是外部尺寸，其余 3 个是内部尺寸, 这唯一的外部尺寸 是 '流'的精髓所在
    
## 内部尺寸，外部尺寸
1. 内在盒子，外在盒子
1. 内部显示，外部显示
1. 内部尺寸(intrinsic sizing)，外部尺寸(extrinsic sizing)
    * 内部尺寸:尺寸由内部元素决定
    * 外部尺寸:尺寸由外部元素决定

1. 块级元素的流体特性就是体现在里面的 '容器盒子' 上的，CSS3 用了另外一个词来表示这个内在盒子，就是 flow. 因此 display:block 更规范的脑补应该是 display:block flow

1. 表现为外部尺寸的块级元素一旦设置了宽度，就失去了流动性

### 外部尺寸与流体特性
* 正常流宽度
* 格式化*宽度*
    * 格式化宽度仅在 absolute/fixed 中出现，即包裹性中的特殊情况，由外部尺寸决定
    * 格式化宽度 具有完全的流动性，即 margin,padding,border,content 自动分配水平(垂直)空间
    * 对于“非替换元素”，当top/left,bottom/right 对立方位的属性值同时存在的时候，元素的宽度表现为 **格式化宽度(没有格式化高度，高度有差异)**，其宽度相对于最近的具有定位特性的祖先元素计算

    * 注意
        * 对于图片 chrome,ff 都是没问题,原始大小
        * 对于 textarea/(input type='search')/(input type='input')/type='password' chrome top/left/bottom/right 都为零，高度会100%， ff 则保持原始大小
            * type='image'/type='file' 都是原始大小
            * type='reset'/type='submit' height都是100%

### 内部尺寸与流体特性
* 就是元素的尺寸由内部元素决定
    * 例如，一个元素没有内容，宽度就是0，那就是应用的内部尺寸

* 内部尺寸有3中表现形式
    1. 包裹性，自适应性
        * 自适应性：**元素尺寸由内部元素决定，但永远小于“包含块”容器的尺寸（除非容器尺寸小于元素的 "首选最小宽度"),就好像 “包裹性”元素冥冥中有个 max-width:100% 的感觉**
            * button :white-space:normal
            * input button : white-space:pre
                * 其他的都是 normal
        * **除非 首选最小宽度 比容器宽度还大，否则不用担心会破坏了布局**

    1. 首选最小宽度:元素最适合的最小宽度
        * width为0，图片和文字的宽度不为0, **图片和文字的权重要远大于布局**
        * 东亚文字的最小宽度就是一个字的宽度
        * 西方文字的最小宽度 有特定的连续的英文字符单元决定，一般会终止于 space,hyphen,question mark 和其他非英文字符
            * 如 inline-block → 以 - 作为分隔符，形成 inline- 和 block
        * 图片的最小宽度就是图片的宽度
        * 关于伪元素
            * 伪元素也是显示在元素的正常显示区域内的，如果块级元素的宽度小于 首选最小宽度，则会换行显示
            * 伪元素的outline 始终会围绕其周围，但是对于元素的内容来说
                1. chrome outline只会围绕块级元素
                1. ff 则会包围住元素内容,即使包含块小于内容
            * border chrome/ff 都只是包含元素，而不是包含内容
            * 伪元素即使 absolute 也是相对于当前元素进行定位,而不是寻找有定位属性的父元素
            * 伪元素 display:block,会导致 标签内的内容重起一行

    1. 最大宽度
        * 最大宽度 实际等同于 **包裹性 元素设置 white-space:nowrap 声明后的宽度。**
        * 如果内部么有块级元素或者块级元素没有设定宽度值，则 最大宽度 实际上就是 **最大的连续内连盒子的宽度**(这里的块级元素指的是 收缩性块级元素，如 display:table)
        * 连续内连盒子:全部都是内联级别的一个或一堆元素，中间没有任何的换行标签 br 或其他块级元素

        * 负 margin 
            * 若 width 不是固定值，那么width的值则会增大(视觉上是增大了，但是 调试工具和js 都显示没有变化)
            * 因为要满足条件等于父元素width，负margin相当于负值，width auto自动增大
            * 若 width 为固定值，那么margin-right则会auto增大来满足这个条件

### width 值的作用细节
* margin 的背景永远是透明的
* content box 环绕着 width 和 height 给定的矩形
    * width:具体值，导致流动性丢失
    * 作用于 content 导致与现实世界表现不一致
        * 比如房子
    * 解决方式就是 “宽度分离原则”

### 宽度分离原则
* 就是 CSS 中的 width 不与影响宽度的 margin,border,padding 属性共存

* 用两个块标签，width 独占用一层标签，而margin,border,padding 利用流动性在内部自适应呈现

* box-sizing 更准确的叫法应该是 '盒尺寸的作用细节', 更通俗的 'width的作用细节'

* box-sizing 就是改变尺寸作用规则的，margin 只有在width为auto的时候可以改变元素的尺寸,但是，此时元素已经处于流动性状态

* **对于普通内联元素（非图片等替换元素），box-sizing 无论是什么值，对其渲染表现都没有影响**

* input type = 'search' 默认是 border-box

* box-sizing 发明的初衷
    * 替换元素的100%自适应父容器宽度
        * 替换元素尺寸由内部元素决定，且无论其 display 是 inline 还是 block
            * 对于非替换元素，如果 display:block, 则会具有流动性，宽度由外部尺寸决定，但是替换元素的宽度却不受 display 影响，因此无法通过修改 display:block 让尺寸100%自适应父容器
        * 例如 textarea，是有border的，而且需要有一定的padding, 于是 width/border和padding注定要共存，而且还要整体宽度100%自适应父容器，如果不借助宽度分离，则无解，
    * 因此 box-sizing 被发明出来的初衷应该是解决**替换元素宽度自适应问题**

    * 正确用法

        ```
        input,textarea,img,video,objct{
            box-sizing:border-box;
        }
        这些元素 默认都是 content-box
        ```

* height:auto width:100%;
    * 从上而下，自外而内的顺序渲染DOM内容
    * height:auto
        * spec 说了，如果包含块的高度没有显示指定（即高度由内容决定），并且该元素不是绝对定位，则计算值为 auto
    * width:100%
        * spec 说了，如果包含块的宽度取决于该元素的宽度，那么产生的布局在 CSS2.1中是未定义的, 但是大家默契相同, 表现一致

* height:100%
    1. 设定显式的高度值

        ```
        html,body{
            height:100%;
        }
        ```

    1. 使用绝对定位
        * 即使祖先元素的height为auto也可以

        ```
        div{
            height:100%;
            position:absolute;
        }
        ```

    1. **注意**
        * **(不论box-sizing)绝对定位的"宽高"百分比 是相对于具有定位祖先的 padding-box 计算的(不论祖先的box-sizing)**
        * **非绝对定位 元素的widt/height 总是相对于父元素的 content-box(不论 box-sizing) 计算的**

### 为流体而生的 min-width/max-width
* width/height 的初始值是 auto
* max-width,max-height 的初始值是 none
* min-width,min-height 的初始值是 **auto**(spce 说是0)
    * 可通过 transition 验证

* 超越!importan,超越最大
    * max-width 会覆盖 width !important;
    * height 会覆盖 max-height
    * 超越最大指的是 min-max 覆盖 max-width(当二者冲突的时候),min-height 覆盖 max-height(二者冲突的时候)

* width
    * width 不能小于 min-width, 否则 width 失效
    * max-width 不能小于 min-width, 否则 max-width 失效
    * width 不能大于 max-width, 否则 width 失效
* height
    * height 不能小于 min-height, 否则 height 失效
    * max-height 不能小于 min-height, 否则 max-height 失效
    * height 不能大于 max-height, 否则 height 失效

* max-width: 100%;*100% 会被解析为容器（.picture） 的边长, rotate 时候要计算*

### 内联元素
* 内联元素的内联特指外在盒子 和 display 为 inline 的元素不是一个概念， 例如 inline-block 和 inline-table 都是内联元素，因为它们的 "外在盒子" 都是内联元素

#### 内联盒模型
1. 内容区域：我们可以把文本选中的背景色区域作为内容区域,内容区域并没有明确定义

1. 内联盒子(inline box)
    * 内联盒子
    * 匿名内联盒子

1. 行框盒子(link box)
    * 每一行就是一个行框盒子，每个行框盒子又是由一个一个内联盒子组成
    * **纯内联空span里面没有content本身也不能作为content，因此，没有行框盒子。**

1. 包含盒子（包含块 containing box）
    * p 标签就是一个包含盒子

#### 幽灵空白节点 strut
    * 必须是 HTML5 文档声明
    * **存在于每一个 行框盒子前面，同时具有当前行框所在包含块所属 元素的“文字”和“行高”属性的 0 宽度的内联盒子(高度表现为行高值，行高是纯数字的话，要用到公式font-size*line-height)**

## 盒尺寸四大家族
* 替换元素
    * 根据是否具有可替换内容，可分为替换元素 和 非替换元素
        * 这种通过修改某个属性值 呈现的内容就可以被替换的元素 就称为 替换元素
    * 行内元素的宽高大多是auto x auto。但其中包含的替换元素都可以直接设置宽高

    * 特征
        1. 内容的外观不受页面上的CSS的影响???
        1. 有自己的尺寸
            * video, iframe,canvas 是 300*150px
        1. 很多 CSS 属性有一套自己的表现规则
            * vertical-align
                * 默认 baseline, 替换元素的基线 被定义到了元素的下边缘,bottom

    * 替换元素的 display 是 inline,inline-block,block 无所谓，其**尺寸计算规则**都是一样的
        * 从内到外分为 3 类: 固有尺寸，HTML尺寸，CSS尺寸

    * **内联替换元素 和 块级替换元素 使用同一套尺寸计算规则**
    
    * FF 认为 img(没有href时) 是一个普通内联元素
        * img{display:inline-block;}

    * 替换元素 与 非替换元素的距离
        * src
        * content
            * 把 content 属性生成的对象成为**“匿名替换元素”**
            * 特点
                * 不能被选中
                * 不能左右 empty 元素
                * content 动态生成值 无法获取
            * content:'\a'  换行

## padding
* 设置了 box-sizing:border-box, 元素尺寸就不会变化了? too yong too simple 
    * 只要 padding 设置的足够大，元素尺寸依旧会变化(width无能为力)
    
        ```
        <div class='one'>你好</div>

        div.one{
            width: 20px;
            padding: 20px 80px;
            background-color:#f00;
            box-sizing:border-box;
        }
        元素width 表现为 160px; 而width 无效(归零)，里面的内容表现为“首选最小宽度”
        ```
* padding 同样会影响内联元素垂直方向布局，影响视觉表现,只是因为内联元素没有 可视宽度,可视高度的说法(clientWidth,clientHeight 永远为0),**垂直方向上的行为完全受 line-height 和 vertical-align 的影响，视觉上并没有改变上一行下一行内容的间距，因此我们觉得垂直方向 padding 没有起作用**

* 还有很多**不影响其他元素布局**而是出现层叠效果的现象
    * 纯视觉层叠
        * relative
        * box-shadow
        * outline
    * 会**影响外部尺寸**
        * 内联元素垂直方向padding

    * 区分的方法就是 父元素overflow:auto, 层叠区域超出父容器的时候，没有滚动条就是“纯视觉层叠”，有滚动条就会影响尺寸，影响布局

* 内联元素垂直方向padding的用法
    1. 增加超链接的点击区域
    1. 高度可控的分割线
        
        ```
        <div>
            <a href="javascript:alert('注册')">注册</a>
            <span></span>
            <a href="javascript:alert('登录')">登录</a>
        </div>
        
        a{
            display:inline-block;
            font-size:20px;
            text-decoration:none;
            background-color:#ccc;
        }
        span{
            width:20px;//和右边“登录”的距离,
            display:inline-block;//span 的话必须为 inline-block 
            margin-left:22px;//和左边“注册”的距离
        }
        span::before{
            content:'';
            font-size:0;
            /*
                font-size:0 原点在基线上
            */
            margin-left:2px;
            padding:15px 1px 0px;
            border-left:1px solid green;
            /*
            position:relative;
            top:-10px;
            left:5px;
            可实现右上角小标志的效果
            */
        }


        注：
            张鑫旭老师是直接写在了登录的::before上, 但是这样的话 分隔符也会有:hover,并可以点击
        ```

* padding 百分比值
    * **padding 百分比值无论是水平方向还是垂直方向 均是相对于宽度计算的(内联 和 块状)**
    
    * 对于内联元素
        * **padding是会断行的，也就是padding区域是跟着内敛和模型中的 行框盒子 走的**

### margin
* 初始值为0
#### 概念定义
* 元素尺寸(元素偏移尺寸)
    * border+padding+content
    * border box
    * 对应 jQuery 的 $().width()/.height()
    * 对应原生 API 的 **offsetWidth 和 offsetHeight, 有时候也称为 “元素偏移尺寸”**

* 元素内部尺寸(元素可视尺寸)
    * padding+content
    * padding box
    * 对应 jQuery 的 $().innerWidth()/.innerHeight()
    * 对应原生 API 的 **clientWidth/ clientHeight, 所以也称为 “元素可视尺寸”**

* 元素外部尺寸
    * margin box
    * 对应 jQuery 的 $().outerWidth()/.outerHeight()
    * 没有原生的 API 对应

* 元素的外部尺寸可以为负，难以理解，把外部尺寸理解为 **元素占据的空间尺寸**

* margin 可以改变元素的尺寸
    * 元素设定了width值 或 包裹性的时候，margin 对尺寸没有影响
    * 只有元素是 “充分利用可用空间”状态的时候，margin 才可以改变元素的可视尺寸

#### margin 百分比值
* 同 padding 一样，无论水平方向 还是 垂直方向 都是相对于宽度计算

##### margin 合并
* 块级元素的上边距(margin-top) 与下边距(margin-bottom) 有时会合并为单个外边距，这种现象称为“margin 合并”
    * 块级元素：不包括 浮动 和 绝对定位元素
    * 只发生在垂直方向(不考虑 writing-mode的情况下)

* 3 种 margin 合并
    1. 相邻兄弟元素
    1. 父级和第一个/最后一个子元素
    1. 空块级元素的 margin 合并
    1. 透传(可以传递margin合并的空元素)

* margin 合并的意义
    1. 兄弟元素，保证上下元素间距一样
    1. **父子元素，一个纯粹的 div 元素是不能够、也不可以影响原来的布局的**
    1. 自身margin合并的意义在于可以避免不小心遗落或者生成的空标签影响排版和布局

#### margin:auto
* margin:auto 就是为了填充这个**闲置的尺寸**而设计的

* 规则如下
    1. 一侧定值，一侧auto,则auto为剩余空间大小
        * 左对齐:   margin-right:auto;
        * 右对齐:   margin-left:auto;
    1. 两侧都是auto，则平分剩余空间

    1. 触发 margin:auto 计算有一个条件，就是当 **width 或 height 为auto时，元素具有对应方向的自动填充特性**，即当去掉 width 或 height 时，对应方向是利用剩余最大空间，不能使 shrink-to-fit，否则不能触发 margin:auto 对齐计算
    1. 由于**绝对定位元素的格式化高度**即使父元素 height:auto 也是支持的，所以使用 margin:auto 居中的方法比 top:50% 然后margin负一半的方法好

* margin 无效的情况
    1. inline 的非替换元素 垂直margin 是无效的,spec 有说，但是厂商都一致的忽略了，
        * **对于内联替换元素，垂直margin是有效的，且没有margin合并的问题**
    
    1. **绝对定位元素 非定位方位的 margin 无效**
        * 只有top 和 left, 不是格式化宽度、高度，不是流体布局，margin-right ,margin-bottom 无效
        ```
        .div{
            width:100px;
            height:100px;
            background:red;
            position:absolute;
            /*去掉left top margin-left 依然有效，默认是这样的*/
            left:0;
            top:0;
            margin-right:100px;// 非定位方向 margin 无效
        }
        ```

    1. margin 合并的时候，更改 margin 值*可能*是没有效果的

    1. **tr标签 td标签，或display为 table-cell,table-row 的元素的 margin 是无效的，但是table-caption, table, inline-table 的margin是有效的**

    1. **定高容器的 高度定死 的子元素的 margin-bottom, 定宽容器 宽度定死的子元素的 margin-right 无效**

        ```
            .father{
                height:100px;
            }
            .child{
                .height:80p;
                margin-bottom:50px;
            }

            若想使用 margin 改变自身的位置，必须是和当前元素定位方向一样的margin属性才可以，否则，margin属性只能影响后面的元素或父元素
        ```
## border
### 宽度
1. thin :   1px 
1. medium(default)   :   3px
    * 因为 border-style：double 至少3px才有效果
1. thick    : 4px

## border-style
* border-style:dashed
    * 虚线颜色区的宽高比 以及 颜色区和透明区宽度比例 在不同的浏览器下是有差异的

* border-style:dotted
    * chrome 和 ff 是小方点，IE 是 小圆点

## border-color
* 默认使用color色值

## 第五章 内联元素与流

* line-height:两基线间的距离(baseline)

* x-height
    * 一个 ex 是一个字体的 x-height(x-height 通常是字体尺寸的一半),基线和中线(median)的距离
    * vertical-align:middle 这个middle 是 baseline 网上1/2 x-height 高度，就是 x 的交叉点

* ex
    * 一个相对单位，指的是小写字母 x 的高度
    * 字母 x 受字体等 CSS 属性影响较大，不稳定，因此 ex 不适合用于限定元素的尺寸
    * **不受字体和字号影响 的内联元素的 垂直居中对齐效果**

* **对于非替换元素的纯内联元素，其可视高度完全有 line-height 决定。**

* 行距 和 半行距
    * 行距 = line-height - font-size(simsun)
    * font-size:1em ; em-box , em-box 受 font-size 影响

* line-height 不能影响替换元素的高

* **line-height 不仅是内联元素高度的基石，也是整个CSS世界高度体系的基石**

* 内联元素 line-height 的大值特性
    * 无论内联元素 line-height 如何设置，最终父级元素的高度都是由数值大的那个line-height决定的，内联元素 line-height 的大值特性

### vertical-align
* 数值单位
    * 相对于基线移动
        * 正数，往上偏移
        * 负数，往下偏移
* middle:base-line 向上偏移1/2 x-height

* 线类
    * baseline,top,middle,bottom
    * vertical-align:0 相当于 vertical-align:baseline

* 只能用于内联元素 和 display为table-cell 的元素

## 浮动
* 浮动元素会形成 块盒子,display:block
* float 配合 margin 负值
    * 两栏右侧固定布局    

    ```
    <style>
        div{
            width:100%;
            background:#ccc;
            overflow:hidden;
            float:left;
        }
        div>p{
            margin-right:300px;
        }
        img{
            width:250px;
            float:left;
                margin-left:-250px;
        }
    </style>

        <div>
        <p>
        Amet perferendis eaque temporibus beatae architecto Perspiciatis cum incidunt veniam deserunt ullam. Odit fuga voluptatum sapiente qui voluptatem. Harum quae fugit culpa doloribus voluptatem Omnis dolore ipsam laboriosam fugit iusto
        </p>
    </div>
    <img src="./girl.jpeg" alt="">
    ```

## ff chrome 差异
* input search 
    * 差异
        * ff是inline(但可以有宽高,是border-box)     chrome是inline-block
        * ff最右边没有叉号，                        chrome 有叉号
        * ff写上value，不显示，默认的search.value也获取不到，chrome正常
        * 同时有value和placeholder, ff显示placeholder,获取不到默认的value    chrome 显示value,可以获取到默认的value,将默认的value清除后，显示placeholder

    * 相同
        * 都是 border-box


# CSS Secret
* DRY 是 Don’t Repeat Yourself
* WET， 它的意思是 We Enjoy Typing（ 我们喜欢敲键盘） 或 Write Everything Twice（ 同样的代码写两次）。

* 制定标准并不是闭门造车。 CSS 工作组坚持透明原则， 它内部所有的交流都是公开的， 并邀请公众的关注和参与。多数的讨论都发生在工作组的邮件列表中： www-style（ http://lists.w3.org/Archives/Public/www-style）。 这个邮件列表是公开存档的， 欢迎任何人的参与。

*  CSS 打散到多个不同的规范（ 模块） 中，每个模块都可以独立更新版本。

* 如果某个模块是前所未有的新概念， 那它的版本号将从 1 开始

* 由于 CSS 的各个模块在近些年里以不同的速度在推进， 我们已经越来越难以把这些规范以 CSS3、 CSS4 这样的方式来划分了， 而且这样也难以被大众理解和接受。

* 第 22 条军规”是一条自相矛盾的、 永远不可能执行的悖论。

## CSS 编码技巧
* 在实践中，代码可维护性的最大要素是尽量减少改动时要编辑的地方。 

* 当某些值相互依赖时， 应该把它们的相互关系用代码表达出来。

    1. 代码易维护和代码量少不可兼得

        ```
        1. border-width: 10px 10px 10px 0;

        2. border-width:10px;
           border-left-width:0;
        ```

### 尽量减少代码重复
    1. currentColor，它是从SVG 那里借鉴来的。 这个关键字并没有绑定到一个固定的颜色值， 而是一直被解析为 color

    1. inherit 可以用在任何 CSS 属性中， 而且它总是绑定到父元素的计算值（ 对伪元素来说， 则会取生成该伪元素的宿主元素）。 

### 相信你的眼睛，而不是数字

* 视觉上的错觉在任何形式的视觉设计中都普遍存在

    1. 我们的眼睛在看到一个完美垂直居中的物体时，会感觉它并不居中。实际上，我们应该把这个物体从几何学的中心点再稍微向上挪一点，才能取得理想的视觉效果。 

    1. 字母的形状在两端都比较整齐，而顶部和底部则往往参差不齐，从而导致你的眼睛把这些参差不齐的空缺部分感知为多出来的内边距。 因此， 如果我们希望四边的内边距看起来是基本一致的， 就需要减少顶部和底部的内边距。

    1. 圆形的字形（ 比如 0）与矩形字形相比，需要稍微放大一些，因为我们倾向于把圆形感知得比其实际尺寸更小一些。

## 关于响应式网页设计
* 只应该把它作为最后的手段。 比如你想把网站做得弹性灵活， 但其他尝试全都失败了； 或者我们希望在较大或较小的视口下完全改变网站的设计形态（ 譬如， 把侧栏改成水平布局）。

* 媒体查询不能以一种连续的方式来修复问题。 它们的工作原理基于某几个特定的阶梯（ 亦称“断点” ）， 如果大部分样式代码并不是以弹性的方式来编写的， 那么媒体查询能做的只是修补某个特定分辨率下的特定问题——这本质上只是把灰尘扫到地毯下面而已。

*  媒体查询的断点不应该由具体的设备来决定，而应该根据设计自身来决定。 
    1. 这不仅是因为我们的网站需要面向的设备太多了（ 尤其是考虑到未来的设备时）
    1. 还因为一个网站在桌面端可能会以任意尺寸的窗口来显示。 

    如果你有信心自己的设计在任何可能出现的视口尺寸下都能良好工作， 谁关心这些设备的分辨率具体是多少呢？

### 一些避免不必要的媒体查询的建议
1. 使用百分比长度来取代固定长度。 如果实在做不到这一点，也应该尝试使用与视口相关的单位（ vw、 vh、 vmin 和 vmax），它们的值解析为视口宽度或高度的百分比。

1. 当你需要在较大分辨率下得到固定宽度时， 使用 max-width 而不是width， 因为它可以适应较小的分辨率， 而无需使用媒体查询。

1. 不要忘记为替换元素（ 比如 img、 object、 video、 iframe 等）设置一个 max-width， 值为 100%。

1. 假如背景图片需要完整地铺满一个容器， 不管容器的尺寸如何变化，background-size: cover 这个属性都可以做到。 但是， 我们也要时刻牢记——带宽并不是无限的， 因此在移动网页中通过 CSS 把一张大图缩小显示往往是不太明智的。

1. 当图片（ 或其他元素） 以行列式进行布局时， 让视口的宽度来决定列的数量。 弹性盒布局（ 即 Flexbox） 或者 display: inline-block加上常规的文本折行行为， 都可以实现这一点。

1. 在使用多列文本时，指定 column-width（列宽）而不是指定column-count（列数），这样它就可以在较小的屏幕上自动显示为单列布局。

    如果你发现自己需要一大堆媒体查询才能让设计适应大大小小的屏幕，那么不妨后退一步，重新审视你的代码结构。因为在所有的情况下，响应式都不是唯一需要考虑的问题


### 合理使用简写

1. 展开式写法并不会帮助你清空所有相关的其他属性，从而可能会干扰你想要达到的效果

1. 当然，你可以把所有的展开式属性全都设置一遍，然后收工，但你可能会漏掉几个；又或者，CSS 工作组可能会在未来引入更多的展开式属性，那时你的代码就无法完全覆盖它们了。

1. 合理使用简写是一种良好的防卫性编码方式， 可以抵御未来的风险

1. 当然， 如果我们要明确地去覆盖某个具体的展开式属性并保留其他相关样式， 那就需要用展开式属性

1. 列表扩散规则

    ```
    background: url(tr.png) no-repeat top right / 2em 2em,
    url(br.png) no-repeat bottom right / 2em 2em,
    url(bl.png) no-repeat bottom left / 2em 2em;
    ```
    
    如果只为某个属性提供一个值， 那它就会扩散并应用到列表中的每一项。 因此， 我们可以把这些重复的值从简写属性中抽出来写成一个展开式属性

    ```
    background: url(tr.png) top right,
    url(br.png) bottom right,
    url(bl.png) bottom left;

    background-size: 2em 2em;
    background-repeat: no-repeat;
    ```

    * 有的属性值有明确的顺序要求，大部分没有


## 多重边框
### box-shadow 
* box-shadow 的好处在于， 它支持逗号分隔语法， 我们可以创建任意数量的投影。
* box-shadow 是层层叠加的， 第一层投影位于最顶层， 依次类推
* 它不会影响布局， 而且也不会受到 box-sizing 属性的影响
* 贴合border的圆角

### outline 描边
1. 可以通过 outline-offset 属性来控制它跟元素边缘之间的间距， 这个属性甚至可以接受负值
1. 边框不一定会贴合 border-radius 属性产生的圆角， 因此如果元素是圆角的，它的描边可能还是直角的。请注意，这种行为被 CSS 工作组认为是一个 bug，因此未来可能会改为贴合 borderradius 圆角

## background-position 的扩展语法方案
1. 它允许我们指定背景图片距离任意角的偏移量， 只要我们在偏移量前面指定关键字。 

    ```
    background: url(code-pirate.svg) no-repeat #58a;
    background-position: right 20px bottom 10px;
    ```

    * 注意
        * **对立方位的关键字 不能同时出现，否则位于原始位置**

1. calc() 方案
    如果我们仍然以左上角偏移的思路来考虑， 其实就是希望它有一个 100% - 20px 的水平偏移量， 以及 100% - 10px 的垂直偏移量。 谢天谢地， calc() 函数允许我们执行此类运算， 它可以完美地在background-position 属性中使用：

    ```
    background: url("code-pirate.svg") no-repeat;
    background-position: calc(100% - 20px) calc(100% - 10px);
    ```

    * 注意
        * 请不要忘记在 calc() 函数内部的 - 和 + 运算符的两侧各加一个空白符，否则会产生解析错误！这个规则如此怪异，是为了向前兼容：未来，在 calc() 内部可能会允许使用关键字，而这些关键字可能会包含连字符（即减号）。

## 切角效果
* 利用linear-gradient

## 弧形切角
* 利用 radial-gradient



