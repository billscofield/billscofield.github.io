## bootstrap 源码分析

### 栅格系统
.clearfix(){
    &::after{
        content:'';
        display:table;
        clear:both;
    }
}

.container{
    padding-left/right:15px;
    .clear-fix();
    media查询
}

.container-fluid{
    padding-left/right:15px;
    .clear-fix();
}

.row{
    margin-left/right:-15px;
    .clearfix();
}

.col-md-<n>{
    position:relative;
    min-height:1px;
    padding-left/right:15px;
   
    float:left; 

    width:n/12%;
}

.col-md-push-<n>{
    left:n/12%;
}

.col-md-pull-<n>{
    right:n/12%;
}

.col-md-offset-<n>{
    margin-left:n/12%;
}

响应式列重置
.clearfix  + .visible-xs-block

## 全局 css
[.h1,.h6]   没有改变关键的属性，display,position,float
body{
    font-size:14px;
    line-height:1.428571429;
}
.lead{
    margin-bottom:20px;
    font-weight:300;
}



.list-unstyled
.list-inline
.dl-horizontal dt
    min-width:768
    width:160px;
    clear:left
    text-align:right

    overflow:hidden
    text-overflow:ellipsis
    white-space:nowrap
.dl-horizontal dd
    margin-left:180px;

.pre-scrollable

.table
    .table-bordered
    .table-hover
    .table-condensed
    .table-striped
    .table-responsive
    .active
    .success
    .info
    .warning
    .danger

.form-horizontal
.form-inline   
.form-group 
.form-control
.control-label
.help-block
.input-group-addon
.input-group-btn
.sr-only
.checkbox
.radio
    注意:使用在checkbox 和 radio 的父元素上的,包裹元素,margin-bottom:20px;
.checkbox-inline
.radio-inline
.form-control-static
    display: inline-block;
    竖直方向 参考了 form-control
* 注意
    .form-horizontal .form-group {margin-left/right:-15px;.clearfix}
.has-feedback
.form-control-feedback 只能加到 input.form-control 前后, form-group 内部

表单校验状态
.has-success
.has-wrong
.has-error
    .control-label, form-control, help-block 都会收到影响这些控件的父元素即可。任何包含在此元素之内的 .control-label、.form-control 和 .help-block 元素都将接受这些校验状态的样式。


.btn-block
.center-block

.img-responsive
    display:block
    水平居中用 .center-block 而不是 .text-center

.img-rounded
.img-circle
.img-thumbnail

.close {
  float: right;
  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  filter: alpha(opacity=20);
  opacity: .2;
}

.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid \9;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}

.dropdown
    是一个块级元素，width:auto
    而这个属性一般用于 nav 下的 li,并且是水平的，此时li 是float:left, shrink-to-fit, 所以不用担心飘到viewport右边
.dropdown-menu-left{
    left:0;
    right:auto;
}
.dropdown-menu-right{
    left:auto; 首先重置
    right:0;
}


.breadcrumb > li + li:before {
  padding: 0 5px;
  color: #ccc;
  content: "/\00a0";
}

ul.pagination
ul.pager

.pager .previous > a,
.pager .previous > span {
  float: left;
}
.pager .next > a,
.pager .next > span {
  float: right;
}

.btn.badge{
    top:0;
}

.list-group-item> .badge{
    float:right
}
## 布局属性
display
position
float
margin-left/right
.clearfix()
.visible-xs-block/inline/inline-block
.show
.invisible
.hidden
.pull-right
.pull-left




