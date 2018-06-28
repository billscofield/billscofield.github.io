### 启动
* vim -u NONE -N
    * -u NONE 不加载自定义的 .vimrc 文件(~/.vimrc)
    * -N nocompatible 不进入兼容 vi 模式

### :substitute 命令的 flags
* c confirm，每次替换前询问；
* e error， 不显示错误；
* g globle，不询问，整行替换。如果不加g选项，则只替换每行的第一个匹配到的字符串；
* i ignore，忽略大小写

### 快捷键
* ctrl o 插入-普通模式
* ctrl g 
    * 可视模式-选择模式
    * 文档状态

* ctrl d 自动补全 EX 命令
* shift Tab 
* Tab
* ctrl f
    * 翻页
    * 命令行模式 到 命令行窗口
* H M L

### EX命令
* delete
* yank
* put
* copy
* move
* join
* normal 

### 
* '< 
* '> 
* : 冒号寄存器，上次的 Ex 命令
* 把当前单词插入到命令行
    * ctrl r ctrl w
* 切换缓冲区
    * :buffer [唯一标识]
* 删除缓冲区
    * :bdelete :bd

* <a href="https://blog.csdn.net/diy534/article/details/6917930">bash 切换到 vi 模式，修改清屏的快捷键</a>

```
vi ~/.bashrc
bind -m vi-insert '\c-l':clear-screen
```

* 查看原按键映射
    * bind -p > bind.txt

* 用反引号结构指定文件
* :args `cat 文件目录.txt`

* 普通模式中使用 f{char} F{char} 
* 与 d c 一起使用时，使用 t{char} T{char}
* 全局位置标记
    * m{大写字母}
* 寄存器中的内容替换高亮选区的文本
* 文本对象
    * is 当前句子
    * as 以及一个空格
    * ip 当前段落
    * ap 以及一个空行 
    * 以 a 开头的文本对象包括分隔符在内的整个文本
    * a) i)
    * a} i}
    * a] i]
    * a> i>
    * a' i'
    * a" i"
    * a` i`
    * at it
    
    * 一般来说 c 配合 i 比较好用, 而 d 配合 a 比较好用

* 跳转
    * `` 上次跳转之前的位置
    * `. 上次修改的地方
    * `^ 上次插入的地方
    * `[ 上次修改或复制的起始位置
    * `] 上次修改或复制的结束位置
    * `< 
    * `>
    
    * :jumps    跳转列表
    * ctrl o 后退
    * ctrl i 前进

* 命令行窗口
    * q/    查找命令历史 的命令行窗口
    * q:    Ex 命令历史 的命令行窗口
    * ctrl f    从命令行模式 切换到 命令行窗口

* 跳转列表
    * 就像 爱因斯坦-罗森桥 一样
    * jumps
    * ctrl o    后退
    * Ctrl i    前进
    * 不会被当做动作命令

    * 跳转到光标下的文件
        * set suffixes=.txt,.html,.css,.js
        * gf(go to the file)

* 改变列表
    * 每当文档作出修改后，Vim 都会记录当时光标所在的位置
    * g;    反向遍历改变列表
    * g,    正向遍历改变列表
        * `. 总是指向最后一次修改的位置
        * `^ 记录上次退出 插入模式时 光标的位置
    * gi    `^ i    首先 `^ ，然后切换到插入模式

* 使用外部命令过滤缓冲区内容
    * :[range]!{filter}
        * 1,5!sort -t',' -k2
    * :read !{cmd}
        * :read !ifconfig 
    * :[range]write !{cmd}

### 配置
* 忽略八进制
    * set noformats=
* 历史命令
    * set history=200 
