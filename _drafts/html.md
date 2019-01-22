## form
1. readonly 和 disabled
    1. 如果一个输入项的disabled设为true，则该表单输入项不能获取焦点，用户的所有操作（鼠标点击和键盘输入等）对该输入项都无效，最重要的一点是当提交表单时，这个表单输入项将不会被提交。
    1. 而readonly只是针对文本输入框这类可以输入文本的输入项，如果设为true，用户只是不能编辑对应的文本，但是仍然可以聚焦焦点，并且在提交表单的时候，该输入项会作为form的一项提交。

## 
版权符 &copy;


## 
menu标签定义列表
<menu>
  <li>home</li>
  <li>home</li>
  <li>home</li>
</menu>


details标签定义文档细节
<details>
<summary>Copyright 2011.</summary>
<p>All pages and graphics on this web site are the property of W3School.</p>
</details>


用户输入自动完成功能
<form autocompelete="on">
    <input type="text" list="citylist" />
    <datalist id="citylist">
        <option>BeiJing</option>
        <option>QingDao</option>
        <option>QingZhou</option>
        <option>QingHai</option>
    </datalist>
</form>


页面加载的时候获取焦点
<input type="text" autofocus="autofocus" />


form外也可以做数据提交
<form action="" method="get" id="form1">
</form>
<input type="text" name="address1" form="form1" />

file可以支持多文件上传了
<input type="file" name="img" multiple="multiple" />


input 的 pattern 需要有一个提交按钮，如 button


contenteditable 属性规定是否可编辑元素的内容。
<p contenteditable="true">这是一段可编辑的段落。请试着编辑该文本。</p>


select size 属性决定几行显示，multiple多选


iframe src="https://www.google.com" //指向隔离页面的位置


1pt=1/72英；1in=2.45cm。


当一个元素的visibility属性被设置成collapse值后，对于一般的元素，它的表现跟hidden是一样的。
    1. chrome中，使用collapse值和使用hidden没有区别。
    1. firefox，opera和IE，使用collapse值和使用display：none没有什么区别。

