#BOM

## window
* 浏览器中打开的窗口
* window 对象常用方法
    * open()
        * 请不要混淆方法 window.open() 与方法 document.open()，这两者的功能完全不同。为了使您的代码清楚明白，请使用 Window.open()，而不要使用 open()。
        * 例子
        ```
        1. 
        window.open("http://www.w3school.com.cn")
        2.
        myWindow=window.open('','','width=200,height=100')
        myWindow.document.write("This is 'myWindow'")
        myWindow.focus()
        3.
        window.open("http://www.w3school.com.cn","_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes,left=200,top=20, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400")
           left,top 定点坐标 
        ```
    * close()


## document(DOM)
* 每个载入到浏览器的 HTML 文档
* Document 对象集合
    1. all[]        提供对文档中所有 HTML 元素的访问。
    1. anchors[]    返回对文档中所有 Anchor 对象的引用。
    1. applets      返回对文档中所有 Applet 对象的引用。
    1. forms[]      返回对文档中所有 Form 对象引用。
    1. images[]     返回对文档中所有 Image 对象引用。
    1. links[]      返回对文档中所有 Area 和 Link 对象引用。
* writeln() 等同于 write() 方法，不同的是在每个表达式之后写一个换行符 \r\n。

    ```
    <script> 
    document.write("<pre>我在pre中不会换行!")
    document.write("我在pre中不会换行!")
    document.writeln("我在pre中会换行!")
    document.writeln("我在pre中会换行!")
    document.writeln("我在pre中会换行!</pre>") 
    </script>
    ```

## location
* 包含有关当前 URL 的信息
* location 对象属性

|属性  |  描述 | 
|:-:|:-:|
| hash        | 设置或返回 从井号 (#) 开始的 URL（锚）。|
| host        | 设置或返回 主机名和当前 URL 的端口号。|
| hostname    | 设置或返回 当前 URL 的主机名。|
| href        | 设置或返回 完整的 URL。|
| pathname    | 设置或返回 当前 URL 的路径部分。|
| port        | 设置或返回 当前 URL 的端口号。|
| protocol    | 设置或返回 当前 URL 的协议。|
| search      | 设置或返回 从问号 (?) 开始的 URL（查询部分）。|
 
* Location 对象方法

|属性  |  描述 | 
|:-:|:-:|
| assign()    | 加载新的文档。可以实现跳转，会加载到history,可以后退到之前页面|
| reload()    | 重新加载当前文档。|
| replace()   | 用新的文档替换当前文档。可以实现跳转，不会加载到history,不可以后退到之前页面|

```
location.assign('www.baidu.com');

location.replace('www.baidu.com');

```

## history
* 包含用户访问过的 URL

* 属性
属性    描述
length  返回浏览器历史列表中的 URL 数量。
History 对象方法

* 方法
方法        描述
back()      加载 history 列表中的前一个 URL。
forward()   加载 history 列表中的下一个 URL。
go()        加载 history 列表中的某个具体页面。history.go(-1) 同 back()

出于隐私方面的原因，History 对象不再允许脚本访问已经访问过的实际 URL.

## navigator
* 包含有关浏览器的信息
* 属性
    * appName 返回浏览器的名称。
    * appVersion  返回浏览器的平台和版本信息

## screen
* 包含有关客户端显示屏的信息
* 属性
    * availHeight   返回显示屏幕的高度 (除 Windows 任务栏之外)。
    * availWidth  返回显示屏幕的宽度 (除 Windows 任务栏之外)。
    * height
    * width





