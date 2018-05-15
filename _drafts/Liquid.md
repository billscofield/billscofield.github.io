---
layout: post
title: "Liquid"
---

# Liquid
## Basics
### 简介
Liquid 是一门开源的模板语言，由 Shopify 创造并用 Ruby 实现。它是 Shopify 主题的骨骼，并且被用于加载店铺系统的动态内容。

什么是模板语言？？？

### 数据类型
* 5种
    * String
    * Number
    * Boolean
        * 只能是 true 或 false。布尔值千万不能加引号，否则就成为字符串了。 
    * Nil
        * Nil 是一个特殊的空值，当 Liquid 代码没有可输出的结果时将返回 Nil。他并不是由 “nil” 这个三个字符组成的字符串。在 if 条件判断和其他 Liquid 标记（tag）判断语句中，Nil 被当做 false 。
        * 如果 Liquid 标记（tag）或输出返回的是 nil，页面上将不会有任何内容。


    * Array

* 赋值的两种方法
    * assign
    * capture


Liquid 代码可分为 对象（object）、标记（tag） 和 过滤器（filter）

1. 对象 告诉 Liquid 在页面的哪个位置展示内容,对象和变量名由双花括号标识：{{ 和 }}。
    *

1. 标记（tag） 创造了模板的逻辑和控制流。他们由单括号加百分号标识：{% 和 %}。
    * 标记（tag）并不产生任何可见的文本输出。这意味着你可以用他们为变量赋值、创建条件和循环逻辑，并且不在页面上显示出任何 Liquid 逻辑代码。
    * 标记分为3大类

        * <a href="https://liquid.bootcss.com/tags/control-flow/">控制流标记（control flow tag）</a>
            * if
                ```
                {% if %}

                {% endif %}

                ```
            * unless:与 if 相对,只有当某个条件不成立时才执行一段代码
                * 等价于 {% if ... != " " %}

                ```
                {% unless %}

                {% endunless %}
                ```
            * elsif/else:为 if 或 unless 添加更多状态判断。

            * case/when

            ```
            输入
            {% assign handle = 'cake' %}
            {% case handle %}
              {% when 'cake' %}
                 This is a cake
              {% when 'cookie' %}
                 This is a cookie
              {% else %}
                 This is not a cake nor a cookie
            {% endcase %}

            输出
            This is a cake

            ```

        * 迭代/循环标记
            * for
            ```
            输入
              {% for product in collection.products %}
                {{ product.title }}
              {% endfor %}

            输出
            hat shirt pants
            ```
                * for的参数
                    * limit 限定次数

                    ```
                    输入
                    <!-- if array = [1,2,3,4,5,6] -->
                    {% for item in array limit:2 %}
                      {{ item }}
                    {% endfor %}

                    输出
                    1 2
                    ```

                    * offset 从指定索引号开始执行循环。
                    
                    ```
                    <!-- if array = [1,2,3,4,5,6] -->
                    {% for item in array offset:2 %}
                      {{ item }}
                    {% endfor %}

                    ```

                    * range 定义循环执行的范围。可利用数字或变量来定义此执行范围。

                    ```
                    输入
                    {% for i in (3..5) %}
                      {{ i }}
                    {% endfor %}

                    {% assign num = 4 %}
                    {% for i in (1..num) %}
                      {{ i }}
                    {% endfor %}

                    输出
                    3 4 5
                    1 2 3 4
                    ```

                    * reversed 反转循环的执行顺序。注意和 reverse 过滤器（filter）的拼写是不同的。

                    ```
                    输入
                    <!-- if array = [1,2,3,4,5,6] -->
                    {% for item in array reversed %}
                      {{ item }}
                    {% endfor %}

                    输出
                    6 5 4 3 2 1
                    ```
            * break

            ```
            输入
            {% for i in (1..5) %}
              {% if i == 4 %}
                {% break %}
              {% else %}
                {{ i }}
              {% endif %}
            {% endfor %}

            输出

            1 2 3
            ```
            
            * continue

            ```
            输入
            {% for i in (1..5) %}
              {% if i == 4 %}
                {% continue %}
              {% else %}
                {{ i }}
              {% endif %}
            {% endfor %}

            输出
            1 2 3   5
            ```

        * 变量标记
            * assign

            ```
            输入
            {% assign my_variable = false %}
            {% if my_variable != true %}
              This statement is valid.
            {% endif %}

            输出
              This statement is valid.
            ```
            
            * capture 将 capture 开始与结束标记之间的字符串捕获之后赋值给一个变量。通过 {% capture %} 创建的变量都是字符串。
            
            ```
            输入
            {% capture my_variable %}I am being captured.{% endcapture %}
            {{ my_variable }}

            输出
            I am being captured.
            使用 capture 时，你还可以利用 assign 创建的其他变量创造一个复杂的字符串。

            输入
            {% assign favorite_food = 'pizza' %}
            {% assign age = 35 %}

            {% capture about_me %}
            I am {{ age }} and my favorite food is {{ favorite_food }}.
            {% endcapture %}

            {{ about_me }}

            输出
            I am 35 and my favourite food is pizza.

            ```
            
            * increment 创建一个全新的数值变量，并且在后续每次调用时将此变量的值加 1。初始值是 0。

                * 通过 increment 标记（tag）创建的变量与通过 assign 或 capture 创建的变量是相互独立的。
                * decrement 创建一个全新的数值变量，并且在后续每次调用时将此变量的值减 1。初始值是 -1。    
                * 和 increment 类似，在 decrement 之中创建的变量与通过 assign 或 capture 创建的变量是互相独立的。  
            

1. 过滤器 改变 Liquid 对象的输出。他们被用在输出上，通过一个 | 符号分隔 

```
输入
{{ "/my/fancy/url" | append: ".html" }}
输出
/my/fancy/url.html
```

    * 多个过滤器可以共同作用于同一个输出，并按照从左到右的顺序执行

    ```
    输入
    {{ "adam!" | capitalize | prepend: "Hello " }}

    输出
    Hello Adam!
    ```
### 操作符
基本操作符
* ==	相等
* !=	不相等
* \>	大于
* <	小于
* >=	大于或等于
* <=	小于或等于
* or	逻辑或
* and	逻辑与

* contains（包含）
    contains 用于检查在一个字符串中是否存在某个子串。

    ```
    {% if product.title contains 'Pack' %}
      This product's title contains the word Pack.
    {% endif %}

    contains 还可以用于检查一个字符串数组中是否存在某个字符串。


    {% if product.tags contains 'Hello' %}
      This product has been tagged with 'Hello'.
    {% endif %}

    contains 只能用于搜索字符串。你不能将其用于从一个对象数组中检查是否存在某个对象。
    ```
