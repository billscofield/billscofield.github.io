1. 水仙花数

```
var sum = 0;
var count = 0;

for(var i = 100; i<1000; i++){
    //百位
    var bai = Math.floor(i / 100);
    //十位
    var shi = Math.floor((i % 100)/10);
    //个位
    var ge = i % 100 % 10;

    if(Math.pow(bai,3) + Math.pow(shi,3) + Math.pow(ge,3) == i){
        console.log(i);
    }
}
```

1. 100以内的质数

```
设置标记法
for(var i = 3; i < 100; i++){

    var flag = true;

    for(var j = 2; j <= parseInt(Math.sqrt(i)); j++){
        if((i % j) === 0){
            flag = false;
            break;
        }
    }
    if(flag){
        console.log(i);
    }
}
```

1. 九九乘法表
```
.html
        <pre>
<script src="./second.js"></script>
        </pre>

.js
for(var i = 1; i< 10 ;i++){
    for(var j = 1; j <= i; j++){
        document.write( j + ' * ' + i + ' = ' + i*j + "&#9;");
    }
    document.write('<br>');
}
```

1. 画三角形

```
1.
*
**
***
****

for(var i = 1; i<10 ; i++){
    for(var j = 1; j<=i ; j++){
        document.write('*');
    }
    document.write('<br>');
}

2.
*****
****
***
**
*
for(var i = 0; i<5 ; i++){
    for(var j = 4 ; j>=i ; j--){
        document.write('*');
    }
    document.write('<br>');
}

```

* 深拷贝
```
function deepCopy(origin,target){           //注意点，两个参数
    var toString = Object.prototype.toString;

    if(toString.call(origin) === '[object Object]'){
        target = target || {};          //注意点
    }else if(toString.call(origin) === '[object Array]'){
        target = target || [];
    }

    for(var i in origin){
        if(origin.hasOwnProperty(i)){
            if(origin[i] !== null && typeof origin[i] === "object"  ){
                if(toString.call(origin[i]) === '[object Object]'){
                    target[i] = {};
                }else if(toString.call(origin[i]) === '[object Array]'){
                    target[i] = [];
                }

                deepCopy(origin[i],target[i]);

            }else if(toString.call(origin[i]) === '[object Null]' || typeof origin[i] !== "object"){
                target[i] = origin[i];
            }
        }
    }
    return target;
}
var res = deepCopy(obj);
```

1. 判断一个数是不是偶数

```
function isEven(n){
    return n % 2 == 0;
}
```

1. 数组去重

```
var a = [1,2,1,3,43,2,3,1,2,3,5,5];

for(var i=0;i<a.length;i++){    
    for(var j = i+1;j<a.length;j++){    //每次循环，a.length 可能发生变化
        if(a[i]==a[j]){
            a.splice(j,1);
            j--;        //important
        }
    }
}
console.log(a);
console.log(a.sort());
```

1. 数组排序 sort 回调函数

```
arr.sort(
function(a,b){
    return a-b;
}
)

```

1. 全选？

```
<form>//一有了这个form标签，就选不中了，选中状态只是一闪
    你的爱好:
    <input type='checkbox' name='hobby' value='足球'>足球
    <input type='checkbox' name='hobby' value='篮球'>篮球
    <input type='checkbox' name='hobby' value='羽毛球'>羽毛球
    <input type='checkbox' name='hobby' value='乒乓球'>乒乓球
    <br>
    <button id="all">全选</button>
    <button id="none">全不选</button>
    <button id='reverse'>反选</button>
    <input type='submit' value ='提交'>
</form>

<script>
var CheckAll=document.getElementById('all');
var CheckBox=document.getElementsByName('hobby');
CheckAll.onclick = function(){
    for(var i = 0; i<CheckBox.length; i++){
        CheckBox[i].checked = true;
    }
}
</script>
```

1. 多个事件绑定函数 兼容 写法

```
var callBack = function(){
    alert('hello');
}
function bind(obj,eventStr,callFunction){
    if(!!obj.attachEvent){
        obj.attachEvent('on'+eventStr,
        function(){
            callBack.call(obj);//解决this 绑定的问题
        });
        
    }else{
        obj.addEventListener(eventStr,callFunction,false);
    }
}

var btn = document.getElementsByTagName('button')[0];
bind(btn,'onclick',callBack);




2. 事件绑定 this
var div = document.getElementsByTagName('div')[0];
function handle(){
    ...
}

div.attachEvent('onclick',function(){
    handle.call(div);
});
```


1. onclick && ondbclick 并存

```
```

1. 图片切换

```
```

1. 元素.querySelector() 问题

```
var div = document.querySelectorAll('body>div');
var div = document.getElementsByTagName('div');
document.body.removeChild(div[1]);
//var div2 = div[1];
//div2.remove();
console.log(div);   // 此时访问的 div 并非定义时的 div 了，而是经过了修改
```

1. 实现 children

```
Element.prototype.myChildren = function(){
    var child = this.childNodes;
    var len = child.length;
    var arr = [];
    for(var i = 0;i<len;i++){
        if(child[i].nodeType == 1){
            arr.push(child[i]);
        }
    }
    return arr;
}
//执行
div.myChildren();
```

1. 实现 hasChildren 和 hasChildNodes


1. 事件委托

```
var ul = document.getElementsByTagName('ul')[0];

ul.onclick = function(event){
    event = event || window.Event;
    alert(event.target.innerHTML);
}
```

1. 拖拽

```
var div = document.getElementsByTagName('div')[0];
div.onmousedown = function(event){
    var offX = event.clientX - parseInt(window.getComputedStyle(div,null).left);
    var offY = event.clientY - parseInt(window.getComputedStyle(div,null).top);
    document.onmousemove = function(event){
        console.log(offX);
        var x = event.clientX ;
        var y = event.clientY ;
        div.style.top = y - offY + 'px';
        div.style.left = x -offX + 'px';
        //div.style.top = y + 'px';
        //div.style.left = x + 'px';
    }
    document.onmouseup = function(){
        document.onmousemove = null; 
    }
}
```

1. 拖拽 和 点击 

```
var div = document.getElementsByTagName('div')[0];


var firstTime = 0;
var endTime = 0;
var state = undefined;  //true 为点击，false 为拖拽

div.onmousedown = function(){
    firstTime = new Date().getTime();
}
div.onmouseup = function(){
    endTime = new Date().getTime();
    if(endTime - firstTime < 300){
        state = true;
    }
}

div.onclick = function(){
    if(state===true){
        //click事件
        div.style.backgroundColor = '#0f0';
    }else{
        console.log('拖拽ing');
    }
}
```

1. 元素的第几层父级元素

```
function returnParent(element,n){
    while(n>0 && element){  //element不能是null
        element = element.parentNode;
        n--;
    }
    return res;
}
```

1. 元素的第 n 个兄弟元素（ n>0:next ; n<0:previous ; n=0 :this)

```
function returnSiblingElement(element,n){
    while(element && n != 0){
        if(n>0){
            element = element.nextElementSibling;
            n--;
        }else{
            element = element.previousElementSibling;
            n++;
        }
    }
    return element;
}
```

1. 元素的第 n 个兄弟元素（ n>0:next ; n<0:previous ; n=0 :this) 兼容 IE 写法

```
function returnSiblingElement(element,n){
    while(element && n!= 0){
        if(n>0){
            if(element.nextElementSibling){
                element = element.nextElementSibling;
            }else{
                for(element = element.nextSibling; element!=null  && element.nodeType!=1;element = element.nextSibling);
            }
            n--;
        }else{
            if(element.previousElementSibling){
                element = element.previouseElementSibling;
            }else{
                for(element = element.previousSibling; element!=null  && element.nodeType!=1;element = element.previousSibling);
            }
            n++;
        }
    }
    return element;
}
```

1. 获取滚动条位置 兼容写法

```
function getScrollOffset(){
    if(window.pageXOffset){
        return{
            x:window.pageXOffset,
            y:window.pageYOffset
        }
    }else{
        return{
            x:document.body.scrollLeft + document.documentElement.scrollLeft,
            y:document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}
```

1. viewport 尺寸
```
function viewportSize(){
    if(window.innerWidth){
        return{
            x:window.innerWidth,
            y:window.innerHeight
        }
    }else{
        if(document.compatMode == 'BackCompat'){
            return{
                x:document.body.clientWidth,
                y:document.body.clientHeight
            }
        }else{
            return{
                x:document.documentElement.clientWidth,
                y:document.documentElement.clientHeight
            }
        }
    }
}
```

1. getElementPosition


1. 展开 / 收起


1. getStyle

```
function getStyle(element,prop){
    if(window.getComputedStyle){
        return window.getComputedStyle(element,null)[prop];
    }else{
        return element.currentStyle[prop];
    }
}
```

1. 伪元素的属性更改

element的style修改 一般都是 先定义一个类，然后触发事件后，修改类,效率高,易于维护

```
.green::after{
    content:'';
    width:50px;
    height: 50px;
    background-color:green;
    display:inline-block;
}
.yellow::after{
    content:'';
    width:50px;
    height: 50px;
    background-color:yellow;
    display:inline-block;
}

div.onclick = function(){
    this.className = 'yellow';
}
```


1. 兼容性绑定事件

```
function addEvent(element,type,handle){
    if(element.addEventListener){
        element.addEventListener(type,handle,false);
    }else 
    if(element.attachEvent){
        element.attachEvent('on'+type,function(){
            handle.call(element);
        });
    }else{
        element['on'+type] = handle;
    }
}

function hand(){
    console.log(this);
}
```

1. stopBubble

```
function stopBubble(e){
    if(e.cancelBubble){
        e.cancelBubble = true;
    }else{
        e.stopPropagation();
    }
}
```


1. 网页右键取消 document.contextmenu
//添加 script

```
var script = document.createElement('script');
var stat = true;
script.innerText = "document.oncontextmenu = function(){alert('您已取消网页作者的右键行为，恢复至默认');stat = false;}";

if(stat){
    document.body.appendChild(script);
}
```

1. 阻止默认事件
function stopDefaultEvent(event){
    if(e.preventDefault){
        event.preventDefault();
    }else{
        event.returnValue = false;
    }
}


1. 事件源对象
var target = event.target || event.srcElement;


1.  异步加载script 按需加载
function loadScript(url,fun){
    var script = document.createElement('script');
    script.type = 'text/javascript';

    if(script.readyState){
        script.onreadystatechange = function()
            if(script.readyState = 'complete' || script.readyState = 'loaded'){
                fun();
            }
    }else{
        script.onload = function(){
            fun();
        }
    }

    script.src = url;//必须写在上边的代码后边
    document.head.appendChild(script);
}

// window.location.search 返回查询关键字对象
function getSearch(){
    var searchObj = {};

    var search = window.location.search;
    var temp = search.substring(1).split('&');
    for(var i = 0;i<temp.length;i++){
        var temp2 = temp[i].split('=');
        searchObj[temp2[0]] = temp2[1];
    }
    console.log(searchObj);
}




