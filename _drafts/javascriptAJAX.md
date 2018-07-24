## AJAX
* Asynchronous JavaScript and XML
* 不用刷新整个页面便可与服务器通信的技术
* 只刷新网页局部的技术
    * XMLHttpRequest
    * 该对象是对 JS 的一个扩展，可使网页与服务器通信，是创建 AJAX 应用的最佳选择，实际上，通常把 AJAX 当做 XMLHttpRequest 对象的代名词
    * 载体：XML，文本, Json
* AJAX 并不是一项新技术，而是几种技术的融合，以一种全新的方式聚合在一起
    * 与服务器端语言无关
    * CSS
    * 使用 XMLHTTP 组件 XMLHttpRequest 进行异步数据读取
    * 使用 JavaScript 绑定和处理事件
* 缺点
    * 局部刷新，导致后退不好用

* JS Ajax & JQuery Ajax

## get 4 个步骤
XMLHttpRequest 最早是在 IE5 中以 ActiveX 组件的形式实现的，并非 W3C 标准

1. 创建 XMLHttpRequest 对象
    * 因为是非标准的，所以创建方法不统一，不过 IE7 后统一了
    * new XMLHttpRequest()
    ```
    var request;
    if(window.XMLHttpRequest){
        request = new XMLHttpRequest();
    }esle{
        request = new ActiveXObject('Microsoft.XMLHTTP');//IE5 IE6
    }
    ```

1. 监听事件
    * new XMLHttpRequest().onreadystatechange 
        * .readyState ==4
        * .status
        * .responseText

1. 初始化 .open
    * 初始化 HTTP 请求参数，例如 URL 和 HTTP 方法，但是并不发送请求。
    * .open(method, url, async, username, password)
        * method:get/post
        * url:是请求的主体。大多数浏览器实施了一个同源安全策略，并且要求这个 URL 与包含脚本的文本具有相同的主机名和端口。
        * asynchronous 参数指示请求使用应该异步地执行。如果这个参数是 false，请求是同步的，后续对 send() 的调用将阻塞，直到响应完全接收。如果这个参数是 true 或省略，请求是异步的，且通常需要一个 onreadystatechange 事件句柄。
        * username 和 password 参数是可选的，为 url 所需的授权提供认证资格。如果指定了，它们会覆盖 url 自己指定的任何资格。

    * 这个方法初始化请求参数以供 send() 方法稍后使用。

1. send 发送请求
    * 发送一个 HTTP 请求

## post 5 个步骤
1. 创建对象
    * var xhr = new XMLHttpRequest();

1. 监听
```
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status>=200 && xhr.status <=300){
            var resp = JSON.parse(xhr.responseText);
            if(res.result){
                alert('successful');
            }else{
                alert('failed');
            }
        }
    }
}
```
1. 初始化对象
    * xhr.open('post','./login.php',true);
1. 设定请求头，
    * xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        * 'Content-Type'
            *     
        * application/x-www-form-urlencoded
            * 客户端提交给服务器文本内容的编码方式是URL编码
1. 发送请求
    * xhr.send('name=tom&password=123');

```
<?php
    $user = $_POST['user'];
    $password = $_POST['password'];
    
    if($user == 'tom' && password = '123456'){
        echo '{"result":true};
    }else{
        echo '{"result":false};
    }
?>
```


## Http 状态码
* 1xx 表示收到 Web 浏览器请求，正在进一步的处理中
* 2xx 成功，表示用户请求被正确接收，理解和处理, 常用 200（OK）成功接收
* 3xx 重定向，表示请求没有成功，客户必须采取进一步的动作,例如，请求的资源已经移动一个新地址，常用302、307和304
* 4xx 客户端错误，表示客户端提交的请求有错误,如 404(not found) 403(fobidden)
* 5xx 服务器错误，表示服务器不能完成对请求的处理, 如 500

## Http 协议(hyper text transfer protocal)
* 客户端连上 web 服务器后，若想从 web 服务器上获得某个资源，就必须遵守一定的通讯格式。Http 协议就是用于定义客户端与 web 服务器通讯的格式

* 基于 TCP/IP 连接的应用层协议
* 默认端口 80
* 基于 请求-响应式 模型
* 所有的 www 文件都必须遵守这个标准

* 版本 
    * HTTP 0.9
        * 只能传输文本,包含 超链接
        * http 0.9 于1991年发布 而 FTP 1985年10月发布

    * HTTP 1.0
        * 引入 MIME ,能够传输多媒体内容
            * 最开始没有引入 MIME，后来才引入 MIME 到 HTTP 协议
            * MIME 最开始是 smtp 用于实现基于文本格式的 smtp 协议 传输非文本信息 ,可以将非文本信息编码成文本信息,并且接收方能够还原为原来媒体格式。后来 被引进 Http;
                * Base64:文本编码
                * MIME 的引入极大的促进了 web 的发展
            * smtp(simple mail transmission protocol) 为什么 simple 呢? 因为只能传输 纯文本，后来引入 MIME ，故而能够传输其他资源
            * MIME 的实现过程很简单：在客户端访问资源，资源返回给客户端的时候，资源明确告知客户端自己是什么类型的资源,存在于 Http 协议首部，浏览器就会调用相应的插件来展示相应的资源;如果浏览器没有对应的插件，则可以去调用外部的程序;如果外部也没有，那只能呵呵了
            * 动态效果
                * java, Applet ,JRE; 相比于 Flash, 过于重量级，最后日薄西山
            * 动态网页
                * 服务器端存储的文档非 HTML 格式，而是编程语言开发的脚本,客户端发送信息至服务器， 脚本接受参数之后在服务器端运行一次，运行完成后会生成 HTML 格式的文档 这个 HTML 可以通过 超链接 连接其他资源 ,并将这个文档发送给 web 服务器，web 服务器发送给客户端.所以 Flash 只能叫做动态效果，而不是动态网页
                * 动态网页是根据客户端发送的参数生成的，两次访问，有可能一样，有可能不一样
                * web 服务器不执行脚本； web 服务器需要调用额外的工具来实现, 这个工具生成 HTML 发送给 web 服务器，web 服务器只是个 http服务器，不负责处理动态内容；
                * 服务器压力大

                * 包含静态内容 和 动态内容
                    * 只有动态内容才需要运行，返回给客户端
                * 每一个资源都是单独请求，传输的,所以浏览器任务很大，是多线程的，每个线程去请求一个请求
        * 引入了 缓存 机制
            * 加速网络访问

        * 客户端请求，web 服务器如何知道 请求来了？监听
            * 阻塞
                * 一直在那等着服务员上菜
            * 轮寻（非阻塞）    
                * 过两分钟来看一次，直到服务员上菜

        * 支持长连接（但默认还是使用短连接）
        * 短连接：客户端和服务器每进行一次 HTTP 操作，就建立一次连接，任务结束就中断连接。当客户端浏览器访问的某个HTML或其他类型的Web页中包含有其他的Web资源（如JavaScript文件、图像文件、CSS文件等），每遇到这样一个Web资源，浏览器就会重新建立一个HTTP会话。
        * TCP/IP
            * IP 
                * Source IP
                * Destination IP
            * TCP
                * source Port
                * Destination Port
            * 3次握手，4次断开
        * http 首部
            * 要获取哪个文档
            * 主机名称 Host:www.magedu.com(一定是这种，为虚拟主机准备)
        * Http 报文
            * 起始行，报文首部，请求/响应主体
            * 请求报文
                * 请求报文语法
                ```
                <method> <request-URL> <version> //请求资源的方法，http version
                <headers>//Http协议首部
                            //这个空白行是必须的，报文主题
                <entity-body>


                案例
                GET / HTTP/1.1      //  /代表默认主页
                HOST: www.magedu.com
                Connection: keep-alive
                ```
                
            * 相应报文
                * 响应报文语法
                ```
                <version> <status> <reason-phrase>  //状态码(1xx,2xx,3xx,4xx,5xx), reason-phrase:进一步解释 status
                <headers>

                <entity-body>
                案例
                HTTP、1.1 200 ok
                X-Powdered-by: PHP/5.3.17
                Vary: 
                Cache-Control
                

                301:永久重定向
                302:临时重定向
                304:内容没变化，去找你的缓存吧
                ```
            
            * web 服务器的主要操作
                1. 建立连接  接受或拒绝客户端请求
                1. 接收请求    通过网络读取 HTTP 请求报文
                1. 处理请求    解析请求报文并作出相应的动作
                1. 访问资源    访问请求报文中相关的资源
                1. 构建响应    使用正确的首部生成 HTTP 响应报文
                1. 发送响应    向客户端发送生成的响应报文
                1. 记录日志    把已经完成的 HTTP 食物记录进日志文件
    * http 1.1
        * 引入长连接:客户端和服务端建立一次连接之后，可以在这条连接上进行多次请求/响应操作。持久连接可以设置过期时间，也可以不设置, 减少 TCP/IP 的3次握手4次断开 
            * 可以让同一个客户端发起第二个请求的时候缩短事件，也降低服务器资源占用率
            * 并发量巨大时，后来的客户端就呵呵了
            
            * 长连接解决
                * 空闲超时
                * 最多请求数

        * 加强了缓存的功能
            * 多个客户端请求同一个页面,

    * http 2.0 

* uri(uniform resource identifer)  用于标记全局范围，包括但不限于互联网
    * 路径格式上的统一
    * url(uniform resource locator) 是 uri 的子集,用于标识互联网上的资源
        * protocal://HOST:port/path/资源
        * 某一路径下，不可能同时存在两个相同名称的资源
        * web 资源：能够通过 URL 标记它，并可以被客户端访问的资源
        * 多个资源一般被整合为一个 HTML 文档（web 对象)
        * HTML 文档 就是将分散在多个 web 服务器上的资源整合成一个页面

* 资源访问的手段可能是不一样的，下载、上传，资源访问的方法（也叫HTTP方法）
    * 0.9 的时候只有一个方法：get
    * 1.0 的时候： 
        * put delete  
        * post get
            * get 是最安全的
    

http 事务
    * request
    * response
    * 不可被打断,一旦被打断就要重新开始


## 单线程、多线程 web 服务器

状态改变，引起事件，基于事件驱动的机制

状态转换的通知机制



## 
* Http 是 TCP 
* TLS,SSL 加密
* http 默认端口 80
* https 默认端口 443


## 计算机网络
### 基本概念
* 广义的网络
    * 类似的食物连接在一起，以提供某些功能，如交通网络、自来水网络、排水网络、邮政网络、电话网络
* 计算机网络
    * 就是将分布在不同地理位置上的具有独立工作能力的计算机、终端及其附属设备用通信设备和通信线路连接起来，并配置网络软件，以实现计算机资源共享的系统.
* 拓扑：
    * 信道的分布方式
    * 总线拓扑，星型拓扑
* 信道
    * 信号的通道
* 协议
    * 一系列规则和约定的规范性描述,它控制网络中的设备之间如何进行信息交换.
* 数字带宽
    * 单位事件内流经的信息总量
    * 比特每秒 bps Kpbs Mbps Gbps
* 吞吐量(throughput)
    * 实际的、可测到的带宽

### 参考模型

哲学家A(英语)           哲学家B(法语)

翻译A(懂英语，中文)     翻译B(懂法语，中文) 

秘书A                   秘书B

每个人都好像在和对方同层次的人在交流一样


* OSI 的 7 层 
    * 1983 年提出

    * Application
        * 网络应用，如微信，FTP
    * Presentation
        * 将信息表示为一定形式和格式的数据流，压缩，解压缩，加密解密
    * Session
        * 负责通信主机间的会话的建立、管理和拆除
    * Transport
        * 负责通信主机间的端到端的连接
    * Network
        * 负责将每一个协议数据单元(分组)从源机一路送达到目的机,地址 和 最优路径
    * Data Link
        * 主要提供介质访问服务，通过物理地址识别通信主机，提供可靠的帧传递并做差错控制，流控等
    * Physical
        * 提供透明的比特流传输
    
    * 每一层都利用他下层的服务，为它的上层提供服务
* TCP/IP的 4 层 TCP/IP协议栈
    * Application       3
    * Transport         1 TCP UDP
    * Internet          1
    * Network Access    2 网络接口层

* 都使用包交换 而不是电路交换技术
* 先有的 TCP/IP 后制定的 OSI


###

* 发送方
    * 将信息打包，从最高层-应用层开始逐渐下行到最底层-物理层, 在每一层上，数据都被加上头部信息，用于传递信息
    Application -> 数据流 DataStream
    Transport -> 将数据段切割为是和传输的数据段 Segment, 并加上段头，段头中包含定位应用进程的端口号等信息
    Internet -> 添加分组头部形成分组(Packet),Packet 中包含寻址主机的 IP 地址和其他信息
    数据链路层 -> 添加帧头帧尾 形成帧，帧头中包含寻址主机所需要的物理地址，校验等信息
    物理层 -> 比特流

* 数据在各层的形式（或者说各层处理的数据对象）叫协议数据单元（PDU：Protocol Data Unit）,在各层都有特定的名称
    * 应用层：数据流（Data Stream） 上三层
    * 传输层：数据段 Segment
    * 网络层：分组 /包 / 报文 Packet
    * 数据链路层：帧 Frame
    * 物理层：比特流 Bits
    * 教材上一般是5层，

* 解封装
    * 封装的逆过程，在每层去掉头部信息，最终还原出应用层的输出-信息
    * 每一层有一个实体(entity),可能是硬件，也可能是软件，他负责实现本层的功能. 
    * 对等实体（Peer Entity）：收发双方对应层上的实体互称

* 虚拟通信
    * 发放 和 收方 对应层之间有一个‘直接’的通道,PDU从发放流向接收方
    * 只看发方和接收方的对应层，发现 收发双方的对应层之间（即对等实体之间）有一根直接的通道（虚通道）沿着这根通道，PDU从发方到达收方

### 物理层
* 特性
    1. 机械特性
        * 指明借口所有接线器的形状、尺寸、引脚数和排列等，如 RJ45
    1. 电器特性
        * 接口电缆上各条线上出现的电压的范围
    1. 功能特性
        * 指明某条线上出现的某一电平的电压表示何种意义
    1. 规程特性
        * 对于不同功能的各种可能事件的出现顺序


### 传输层

