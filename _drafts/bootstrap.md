## 准备
1. bootstrap 下载
1. jquery下载

## 容器
* container

## 行
* row

    ```
    .row:before,
    .row:after,
    {
        display:table;
        content:'';
    }
    .row:after{
        clear:both;
    }
    ```

## 列
* col-lg-NUMBER
    * large
    * >=1200px
        * 1170
    * col-lg-12

* col-md-NUMBER
    * medium
    * >=992
        * 970
    * col-md-12

* col-sm-NUMBER
    * small
    * >=768
        * 750
    * col-sm-12

* col-xs-NUMBER
    * extremely small
    * <=767
    * col-xs-12

    ```
    col-...{
      position: relative;
      min-height: 1px;
      padding-right: 15px;
      padding-left: 15px;
    }
    然后再次 float
    ```
### clearfix
* 配合 visible-xs-block 使用,小于xs的时候 这个div visible, 才能clear; 否则 display:none

```
clearfix:before,clearfix:after{display:table;content;''}
clearfix:after{clear:both}

clearfix:before 没有 clear:both,我觉得应该加上啊，为什么不呢?
```

## 列偏移
### offset
* col-md-offset-NUMBER

* push pull offset 的区别
    * push pull 是通过位置移动达到移动的效果
    * offset 是通过直接在左侧补列达到偏移的效果

    * 而push 相当于 top left , 会和后边的元素重叠
    * offset 相当于margin, 后面的元素也会跟着偏移

## 列排序
### push pull
* col-md-push-8
    * 向右推八格
    * 类似absolute 绝对定位
    * 左边的推到右边

    ```
    .col-md-push-12 {
        left: 100%;
    }
    
    <!-- 核心 -->
    position:relative;
    float:left
    left:8.5%;
    ```

* col-md-pull-4
    * 向左拉四格
    * 右边的拉倒左边

## alert 
* alert-info
    * 突出显示
    * 添加了一个背景,边框
    * alert alert-info

## 显示与隐藏
* hidden-xs

* visible-xs

## 导航栏
### .navbar
* navbar
    * 导航栏
* navbar-default
    * 默认的导航条样式
    * navbar-inverse

    ```
    <nav class='navbar navbar-default'>
    ```

    * navbar-brand
        * 品牌图标
        * <a class='navbar-brand'><img src=''></a>

    * active
        * 激活状态
        * 在li上,而不是a上

* nav 
    * 导航，用在ul
    * navbar-nav 导航栏中的导航
        * 没有别的-nav了，Bill猜测应该是不愿意写成.nav吧
    * 导航都是这种结构
        * .navbar-default .navbar-nav > li > a:hover,

* navbar-fixed-top/bottom
    * 导航栏固定部位
    * 不是居中的效果，而是流体宽度
    * 可以在里边设定一个 container,包含住导航的内容

* navbar-static-top
    * position:static,这个就是默认的嘛，如果是top,没必要添加
    * 没有navbar-static-bottom!!!没有

* navbar-brand
    * logo
* nav
    * 导航条目
    * navbar-nav


* 对齐
    * navbar-left
        * float: left !important;

## 搜索框
* form class="navbar-form"

* input-text 标签
    * form-control

* button /button
    * btn navbar-btn btn-primary btn-lg/md/sm/xs

* glyphicon glyphicon-search
    span class='glyphicon glyphicon-search'

* navbar-text

* navbar-link

## 表单按钮
* a.btn navbar-btn btn-primary btn-sm navbar-right

* navbar-link


### Bootstrap 页面标题（Page Header）
* 页面标题（Page Header）是个不错的功能，它会在网页标题四周添加适当的间距。当一个网页中有多个标题且每个标题之间需要添加一定的间距时，页面标题这个功能就显得特别有用。如需使用页面标题（Page Header），请把您的标题放置在带有 class .page-header 的 div 中：

实例
```
<div class="page-header">
    <h1>页面标题实例
        <small>子标题</small>
    </h1>
</div>
<p>这是一个示例文本。这是一个示例文本。这是一个示例文本。这是一个示例文本。这是一个示例文本。</p>
```

* .lead
    * 为了给段落添加强调文本，则可以添加 class="lead"，这将得到更大更粗、行高更高的文本，



## 引言
Bootstrap 是基于 HTML、CSS、JAVASCRIPT 的

Bootstrap 是由 Twitter 的 Mark Otto 和 Jacob Thornton 开发的。Bootstrap 是 2011 年八月在 GitHub 上发布的开源产品。

移动设备优先：自 Bootstrap 3 起，框架包含了贯穿于整个库的移动设备优先的样式。

浏览器支持：所有的主流浏览器都支持 Bootstrap。

需要在网页的 head 之中添加 viewport meta 标签

maximum-scale=1.0 与 user-scalable=no 一起使用。这样禁用缩放功能后，用户只能滚动屏幕，就能让您的网站看上去更像原生应用的感觉。


Bootstrap 使用了一些 HTML5 元素和 CSS 属性。为了让这些正常工作，您需要使用 HTML5 文档类型（Doctype）

## Bootstrap 基本结构

## Bootstrap CSS
* 响应式图像

    ```
    <img src="..." class="img-responsive" alt="响应式图像">
    .img-responsive {
      display: block;
      height: auto;
      max-width: 100%;
    }
    ```
* .center-block
    1. display:block;
    1. margin:0 auto;
* .text-center
    1. text-align:center
* Bootstrap 3 使用 body {margin: 0;} 来移除 body 的边距

    ```
    body {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: 1.428571429;
        color: #333333;
        background-color: #ffffff;
        margin:0;
    }
    ```
## Bootstrap 布局组件 

## Bootstrap 插件

---


# Bootstrap 新的开始
## 核心
媒体查询

1. @media screen and (max-width:767px)
1. @media screen and (min-width:768px)
1. @media screen and (min-width:992px)
1. @media screen and (min-width:1200px)
1. 注
    1. max-width:小于等于
    1. min-width:大于等于
## 栅格系统
1. .container 表示容器，固定宽度居中，.container-fluid 表示流体容器 100% 父级宽度
    * padding:0 15px;
1. .row 表示一行
    * margin:0 -15px;
1. 列
    1. .col-lg-     min-width:1200px 表现为1170px
    1. .col-md-     min-width:992px 表现为970px
    1. .col-sm-     min-width:768px 表现为750px
    1. .col-xs-     max-width:768px 表现为整行,上下堆叠
    1. 注
        * 缩写
            1. lg:large
            1. md:medium
            1. sm:small
            1. xs:extremely small
        * 核心
            1. float:left
            1. 父级百分比宽度
            1. padding:0 15px;
1. 清除浮动
    1. div.clear-fix
    1. 通常配合 .visible-xs/sm/md/lg-block :display:block/none
        1. .visible-md-block 默认为none,小于md的时候为block
        1. 即小于md的时候会有清除浮动的效果,而大于md的时候是没有清除浮动的效果的

        ```
        <div class="row">
            <div class="col-md-2">1</div>
            <div class="col-md-2 visible-md-block clearfix">2</div>
            <div class="col-md-2">3</div>
        </div>
        ```

## form
1. form.container
1. .form-inline.formgroup 
1. form-group 有margin-bottom:15px; 但是 form-inline 下的form-group margin-bottom:0;
1. label.control-label
1. input.form-control
1. div.input-group>label.control-label+input.form-control

    ```
    .form-group {
      margin-bottom: 15px;
    }

    @media (min-width: 768px) {
      .form-inline .form-group {
        display: inline-block;
        margin-bottom: 0;
        vertical-align: middle;
      }
    }
    ```
### 案例

    ```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>bootstrap 注册表单练习</title>
    <!-- 已经下载到本机的bootstrap文件 -->
    <link rel="stylesheet" href="/home/bill/Documents/bootstrap/bootstrap-3.3.7-dist/css/bootstrap.css">
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <style>
.bill-width{
    margin-top:100px;
    width:500px;
}
.billfullwidth{
    width:100%;
}
hr{
    background:#aaa;
        border:0 none;
            height:1px;
}
    </style>
</head>
<body>
    <form class="container bill-width" action= "">
        <h1 style='text-align:center;'>注册</h1>
        <hr>
        <div class="form-inline form-group">
            <div class="row">
                <div class="col-xs-6">
                    <div class="form-group ">
                        <label class="control-label" for="">姓</label>
                        <input type="text" class='form-control' style='margin-left:2em'>
                    </div>
                </div>
                <div class="col-xs-6">
                    <div class="form-group">
                        <label class="control-label" for="">名</label>
                        <input class="form-control" type="text" style='margin-left:2em'>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-inline form-group">
            <div class="form-group">
                <label class="control-label" for="">手机号</label>
                <input class="form-control " type="" >
            </div>
        </div>
        <div class="form-inline form-group">
            <div class="form-group">
                <label for="" class='control-label'>邮箱</label>
                <input class="form-control" type="mail" style='margin-left:1em'>
            </div>
        </div>
        <div class="form-inline form-group">
            <div class="form-group">
                <label class="control-label" for="">入金</label>
                <div class="input-group" style='margin-left:1em'>
                    <div class="input-group-addon">$</div>
                    <input type="text" class='form-control'>
                </div>
            </div>
        </div>
        <div class="form-inline" id='b'style='text-align:center;'>
                <input type="submit" class='btn btn-primary' value="提交">
                <input type="reset" class='btn btn-warning' value='重置'>
        </div>
        <hr>
    </form>    
</body>
</html>

    ```
1. form-control

```
form-control {
  display: block;
  width: 100%;
  ...
}
```

1. .center-block

```
.center-block {
  display: block;
  margin-right: auto;
  margin-left: auto;
}
```

## 按钮
1. .btn-group .btn

```
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  float: left;
}
```
.pull-right {
  float: right !important;
}

.pull-left {
  float: left !important;
}

.hide {
  display: none !important;
}

.show {
  display: block !important;
}

.invisible {
  visibility: hidden;
}

.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}


.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  background-color: #777;
  border-radius: 10px;
}


.radio,
.checkbox {
  position: relative;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}

.form-inline .radio,
.form-inline .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}


.input-group-addon,
.input-group-btn,
.input-group .form-control {
  display: table-cell;
}

反馈图标（feedback icon）只能使用在文本输入框 <input class="form-control"> 元素上。

关闭按钮
<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>


三角符号
<span class="caret"></span>

快速浮动
<div class="pull-left">...</div>
<div class="pull-right">...</div>


让内容块居中
.center-block


显示或隐藏内容
.show 和 .hidden 类可以强制任意元素显示或隐藏(对于屏幕阅读器也能起效)。这些类通过 !important。这些类只对块级元素起作用
.invisible 类可以被用来仅仅影响元素的可见性，也就是说，元素的 display 属性不被改变，并且这个元素仍然能够影响文档流的排布。
