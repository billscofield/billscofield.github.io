---
layout: post
title: "Examples Animation Butterfly"
description: " ."
categories: [examples animation]
tags: [examples,animation]
redirect_from:
  - /2018/05/08/
---
## Butterfly 效果
<link rel="stylesheet" href="http://www.刘蛟.中国/resources/butterfly/css/style.css">
<div><img src="http://www.刘蛟.中国/resources/butterfly/images/flowers.jpeg" width="900px"></div>
<div class="wrap">
    <div class="butterleft"><img src="http://www.刘蛟.中国/resources/butterfly/images/left.png"></div>
    <div class="butterbody"><img src="http://www.刘蛟.中国/resources/butterfly/images/body.png"></div>
    <div class="butterright"><img src="http://www.刘蛟.中国/resources/butterfly/images/right.png"></div>
</div>

## 代码
* HTML

```
<link rel="stylesheet" href="http://www.刘蛟.中国/resources/butterfly/css/style.css">
<div><img src="../images/flowers.jpeg" width="900px"></div>
<div class="wrap">
    <div class="butterleft"><img src="http://www.刘蛟.中国/resources/butterfly/images/left.png"></div>
    <div class="butterbody"><img src="http://www.刘蛟.中国/resources/butterfly/images/body.png"></div>
    <div class="butterright"><img src="http://www.刘蛟.中国/resources/butterfly/images/right.png"></div>
</div>
```
* CSS

```
*{
    margin:0;
    padding:0
}
@keyframes LEFT{
    0%{
        transform:rotateY(0deg);
    }
    100%{
        transform:rotateY(60deg);
    }
}
@keyframes RIGHT{
    0%{
        transform:rotateY(0deg);
    }
    100%{
        transform:rotateY(-60deg);
    }
}
.wrap{
    transform:scale(0.5,0.5) rotateZ(30deg);
    position:absolute;
    top:50%;
    left:50%;
    width:485px;
    height:450px;
    margin-top:-150px;
    margin-left:-290px;
    /* border:1px solid green; */
    /* background:green; */

    transform-style:preserve-3d;
    perspective:2000px;
    
}
.butterleft,.butterbody,.butterright{
    float:left;
    position:absolute;
}
.butterleft{
    top:30px;
    transform-origin:246px center;
    animation:LEFT 0.6s ease Infinite alternate-reverse;
}
.butterbody{
    top:180px;
    left:210px;
}
.butterright{
    top:30px;
    left:225px;
    transform-origin:20px center;
    animation:RIGHT 0.6s ease Infinite alternate-reverse;
}

```
