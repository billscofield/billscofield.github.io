## 原理
1. 原理就是媒体查询
1. 例如 col-sm-2 是在 @media (min-width:768px) 中定义的;col-md-2 是在 @media (min-width:992px) 中定义的; 当一个div同时应用 col-sm-2 和 col-md-2 时，当分辨率大于768，小于992时，只能应用 sm 的样式, 此时 md 的样式根本不存在；;在分辨率大于992时，只能应用md的样式，sm 的样式根本不存在; 这就是媒体查询

1. 一些基础样式定义在了 normal.css 文件中
1. @media (max-width:767px) 定义在了 xs.css文件中
    * horizontal at all times
    * width:auto (流体)
1. @media (min-width:768px) 定义在了 sm.css文件中   750(720+@gutter)
1. @media (min-width:992px) 定义在了 md.css文件中   970(940+@gutter)
1. @media (min-width:1200px) 定义在了 lg.css文件中  1170(1140+@gutter)
    1. 顺序极其重要

1. 列没有定义就是auto
1. grid.less(非maxin)中定义了默认状况下是 xs
1. variables.less 中定义了宽度

    ```
    @container-tablet:             (720px + @grid-gutter-width);
    @container-sm:                 @container-tablet;

    // Medium screen / desktop
    @container-desktop:            (940px + @grid-gutter-width);
    @container-md:                 @container-desktop;

    // Large screen / wide desktop
    @container-large-desktop:      (1140px + @grid-gutter-width);
    @container-lg:                 @container-large-desktop;
    ```

## 源码
1. 变量全部放在 variables.less 

## 容器
1. .container
    1. 固定宽度
    1. 水平居中 margin:0 auto;
    1. &:before{clear:both}

    ```
    @grid-gutter-width:         30px;

    .container-fixed(@gutter: @grid-gutter-width) {
      margin-right: auto;
      margin-left: auto;
      padding-left:  floor((@gutter / 2));
      padding-right: ceil((@gutter / 2));
      &:extend(.clearfix all);
    }
    ```
1. .container-fluid

### 行
```
// Creates a wrapper for a series of columns
.make-row(@gutter: @grid-gutter-width) {
  margin-left:  ceil((@gutter / -2));
  margin-right: floor((@gutter / -2));
  &:extend(.clearfix all);
}
```

### 列
grid-framework.less 这个文件整个是定义了列

1. 第一步,.make-grid-columns()最终的结果如下
```
.col-xs-1...col-lg-12

position: relative;
// Prevent columns from collapsing when empty
min-height: 1px;
// Inner gutter via padding
padding-left:  ceil((@grid-gutter-width / 2));
padding-right: floor((@grid-gutter-width / 2));
```

1. 第二步,make-grid
```
 // Create grid for specific class
.make-grid(@class) {
  .float-grid-columns(@class);
  .loop-grid-columns(@grid-columns, @class, width);
  .loop-grid-columns(@grid-columns, @class, pull);
  .loop-grid-columns(@grid-columns, @class, push);
  .loop-grid-columns(@grid-columns, @class, offset);
}
```

    1. 第二步中第一步float-grid-columns 
    ```
    col-xs-1 .. col-lg-12

    float:left
    ```

    1. loop-grid-columns  width
    ```
    col-xs-12 ... col-xs-1
    ...
    col-lg-12 .. col-lg-1
    width:percentage((@index / @grid-columns));
    ```
    
    1. 2.3 float-grid-columns push(排序)
        1. col-xs-push-12
        1. 列不为0时：left 百分数;
        1. !列为0时，：left auto;

    1. 2.4 float-grid-columns pull(排序)

    1. 2.5 float-grid-columns offset(偏移)
        1. col-xs-offset-12
        1. margin-left:百分数(12/12)



## 排版
### 标题
1. [.h1,.h6] 主要定义了 font-size，还是原来的 display
1. 小标题  small标签 或者 .small  嵌套在 hN中

### 段落
1. font-size:14px;(body)
1. line-height:1.42857143  为20px
1. margin-bottom:height/2,也就是line-height/2  即 10px
1. html 标签定义 font-size:10px 方便 rem 的计算

1. 对齐方式
    1. .text-left
    1. .text-right
    1. .text-center
    1. .text-justify
1. 大小写
    1. .text-lowercase
    1. .text-uppercase
    1. .text-capitalize

### 文本颜色
1. .text-primary
1. .text-success
1. .text-info
1. .text-warning
1. .text-danger
1. .text-muted

## 表格
1. 基础命令 .tab
    * width: 100%;

1. .table-bordered  带边框
1. .table-striped   条纹状
1. .table-hover     悬停变色
1. .table-condensed 紧凑风格

### 状态
1. .success
1. .info
1. .warning
1. .danger
1. .active


## 按钮
1. 基础类 .btn

1. 可以用于 a,input[submit],input[reset],input[button],button
### 状态
1. .btn-primary
1. .btn-success
1. .btn-info
1. .btn-warning
1. .btn-danger
1. .btn-default
1. .btn-link

### 大小
1. btn-lg
1. btn-sm
1. btn-xs

### 与块的转换
1. .btn-block:inline-block,width:100%


## 表单
1. .form-horizontal
    1. 此时子元素的 .form-group 相当于 .row, 可以应用 .col-md
1. .form-inline

1. form-group:包含label 和 表单元素
    1. 状态
        1. .has-success
        1. .has-warning
        1. .has-error

1. .form-control:作用于 input,select,textarea

1. .input-group

label
    1. .sr-only 隐藏label
    1. .control-label

input-lg
input-sm

## 图片
1. .img-rounded 圆角
1. .img-circle  圆形

## 辅助类
meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"

## 组件

### 字体图标
https://v3.bootcss.com/components/

1. span.class="glyphicon glyphicon-signal" 就可以了

### 下拉菜单
1. .dropdown
1. .dropdown-menu-right 代替 .pull-right
1. divider 分割线

```
<div class="dropdown">
    <button class="btn btn-default dropdown-toggle" data-toggle='dropdown'>这是按钮
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
        <li><a href="">A</a></li>
        <li><a href="">B</a></li>
        <li><a href="">C</a></li>
    </ul>
</div>
```

### 警告框

### 弹出框

### 控件组
1. input-group
1. input-group-addon
    * display: table-cell;

### 导航
1. .nav 无序列表开始
1. .nav-tabs 可切换的导航
1. .nav-pils 胶囊导航
1. .nav-stacked

```
<div class="nav nav-j">
    <li><a href="">a</a></li>
    <li><a href="">a</a></li>
    <li><a href="">a</a></li>
</div>
```

### 分页
1. .pagination 在父元素中添加表示分页
1. .pager 放置在翻页区域
1. .previous 把链接向左对齐，.next 把链接向右对齐

```
<nav>
    <ul class="pager">
        <li class='previous'><a href="">左边</a></li>
        <li class='next'><a href="">右边</a></li>
    </ul>
    <ul class="pagination">
        <li>
            <a href="">1</a>
        </li>
        <li>
            <a href="">2</a>
        </li>
        <li>
            <a href="">3</a>
        </li>
    </ul>
</nav>
```

### 进度条
1. .progress
1. 状态类改变颜色
1. .progress-bar-striped 使得进度条颜色渐变

```
<div class="progress">
    <div class="progress-bar progress-bar-warning progress-bar-striped" style='width:60%'>60%</div>
</div>
```

### 列表
1. .list-group 代表列表组
1. .badge 代表状态数
1. .active 代表选中

```
<ul class="list-group">
    <li class="list-group-item">
        1<span class="badge">10</span>
    </li>
    <li class="list-group-item">
        2<span class="badge">8</span>
    </li>
</ul>
```

1. 可以用来做导航

### 面板
1. .panel  代表面板
1. .panel-body  面板内容
1. .panel-footer    面板注脚

```
<ul class="list-group">
    <li class="list-group-item">
        1<span class="badge">10</span>
    </li>
    <li class="list-group-item">
        2<span class="badge">8</span>
    </li>
</ul>
```

### Jumbotron

```
<div class="container">
<div class="jumbotron">
     <h1>欢迎登陆页面！</h1>
     <p>这是一个超大屏幕（Jumbotron）的实例。</p>
     <p><a class="btn btn-primary btn-lg" role="button">
     学习更多</a>
   </p>
</div>
</div>
```


### 怪异属性
1. role HTML5的语义化
1. aria-label   通常用于输入框
1. tabindex tab
1. data-    自定义属性



## 插件
1. bootstrap 插件依赖 bootstrap.js
1. bootstrap.js 依赖 jquery

1. 通过data属性控制页面交互
1. $(document).off('.data-api') 解除属性绑定

## 媒体查询
### 常见属性
1. device-width,device-height 设备宽高
1. width,height 渲染窗口宽高(物理的)
1. orientation  设备方向
    1. landscape
    1. 
1. resolution   设备分辨率



## lint
与大多数C语言编译器相比，lint可以对程序进行更加广泛的错误分析，是一种更加严密的编译工具。最初，lint这个工具用来扫描C源文件并对源程序中不可移植的代码提出警告。但是现在大多数lint实用程序已经变得更加严密，它不但可以检查出可移植性问题，而且可以检查出那些虽然可移植并且完全合乎语法但却很可能是错误的特性。

随着历史的推移,Lint后来形成了一系列的工具，包括PC-Lint/FlexeLint(Gimpel),LintPlus(Cleanscape)以及Splint。

Bootlint 是 Bootstrap 官方所支持的 HTML 检测工具。在使用了 Bootstrap 的页面上（没有对 Bootstrap 做修改和扩展的情况下），它能自动检查某些常见的 HTML 错误。纯粹的 Bootstrap 组件需要固定的 DOM 结构。Bootlint 就能检测你的页面上的这些“纯粹”的 Bootstrap 组件是否符合 Bootstrap 的 HTML 结构规则。建议将 Bootlint 加入到你的开发工具中，这样就能帮你在项目开发中避免一些简单的错误影响你的开发进度。

## 兼容性
### IE8
* Internet Explorer 8 需要 Respond.js 配合才能实现对媒体查询（media query）的支持。


## 重置样式
1. box-sizing:border-box

