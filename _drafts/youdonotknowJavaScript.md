## 获取、修改 form 表单元素 的另外一种方式
* document.表单的name.表单元素的name.HTML属性=属性值

```
1.
<script>
    function change(){
        document.xian.username.value='liuxiaoxian';
    }
</script>
<form action=""name = 'xian'>
    <input type="text" value = 'xian' name = 'username'>
    <textarea id="" name="mul" cols="30" rows="10"></textarea>
</form>
<button onclick='change()'>submit</button>


document.forms[0].elements[0].value


2.
<script>
    function change(){
        document.forms[0].images.src='/home/bill/Pictures/girls/hei.jpg';
        document.forms[0].images.width='200';
        console.log(document.forms[0].style.border);

    } 
</script>
<form action=""name = 'xian' style='border:1px solid red'>
    <img src='/home/bill/Pictures/girls/jianshen.jpeg' name='images' width='100px'>
</form>
<button onclick='change()'>submit</button>


```
