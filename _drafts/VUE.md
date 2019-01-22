## Vue学习笔记

## 两种搭建 Vue 环境的方法

### 引入cdn在线script文件

	`<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>`

	也可以将这个js文件另存到本地，这样就可以断网状态下使用了。



###  vue-cli

1. 什么是 CLI, 什么是 TUI, 什么是GUI
   1. CLI 是指命令行界面(Command-line Interface)。
   1. TUI 是指文本用户界面(Text-based User Interface)，定位光标和鼠标实现用户交互。
   1. GUI 全称 Graphical User Interface，中文为 图形用户界面。

#### vue-cli 的优势

1. 通过webpack搭建的开发环境
1. 可以使用ES6语法，会将 ES6 转换成 ES5
1. 项目文件在环境中编译，而不是浏览器
1. 页面的自动刷新,修改内容，页面便刷新

####  vue-cli 安装使用

1. 安装

   `npm install -g vue-cli`

1. 创建vue项目

   `vue init webpack [vue项目名称]`

   `vue init webpack-simple [vue project name]`

1. 运行项目

   `cd 项目目录`

   `npm run dev`

#### 注意

	对于新手来说，vue-cli 虽然好处多多，但是难度也是大大，因此不建议新手在最初的阶段使用 vue-cli，欲速则不达。

/node_modules/vue/src : 源代码

/node_modules/vue/dist : 

## VUE

1. 什么是“渐进式”？

    * 有说是没有太多限制，比如angular限制比较多，需要遵守的规则比较多，排他性成分大。
    * 适合不同需求、不同层次的程序员的需求

1. 虚拟 DOM

1. Vue全家桶
    1. vue-router（http://router.vuejs.org）
    1. vuex（http://vuex.vuejs.org）
    1. vue-resource（https://github.com/pagekit/vue-resource）
    1. 再加上构建工具vue-cli，就是一个完整的vue项目的核心构成。

1. MVVM分为三个部分：分别是M（Model，模型层 ），V（View，视图层），VM（ViewModel，V与M连接的桥梁，也可以看作为控制器）
    1. M：模型层，主要负责业务数据相关；机器可读性强的数据（通常后端传递的数据）负责储存数据
    1. V：视图层，顾名思义，负责视图相关，细分下来就是html+css层；人眼可读性强的数据(通常指页面) 负责页面显示
    1. VM：视图模型，V与M沟通的桥梁，负责监听M或者V的修改，是实现MVVM双向绑定的要点；
        * 将机器可读性强的 Model 转为 人眼可读性强的 view, 通过事件绑定
        * 将人眼可读性强的 view 转为 机器可读性强的 Model, 通过事件监听
        * 负责业务处理，对数据进行加工，之后交给视图

    MVVM支持双向绑定，意思就是当M层数据进行修改时，VM层会监测到变化，并且通知V层进行相应的修改，反之修改V层则会通知M层数据进行修改，以此也实现了视图与模型层的相互解耦；

* 自定义名称标签是给vue组件用的，所以在HTML中尽量不要写自己定义的标签

* 有多个vue实例对象绑定到了同一个标签上时，执行第一个，懒加载
### vue对象
当创建一个 Vue 实例时，你可以传入一个选项对象。可以使用这些选项来创建你想要的行为。

所有的 Vue 组件都是 Vue 实例，并且接受相同的选项对象 (一些根实例特有的选项除外)

```javascript
new Vue({
    /* el一定是容器元素 */
    el:'#vue-app',

    /* 属性 */
    data:{},

    /* 方法 */
    methods:{}
});

方法调用属性的话，按理说应该是 this.data.key, 但vue中直接 this.key 即可,因为内部是绑定到了vue对象上
```

1. 属性绑定

    1. vue属性绑定到HTML属性
        * 在这个HTML属性上加一个 "v-bind:"，称之为**vue属性绑定符**吧，其实v-bind 可以省略，只写一个 ':'

            ```html
            <a v-bind:href='vue中的属性'>hello world</a>
            ```

        * 多个HTML属性都要绑定到vue属性的话，每个HTML属性前都加上v-bind

    1. 添加标签(vue伪标签属性绑定到HTML容器元素)
        * 这个vue创建的标签只能放在容器标签内
            * v-html = ''
                * 貌似只能添加一个 
                    * v-html='atag' v-html='btag' 不行，只显示一个
                    * v-html='atag btag' 这个更厉害，父级标签直接没有了
                

            ```html
            new Vue({
                el:'#vue-header',
                data:{

                    aTag:"<a href='https://www.baidu.com'>baidu</a>"
                }
            });
            <div id='vue-header'>
                <!-- 将添加到p标签下 -->
                <p v-html='aTag'></p>
            </div>
            ```

    1. 事件绑定 v-on:click 可以缩写为 @click
        * v-on:click
            1. 直接操作属性（项目中不会这么用）

                ```html
                <p>{{height}}</p>
                <button v-on:'height++'>UP</button>
                ```
            
            1. 方法

                ```html
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

2.  Do not mount Vue to 'html' or 'body' - mount to normal elements instead.


## 事件

### bangding鼠标事件
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

    ```html
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
1. method 操作 data 也会让模版内的表达式重新计算

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

    ```html
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

返回的结果是一样的，但在写法上computed计算属性的方式在用属性时不用加(),而methods方式在使用时要像方法一样去用，必须加().

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
compted:{
    changeColor:function(){
        
    }
}
    ```

## 模板语法
1. 模板语法来声明式地将数据渲染进 DOM 的系统
    {{}}

## 全局API(方法)
1. Vue.extend
1. Vue.nextTick
1. Vue.set
1. Vue.delete
1. Vue.directive
1. Vue.filter
1. Vue.component
    1. 全局组件
1. Vue.use
1. Vue.mixin
1. Vue.compile
1. Vue.version

## 选项
### 选项/数据
1. data
1. props
1. propsData
1. computed
1. methods
1. watch

### 选项/DOM
1. el
1. template
1. render
1. renderError

### 选项/生命周期钩子
1. beforeCreate
1. created
    1. 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。

1. beforeMount
1. mounted
    1. el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子

1. beforeUpdate
1. updated
    1. 

1. activated
1. deactivated

1. beforeDestroy
1. destroyed

1. errorCaptured

### 选项/资源
1. directives
1. filters
1. components

### 选项/组合
1. parent
1. mixins
1. extends
1. provide/inject

### 选项/其他
1. name
1. delimiters
1. functional
1. model
1. inheritAttrs
1. comments


## 实例
### 实例属性
1. vm.$data
1. vm.$props
1. vm.$el
1. vm.$options
1. vm.$parent
1. vm.$root
1. vm.$children
1. vm.$slots
1. vm.$scopedSlots
1. vm.$refs
1. vm.$isServer
1. vm.$attrs
1. vm.$listeners

### 实例方法
#### 实例方法/数据
1. vm.$watch
1. vm.$set
1. vm.$delete

#### 实例方法/事件
1. vm.$on
1. vm.$once
1. vm.$off
1. vm.$emit

#### 实例方法/生命周期
1. vm.$mount
1. vm.$forceUpdate
1. vm.$nextTick
1. vm.$destroy

## 指令
1. v-text 
    将一个变量的值渲染到制定的元素中，和 innerText 功能一模一样

    ```
    <div id="one" v-text='name'>
        <!--这个p标签根本不会显示，因为div标签的内容是 v-text='name'-->
        <p v-text='power'></p>
    </div>
    <script>
    var one = new Vue({
        el:'#one',
        data:{
            name:'bill',
            power:Infinity
        }
    })
    </script>
    ```
    
1. v-html
    可以输出html元素，和innerHTML功能一模一样

    ```
    <div id="one">
        /* p标签内的内容为 aTag 对ing的html */
        <p v-html='aTag'></p>
    </div>
    ```

1. v-model=
    实现双向数据绑定

1. v-bind:
    绑定页面中元素的属性

1. v-if=false
    变成注释节点
1. v-show=false
    变成display:none

1. v-else-if=
1. v-else=


1. v-for=
    1. (val, key, index) in object
    1. 在遍历对象时，是按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下是一致的。

1. v-on:
    1. 对页面中的事件进行绑定
    1. 简写为@:click
1. v-pre
    1. 跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。
    1. `<span v-pre>{{ this will not be compiled }}</span>`

1. v-cloak
1. v-once
    1. 只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。

    ```
    <!-- 单个元素 -->
    <span v-once>This will never change: {{msg}}</span>
    <!-- 有子元素 -->
    <div v-once>
      <h1>comment</h1>
      <p>{{msg}}</p>
    </div>
    <!-- 组件 -->
    <my-component v-once :comment="msg"></my-component>
    <!-- `v-for` 指令-->
    <ul>
      <li v-for="i in list" v-once>{{i}}</li>
    </ul>
    ```
    
    1. 参考
        * 数据绑定语法- 插值
        * 组件 - 对低开销的静态组件使用 v-once


### v-if 判断

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

## 特殊属性
1. key

1. ref
    ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例。

1. slot
    用于标记往哪个具名插槽中插入子组件内容。

1. slot-scope
    用于将元素或组件表示为作用域插槽。特性的值应该是可以出现在函数签名的参数位置的合法的 JavaScript 表达式。这意味着在支持的环境中，你还可以在表达式中使用 ES2015 解构。它在 2.5.0+ 中替代了 scope。

1. is
    用于动态组件且基于 DOM 内模板的限制来工作。

## 内置的组件
1. component

1. transition

1. transition-group

1. keep-alive

1. slot


## Vue CLI 脚手架

### 文件

1. index.html
1. ./src/main.js
1. App.vue
   1. template
   1. javascript 逻辑
   1. css样式

## 单文件组件

### webpack







# 千锋 Vue 组件之手机通讯录实战课程

## Vue 基础使用

1. 创建 vue 实例

   1.  vue组件中 camelCased (驼峰式) 命名与 kebab-case (短横线命名) 

1. 模板语法

1. 计算属性

1. 指令

1. 事件处理器

1. 表单控件

1. 生命周期

   1. 回调函数 钩子 

      1. mounted:el 挂载元素的时候执行一次

      1. updated:数据更新的时候

      1. watch

         ```js
         new Vue({
             el:'#one',
             data:{
                 name:'hello vue'
             },
             methods:{
                 getNewValue:function(){
                     this.message=this.message.split('').reverse().join('');
                 }
             },
             computed:{
                 getA:function(){
                     return this.message;
                 }
             },
             mounted:function(){
                 console.log('i am ready');
             },
             updated:function(){
                 console.log('you are changing the data');
             },
             watch:{
                 message:function(news,olds){
                     console.log('news value is'+news);
                     console.log('olds value is'+olds);
                 }
             }
         
         });
         ```


## 组件

### 组件的创建

1. 全局组件

   1. 组件名就是标签名
   1. html 标签名是不区分大小的，所以组件名不要用大写的

1. 局部组件

1. 组件与数据的特点

   1. data 是不供 局部template共享的，要通过函数返回，类似于作用域

1. vue实例与vue组件的关系

   1. **vue组件其实是被扩展的vue实例**，相当于继承

      ```html
      <div id='one'></div>
      <script>
      var one = new Vue({
          /*相当于组件里的那个标签名*/
          el:'#one',

          /* template将替换原来的 div标签 */
          template:'<h1>nice to meet you</h1>'
      })
      </script>
      <!--
      实例也可以看做一个组件，将挂载点替换
      -->
      
      
      <!--组件都是通过 Vue.extend() 继承自vue的实例-->
      <script>
      Vue.component('greeting',{
          template:`<p>nice to meet you</p>`
      });
      
      var one = new Vue({
          el:'#one',
          data:{
              name:'this is one'
          },
          components:{
              'say':{
                  template:'<p>this is saying</p>'
              }
          }
      
      });
      
      /*组件是实例的扩展*/
      var onetwo =Vue.extend({
          data:function(){
              return {
                  name:'template'
              }
          }
      });
      
      var two = new onetwo({
          el:'#one'
      });
      </script>
      
      
      <script>
      /*组件是实例的扩展*/
      var onetwo =Vue.extend({
          data:function(){
              return {
                  name:0
              }
          }
      });
      
      var two = new onetwo({
          el:'#one',
          methods:{
              addFun:function(){
                  this.name++;
              }
          }
      
      });
      </script>
      ```

### 组件的使用

组件只能用于被 vue 接管的地方，否则不能使用（即使是全局组件）i am megan fox

### 组件的模板方式

1. 普通的模式

   1. 单引号写在一行
   1. 单引号+ '\'  换行

1. ES6 模板字符串 反引号（支持换行）

1. template 标签+id

   1. 写在body最上边，必须在js代码之前
   1. template标签可以写在head中，位置任意



   ```html
   <body>
       <template id='one'>
       	<div>
               <p>
                   hello there
               </p>
           </div>
       </template>
       
       <script>
           Vue.component('greeting',{
               template:'#one'
           })
       </script>
   </body>
   ```

1. script标签模拟template标签

   1. `<script type="text/x-template" id="one"></script>`

1. 组件写进.vue 单文件组件

### 

### 组件间通信

#### 父组件→子组件

1. 数据流的方向从父组件到子组件，通过 props

```html
<body>
    <div id="one">
        <!-- 1. 使用v-bind 绑定父组件中的girl 到子模板生成的标签中 -->
        <!--v-bind:的话是动态绑定，girl 是一个变量；不加v-bind 则是静态绑定，girl 是一个String-->
        <!--事件应该写在模板内，只有数据绑定,$emit事件触发 可以写在 组件的实例中-->
        <!-- 子组件不能执行父组件的方法???--->
            <!--比如onclick, 组件可能也有onclick事件，如果组件的实例中绑定父组件的方法，那该执行谁的方法呢?貌似和data不共享是同一个原因-->
        <my-header v-bind:newgirl='girl'></my-header>
    </div>
</body>
<script>
var one = new Vue({
    el:"#one",
    data:{
        girl:'i am a good girl'
    },
    components:{
        'my-header':{
            /* 2. 组件实例的作用域是孤立的。这意味着不能并且不应该在子组件的模板内直接引用父组件的数据。可以使用 props 把数据传给子组件。*/
            
            props: ['newgirl'],
            /* 
            //这才是通用的用法
            props:{
                newgirl:{
                    type:String,
                    default:"defaultValue"
                }
            }
            */
            
            /* 3. 这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。在这种情况下，最好定义一个本地的 data 属性并将这个 prop 用作其初始值*/
            data:function(){
                return {
                    girl:this.newgirl
                }
            },
            /* 4. 这个 prop 以一种原始的值传入且需要进行转换。在这种情况下，最好使用这个 prop 的值来定义一个计算属性 */
            computed:{
                normalize:function(){
                    return this.newgirl.toLowercase();
                }
            }
            template:'<div>{{girl}}</div>'

        }
    }
});
</script>
```



#### 子组件→父组件

数据流的方向从子组件到父组件，通过 emit event 

1. $event 等于 $emit ([ɪ'mɪt] 发射，抛出) 抛出的值

```html
<div id="example">
    <!--只传送事件，不传送数据-->
    <p>我是父组件：{{ total }}</p>
            <!-- 2. 子组件事件传递给父组件的函数执行 -->
            <!-- 为什么不写在子模板里呢？因为子模板没有这个方法啊-->
    我是子组件<button-counter v-on:increment='getTotal()'></button-counter>
	<button-counter v-on:increment="getTotal()"></button-counter>
</div>

<script>
Vue.component('button-counter',{
    template:'<button v-on:click="add">{{num}}</button>',
    data:function(){
        return {
            num:0
        }
    },
    methods:{
        add:function(){
            this.num++;
            // 1. 子组件注册事件名称
            this.$emit('increment');
        }
    }
});

var one = new Vue({
    el:'#example',
    data:{
        total:0
    },
    methods:{
        getTotal:function(){
            this.total++;
        }
    }
})
</script>


<!--向父组件传送事件和数据-->
<div id="one">
    {{actress}}
    <!-- 2. 响应子组件的fox事件，并绑定本组件的 changelover 函数，$event 等于 $emit 抛出的值-->
    <fox v-on:fox='changeactress($event)'></fox>
</div>

<script>
var one = new Vue({
    el:'#one',
    data:{
        name:'bill',
        actress:''
    },
    methods:{
        changeactress:function(newactress){
            this.actress=newactress;
        }
    },
    components:{
        'fox':{
            template:'<div v-on:click="upload">I am Megan Fox</div>',
            // template:'<div v-on:click="sayme">I am Megan Fox</div>',
            
            data:function(){
                return{
                    name:'Megan Fox'
                }
            },
            methods:{
                // 1. 传送事件fox,并传递数据this.name
                upload:function(){
                    this.$emit('fox',this.name);
                },
                sayme:function(event){
                    console.log(event.target.innerText);
                }
            }
        }
    }
})
</script>


<!--官网上的例子，我怎么没看到-->
<script>
Vue.component('currency-input', {
  template: `
    <span>
      $
      <input
        ref="input"
        v-bind:value="value"
        v-on:input="updateValue($event.target.value)"
      >
    </span>
  `,
  props: ['value'],
  methods: {
    updateValue: function (value) {
      var formattedValue = value
        // 删除两侧的空格符
        .trim()
        // 保留 2 小数位
        .slice(0, value.indexOf('.') + 3)
      // 如果值不统一，手动覆盖以保持一致
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue
      }
      this.$emit('input', Number(formattedValue))
    }
  }
})

new Vue({
  el: '#example',
  data: {
    price:''
  }
})
</script>
   <div id="example">
      <currency-input v-model="price"></currency-input> 
   </div>
<!--注意这里的v-moel是个语法糖-->

    <input v-model="something">
<!--应为-->

    <input v-bind:value="something" v-on:input="something = $event.target.value">
```



#### 非父子组件间通信

##### 同一个父组件下的兄弟组件间通信

1. ???是否可利用子组件1传递给父，父再传递给子组件2

### 注意点

1. .native

   ```html
   <div id="one">
       <p v-on:click='show()'>i am boss</p>
       <!-- 在view中，在子组件事件执行父组件的方法（注意不是绑定v-bind），要加上 .native -->
       <fox v-on:click.native='show()'></fox>
   </div>
   
   <script>
   var one = new Vue({
       el:'#one',
       data:{
           name:'bill'
       },
       methods:{
           show:function(){
               console.log(this.name);
           }
       },
       components:{
           'fox':{
               template:'<p>i am megan fox</p>'
           }
       }
   })
   </script>
   ```

### 内容分发 slot

为了让组件可以组合，我们需要一种方式来混合父组件的内容和子组件自己的模板，这个过程成为内容分发。

1. 插槽

   1. 单 <slot> 标签

      ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title></title>
          <script src='/home/bill/Documents/vue/vue.js'></script>
      </head>
      <body>
          <div class="one">
              <my-header>
                  <!--这个div本不能显示的，这个是my-header模板标签，在component中添加 slot便可以了，slot也可以是另外一个模板 -->
                  <!--写多个并列的标签也是可以的-->
                  <div>can i sit here?
                  	<h1>
                          can i stand here?
                      </h1>
                  </div>
              </my-header>
          </div>
          <script>
          var myHeader = new Vue({
          el:'.one',
          components:{
              'my-header':{
                  template:'<div>This is Header <slot></slot></div>'
              },
              //'my-body'模板也可以加载到my-header中的slot插槽中
              'my-body':{
                  template:'<div>This is Body</div>'
              }
          }
      })
      </script>
      </body>
      </html>
      
      ```

   1. 多 <slot>标签

      ```html
      <!--slot有name属性-->
      <div id='one'>
          <my-header>
          	<button slot='left'>左边的按钮</button>
              <button slot='right'>右边的按钮</button>
          </my-header>
      </div>
      <script>
          components:{
              'my-header':{
                  template:'<div><slot name="left"></slot>This is Header<slot name="right"></slot>'
              }
          }
      </script>
      ```

   1. <slot>默认值

      ```html
      <div class="one">
          <my-header>
              <button slot="left">left</button>
              <button slot="right">right</button>
          </my-header>
      </div>
      <script>
      var myHeader = new Vue({
          el:'.one',
          components:{
              'my-header':{
                  template:`<div><slot name="left"></slot>This is Header 
      			//如果上边只有一个button left，没有button right，则显示默认值 button+；否则显示button right.
                  <slot name="right">
                      <button>+</button>
                  </slot></div>`
              }
          }
      })
      </script>
      
      ```

### 动态组件（应该叫动态模板吧？）

1. component

   ```html
   <div class="one">
       <button v-on:click='changeShow("my-header-1")'>one</button>
       <button v-on:click='changeShow("my-header-2")'>two</button>
       <button v-on:click='changeShow("my-header-3")'>three</button>
       <!--keep-aive的作用就是保存切换之前的状态，比如输入框中输入的值-->
       <keep-alive>
           <!-- 动态组件模板都将在 component标签中显示，v-bind:is 制定默认模板 -->
       	<component v-bind:is='toShowComponent'></component>
       </keep-alive>
   </div>
   <script>
   var myHeader = new Vue({
       el:'.one',
       data:{
           toShowComponent:'my-header-1'
       },
       methods:{
           changeShow:function(no){
               this.toShowComponent=no;
           }
       },
       components:{
           'my-header-1':{
               template:'<div>this is NO. one<input type="text"></div>'
           },
           'my-header-2':{
               template:'<div>this is NO. two<input type="text"></div>'
           },
           'my-header-3':{
               template:'<div>this is NO. three<input type="text"></div>'
           }
       }
   })
   </script>
   
   ```


## 

## Vue 组件开发流程

1. 编写基础HTML&CSS
1. 提取组件
1. 数据传输
1. 内容分发
1. 添加事件和方法

## 

## 附录A

### nvm 

#### 简介

1. github 地址： https://github.com/creationix/nvm

#### 安装

作者的github中推荐了好几种安装方式，Bill 推荐使用Git的安装方式

1. 克隆到用户的根目录 

   `git clone https://github.com/creationix/nvm.git ~/.nvm`

1. 切换到最新的版本分支

   `git checkout v0.33.11`

1. activate nvm by sourcing it from your shell: 

   `. nvm.sh`

1. Now add these lines to your `~/.bashrc`, `~/.profile`, or `~/.zshrc` file to have it automatically sourced upon login: (you may have to add to more than one of the above files)

   ```shell
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
   [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
   ```

1. 安装完成检测

   `nvm -v`

   如果出现版本号则表明已经安装成功。

1. nvm 的卸载

   直接删除 ~/.nvm 文件夹即可

   `rm -rf ~/.nvm`


 ### node.js 和 npm 的安装

npm 已经集成到了node中，所以无需再单独安装

1. 确保已经安装了 nvm

1. 查询node稳定版本号进行安装

   `nvm install 8.11.4`

   此时就已经安装了 node.js 和 node 包管理工具 npm(Node Package Manager)

1. 安装完成检测

   `node -v`

   `npm -v`

   如果出现版本号则表示安装成功。

