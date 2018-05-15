---
layout: post
title: "Liquid Cheat Sheet"
description: " "
---
{% raw %}

# Liquid Cheat Sheet
因为 Github 是 Liquid底层驱动，jekyll \_post 中的 Liquid 代码要用 raw 包裹
## Liquid 代码可分类
1. 对象（object）
    * {{ }}
1. 标记（tag）
    * {% %}

    * 注释标记
        * {% comment %} {% endcomment %}

    * 控制流标记
        * {% if ... %} {% elsif %} {% else %}  {% endif %}
        * {% unless %} {% endunless %} 除了 == {% if != %} {% endif %}
        * {% case ...%} {% when %} {% endcase %}

    * 迭代/循环标记
        * {% for %} {% endfor %}
            * limit:[number]
            * offset:[startnumber]
            * range
                * for i in (start..end)
            * reversed
        * break
        * continue

    * 原始内容标记

    ```
    {% raw %}
    \{\% endraw %}
    ```

    * 变量赋值标记
        * assign
        * capture
        * increment:初始值是 0
        * decrement:初始值是 -1
        * 注意
            * 通过 increment/decrement 标记（tag）创建的变量与通过 assign 或 capture 创建的变量是相互独立的。
1. 过滤器（filter）
他们被用在输出上，通过一个 | 符号分隔

### 数学
1. abs
    ```
    {{ -19 | abs }}
    如果组成字符串的各个字符全是数字，abs 也能够对此字符串求绝对值。{{ "-98.89" | abs}}
    ```

1. ceil 天花板，同样适用于纯数字字符串

    ```
    {{ 1.2 | ceil }}
    ```

1. floor 在 floor 过滤器执行之前 Liquid 会先尝试将输入转换为数字格式。

1. plus 加法

    ```
    {{ 4 | plus: 2 }}
    ```

1. minus 从一个数中减去另一个数。

    ```
    {{ 4 | minus:2}}
    ```

1. divided_by
    * divided_by 返回的结果于除数是同一数据类型的，也就是说，如果除数是整数，返回的结果也是整数；如果除数是浮点数（带有小数），返回的结果也是浮点数

1. modulo 返回除法运算的余数。 
        
    ```
    {{ 3 | modulo: 2}}
    ```

1. times: 将一个数乘以另一个数

1. replace: 将参数中给出的第一个参数全部替换为第二个参数。

    ```
    输入
    {{ "Take my protein pills and put my helmet on" | replace: "my", "your" }}

    输出
    Take your protein pills and put your helmet on
    ```
    
1. replace_first 将字符串中出现的第一个参数替换为第二个参数。

    ```
    输入
    {% assign my_string = "Take my protein pills and put my helmet on" %}
    {{ my_string | replace_first: "my", "your" }}

    输出
    Take your protein pills and put my helmet on
    ```

1. reverse: 将数组中的所有项的顺序反转。reverse 不能操作字符串。

    ```
    输入
    {% assign my_array = "apples, oranges, peaches, plums" | split: ", " %}

    {{ my_array | reverse | join: ", " }}

    输出
    plums, peaches, oranges, apples

    reverse 不能直接应用到字符串上，但是你可以先将字符串分割成字符数组，然后再将数组反转，最后将反转之后的数组合并。

    输入
    {{ "Ground control to Major Tom." | split: "" | reverse | join: "" }}

    输出
    .moT rojaM ot lortnoc dnuor
    ```

1. round 将浮点数四舍五入到最近的整数，或者，如果传入的参数是一个数值的话，将浮点数舍入到参数指定的小数位。

    ```
    {{ 1.2 | round }} -->1
    {{ 1.26 | round:1 }} -->1.3
    ```

### 时间
1. date:

    * 将 "now" (或 "today") 单词传入 date 过滤器可以获取当前时间 
    
    ```
    {{ "now" | date: %Y-%m-%d %H:%M }}
    ```
    * 上述实例输出的日期是最后一次生成当前页面的时间，并不是页面呈现给用户的时间。
    * 能够作用于包含良好格式化的日期字符串
        
        ```
        {{ "March 14, 2016" | date: "%b %d, %y" }}
        ```

### 字符串

1. append 将两个字符串拼接起来并返回拼接之后的值。

    ```
    {{ "/my/fancy/url" | append: ".html" }}

    {% assign filename = "/index.html" %}
    {{ "website.com" | append: filename }}
    ```

1. capitalize:将字符串首字母转为大写。

    ```
    {{ "my great title" | capitalize }}
    ```
        
1. downcase 用于将字符串中的各个字符转换为小写形式

1. upcase 将字符串中的每个字符都转换为大写形式。对于已经全是大写的字符串不做任何操作

1. prepend 在一个字符串前面附加另一个字符串。

    ```
    输入
    {{ "apples, oranges, and bananas" | prepend: "Some fruit: " }}
    ```

1. rstrip 将字符串右侧的所有空白字符（制表符 - tab、空格符 - space 和 回车符 - newline）删除。
    
1. strip 删除字符串左右两侧的所有空白符号（包括制表符、空格、换行符）。对于字符串中间的空白符不做任何处理。

    ```
    Input
    {{ "          So much room for activities!          " | strip }}

    Output
    So much room for activities!
    ```

1. remove 从一个字符串中删除所有出现的另一个子字符串。

    ```
    输入
    {{ "I strained to see the train through the rain" | remove: "rain" }}

    输出
    I sted to see the t through the 
    ```

1. remove_first 从一个字符串中仅仅删除第一次出现的另一个子字符串。

    ```
    输入
    {{ "I strained to see the train through the rain" | remove_first: "rain" }}

    输出
    I sted to see the train through the rain
    ```

1. truncate truncate 将字符串截短为指定的字符个数。如果指定的字符数量小于字符串的长度，则会在字符串末尾添加一个省略号(…) 并将此省略号计入字符个数中。

    ```
    输入
    {{ "Ground control to Major Tom." | truncate: 20 }}

    输出
    Ground control to...
    自定义省略号
    truncate 还支持第二个可选参数，用于指定一个字符序列，此字符序列将被添加到截短字符串的后面。默认是省略号(…)，但是你可以按照你的需要传递一个新的。

    第二个参数的长度将被计入第一个参数的字符个数中。例如，如果你希望将字符串截短为 10 个字符，并且使用由 3 个字符组成的省略号，这时，你需要将 truncate 的第一个参数设置为 13，是因为需要计入省略号的 3 个字符。

    输入
    {{ "Ground control to Major Tom." | truncate: 25, ", and so on" }}

    输出
    Ground control, and so on
    无省略号
    你可以将字符串按照第一个参数截短为指定长度，并且可以通过传递一个空字符作为第二个参数，从而让截短之后的字符串不显示省略号。

    输入
    {{ "Ground control to Major Tom." | truncate: 20, "" }}

    输出
    Ground control to Ma 
    ```

1. truncatewords 将字符串截短为指定的单词个数。如果指定的单词数量小于字符串中包含的单词个数，则会在字符串末尾添加一个省略号(…)。

    ```
    输入
    {{ "Ground control to Major Tom." | truncatewords: 3 }}

    输出
    Ground control to...
    自定义省略号
    truncatewords 还支持第二个可选参数，用于指定一个字符序列，此字符序列将被添加到截短字符串的后面。默认是省略号(…)，但是你可以按照你的需要传递一个新的。

    输入
    {{ "Ground control to Major Tom." | truncatewords: 3, "--" }}

    输出
    Ground control to--
    无省略号
    如果你不希望在末尾添加省略号，可以将 truncatewords 的第二个参数设置为空字符串：

    输入
    {{ "Ground control to Major Tom." | truncatewords: 3, "" }}

    输出
    Ground control to
    ```

1. slice
    * 只传入一个参数时将返回此参数作为下标所对应的单个字符。第二个参数是可选的，用于指定返回的子字符串的长度。

    * String indices are numbered starting from 0.
    * If the first parameter is a negative number, the indices are counted from the end of the string:

    ```
    {{ "Liquid" | slice: 2 }}
    {{ "Liquid" | slice: -3, 2 }}
    ```

1. lstrip 删除字符串左侧的所有空白符（制表符、空格和换行符）。字符串中间的所有空白符不受影响。

    ```
    {{ "          So much room for activities!          " | lstrip }}
    ```

1. strip_html 从字符串中删除所有 HTML 标签。

    ```
    输入
    {{ "Have <em>you</em> read <strong>Ulysses</strong>?" | strip_html }}

    输出
    Have you read Ulysses?
    ```
   
1. strip_newlines 从字符串中删除所有换行字符（newline character）。

    ```
    输入
    {% capture string_with_newlines %}
    Hello
    there
    {% endcapture %}

    {{ string_with_newlines | strip_newlines }}

    输出
    Hellothere 
    ```

### 数组
1. compact: 删除数组中的所有 nil 值。
    ```
    {% assign site-categories = site.pages | map: 'category' | compact %}
    ```

1. split: 根据参数传入的分隔符将字符串分解为数组。split 通常被用于将以逗号为分隔符的字符串转换为数组。

1. join 将数组中的各个字符串合并为一个字符串，并将 join 参数作为字符串之间的分隔符。

    ```
    {% assign fruits = "apple, banana, orange" | split:", " %}
    {{ fruits | join:"and" }}
    ```

1. concat:  用于连接两个或多个数组

    ```
    {% assign everything = fruits | concat: vegetables %}
    ```
    
1. uniq 删除数组中的所有冗余项(重复项)。

    ```
    输入
    {% assign my_array = "ants, bugs, bees, bugs, ants" | split: ", " %}
    {{ my_array | uniq | join: ", " }}

    输出
    ants, bugs, bees
    ```

1. size
    * 返回字符串中所包含的字符数或者数组中所包含的条目数量。size 还支持“点标记”（例如 {{ my_string.size }}）。这种用法便于你在标签（tag）中使用 size 过滤器，例如条件判断标签（tag）。

    ```
    输入
    {{ "Ground control to Major Tom." | size }}
    输出
    28

    输入
    {% assign my_array = "apples, oranges, peaches, plums" | split: ", " %}
    {{ my_array | size }}

    输出
    4

    使用“点标记”：
    {% if site.pages.size > 10 %}
      This is a big website!
    {% endif %}
    ```
    
1. sort
    * 对数组中的所有进行排序。排序后的数组是按照区分大小写的顺序排列的。

    ```
    输入
    {% assign my_array = "zebra, octopus, giraffe, Sally Snake" | split: ", " %}
    {{ my_array | sort | join: ", " }}

    输出
    Sally Snake, giraffe, octopus, zebra
    ```
    
1. sort_natural 对数组进行排序，并且大小写无关。

    ```
    输入
    {% assign my_array = "zebra, octopus, giraffe, Sally Snake" | split: ", " %}
    {{ my_array | sort_natural | join: ", " }}

    输出
    giraffe, octopus, Sally Snake, zebra
    ```

1. ???没有效果escape
    * 将字符串中的某些字符替换为转义序列（escape sequence），这样整个字符串就能够用于 URL 了。如果字符串不需要转义则不会对字符串做任何操作
        
    ```
    {{ "Have you read 'James & the Giant Peach'?" | escape }}
    Have you read &#39;James &amp; the Giant Peach&#39;?
    ```

1. ???escape_once
    * 转义一个字符串并且不修改已经转义过的实体（entities)。对于无须转义的字符串不做任何修改。

    ```
    输入
    {{ "1 < 2 & 3" | escape_once }}

    输出
    1 &lt; 2 &amp; 3

    输入
    {{ "1 &lt; 2 &amp; 3" | escape_once }}

    输出
    1 &lt; 2 &amp; 3
    ```
    
1. first 返回数组的第一项。

    ```
    {% assign fruits = "banana, apple, orange" | split:", " %}
    {{fruits | first }}
    {% assign bill = fruits | first %}
    ```

1. last 返回数组中的最后一项。


1. !!!map
    * 从对象（object）中提取指定名称的属性的值，并用这些值构建一个数组。

    * 以下实例中，假定 site.pages 包含了整个网站的元数据信息。利用 assign 和 map 过滤器创建一个变量，此变量只包含 site.pages 对象中 category 属性对应的所有值。

    ```
    输入
    {% assign all_categories = site.pages | map: "category" %}
    {% for item in all_categories %}
    {{ item }}
    {% endfor %}

    输出
    business
    celebrities
    lifestyle
    sports
    technology
    ```

1. newline_to_br 将所有换行符(\n) 替换为 HTML 的 (&lt;br&gt;) 标签。

    ```
    输入
    {% capture string_with_newlines %}
    Hello
    there
    {% endcapture %}

    {{ string_with_newlines | newline_to_br }}

    输出
    <br />
    Hello<br />
    there<br />
    ``` 

1. url_decode 对于作为 URL 进行编码或通过 url_encode 编码的字符串进行解码。

    ```
    输入
    {{ "%27Stop%21%27+said+Fred" | url_decode }}

    输出
    'Stop!' said Fred
    ```
    
1. url_encode 将字符串中非 URL 安全的字符转换为百分号编码（percent-encoded）的字符。

    ```
    输入
    {{ "john@liquid.com" | url_encode }}

    输出
    john%40liquid.com

    输入
    {{ "Tetsuro Takara" | url_encode }}

    输出
    Tetsuro+Takara
    ```

1. default: 指定一个默认值，以防预期的值不存在。如果左侧的值为 nil、false 或空，default 将输出此默认值。

    ```
    {{ product_price | default: 2.99 }} 

    {% assign a_price = 5.99 %}
    {{ a_price | default: 2.99 }}
    ``` 

## 数据类型
1. Number
1. String
1. Nil
1. Array
1. Boolean
    * 条件判断中任何返回 true 的都被叫做 真值（truthy）。任何返回 false 的都被叫做 假值（falsy）
    * 所有的对象（object）类型都可以被描述为真值（truthy）或假值（falsy）
    * 真值（Truthy)
        * 除了 nil 和 false 之外的所有值都是真值。
        * 字符串（String），即便是空字符串，也是真值（truthy）
    * 假值（Falsy）
    * 下表总结了在 Liquid 中什么是真值什么是假值。

| 真值（truthy）| 假值（falsy）|
| - |:-: |-: |
|true|	•| |
|false|	 |	•|
|nil|	 |	•|
|string| •| |
|empty string|	•| |
|0	|•| |
|integer|	•| |
|float|	•| |
|array|	•| |
|empty array|	•| |
|page|	•| |
|EmptyDrop|	•| |

## 操作符
1. ==	相等
1. !=	不相等
1. \>	大于
1. <	小于
1. \>=	大于或等于
1. <=	小于或等于

1. or	逻辑或
1. and	逻辑与

1. contains（包含）

## Liquid 的各种分支
1. Shopify
1. Jekyll

Shopify 和 Jekyll 分别为 Liquid 添加了针对各自用途的对象（object）、标记（tag）和过滤器（filter）。目前最流行的 Liquid 版本包括 Liquid、Shopify Liquid 和 Jekyll Liquid。

Shopify 一直采用的都是最新版本的 Liquid

Jekyll 还是 GitHub Pages 的底层引擎。

Jekyll 可能使用的不是最新版本的 Liquid。

Jekyll 版本的 Liquid 的文档在 <a href="https://jekyllrb.com/docs/templates/">Templates section of Jekyll’s documentation</a>

## 空白符
在 LLinux版Kodi主要面向Ubuntu开发。也有一些针对其他Linux发行版的第三方安装包。另外，还可以在安iquid 模版中，你可以将连字符放在标记（tag）中，例如 {{-、-}}、{%- 和 -%}，用于将标记（tag）渲染之后的输出内容的左侧或右侧的空拍符剔除。


{% endraw %}
