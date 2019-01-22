# 全局css样式
bootstrap 重塑了浏览器的标签样式，统一了不同浏览器的默认样式，就像 linux's VFS，为什么不搞一个 bootstrap 浏览器出来，将默认类变成 element, 这样岂不是更彻底?

## Grid System
1. .container .container-fluid
1. .row
1. .col-xs-2
1. Stacked-to-horizontal(本来是stacked)
    1. .col-md-[N]
1. Responsive column resets  响应式列重置
    1. div class="clearfix visible-xs-block"
1. Offsetting columns 列偏移
    1. .col-md-offset-[N]
1. Nesting columns 列嵌套
    1. .row 中包含 .col-md-[N] 中包含 .row
1. Column ordering 列排序
    1. .col-md-push-[N]
    1. .col-md-pull-[N]

## Typography 排版
1. headings 
    1. .h1,.h2,.h3.... .h6
1. Body copy 广告正文
    1. 14px/1.428 a
    1. html font-size:10px;
1. lead body copy 中心内容
    1. .lead
1. Alignment classes 文本对齐
    1. .text-left
    1. .text-center
    1. .text-right
    1. .text-justify
    1. .text-nowrap
1. Transformation classes 大小写
    1. .text-lowercase
    1. .text-uppercase
    1. .text-capitalize
1. Initialism 首字母缩写（如 HTML Hypher Text Markup Language)
    1. .initialism [ɪ'nɪʃəlɪzəm]
    1. 英语缩写
        * initialism 就是如UN,WTO,UFO这种一个字母一个字母读的。acronym就是如UNESCO，AIDS，laser这种可以拼读的。
1. Addresses 地址
    1. 加 br
1. blockquote
    1. 添加 footer 用于标明引用来源。来源的名称可以包裹进 cite 标签中。
    1. .blockquote-reverse 类可以让引用呈现内容右对齐的效果
        * 是 **text-align:right(右对齐) 实现的,加了一个右边的边框**
    1. blockquote.pull-right(右浮动) 也定义了 text-align:right

        ```
        .blockquote-reverse,
        blockquote.pull-right {
          padding-right: 15px;
          padding-left: 0;
          text-align: right;
          border-right: 5px solid #eee;
          border-left: 0;
        }

        .pull-right {
          float: right !important;
        }
        ```

1. 列表
    1. 无序列表 unordered
    1. 有序列表 ordered
    1. 无样式列表  unstyled
        * .list-unstyled
        * 针对**直接子元素**，移除了 list-style
        * 移除了自身的 padding:40px;(不包括子元素的ul)

        ```
        <ul class="list-unstyled">
          <li>...</li>
        </ul>
        ```

    1. **内联列表 inline**
        1. ul
            1. 源码中没有定义 display,所以ul的默认block
            1. **ul margin-left/right:-5px;**
        1. li
            1. li display:inline-block
            1. li padding-left/right:5px;
        1. ul.list-inline>li>ul.list-inline 是stacked的

        ```
        <ul class="list-inline">
          <li>...</li>
        </ul>

        //源码
        .list-inline {
          padding-left: 0;
          margin-left: -5px;
          list-style: none;
        }
        .list-inline > li {
          display: inline-block;
          padding-right: 5px;
          padding-left: 5px;
        }
        ```

    1. Description  描述(dl dt dd)
        1. .dl-horizontal    dt 在左 dd 在右(@media (min-width:768))

        ```
        @media (min-width: 768px) {
          .dl-horizontal dt {
            **float: left;**
            **width: 160px;**
            overflow: hidden;
            **clear: left;**
            text-align: right;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .dl-horizontal dd {
            **margin-left: 180px;**
          }
        }

        .dl-horizontal dd:after{
            .clearfix();
        }
        ```

    1. kbd
        1. bootstrap 上的例子是嵌套的，没必要啊

    1. pre
        1. .pre-scrollable

            ```
            .pre-scrollable {
              max-height: 340px;
              overflow-y: scroll;
            }
            ```

    1. table
        1. .table 基础样式，因为有很多表格，如日历，所以没有重定义 table ,而是加了一个 .table 类
        1. striped row 条纹行
            * **.table-striped**
            * 不用基础table类
            * 只作用于 tbody的 tr
        1. hover rows
            * **.table-hover** 作用于rows of tbody
            * 不用基础table类也可以
            * 只作用于 tbody的 tr
        1. bordered table
            * .table-bordered
        1. condensed table [kənˈdens] 紧缩表格
            * **.table-condensed**
        
        ```
        .table > thead > tr > th,
        .table > tbody > tr > th,
        .table > tfoot > tr > th,
        .table > thead > tr > td,
        .table > tbody > tr > td,
        .table > tfoot > tr > td {
          **padding: 8px;**
          line-height: 1.42857143;
          **vertical-align: top;**
          border-top: 1px solid #ddd;
        }
        ```
        
        1. table-responsive
            * 可以将表格包裹在 .table-responsive 中，以实现响应式表格，其会在小屏幕设备上（小于768px）水平滚动

        1. contextual classes [kənˈtekstʃuəl] 表格状态
            * 作用于 row 或 individual cells
            1. .success
            1. .info
            1. .warning
            1. .danger
            1. .active
    1. form
        1. 基本表单
            1. **不要将 "表单组" 直接和 "输入框组" 混合使用。建议将输入框组嵌套到表单组中使用。**
            1. .checkbox, .radio 是设置在 checkbox radio 的包裹元素上的，而不是 checkbox 或 radio 上 
            
            1. form-group input's width is auto, you can change it easily just by set width:300px;

            1. form-group 仅仅加了一个 margin-bottom

            1. select width:100%, 可以改为 auto

            ```
            .radio,
            .checkbox {
              **position: relative;**
              **display: block;**
              margin-top: 10px;
              margin-bottom: 10px;
            }

            .radio-inline,
            .checkbox-inline {
              **position: relative;**
              **display: inline-block;**
              **padding-left: 20px;**
              margin-bottom: 0;
              font-weight: normal;
              vertical-align: middle;
              cursor: pointer;
            }
            ```

            1. .input-lg (height)
            1. .has-feedback .form-control-feedback
                1. form-control-feedback 是绝对定位，has-feedback 是相对定位
                    1. form-control-feedback 要放在input-group 的外边，否则右边没有圆角
                    1. .input-group form-control:last-child {左边border-radius重设为0}
                    1. control:not(:first-child):not(:last-child){border-radius:0;}
                    1. 有边框的是最后一个 input-group 中最后一个 input[type='text'] 而form-control-feedback 是透明的

                1. Feedback icons only work with textual <input class="form-control"> elements.

                ```
                <div class="form-group has-success **has-feedback**">
                  <label class="control-label" for="inputSuccess2">Input with success</label>
                  <input type="text" class="form-control" id="inputSuccess2" aria-describedby="inputSuccess2Status">
                  <span class="glyphicon glyphicon-ok **form-control-feedback**" aria-hidden="true"></span>
                  <span id="inputSuccess2Status" class="sr-only">(success)</span>
                </div>

                .form-control-feedback {
                  **position: absolute;**
                  top: 0;
                  **right: 0;**
                  z-index: 2;
                  **display: block;**
                  width: 34px;
                  height: 34px;
                  line-height: 34px;
                  text-align: center;
                  pointer-events: none;
                }
                ```


            1. .help-block
                1. Block level help text for form controls.

            1. form-control-static
                1. When you need to place plain text next to a form label within a form, use the **.form-control-static** class on a <p>. （中文翻译成 静态控件）
                1. 和 .control-label vertical 方向一样的设置 
                    1. @padding-base-vertical
                    1. @padding-large-vertical
                    1. @padding-small-vertical
                    1. @padding-xs-vertical
            1. .control-label
                * display:inline-block

            1. checkbox 和 radio 已经重设了

            1. 一定要添加 label 标签
                1. 可以同过 .sr-only 将其隐藏

        1. inline form
            1. .form-inline
            1. Add **.form-inline** to your form (which doesn't have to be a <form>) for left-aligned and inline-block controls. 
            1. .form-inline .form-group/.form-control/.form-control-static/.checkbox/.radio/  
                display:inline-block;

        1. Horizontal form
            1. .form-horizontal
                1. Use Bootstrap's predefined grid classes to align labels and groups of form controls in a horizontal layout by adding **.form-horizontal** to the form (which doesn't have to be a <form>). Doing so changes **.form-groups** to behave as grid rows, so no need for .row.
            1. .form-horizontal .form-group::after{.clearfix()}
            1. .form-horizontal .form-group{
                margin-right: -15px;
                margin-left: -15px;
            }
            1. height

                ```
                <form class="form-horizontal">
                <div class="form-group form-group-lg">
                ```
    1. 按钮
        1. 虽然按钮类可以应用到 <a> 和 <button> 元素上，但是，**导航和导航条组件只支持 <button> 元素**
        1. .btn-block

            ```
            .btn-block {
              display: block;
              width: 100%;
            }
            ```

    1. 图片
        1. .img-responsive

            ```
            display: block;
            max-width: 100%;
            height: auto;
            ```

        1. 形状
            1. img-rouded(border-radius)
            1. img-circle(border-radius:50%)
            1. img-thumbnail (padding:4px)

    1. 关闭按钮    
        1. close
            <button class='close'>&times;</button>

    1. 三角符号
        1. caret
            1. 脱字符号 ^
            <span class='caret'></span>

    1. 快速浮动
        1. pull-left
        1. pull-right
        1. **不能用于导航条组件中**
            1. 排列导航条中的组件时可以使用这些工具类：.navbar-left 或 .navbar-right 
    1. 内容块居中 .center-block

        ```
        center-block {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        ```

    1. 显示或隐藏内容

        ```
        .show {
          display: block !important;
        }
        .hidden {
          display: none !important;
        }
        .invisible {
          visibility: hidden;
        }
        ```
    1. 响应式工具
        1. visible-*-inline
        1. visible-*-block
        1. visible-*-inline-block
        
    1. scaffolding
        1. 背景色
        1. 前景色(color)

## 整体架构图
1. 下拉菜单 dropdown
    1. 将下拉菜单触发器 和 下拉菜单都包裹在 .dropdown 里，或者另一个声明了 position: relative; 的元素。然后加入组成菜单的 HTML 代码。
    1. li.dropdown-header  不需要能够点击
    1. li.dropdown-divider

```
.dropup,
.dropdown {
  position: relative;
}

// The dropdown menu (ul)
.dropdown-menu {
  **position: absolute;**
  top: 100%;//100%父元素高度，正好不覆盖父元素，在父元素下边
  **left: 0;**
  z-index: @zindex-dropdown;
  **display: none; // none by default, but block on "open" of the menu**
  **float: left;** //这是什么意思???兼容性???
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0; // override default ul
  list-style: none;
  font-size: @font-size-base;
  text-align: left; // Ensures proper alignment if parent has it changed (e.g., modal footer)
  background-color: @dropdown-bg;
  border: 1px solid @dropdown-fallback-border; // IE8 fallback
  border: 1px solid @dropdown-border;
  border-radius: @border-radius-base;
  .box-shadow(0 6px 12px rgba(0,0,0,.175));
  background-clip: padding-box;

  // Aligns the dropdown menu to right
  // 这在哪里用呢???
  &.pull-right {
    **right: 0;**!!!
    left: auto;
  }

  // Dividers (basically an hr) within the dropdown
  .divider {
    .nav-divider(@dropdown-divider-bg);
    // 仅仅是height:1px 的display:list-item, 有margin: ((@line-height-computed / 2) - 1) 0;
  }

  // Links within the dropdown menu
  > li > a {
    **display: block;**
    padding: 3px 20px;
    **clear: both;**
    font-weight: normal;
    line-height: @line-height-base;
    color: @dropdown-link-color;
    **white-space: nowrap; // prevent links from randomly breaking onto new lines**
  }
}

//.pull-left的mixin版本
.dropdown-menu-right {
  right: 0;
  left: auto;
}
//.pull-left的mixin版本
.dropdown-menu-left {
  right: auto;
  left: 0;
}
```

* 通过为下拉菜单的父元素设置 .dropup 类，可以让菜单向上弹出（默认是向下弹出的）。
    1. 如何实现的呢???

1. 列表组 list-group

    ```
    <ul class="list-group">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
    </ul>
    ```

    1. 列表组中的每个元素都可以是任何 HTML 内容
    1. ul 可以替换为 div
    1. li可以替换为 a, button;

    定制内容
    1. .list-group-item-heading
    1. .list-group-item-text

    1. 加入徽章

    ```
    <ul class="list-group">
    <li class="list-group-item">
      //徽章自动放到右边,实际是 list-group-item.badge{float:right}
      //badge 实际上是 display:inline-block
      <span class="badge">14</span>
      Cras justo odio
    </li>
    </ul>
    ```

    1. 情景 
        1. list-group-item-success
        1. list-group-item-info
        1. list-group-item-warning
        1. list-group-item-danger

1. 面板 panel
    1. 默认的 .panel 组件所做的只是设置基本的边框（border）和内补（padding）来包含内容
    ```
    <div class="panel panel-default">
    <div class="panel-body">
      Basic panel example
    </div>
    </div>
    ```
    1. 可以加标题
        1. div.panel-heading
    1. 可以加脚注
        1. div.footer
    1. 情景效果
        1. .panel-primary
        1. .panel-success
        1. .panel-info
        1. .panel-warning
        1. .panel-danger
    1. 带表格的面板
        1. 嵌套到 panel-body 中
        1. 如果没有 .panel-body ，面版标题会和表格连接起来，没有空隙。
    1. 带列表组的面版


    
1. 进度条 progress-bar
    1. style='width:60'
    1. progress-bar-success
    1. progress-bar-striped
    1. progress-bar-active

    <div class="progress">
        <div class="progress-bar progress-bar-striped active" style="width: 45%">
          <span class="sr-only">45% Complete</span>
        </div>
    </div>

1. Glyphicons 字体图标
1. 不能在同一个元素上与其他类共同存在，通常用在span上
1. 只能应用在不包含任何文本内容或子元素的元素上


1. 缩略图 thumbnail
    1. thumbnail
    1. 主要保证 img 水平居中,别的元素没有怎么规定,默认流向

    .thumbnail > img,
    .thumbnail a > img {
      display: block;
      max-width: 100%;
      height: auto;
      margin-right: auto;
      margin-left: auto;
    }

    .thumbnail .caption {
      padding: 9px;
      color: #333;
    }

    <div class="row">
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <img src="..." alt="...">
          <div class="caption">
            <h3>Thumbnail label</h3>
            <p>...</p>
            <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
          </div>
        </div>
      </div>
    </div>


1. 按钮式下拉菜单 button dropdown



1. 标签 label
    1. color:#fff;
    1. font-size:75%
    1. label-success

1. 导航条 navbar
    1. navbar-left / navbar-right
        1. .pull-left 和 .pull-right 的 mixin 版本，但是他们被限定在了媒体查询（media query）中，这样可以更容易的在各种尺寸的屏幕上处理导航条组件。
    1. navbar-link  a.navbar-link 放到p
    1. navbar-text
    1. navbar-btn

    1. navbar-fixed-top
    1. navbar-fixed-bottom
    1. navbar-static-top
    1. navbar-default / navbar-inverse
    1. .navbar-header  左浮动
        1. .navbar-brand
    1. .navbar-nav
    1. .navbar-form

1. 导航  nav
    1. nav-tabs
    1. nav-pills
    1. nav-stacked
    1. nav-justified

1. 路径导航
    1. ul.breadcrumb

1. 分页
    1. pager
    1. previous
    1. next
1. 徽章 badge
    1. badge
    1. 默认 position:relative,无浮动

        ```
        .list-group-item > .badge {
          float: right;
        }
        ```

1. 输入框组 input-group
    1. input-group
    1. input-group-addon
    1. input-group-btn
        <span class="input-group-btn">
            <button class="btn btn-default" type="button">Go!</button>
        </span>

1. 按钮组 button-group
    1. .btn-toolbar
    1. .btn-group-vertical(nav-stacked)
    1. .btn-group.btn-group-justified
        1. 要把btn 换成 a 才可以, span 也可以
        1. 或者把btn 放进 btn-group



1. 巨幕 jumbotron    
    <div class="jumbotron">
      <h1>Hello, world!</h1>
      <p>...</p>
      <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
    </div>

    1. 还有一种用法是 div.jumbotron>div.container,适合宽度100% 样式的网站
1. 页头 page-header
    1. page-header
    1. 包裹 h1


1. 警告框 alert
    1. alert
    1. alert-dismissible 可关闭的警告框,需配合jquery
    1. alert-success
    1. alert-link

    <div class="alert alert-warning alert-dismissible" >
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </div>

1. 媒体对象 media-object
        <div class="media">

        **默认是 media-top 对齐，还可以是 media-middle, media-bottom**

        <div class="media-left media-middle">
            <a href="#">
                <img class="media-object" src="/home/bill/Pictures/100.50.png" >
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">Middle aligned media</h4>
                Ipsum ratione ad nesciunt ducimus ab. Unde exercitationem ab commodi impedit hic, distinctio pariatur accusamus Iste ipsam praesentium quidem sed eos? Porro cumque soluta dolore modi ea Commodi eos voluptatem?
            
        </div>
    </div>

    .media-left,
    .media-right,
    .media-body {
      display: table-cell;
      vertical-align: top;
    }

    .media-right,
    .media > .pull-right {
      padding-left: 10px;
    }

    .media,
    .media-body {
      overflow: hidden;
      zoom: 1;
    }
    .media-body {
      width: 10000px;
    }
1. 具有响应式特性的嵌入内容

1. well


## 至少 768px
.form-inline
.dl-horizontal


## 转为块元素
.btn-block
.hepl-block
.center-block
.show

## ul li a
.list-unstyled
.breadcrumb
.pagination
.pager


## 负margin
1. .row
    1. col-md-<N>:padding-left/right:15px;

1. ul.list-inline:margin-left/right:-5px;
    1. li.padding-left/right:5px;

1. form.horizontal
    1. .form-group 表现为 -15px
        1. div.col-md-<N> 15px;

## 右对齐
pull-right
right:0;
.pager .next> a/span

## 布局
1. block inline-block
1. relative absolute left right
    1. has-feedback     form-control-feedback
1. min-height relative float left right
    1. float-right
        1. float:right
1. margin-left
1. text-align:left/right
1. dd → margin-left:180px;
1. form-group → width:auto
1. vertical-align:middle
1. float
    1. .pager .previous > a/span

## 水平改为垂直
.nav-stacked
.btn-group-vertical

## 打印机
.visible-print-block
.visible-print-inline
.visible-print-inline-block
以上对打印机可见，对screen不可见display:none

.hidden-print
对打印机不可见(display:none),screen可见


## modal 英[ˈməʊdl]
https://v.youku.com/v_show/id_XMTM3MjMwNDQ3Ng==.html?spm=a2h0j.11185381.listitem_page1.5!13~A&&f=25860489

data-toggle 触发类型
data-target 触发目标

1. modal .show(显示)
1. modal-dialog
1. modal-content “modal-content”中是弹出窗真正的内容，主要包括三个部分
    1. modal-header 弹出框头部，使用“modal-header”，主要包括标题和关闭按钮 
        .modal-title
    1. modal-body 弹出框主体，使用“modal-body”，弹出框的主要内容 
    1. modal-footer 弹出框脚部，使用“modal-footer”，主要放置操作按钮 
        1. text-align:right


1. 源码
//modal 覆盖viewport
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  display: none;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}

// modal-dialog 是主要内容显示区域，居中
.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}

// 模态弹出窗底部有一个透明的黑色蒙层效果，实现源码如下：
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
}


// 它有一个过渡动画，从fade到in，把opacity值从0变成了0.5。实现源码如下：
.modal-backdrop.fade {
  filter: alpha(opacity=0);
  opacity: 0;
}
.modal-backdrop.in {
  filter: alpha(opacity=50);
  opacity: .5;
}


## 适合响应式吗?
### 不适合的
1. 电子商务网站
1. 交流沟通
    1. 不压缩啊，流量大
1. 功能性
### 适合的
1. 品牌宣传网站
1. 行业、协会信息
1. 视频类
    
