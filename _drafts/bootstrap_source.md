## .container
1. .container

.container-fluid{
    .container-fixed();
}

.container{
    .container-fixed();
    @media (min-width:768){width:750px;}
    @media (min-width:992){width:970px;}
    @media (min-width:1120){width:1170px;}
    /* 没有定义 max-width:767 默认移动优先 */
}

.container-fixed(@gutter: @grid-gutter-width) {
  margin-right: auto;
  margin-left: auto;
  padding-left:  floor((@gutter / 2));
  padding-right: ceil((@gutter / 2));
  &:extend(.clearfix all);
}


## row
.row {
  .make-row();
}

.make-row(@gutter: @grid-gutter-width) {
  margin-left:  ceil((@gutter / -2));
  margin-right: floor((@gutter / -2));
  &:extend(.clearfix all);
}


## col(递归)
1. 入口文件
    1. .make-grid-columns();
    1. .make-grid(xs)


## 定义自己的 栅格系统
1. @import "mixin/grid.less"
1. @import "mixin/grid-framework.less"
1. @import "mixin/clearfix.less"    //注意去(),因为 extend 不能继承自 ()  源码中的utilities.less 中 .clearfix{.clearfix();}
1. @import "grid.less"
1. @import "variables.less"
1. box-sizing:border-box


## 响应式工具
1. mixin/responsive-visibility.less
1. responsive-utinities.less

Visibility utilities

.visible-xs,
.visible-sm,
.visible-md,
.visible-lg{
    <!-- 首先全部display:none;然后media 再display为block -->
    <!-- 注意，是 block -->
    }

.visible-xs/sm/md/lg-block,
.visible-xs/sm/md/lg-inline,
.visible-xs/sm/md/lg-inline-block{
<!-- 首先初始化为 display:none;然后media 查询为 block,inline,inline-block -->
}

.hidden-xs,
.hidden-sm, 
.hidden-md, 
.hidden-lg{
    查询media,再 display:none;
} 


## 栅格的巧妙之处
1. container,container-fluid,col 都有 @gutter/2 的pading-left/right
1. row 有 @gutter/-2 的margin-left/right
