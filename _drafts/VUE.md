---
layout: post
title: VUE 
---

## 安装node.js
1. CDN 引入 script 标签

    ```
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
    ```
1. CLI

## 教程
1. https://github.com/hemiahwu/vue-basico
    * 切换 branch


## VUE
1. 什么是“渐进式”？
    * 有说是没有太多限制，比如angular限制比较多，需要遵守的规则比较多，排他性成分大。

1. 虚拟 DOM

1. Vue全家桶
    1. 包含了vue-router（http://router.vuejs.org）
    1. vuex（http://vuex.vuejs.org）
    1. vue-resource（https://github.com/pagekit/vue-resource）
    1. 再加上构建工具vue-cli，就是一个完整的vue项目的核心构成。

1. MVVM分为三个部分：分别是M（Model，模型层 ），V（View，视图层），VM（ViewModel，V与M连接的桥梁，也可以看作为控制器）
    1. M：模型层，主要负责业务数据相关；机器可读性强的数据（通常后端传递的数据）
    1. V：视图层，顾名思义，负责视图相关，细分下来就是html+css层；人眼可读性强的数据(通常指页面)
    1. VM：视图模型，V与M沟通的桥梁，负责监听M或者V的修改，是实现MVVM双向绑定的要点；
        * 将机器可读性强的 Model 转为 人眼可读性强的 view, 通过事件绑定
        * 将人眼可读性强的 view 转为 机器可读性强的 Model, 通过事件监听
    
    MVVM支持双向绑定，意思就是当M层数据进行修改时，VM层会监测到变化，并且通知V层进行相应的修改，反之修改V层则会通知M层数据进行修改，以此也实现了视图与模型层的相互解耦；

* 自定义名称标签 是给vue组件用的，所以在HTML中尽量不要写自己定义的标签

* 有多个vue实例对象绑定到了同一个标签上时，执行第一个，懒加载
### vue对象

```
new Vue({
    /* el一定是容器元素 */
    el:'#vue-app',

    /* 属性 */
    data:{},

    /* 方法 */
    methods:{}
});

方法调用属性的话，按理说应该是 this.data.key, 但vue中直接 this.key 即可
```

1. vue属性绑定
    1. vue属性绑定到HTML属性
        * 在这个HTML属性上加一个 "v-bind:"，称之为**vue属性绑定符**吧，其实v-bind 可以省略，只写一个 ':'

            ```
            <a v-bind:href='vue中的属性'>hello world</a>
            ```

        * 多个HTML属性都要绑定到vue属性的话，每个HTML属性前都加上v-bind

    1. 添加标签(vue伪标签属性绑定到HTML容器元素)
        * 这个vue创建的标签只能放在容器标签内
            * v-html = ''

            ```
            new Vue({
                el:'#vue-header',
                data:{

                    <!-- 只能用双引号 -->
                    aTag:"<a href='https://www.baidu.com'>baidu</a>"
                }
            });
            <div id='vue-header'>
                <p v-html='aTag'></p>
            </div>
            ```

    1. 事件绑定 v-on:click 可以缩写为 @click
        * v-on:click
            1. 直接操作属性（项目中不会这么用）

                ```
                <p>{{height}}</p>
                <button v-on:'height++'>UP</button>
                ```
            
            1. 方法

                ```
                new Vue({
                    el:"#vue-app",
                    data:{height:173},
                    methods{
                        up:function(){
                            this.height++;
                        }
                    }
                });
                /* 如果没有参数，也可以不写函数后面的() */
                <button v-on:click='up'>
                ```


## 事件

### 鼠标事件
1. 单击事件 v-on:click =
1. 双击事件 v-on:dblclick =
1. 鼠标悬浮 v-on:mouseover =

### 鼠标事件修饰符
1. 阻止单击事件冒泡
    * v-on:mousemove.stop=''
1. 只执行1次点击
    * v-on.click.once=
1. 阻止默认事件
    * v-on:click.prevent=

### 键盘事件
1. v-on:keyup
1. v-on:keydown

### 键盘事件修饰符
1. .enter


## 双向数据绑定

输入 + 输出  input/select/textarea

* 从一个标签获得数据，在另一个标签放置数据

* 获得的数据在 data 中是存在的, 然后别的标签也会使用 data 中的这个属性

### 获取标签的相关信息
1. 在标签上打 ref='refName', 类似于 HTML 标签的id
1. vue 中 this.$refs.[refName].value=

    ```
        <div class="one">
        <h1>键盘事件</h1>
        <label for="">姓名</label>
        <input ref='userName' type="text" v-on:keyup.enter='logName'>
        <span>{{name}}</span>
    </div>

    <script>
    new Vue({
        el:'.one',
        data:{
            name:''
        },
        methods:{
            logName:function(){
                this.name = this.$refs.userName.value;
            }
        }
    });
    </script>
    ```
### 另外一种双向数据绑定方式 v-model

    ```
    <input type='text' v-model='name'>
    <span>{{name}}
    
    v-model 不能被 .enter 修饰？
    ```

## 计算属性 computed
1. 传统的比如 <button v-on:click='a++'>Traditional</button> 直接操作 Vue 属性的方式，会导致html中所有的 {{方法())}} 方法全部执行, 页面第一次加载完成后就会执行一遍, 再次直接操作vue属性的时候,所有的 {{方法())}} 会再次执行一遍。
 
    ```
    <button v-on:click='a++'>computed</button>
    <p>{{say}}</p>//计算属性
    <p>{{say1())}}</p>//方法

    new Vue({
        el:'.vue',
        data:{
            a:0
        },
        methods:{
            say1:function(){
                alert('say1');
            }
        },
        computed:{
            say:function(){
                alert('saying');
            }
        }
    })
    ```
1. method 操作 data 也会让莫版内的表达式重新计算

    ```
    <div class="one">
        <button v-on:click='afun'>a++</button>
        <p>{{a}}</p>
        <!-- 上边的button的afun修改了data的值，引起莫版内的表达式重新计算，这里 是+0，模板表达式只是在页面加载的时候运行了一次，再次触发afun时，模板表达式没有再被触发，如果更改了data的值得话，afun 每次执行都会触发模板表达   -->
        <p>{{bfun()}}</p>
    </div>

    new Vue({
        el:'.one',
        data:{
            a:0,
            b:0,
            age:20
        },
        methods:{
            afun:function(){
                this.a+=0;
            },
            bfun:function(){
                console.log('this is b');
            }
        }
    });
    ```

    **模板内的表达式是非常便利的，但是它们实际上只用于简单的运算。在模板中放入太多的逻辑会让模板过重且难以维护。**

* 直接在模板中绑定表达式/计算属性/methods

    ```
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title></title>
            <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
        </head>
        <body>
            <div id="app">
                <p>{{message}}</p>
                //直接在模板中绑定表达式
                <p>{{message.split('').reverse().join('')}}</p>
                //运用计算属性
                <p>{{reverseMessage}}</p>
                //运用methods方式
                <p>{{methodMessage()}}</p>
            </div>
            <script>
                var vm=new Vue({
                    el:"#app",
                    data:{
                        message:"hello"
                    },
                    computed:{
                        reverseMessage:function(){
                            return this.message.split('').reverse().join('');
                        }
                    },
                    methods:{
                        methodMessage:function () {
                            return this.message.split('').reverse().join('');
                        }
                    }
                })
            </script>
        </body>
    </html>
```

返回的结果是一样的，写但在法上computed计算属性的方式在用属性时不用加(),而methods方式在使用时要像方法一样去用，必须加().

两种方式在缓存上也大有不同，利用computed计算属性是将 reverseMessage与message绑定，只有当message发生变化时才会触发reverseMessage，而methods方式是每次进入页面都要执行该方法，但是在利用实时信息时，比如显示当前进入页面的时间，必须用methods方式


a++
methods 
只要是修改了一次data的值，就会引起html页面中全部methods的执行一次

如果是计算属性修改了，则只有包含这个data的计算属性会执行一次

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
    </head>
    <body>
        <div class="one">
            <h1>Computed attribute</h1>
            <button v-on:click='a++'>Add to B</button>
            <button v-on:click='b++'>Add to B</button>
            
            <!-- 上边的 button 修改了 data 的值，下边是方法，这些方法都会执行一遍 -->
            <!-- 而如果下面的是计算属性的话，则只有包含了这个data 的计算属性会重新计算一遍  -->

            <p>A:{{a}}</p>
            <p>B:{{b}}</p>
            <p>Age+A= {{addToA()}}</p>
            <p>Age+b= {{addToB()}}</p>
            <p>common= {{common()}}</p>
        </div>

        <script>
            new Vue({
            el:'.one',
            data:{
                a:0,
                b:0,
                age:20
            },
            methods:{
                addToA:function(){
                    console.log('a');
                    return this.a+this.age;
                },
                addToB:function(){
                    console.log('b');
                    return this.b+this.age;
                },
                common:function(){
                    console.log('common');
                }
            },
            computed:{
            }
        });
        </script>
    </body>
</html>
```

### 动态绑定标签的类名

1. 多个类名

    ```
    类名放到{}中的键名，true 为使用这个类名，false 为不使用，多个 true 为多个类名
    <span v-bind:class='{one:true,two:false,three:true}'>
    ```

1. 用方法/计算属性的话，如果有多个类，也是返回一个对象，对象里边有多个类

    ```
    用法1
    <div v-bind:class='{changeColor:changeColor}' v-on:click='changeColor=!changeColor' >

    data:{
        changeColor:false,
        changeWidth:false
    }
    computed:{
        
    }

    用法2
    <div v-bind:class='compClass' v-on:click='changeColor=!changeColor'>
        <span>fuck</span>
    </div>

    这两种方法是一样的，用法1是讲字面量形式，用法2是计算属性形式
    ```

## v-if 判断
    1. v-if=    v-else-if=  v-else

    ```
    <div class="one">
        <h1>v-if</h1>

        <!-- 这两个按钮的作用就是更改这个值的true/false -->
        <button v-on:click='error=!error'>toggle error</button>
        <button v-on:click='success=!success'>toggle success</button>

        <!-- if(error) -->
        <p v-if='error'>fucking wrong</p>
        <p v-else-if='success'>fucking working</p>
        <p v-else>what the fucking</p>

        
    </div>

    new Vue({
        el:'.one',
        data:{
            error:false,
            success:false
        },
        methods:{
        
        },
        computed:{
        
        }
    });
    ``` 
    
## v-show='error'
1. if(error==true) 则 display
1. if(error==false) 则 display:none

## Vue CLI 脚手架
1. 通过webpack搭建的开发环境
1. 可以使用ES6语法，会将 ES6 转换成 ES5
1. 项目文件在环境中编译，而不是浏览器
1. 页面的自动刷新,修改内容，页面便刷新

1. npm install -g vue-cli
1. vue init webpack [项目名称]
1. 进入文件夹
1. npm install 
    * vue-router
    * ESLint
    * set up unit tests
    * setup e2e tests with Nightwatch
    * use npm,use yarn
1. npm run dev

### 组件 component



## 小栗子
1. div 坐标

