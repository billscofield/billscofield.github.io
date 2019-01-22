## VI 增强记忆 补漏
1. 作者是 Bill Joy, Sun 伯克利
1. [ )
1. vim -u NONE  （不加载你的vimrc配置文件）
        -N  (nocompatiable)
1. &    重复执行上次的:substitute命令，不论上次的substitute有没有后缀，这个命令仅仅重复到光标下字符
    1. 仅仅针对光标所在行的
    1. cgi
1. @:   重复执行上次的 ex 命令
    @@  重复上次的宏命令
1. ~    大小写
1. g~ + 动作命令
    1. g~ f 'char'  (f是包含那个字符的)
    1. g~ /目标字符  （这个目标字符，单词是开区间）

    ```
    nice to meet you
      x  
    niCE TO Meet you(g~/eet)
    ```

1. 插入模式修改
    1. <c-h>
    1. <c-w>
    1. <c-u>
1. 寄存器
    1. <c-r>=       表达式寄存器
1. 在Linux下，Ctrl+S 是暂停该终端，阻止向该终端输出。在Linux终端 Ctrl+Q ：恢复向终端输出。
1. 选择模式--SELECT--,从visual模式进入select模式
1. 命令行窗口提供了构造复杂命令所需的完整编辑能力 q:  或 ex 状态 <c-f>
1. ex 模式下
    1. ctrl f 切换到命令行窗口
    1. 遍历历史命令
        1. ctrl n
        1. ctrl p
1. 根据ASCII Unicode表插入字符(插入模式下)
    1. ASCII    <c-v>097    (十进制,必须输入3位数字)
    1. Unicode  <c-v>uxxxx   (hex,u后面是4位16进制数字)
1. <c-r><c-w>   光标处单词插入ex
1. <c-r><c-p>{register}
1. <c-o>后退<c-i>前进
1. * 会跳转到**下一个匹配项**
1. `^   上次退出插入模式的位置
1. `.   上次修改的位置，包括 s c d x ...
1. :!ruby %         :!gcc %
1. @@ 重复最近调用过的宏
1. <c-g>    光标所在文件百分比
    1. 可视模式下，在--select-- 与 --visual-- 间切换
1. 外部命令排序
    1. :start,end !sort -t'分隔符' -k第几列
1. .vimrc配置文件的位置
    1. :echo $MYVIMRC
1. :echo & :echom
    1. :echo命令 会打印输出，但是一旦你的脚本运行完毕，那些输出信息就会消失。
    1. 使用:echom打印的信息 会保存下来，你可以执行:messages命令再次查看那些信息。
1. 注释
    1. "
1. .vimrc 中可以 echo "Good Morning", 此时每次打开vim 都会有"Good Morning"提示

1. :set number!
    1. number 是一个bool, 在后面添加 ! 表示在它的几个状态间切换,所以一般不用 !
1. :set number?
    1. ? 表示显示当前的值
1. :set numberwidth=4 行号的宽度

1. 可以在一个set 命令中包含多个设置
    1. :set number numberwidth=5

## ex
### 命令
1. delete
1. yank
1. put
1. copy     co/t
1. move     m
1. join     j       同普通模式下的 <shift-j>
1. normal
1. substitute

### 各种行
1. 'm   包含位置标记m的行
1. '<   高亮选区的起始行
1. '>   高亮选区的结束行
1. 0    虚拟行，第一行的上方

<c-d>   可用的补全列表



q/  查找命令历史窗口
q:  ex命令历史窗口

read 
    :read !date -I      (date -I 是iso格式:2008-08-01)
write

## 文件
1. %    当前文件
1. #    轮换文件

## learn vimscript the hard way

1. 按键映射
    1. :map <alias key> 命令,
    1. 可以用 <keyname> 告诉vim一个特殊的按键
        1. <space>
        1. <c-字符>  Ctrl
        示例
        1. 比如 :map - dd
        1. :map <space> viw
    1. 注意
        1. 键盘映射无法使用注释
            :map <space> viw " Select word   //vim 会认为是 vim " Select 这个命令


1. 模式映射
    1. 你可以使用nmap、vmap和imap命令分别指定映射仅在normal、visual、insert模式有效。
        1. :nmap \ dd   //在normal模式下，按下\  Vim会删除当前行。
        1. :vmap \ U    //在visual模式下，按下\  将选中文本转为大写
        1. :imap <c-d> dd  实际上只是输入了两个字符d
            1. 要想让这个映射按我们的期望执行，我们需要更加明确的指令
                * :imap <c-d> <esc>ddi
    1. 递归映射
    1. 非递归映射 no re
        1. noremap/nnoremap, vnoremap, inoremap
        1. 应当在任何时候都使用非递归映射
    1. 不像Emacs，Vim可以映射多个按键。
        1. :nnoremap -d dd

        这就意味着你可以用一个你不常用的按键（如-）作为“前缀”，后接其它字符作为一个整体 进行映射。    
        我们称这个前缀为 leader, 你可以按你的喜好设置你的leader键   
            :let mapleader = ","

        1. leader 当你创建新的映射时，你可以使用<leader>表示“我设置的leader按键”。
            :nnoremap <leader>d dd

        1. local leader Vim有另外一个“leader”成为“local leader“。这个leader用于那些只对某类文件 （如Python文件、HTML文件）而设置的映射。
            :let maplocalleader = "\\"

        1. 编辑我的vimrc文件映射 
            1. :nnoremap <leader>ev :vsplit $MYVIMRC<cr>
        1. source 我的 vimrc 文件映射
            1. :nnoremap <leader>sv :source $MYVIMRC<cr>
        1. <nop>    no operation
            1. :inoremap <esc> <nop>
            1. 重新学习一个mapping的窍门就是强制将之前的按键设置为不可用，强迫自己使用新的mapping
        1. 



