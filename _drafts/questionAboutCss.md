1. body,html height 为 auto, auto * N% →    NaN, 但是 绝对定位元素 却可以 height * N%

1. 当设置 body 的 background 后，是整个屏幕都有了背景色?
    1. 但是 body 的高度才 20px 而已，但是为什么当给 html 设置了背景色后，body 的背景色就是正常的了，在 body 内部显示, 
    1. 而 html 的 height 也才是 20px, 为什么就整个屏幕显示背景色了?

1. list-item 的标记盒子是怎么一回事，可以控制吗?

1. ::before 凹凸 为什么是 3 个框呢? 而写在标签中是一个矩形框(outline)

1. em 应该是本元素的font-size

    ```
    <span>ni</span>

    span{
        font-size:0;
        margin-left:10em;
    }

1. 伪元素制作高度可控的分隔符
    * (chrome) 但如果是 em,span,strong,a 之类的*单个* inline 元素，就必须做如下更改,why???
        1. 要么 content:'\\';
        1. 要么 display:inline-block;
        1. 要么 前边再有一个随便什么东西,比如一个字符
        1. 要么 标签没有内容
        1. 要么 多个标签

        1. 否则就没有那个分隔符了        

        1. 先说 display:inline-block
            * 元素有内容的话，::before 没有inline-block，宽高就是0x0

    * FF 
        * 元素中没有内容/有内容,纯 inline,均可以显示伪元素中的分隔符 

1. body 下的 div margin-right
    * 如果只是单单的 div width:100%显示, margin-right 是不会有滚动条的
    * 如果是 display:inline-block 就会有body滚动条
    * 纯 div 更改margin可以改变Content大小, absolute,inline-block,float,overflow 不行，收缩性
    * 可能大答案
        * 100% 是一个具体的值

1. 边框问题
    
    ```
    .zhengFangXing2{
        background:blue;
        width:0;
        height: 0;
        border-style:solid;
            border-top-color:transparent;
            border-left-color:transparent;
        border-right-color:green;
        border-bottom-color:red;
            border-bottom-width:50px;
            border-righT-width:50px;
        /*
        这是何故???
        整体设定border-width 就没有问题
        */
    }

    <div class='zhengFangXing2'></div>
    ```


