## canvas 动画
* >=IE9
* 只要两个属性 width and height 不要使用css控制它的宽高，而是使用html属性(参见mdn)


var mycanvas=document.getElementsByTagNames('canvas')[0];
### 获取canvas的渲染上下文
var ctx = mycanvas.getContext('2d');

### 内置的画图函数
ctx.strokeRect(x,y,w,h)
ctx.fillRect(x坐标,y坐标,宽度,高度)

---

font - 定义字体
fillText(text,x,y) - 在 canvas 上绘制实心的文本
strokeText(text,x,y) - 在 canvas 上绘制空心的文本

ctx.font='30px Arial'
---

ctx.fillStyle='red';
ctx.beginPath();
ctx.arc(....)
ctx.fill();
ctx.close();


能产生颜色的有两个
    1. 笔触（描边）:stroke()
ctx.strokeStyle='red'
    1. 填充:fill()

绘制路径
图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。一个路径，甚至一个子路径，都是闭合的。使用路径绘制图形需要一些额外的步骤。

首先，你需要创建路径起始点。
然后你使用画图命令去画出路径。
之后你把路径封闭。
一旦路径生成，你就能通过描边或填充路径区域来渲染图形。

ctx.beginPath();

//移动到起点
ctx.moveTo(x,y)

//画到哪里,并未着色
ctx.lineTo(x,y)
ctx.lineTo(a,b)
....

//封闭
ctx.closePath()

//着色
cts.strokeStyle='red'
ctx.lineWidth='10'
ctx.stroke()

//填充
ctx.fillStyle='green'
ctx.fill()


---

绘制圆弧或者圆，我们使用arc()方法

arc(x, y, radius, startAngle, endAngle, anticlockwise)

Math.PI
画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。

角度单位是弧度，不是度数。角度与弧度的js表达式:radians=(Math.PI/180)degrees

180deg/Pi=57.29deg 是1弧度，1rad



二次贝塞尔曲线及三次贝塞尔曲线



---

运动

画上去了就不能改变位置大小形状了，重新画一个，这不是帧动画嘛

//清除区域
ctx.clearRect(x,y,w,h)

x=100;
setInterval(function(){
    x++;
    ctx.clearRect(x,y,w,h)

    ctx.beginPath();
    ctx.moveTo(a,b);
    ctx.arc(x,100,...);    
    ctx.closePath();
    },
20)


只有一个定时器

上升到面向对象

function Ball(x,y,r,speed){
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = spee;

    //将自己推进数组,这个数组在外部定义了
    actorsArr.push(this);
}
Ball.prototype.render = function(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,Math.PI\*2,true);
    ctx.closePath();
    ctx.fill();
}
Ball.prototype.update = function(){
    this.x++;
}
var b = new Ball(100,100,50,2);
b.render();

var actorsArr=[];

//没有actorsArr 时的写法
setInterval(function(){
    ctx.clearRect(0,0,w,h);
    ctx.update();
    ctx.render();
},20);


//actorsArr的写法
new Ball(....)
new Ball(....)
setInterval(function(){
    ctx.clearRect(0,0,w,h);
    for(var i =0;i<actorsArr.length;i++){
        actorsArr[i].update();
        actorsArr[i].render();
    }
},20)



---
使用图片

var img = new Image();
img.src="/home/bill/Pictures/fox.jpg";

img.onload=function(){
    ctx.drawImage(img,x,y);
}


ctx.drawImage(图片,dx,dy)
//设置图片的宽度，高度
ctx.drawImage(图片,x,y,width,height)


切片slice
前面4个:在图片上的位置
后面4个:切片,放到画布上的位置
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)






