## 最简单的
### 我的试验路程
1. 安装 nvm

1. 安装 node 最新版本

1. 安装 webpack

1. 新建项目文件夹   方法一
    1. 新建 main.js →   alert('fuck');
    1. npm init -y  生成 package.json 文件
    1. npm install webpack --save-dev   //--save -dev 注入 package.json 中
    1. ./node_modules/.bin/webpack --mode development main.js -o bundle.js   //新版本是 这样写的， ' -o '
        1. ./node_modules/.bin/webpack --mode development main.js -o bundle.js --watch

1. 新建项目文件夹   方法二
    1. 新建 mian.js 
    1. 也可以用全局的 webpack, 而不本地安装，只要 编译的时候 用 webpack --mode development 源.js -o 目标.js



1. --mode
    1. development
    1. production   default
    1. 不写的话，会弹出 warning, 不过没关系


1. webpack 4默认不需要配置文件。可以通过mode选项为webpack指定一些默认的配置。



## 核心概念
    1. Entry：入口，webpack执行构建的第一步从Entry开始，可以抽象成输入。
    1. Module：模块，在webpack中一切皆模块，一个模块对应着一个文件，webpack会从配置的Entry开始递归找出所有依赖的模块。
    1. Chunk：代码块，一个Chunk由多个模块组合而成，用于代码合并和分割。
    1. Loader：模块转换器，用于把模块原内容按照需求转换成新内容。
    1. Plugin：扩展插件，在webpack构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。
    1. Output：输出结果，在webpack经过一系列处理并得出最终想要的代码后输出结果。

    webpack会在启动后从Entry里配置的Module开始递归解析Entry依赖的所有Module，每找到一个Module，就会根据配置的loader去找对应的转换规则，对Module进行转换后，再解析出当前Module依赖的Module。这些模块会以Entry为单位进行分组，一个Entry和其他所有依赖的Module被分到一个组就是一个Chunk。最后webpack会把所有Chunk转换成文件输出。在整个流程中webpack会在恰当的时机执行Plugin里定义的逻辑。



## 更换淘宝源
* 通过cnpm使用
    * npm install -g cnpm --registry=https://registry.npm.taobao.org
    * 使用:
        * cnpm install express

* 临时使用
    * npm --registry https://registry.npm.taobao.org install express

* 持久使用
    * npm config set registry https://registry.npm.taobao.org
    * 验证
        * npm config get registry



## ERR
* npm list 出现好多 ERR! extraneous(没有关联的)[ɪk'strenɪəs]
    * 




## 实例
1. 加载多个 js 文件

```
webpack --mode development main.js -o bundle.js --watch

//function.js
function say(){
    document.write('go to hell');
}
module.exports = say;

//main.js
var toShow = require('./function.js');
toShow();

//index.html
<script src='./bundle.js'></script>
```


## css样式打包
* 通过安装 loader 加载器，可以将静态的样式文件一同打包到 bundle.js 文件中

* 安装 loader
    * cnpm install css-loader style-loader  --save-dev

    * require('!style-loader!css-loader!.style.css');   //顺序不能错

### 案例
```
1. index.html
<script src='./bundle.js'></script>

2. function.js
function say(str){
    return str;
}
module.exports = say;

3. style.css
div{
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border-radius: 15px;
    position: absolute;
    background-color:#0a0;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
    font-size:60px;
    line-height: 100px;
    text-align: center;
}

4. main.js
require('!style-loader!css-loader!./style.css');

var show = require('./function.js');
var showContext = show('忍');

document.write('<div>'+showContext + '</div>');
```


## 配置文件 webpack.config.js
* 在手动编译时，可以将一些经常性的操作，添加到配置文件，减少编译过程中手写代码的数量，构造自动工具

```
module.exports = {
     entry:'./main.js', //入口文件
     output:{
          //node.js中 __dirname变量获取当前模块文件所在目录的完整绝对路径 
          //context表示上下文，指的是当前项目运行路径，_dirname表示运行时的当前根路径
          path:__dirname+'/dist', //输出位置
          filename:'bundle.js' //输入文件
     },
     module:{
          loaders:[
               {
                   test:/\.css$/,   //支持正则
                   loader:'style-loader!css-loader' 
               }
          ]
     },
//其他解决方案配置
resolve: {
    extensions: ['', '.js', '.json', '.css', '.scss']//添加在此的后缀所对应的文件可以省略后缀
},
     //插件
     plugins:[
          new webpack.BannerPlugin('This file is created by ly')
     ]
}


require('!style-loader!css-loader!./style.css'); 就写成
require('./style.css');

直接 输入 webpack 进行编译
```







