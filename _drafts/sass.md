# sass
后缀名 .scss
sassy css

## 编译器
sudo gem install sass
sudo gem install compass

sass <file> >> cssfile
sass --style/-t nested(default) | compressed
sass --watch <文件>|目录

## 变量
$blue:#00f;
div{
    color:$blue;
}

变量嵌套
$side:left
div{
    border-#{$side}-radius:4px;
}

sass并不想强迫任何人一定使用中划线或下划线，所以这两种用法相互兼容。用中划线声明的变量可以使用下划线的方式引用，反之亦然。
但是在sass中纯css部分不互通，比如类名、ID或属性名。


群组选择器的嵌套;
.container {
  h1, h2, h3 {margin-bottom: .8em}
}

.container h1, .container h2, .container h3 { margin-bottom: .8em }




