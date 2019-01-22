## why jquery come
1. 兼容多个浏览器
1. 简化 DOM 操作
1. 封装了常用的功能

jquery.com
jquery123.com(zh)

## 特点
1. 语法简单
1. 文件短小精悍
    1. 压缩后的85k
    1. 未压缩的265k
1. 插件丰富，扩展性强
    1. 轮播图插件
    1. 瀑布流插件
    1. 下拉菜单
1. 兼容性强
1. 学习曲线平缓(有js基础)

## 步骤
1. 常用方法
1. 高级方法(比如c功能调用a功能)
1. 熟练使用
    1. 熟练应用jQuery, 轻松完成项目
1. 理解原理
    1. 能够独立封装部分功能

## 

1. jQuery('#one').text()   .innerText;
    1. 获取到的不是原生的DOM对象，而是
1. jQuery('#one')
    1. 返回的是一个类数组
{
    0:one
    length:1
    __proto__
}

1. $('ul>li,div').text();   还可以用并列选择器,console的时候输出所有的
{
    0：li
    1:div#one
    lenght:2
}
    如果有多个div.one,则全部获取，比如
<div class="one"></div>
<div class="one"></div>
<div class="one"></div>
<a href=""></a>

$('.one,a')
返回结果为
{
    0:div.one
    1:div.one
    2:div.one
    3:a
    length:4
}

1. index 的顺序和jQuery书写选择器的顺序无关，而是HTML中元素的顺序

## 参数的类型有那些
1. 选择器
css2 css3 的选择器都可以

1.  原生dom
还可以传入 原生dom对象
var dom = document.getElementsByTagName('div')[0];


1. 类数组(有索引值即可)
也可以传入类数组
var dom = document.getElementsByTagName('div');

var arr={0:'bill',1:'xian',2:2,length:3};
$(arr);

当length 小于 真实值的时候，是截取

1. 数组(有索引值)
var arr = ['xian', 'qun','bill'];
$(arr)

0:'xian'
1:'qun'
2:'bill'

1. 函数
将函数执行
$(function(){
    console.log($('li').text());
})

* 在dom加载解析完成后执行，就是下面的形式。所以是可以放在上边的
上面是利用下面的方式实现的

$(document).ready(function(){
    console.log($('li').text());
})


1. 空值 undefined null NaN '' 0 false
$(null)
返回空

1. 其他
    1. 原始类型的值
    1 'xian' true

    1. 对象
    {a:'xian'}
    把这个对象添加到第零位


## 原理
jquery 采用了闭包的方式,封装作用域

(function(){
    window.jQuery = window.$ = jQuery;

     function jQuery(id){
        var dom = document.getElementById(id.slice(1));
        console.log(dom);
     }    

})();

jQuery();


## 方法
1. .text()
    1. 读 .innerText
    1. 设置   .text('new value')
    1. text(function(){return 'new value'})
    1. .text(function(index,选择的元素){})   元素会打印出innerText

1. .html()  innerHTML
    1. 使用方法同 .text()
    1. 同 text 的不同在于
        1. 对于取值，对于一组标签，比如 $('div'), .html() 只取第一个
        1. 对于赋值，是全部赋值，和text一样

1. .val()  .vaule 表单元素
    1. 取值的时候，如果有多个，取第一个
    1. 赋值的话，全部赋值
$('btn').click(function(){
    console.log($('input').val());
})

    1. 数组 select
<select id="list" name="one">
    <option value="smart">smart</option>
    <option value="beauty">beauty</option>
    <option value="good">good</option>
</select>
$('button').click(function(){
    $('select').val(['good']);  //选中这个option
})

当 select 有multiple 的时候，.val(['smart','good']);

1. click()
$('#btn').click(
    function(){
        console.log($('text').text());
    }
)

--------

1. prop()  property
$('div').prop('id');
$('div').prop('class');
自定义属性是不可以的
固有属性(特性)，如 id class name style
类似于 .  如  test.className
              test.getAttribute('class')

赋值
$('div').prop('id','属性值')        ->   div.id='属性值'    所有的div元素

1. attr()  setAttribute()    getAttribute
$('div').attr('id');
$('div').attr('class');
自定义属性是可以的

赋值
$('div').attr('id','属性值')        -> div.setAttribute('属性值')   所有的div 元素


这两个方法还可以是{}
$('div').attr({id:'xian',age:2});   2 会成为字符串
{} 中的每个值 都会 对应到每个div

取值都是取第一个

注意:
1. 获取没有设置的属性
    1. attr 返回 undefined
    1. prop 返回  空
    1. prop 获取非特性，返回undefined


1. change()
$('input').change(function(){
    
})


attr 只有有设置 checked 不论值为什么，都是返回 checked
    没有则返回 undefined

prop 设置了返回 true,没有则返回false

1. .removeAttr('class')
    .removeAttr('aaa')    自定义属性

    .removeProp   只能删除通过 prop设置的自定义属性

$('ul').prop('aaa','aaaa');
console.log($(ul).prop('aaa'))    自定义属性不能对应到 dom 上, 但是能打印出来，
$('ul').removeProp('aaa')

对id 等固有属性，设置的属性值，不能 removeProp();










