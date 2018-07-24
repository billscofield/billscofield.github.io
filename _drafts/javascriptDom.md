## Node
* Document
    * HTMLDocument
        * document
    * XMLDocument
* Element
    * HTMLElement
    * XMLElement
* Attr
* CharacterData
    * Text
    * Comment


* document -> HTMLDocument.prototype   的 __proto__ :Document.prototype
* document.__proto__ == HTMLDocument.prototype

* Node.prototype -> Node对象
* Document.prototype -> Document对象
* Document.prototype.__proto__ == Node.prototype
 
* XMLDcoument.__proto__ == Document 
* HTMLDcoument.__proto__ == Document
* Node.__proto__ == EventTarget

??? 以上内容有疑惑,JavaScript 高级程序设计

| name | nodeName | nodeValue | nodeType |
|:-:|:-:|:-:|:-:|
|element|元素名| null | 1 |
|attr|属性名| 属性值 | 2 |
| text |#text|内容| 3 |
| comment |#comment| 注释内容 | 8 |
| document | #document | null | 9 |
| DocumentFragment | | | 11 |

* nodeValue 只有 属性，文本，注释节点有


## Element
### 增
* document.createElement('ElementName');
* 父元素.appendChild(子节点对象)  //相当于数组的 push,是剪切操作
* 父元素.insertBefore(新节点，就节点)

### 删
* 父元素.removeChild(子节点)    //返回被删除的节点
* 子元素节点.remove()   //没有返回值

### 改
* 父元素.replaceChild(新节点，旧节点)   //返回旧节点
* 元素对象.style.CSS属性    //JS 中无 hyphen ，小驼峰命名法

### 查
#### 常用缩写
* window.document
* document.all == document.getElementsByTagName('\*');
* document.documentElement
* document.head
* document.body

#### 父、子、兄弟节点
* 属性
    * 父、兄弟
        * .parentNode
        * .nextSibling
        * .previousSibling

        * .parentElement    // they are the same , originall only exists in IE
        * .nextElementSibling   // >= IE9
        * .previousElementSibling   // >= IE9

        * 注意
            * document.parentNode == null
            * document.documentElement.parentNode == document
            * document.documentElement.parentElement == null
    * 子
        * .childNodes
        * .firstChild
        * .lastChild

        * .children
            * {}.splice = Array.prototype.splice    //就变成类数组了

        * .firstElementChild    // >= IE9
        * .lastElementChild     // >= IE9
    * 其他
        * element.innerHTML
        * element.innerText
        * element.childNodes
        * element.className
        * element.dir
        * element.lang
        * element.ownerDocument //元素的根元素(#document,文档对象)
        * element.style
        * element.tabIndex
    * 宽高
        * vieport 可视尺寸
            * window.innerWidth
            * window.innerHeight
            * w3标准
            * 无单位

            * 标准模式下 有<doctype>
                * 即 document.compatMode == 'CSS1Compat'
                    * document.documentElement.clientHeight
                    * document.documentElement.clientWidth
            * 怪异模式下/混杂模式 没有 <doctype>
                * 即 document.compatMode == 'BackCompat'
                    * document.body.clientHeight
                    * document.body.clientWidth

        * element.getBoundingClientRect()
            * 返回对象,无单位
            * 返回的结果是静态的，不是实时的,类似 document.querySelector()
            
            * x,y 定点坐标
            * width,height  //border+padding+content,同 element.offsetHeight
            * top,bottom    //元素上边/下边到视窗上边的距离;
            * left,right    //元素左边/右边到视窗左边的距离;

            * width和height：ie9以上支持width/height属性。兼容写法
                * var rectWidth = rectObject.right - rectObject.left;
                * var rectHeight = rectObject.bottom - rectObject.top;

        * element.clientHeight
        * element.clientWidth
            * 无单位，可视宽高，只读

        * element.offsetHeight
        * element.offsetWidth
            * border+padding+content
    
        * element.offsetParent      //距离最近的有 position 的祖先元素
        * element.offsetTop
        * element.offsetLeft
            * 设置了 position 的父元素，没有的话最终返回 body
            * 不论自身有没有 position,计算和有 position 的父级元素的距离,margin / left top

        * element.scrollHeight
        * element.scrollWidth
            * 设置了 overflow:auto 后的滚动宽高

        * element.scrollTop
        * element.scrollLeft
            * body = '2000px'
            * HTML 的，document.documentElement.scrollTop
            * <= IE8 
                * document.body.scrollTop
                * docuent.documentElement.scrollTop
                * 这两个，有一个能用，另一个的值就为 0 ，所以相加 就是想要的值

        * 滚动条滚动了多少
            * window.pageYOffset
            * window.pageXOffset

        * 滚动条 滚动
            * window.scroll(x,y) || window.scrollTo(x,y)
                * x: x轴滚动的距离
                * y: y轴滚动的距离
            * window.scrollBy(x,y)
                * x,y : 相对再滚动多少


* 方法
    * document.getElementById('id名');  //区分大小写，>= IE9
        * <=IE9 name 可以被当做 ID
        * <=IE9 ID 不区分大小写
        * ID 会被后端修改
        * document的
    * document.getElementsByTagName('tagName');
        * document的
        * element的
    * document.getElementsByName('name');   
        * 最好用于表单元素,img,iframe
        * 最多的应用就是 checkbox && radio
        * document的
    * document.getElementsByClassName('className'); 
        * >= IE9
    * 上面 4 个类似于 浅拷贝

    * document.querySelector('div>span')    //只第一个
    * document.querySelectorAll('div>span') //一组，这两个不具有实时性，类似于深拷贝
        * >=IE8

    * .hasChildNodes()  //是否有子节点

    * 针对 CSS 的查找修改
        * element.style
            * 返回类数组，该 element 嵌入设置了几个 CSS属性，.length 就是几个
        * 元素对象.style.CSS属性名
        * 元素对象.style.CSS属性名='new value'

        * window.getComputedStyle(元素对象,null)['CSS属性名']
            * window.getComputedStyle(元素对象,null).CSS属性名
            * null 的位置为 伪元素
            * 一切属性的显示值
            * >= IE9
            * 伪元素 只读

            ```
            div::after{
                content:'';
                display:inline-block;
                width:50px;
                height:50px;
                background:red;
            }
            window.getComputedStyle(div,'after').width;
            ```

        * element.currentStyle.CSS属性名       // IE 独有
            * value 为 auto 的，返回 auto
            * 不是经过计算的值, em 就是 em

        * 注意
            * 样式表中尽量不写 !important,否则会导致 JS 修改不了该属性
        * 针对保留字、关键字
            * float
                * 尽量写成 cssFloat, 尽管 直接用 float 也可以
        * 复合属性
            * 尽量分开写，尽管 div.style.border = '1px solid green' 也可以

    * element.toString()

## Attr
### 增
* var attr = document.createAttribute('HTML属性名');
    * attr.value = 'HTML属性值';
    * div.setAttributeNode(attr)

* 元素节点.setAttribute('HTML属性名','属性值'); //元素对象上可以还没有写这个HTML属性名
    * 可设定一个自定义属性名/值，

### 删
* element.removeAttribute('HTML属性名');
* element.removeAttributeNode();

### 改
 
### 查
* 方法
    * 元素节点.getAttributeNode('属性名');  //返回 '属性名 = 属性值'
    * 元素节点.getAttribute('属性名');  //返回属性名的值
    * element.hasAttribute('属性名') //true/false

* 属性
    * 元素节点.attributes
    * 元素节点.HTML属性名
        * 元素节点.className
    * 元素节点['HTML属性名']
        * 元素节点['className']


## CharacterData - Text

### 增
document.createTextNode('Content');

### 删
* 子节点.remove();

### 改

### 查

## CharacterData - Comment
### 增
* document.createComment('注释内容');

### 删
* 子节点.remove();

### 改

### 查

## HTMLDocument

## HTML DOM Event
* 鼠标
    * onmousedown   对应移动端 ontouchstart
    * onmouseup     对应移动端 ontouchend
    * onclick
        * onclick = onmousedown + onmouseup
    
    * 这三个事件的触发顺序就是这样的，
    * onmousemove       对应移动端 ontouchmove
    
    * ondbclick
    
    * onmouseover
        * 新标准为 onmouseenter
    * onmouseout
        * 新标准为 onmouseleave

    * onmousewheel
        * event.wheelDelta
            * 正数：上
            * 负数：下

    * event.button 
        * 0 左键
        * 1 中键
        * 2 右键

    * 注意
        * onclick 只能监听 左键
        * 只有 onmousedown onmouseup 可以同时监听左右键

    * document.oncontextmenu 右键菜单事件

* 键盘
    * onkeydown
        * event.charCode 始终为 0,
        * 可以监听所有按键，对应属性为 which
        * which 大小写字母都一样，返回的是键盘上按键的位置编号

    * onkeypress
        * 可以监听 字符 按键，对应属性为 .charCode, 返回 ASCII 
        * String.fromCharCode(' ');

    * onkeyup

    * onkeydown onkeypress onkeyup异同
        1. keypress事件不能对系统功能键(例如：后退、删除等，其中对中文输入法不能有效响应)进行正常的响应，keydown和onkeyup均可以对系统功能键进行有效的拦截，但事件截获的位置不同
        1. keypress事件的keyCode对字母的大小写敏感，而keydown、keyup事件不敏感
        1. keypress事件的keyCode无法区分主键盘上的数字键和副键盘数字键的，而keydown、keyup的keyCode对主副键盘的数字键敏感。

    * event.altKey  event.ctrlKey   event.shiftKey   
        * 返回 true/false

    * event.metaKey
        * 在 Mac 系统键盘上，meta 对应命令键 (⌘ )。
        * 在 Windows 系统键盘 meta 对应 windows 徽标键 (⊞ )。
        * 在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆ )

    * event.charCode
        * ACSII 
    * event.keyCode
        * 键盘按键Unicode值
    * event.which   //FF 中
    * event.key     //直接返回字符形式, 而不是数字

    * 两种代码
        * 字符代码 - 表示 ASCII 字符的数字
        * 键盘代码 - 表示键盘上真实键的数字
        * 如果需要知道用户按下的是打印键 (如 "a" 或 "5")，建议使用 onkeypress 事件。
        * 如果需要知道用户按下的是功能键(如 "F1", "CAPS LOCK" 或 "Home") 可使用 onkeydown 或 onkeyup 事件。
        * which 和 keyCode 属性提供了解决浏览器的兼容性的方法，最新版本的 DOM 事件推荐使用 key 属性来替代该方法
        

* 其他
    * oninput
        * 内部有变化，就会被触发
    * onchange
        * 聚焦，失去焦点时，两个状态间有变化，才会被触发     

    * onfocus
    * onblur
     
    * onreset
    * onsubmit
    * onselect

    * onload
    * onunload
     
    * window.onscroll
        * window.pageYOffset
        * window.pageXOffset

    * event.type
        * 返回当前事件对象的 事件名称
    * event.timeStamp
        * 事件生成的日期和事件

* 绑定多个事件
    * element.addEventListener('去on事件字符串',回调函数,false); //>=IE9
    * element.attachEvent('有on事件字符串',回调函数);   //IE 独有
        * 事件对象为 window.event

    * 注意
        * 多次调用 element.addEventListener('去on事件字符串',外部定义的回调函数,false); 实际上是一个事件函数
        * 多次调用 element.attachEvent('有on事件字符串',外部定义的回调函数) 会执行多次
        
    * 解绑
        * = null
        * element.removeEventListener('事件字符串',回调函数,false); 
            * w3c标准
            * 这种方式 回调函数不能是 匿名函数

        * element.detachEvent('有on事件字串',function)
            * 并非W3C标准
            * 必须使用attachEvent添加的事件，才可以被detachEvent方法删除

    * 注意
        * #text 无法绑定事件

    * 案例

    ```
    <div class="one3">
        <div class="one2">
            <div class="one1"></div>
        </div>
    </div>

    var one1 = document.getElementsByTagName('div')[2];
    var one2 = document.getElementsByTagName('div')[1];
    var one3 = document.getElementsByTagName('div')[0];


    one1.addEventListener('click',function(){
        console.log(this);
    },false);
    one2.addEventListener('click',function(){
        console.log(this);
    },false);
    one3.addEventListener('click',function(){
        console.log(this);
    },false);


    one1.addEventListener('click',function(){
        console.log(1);
    },true);
    one2.addEventListener('click',function(){
        console.log(2);
    },true);
    one3.addEventListener('click',function(){
        console.log(3);
    },true);

    输出结果:
    3                               这是最早出现的. 控制台从上到下的顺序是从早到晚
    2
    <div class="one1"></div>
    1
    <div class="one2">…</div>
    <div class="one3">…</div>

    捕获和冒泡 针对的是非 target 元素
    ```

* 事件源对象
    * event.target  //FF,Chrome
        * event.target.nodeName == 'LI'
    * event.srcElement  //Chrome
    * window.event.srcElement   //IE

* 取消默认事件
    * return false;
        * addEventListerer 方式无效(句柄方式)

    * event.preventDefault()
        * w3规定

    * event.returnValue = false
        * IE

    * a 标签的默认行为 src = '#'
        * 返回到文档的头部

## 事件对象
* event.clientX ; event.clientY
* event.pageX ; event.pageY     // >= IE9
    * 当前鼠标坐标

* IE8 没有传递事件对象，事件对象是作为 window 的属性存在的

* event.cancelBubble = true;    //取消冒泡,原来是IE的

## 冒泡
* 什么是冒泡
    当鼠标点击所看到的的按钮时，其实发生了一系列的事件传递，可以想象一下，button实际上是被body“包裹”起来的，body是被html“包裹”起来的，html是被document“包裹”起来的，document是被window“包裹”起来的。所以，在你的鼠标点下去的时候，最先获得这个点击的是最外面的window，然后经过一系列传递才会传到最后的目标button，当传到button的时候，这个事件又会像水底的泡泡一样慢慢往外层穿出，直到window结束。

    综上，一个事件的传递过程包含三个阶段，分别称为：

    捕获阶段，目标阶段，冒泡阶段

    目标指的就是包裹得最深的那个元素。

* 两种事件模型
    * 捕获模型
    * 冒泡模型
        * 老版本 IE 没有 捕获

    * 先捕获后冒泡
        * 但是事件执行的顺序，谁先绑定，谁先执行

* Event.eventPhase
    1. Event.NONE  0   这个时间，没有事件正在被处理
     
    1. Event.CAPTURING_PHASE   1   事件正在被目标元素的祖先对象处理. 这个处理过程从Window开始，然后Document, 然后是HTMLHtmlElement, 一直这样，直到目标元素的父元素。 通过EventTarget.addEventListener() 注册为捕获模式的Event listeners 被调用。
     
    1. Event.AT_TARGET 2   事件对象已经抵达the event's target. 为这个阶段注册的事件监听被调用。 如果 Event.bubbles 的值为false, 对事件对象的处理在这个阶段后就会结束.
     
    1. Event.BUBBLING_PHASE    3   事件对象逆向向上传播回目标元素的祖先元素, 从父亲元素开始，并且最终到达包含元素 Window. 这就是冒泡，并且只有Event.bubbles 值为true的时候才会发生。 为这个阶段注册的Event listeners 在这个过程中被触发.

* 一个对象上的一个事件类型只能遵守一个事件模型
    * element.addEventListener('去on事件字串',回调函数,true);
* 结构上嵌套关系的元素 而非视觉上

* 这些事件没有冒泡
    * onfocus
    * onblur
    * onchange
    * oninput
    * onsubmit
    * onreset
    * onselect 

* 取消冒泡
    * event.cancelBubble = true;
        * 原来是 IE 的 

    * event.stopPropagation()  [ˌprɒpə'ɡeɪʃn]
        * w3c 的
        * >= IE9

    * event.stopImmediatePropagation()
        * 如果还想把其它与 element 绑定的响应函数的事件也“屏蔽”掉，需要把stopPropagation换为stopImmediatePropagation。

* 执行顺序
    * 捕获  执行  冒泡
