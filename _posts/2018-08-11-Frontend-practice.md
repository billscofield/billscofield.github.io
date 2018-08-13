---
layout: post
title: 前端练习和知识点
---
# Frontend Practice

## HTML CSS
1. clear
<p data-height="265" data-theme-id="0" data-slug-hash="NBowRd" data-default-tab="html,result" data-user="billscofield" data-pen-title="clear 的正确用法" class="codepen">See the Pen <a href="https://codepen.io/billscofield/pen/NBowRd/">clear 的正确用法</a> by billscofield (<a href="https://codepen.io/billscofield">@billscofield</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 布局
### 水平居中
1. 文本/行内元素/行内块级元素
    * text-align:center(父元素上,vertical-align 是写在子元素上)
1. 单个块级元素
    * margin:0 auto
1. 多个块级元素
    * display:inline-block; + text-align:center;
1. 使用绝对定位实现

    ```
    width:100px;
    height:50px;
    position:absolute;
    left:50%;
    margin-left:-50px;
    //transform: translateX(-50%);  /*自身宽度一半,等同于margin-left: -50px;*/
    ```






### 两栏布局
1. 右侧固定
<p data-height="319" data-theme-id="0" data-slug-hash="qygJGM" data-default-tab="html,result" data-user="billscofield" data-pen-title="两栏布局右侧固定左侧自适应" class="codepen">See the Pen <a href="https://codepen.io/billscofield/pen/qygJGM/">两栏布局右侧固定左侧自适应</a> by billscofield (<a href="https://codepen.io/billscofield">@billscofield</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


## 小知识点
1. offsetWidth 对应 border-box, clientWidth 对应 padding-box
    * 原生 DOM API 没有 margin-box 对应的宽度和高度
<p data-height="265" data-theme-id="0" data-slug-hash="ZjwmYX" data-default-tab="js,result" data-user="billscofield" data-pen-title="offsetWidth & clientWidth" class="codepen">See the Pen <a href="https://codepen.io/billscofield/pen/ZjwmYX/">offsetWidth & clientWidth</a> by billscofield (<a href="https://codepen.io/billscofield">@billscofield</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

1. inline-block元素的baseline确定规则
    * **inline-block 如果没有内联元素，或者overflow不是visible, 则该元素的基线就是其 margin 底边缘**
    * **inline-block 如果不是空的，基线是元素里面最后一行内联元素的基线**

<p data-height="311" data-theme-id="0" data-slug-hash="YjgKvJ" data-default-tab="css,result" data-user="billscofield" data-pen-title="inline-block 元素的 baseline 确定规则" class="codepen">See the Pen <a href="https://codepen.io/billscofield/pen/YjgKvJ/">inline-block 元素的 baseline 确定规则</a> by billscofield (<a href="https://codepen.io/billscofield">@billscofield</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

1. **非主动触发位移的内联元素**是不可能跑到计算容器外面的

<p data-height="233" data-theme-id="0" data-slug-hash="GBeoJr" data-default-tab="css,result" data-user="billscofield" data-pen-title="非主动触发位移的内联元素" class="codepen">See the Pen <a href="https://codepen.io/billscofield/pen/GBeoJr/">非主动触发位移的内联元素</a> by billscofield (<a href="https://codepen.io/billscofield">@billscofield</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

1. inline-block 特殊情况下的 baseline
    * inline-block 为空元素，或者 overflow 不为 visible 时，元素的 baseline 为 margin-bottom
    * 否则，inline-block 的baseline 为元素中最后一行内容的 baseline
    * line-height:0 时，inline-block 从 x 的中线开始，还是baseline 对齐，所以 父元素div会被撑开0.5ex

<p data-height="307" data-theme-id="0" data-slug-hash="ajMBZp" data-default-tab="html,result" data-user="billscofield" data-pen-title="inline-block 的 baseline" class="codepen">See the Pen <a href="https://codepen.io/billscofield/pen/ajMBZp/">inline-block 的 baseline</a> by billscofield (<a href="https://codepen.io/billscofield">@billscofield</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

