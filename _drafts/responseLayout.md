
## 4 种方法
1. 弹性网格
1. 弹性布局
1. 弹性图片
1. 媒体查询

## 移动端

* <a href='https://ke.qq.com/webcourse/index.html#cid=273291&term_id=100322948&taid=1951676089248651&vid=x1423jeh8jz'>视频链接</a>
* <a href='http://www.ybao.org/book/css-response/1099.html'>文本链接</a>

```
<meta name="viewport" content="width=300, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```

* layout viewport
* visual viewport
* ideal viewport


width               设置layout viewport  的宽度，为一个正整数，或字符串"width-device"
initial-scale       设置页面的初始缩放值，为一个数字，可以带小数
minimum-scale       允许用户的最小缩放值，为一个数字，可以带小数
maximum-scale       允许用户的最大缩放值，为一个数字，可以带小数
height              设置layout viewport  的高度，这个属性对我们并不重要，很少使用
user-scalable       是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes代表允许

```
1. 
<meta name="viewport" content="initial-scale=1">
这句代码也能达到和前一句代码一样的效果，也可以把当前的的viewport变为 ideal viewport。

因为从理论上来讲，这句代码的作用只是不对当前的页面进行缩放，也就是页面本该是多大就是多大。那为什么会有 width=device-width 的效果呢？

要想清楚这件事情，首先你得弄明白这个缩放是相对于什么来缩放的，因为这里的缩放值是1，也就是没缩放，但却达到了 ideal viewport 的效果，所以，那答案就只有一个了，缩放是相对于 ideal viewport来进行缩放的，当对ideal viewport进行100%的缩放，也就是缩放值为1的时候，不就得到了 ideal viewport吗？事实证明，的确是这样的。

1.
如果width 和 initial-scale=1同时出现，并且还出现了冲突呢？比如：
<meta name="viewport" content="width=400, initial-scale=1">
width=400表示把当前viewport的宽度设为400px，initial-scale=1则表示把当前viewport的宽度设为ideal viewport的宽度，那么浏览器到底该服从哪个命令呢？是书写顺序在后面的那个吗？不是。当遇到这种情况时，浏览器会取它们两个中较大的那个值。例如，当width=400，ideal viewport的宽度为320时，取的是400；当width=400， ideal viewport的宽度为480时，取的是ideal viewport的宽度。
```

## 媒体查询
1. @media screen and (max-width:960px)
1. \<link rel = 'stylesheet' type = 'text/css' href= './style.css' media = 'screen and (max-width:960px)'\>
1. orientation：portrait | landscape
    * portrait(['pɔrtrɪt] )肖像画：指定输出设备中的页面可见区域高度大于或等于宽度  竖屏
    * landscape 风景画：除portrait值情况外，都是landscape      横屏
    * and (orientation:portrait)

1. 注意
    1. @media screen and(max-width:960px)   //and 后面必须有空格
    1. min-width  就是大于等于这个值,逻辑分辨率,是 layout viewport 而不是 visual viewport ,根据 meta width
    1. max-width 就是小于等于这个值,逻辑分辨率, 是 layout viewport 而不是 visual viewport

    1. max-width 先写大范围
    ```
    @media (max-width:960px)
    @media (max-width:600px)
    @media (max-width:360px){
        body{
            background-color:#f00;
        }
    }
    ```

    1. min-width 先写小范围
    ```
    @media (min-width:360px)
    @media (min-width:600px)
    @media (min-width:960px){
        body{
            background-color:#f00;
        }
    }
    ```

    1. 图片自适应
        * max-width:100%;
        * width:100%;   //这个方法分辨率大于图片分辨率会虚化;可以用在区块中的 img
    1. 视频自适应 video
        * max-width:100%;
        * width:100%;   //这个方法分辨率大于图片分辨率会虚化;可以用在区块中的 img

    ```
    移动优先,就先写移动设备的配置
    /* 为移动端设计: */
    [class*="col-"] {
        width: 100%;
    }
    @media only screen and (min-width: 768px) {
        /* For desktop: */
        .col-1 {width: 8.33%;}
        .col-2 {width: 16.66%;}
        .col-3 {width: 25%;}
        .col-4 {width: 33.33%;}
        .col-5 {width: 41.66%;}
        .col-6 {width: 50%;}
        .col-7 {width: 58.33%;}
        .col-8 {width: 66.66%;}
        .col-9 {width: 75%;}
        .col-10 {width: 83.33%;}
        .col-11 {width: 91.66%;}
        .col-12 {width: 100%;}
    }
    ```

### Bootstrap
* Bootstrap内部支持5种不同的布局，都依赖于CSS媒体查询。最大布局中每一列的宽度为70像素，而常规布局中每一列宽度是60像素。在适合平板电脑的布局中，列宽缩小为42像素，再窄一点，每一列就会流动起来，变成在垂直方向上堆叠，并且都与视口同宽

目标设备    布局宽度    列宽                    列间距
大屏幕      至少1200px  70px                    30px
常规        至少980px   60px                    20px
平板竖屏    至少768px   42px                    20px
手机到平板  至多767px   流式列，宽度不固定      -
手机        至多480px   流式列，宽度不固定      -

* 要根据媒体查询添加自定义的CSS，可以像下面这样把所有规则写到一个CSS文件中，也可以单写一个CSS文件：

```
/*大屏幕*/@media (min-width: 1200px) { ...}

/*平板竖屏到横屏到常规屏幕*/@media (min-width: 768px) and (max-width: 979px) { ...}

/*手机横屏到平板竖屏*/@media (max-width: 767px) { ...}

/*手机横屏及更小屏幕*/@media (max-width: 480px) { ...}

对于大型网站，应该把不同的媒体查询分别保存在单独的CSS文件中。而在HTML的<link>标签中，可以根据条件加载它们。这样可以保证加载的文件相对小，但在响应式布局中会增加HTTP请示。

<link rel="stylesheet" href="base.css" />

<link rel="stylesheet" media="(min-width: 1200px)" href="large.css" />

<link rel="stylesheet" media="(min-width: 768px) and (max-width: 979px)"

href="tablet.css" />

<link rel="stylesheet" media="(max-width: 767px)" href="tablet.css" />

<link rel="stylesheet" media="(max-width: 480px)" href="phone.css" />
```



## flex

* 父容器
* 子容器

* 水平轴
* 垂直轴

* 属性
    * 父容器可以统一设置子容器的排列方式,子容器也可以单独设置自身的排列方式，如果两者同时设置，以子容器
    * 父容器属性
        * justify-content:决定 items 在水平轴的对齐方式
            * 位置排列
                1. flex-start   //左对齐
                1. flex-end     //右对齐
                1. center       //居中
            * 分布排列
                1. space-around     //沿水平轴均匀分布
                1. space-between    //两端对齐，中间均匀分布 
        * align-items:决定 items 在垂直轴的对齐方式
            * 位置排列
                1. flex-start   //顶端对齐
                1. flex-end     //底端对齐
                1. center       //居中
                
            * 基线排列
                1. baseline     //第一行文字的底部对齐
                1. 以最低的为准
            * 拉伸排列
                1. stretch      //当 item 高度未设置时，将与父元素等高,如果子元素有高度，则无效果
        * flex-direction    决定主轴的方向
            * row
            * column
            * row-reverse
            * column-reverse
        * flex-wrap  父容器空间不够时，子容器的行为
            * no-wrap   默认，自动缩小项目, 不换行
            * wrap  换行，且第一行在上方
            * wrap-reverse  换行，第一行在下方
            
        * flex-flow     flex-direction + flex-wrap 的缩写
            * 默认   flex-flow:row nowrap;
        * align-content 父容器有多跟主轴的时候，多行在垂直轴上的对齐效果,如果只有一行，这个属性没有效果
            * 位置排列
                1. flex-start   //顶端对齐
                1. flex-end     //底端对齐
                1. center       //居中
            * 分布排列
                1. space-around     //沿水平轴均匀分布
                1. space-between    //两端对齐，中间均匀分布 
                1. stretch  //默认???
            
    * 子容器
        * 子容器不会溢出父容器，文字的话例外
        * flex  在主轴上如何伸缩,是一个缩写
            1. flex-grow    //放大比例，默认为零，即父元素中有剩余空间也不放大,有剩余空间是前提
            1. flex-shrink  //缩小比例，默认为1，即如果空间不足，该项目将缩小, 不能小于1, 编程几分之一
            1. flex-basis   //项目占据的主轴空间
        * align-slef    如何沿垂直轴排列
            * 位置排列
                1. flex-start   //顶端对齐
                1. flex-end     //底端对齐
                1. center       //居中
                
            * 基线排列
                1. baseline     //第一行文字的底部对齐
                1. 以最低的为准
            * 拉伸排列
                1. stretch      //当 item 高度未设置时，将与父元素等高,如果子元素有高度，则无效果

        * order //值为整数，越小，越靠前, 默认为 零



