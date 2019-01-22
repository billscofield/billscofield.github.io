# Linux C
* 纸带穿孔机，为什么有孔的地方是1呢？有孔才能透过电脉冲
* 符号语言、符号汇编语言、汇编语言
    * 针对特定的芯片
* C 在很多场合没有替代性的语言，例如操作系统
* 现在很多语言的语法都差不多，称之为 C-like，过去不同语言语法差异较大
* 语言的能力、适用领域主要是由"库"和传统决定的
* cpl 语言 1963年，英国剑桥大学推出，接近硬件
* BCPL(Basic CPL) 1967年，Martin Richards 对CPL语言做的简化
* B语言 Ken Thompson(1970年，AT&T 贝尔实验室),以bcpl 语言为基础，B取自BCPL的第一个字母
* C语言 Dennis M.Ritchie(1972-1973 AT&T 贝尔实验室)
    * 最初的C语言只是为描述和实现Unix操作系统而设计的
    * 1973年，二人合作，将Unix 90%的代码用c重写，即Unix第五版
* 浮点数
    * 实数是以指数形式存储的，小数点浮动，改变指数即可，所以称为浮点数。
* fortran cpl bcpl b c 
* b语言 和 basic 不是一回事儿
* 早期的软件没有一家独大的情况，所以规范一出来，会有很多的人去实现，因此会有很多不同的编译器

## 流程图
1. 圆角矩形：开始/结束
1. 矩形：处理
1. 平行四边形：分支

## 编译器的安装使用
其编译器主要有Clang、GCC、WIN-TC、SUBLIME、MSVC、Turbo C等 
1. gcc
    1. GNU Compiler Collection,指一套编程语言编译器，以GPL及LGPL许可证所发行的自由软件，也是GNU项目的关键部分，也是GNU工具链的主要组成部分之一。1985年由理查德·马修·斯托曼开始发展
    1. 原名为GNU C语言编译器(GNU C Compiler)，因为它原本只能处理C语言。GCC在发布后很快地得到扩展，变得可处理C++。之后也变得可处理Fortran、Pascal、Objective-C、Java、Ada，Go与其他语言。

1. 先生成 .o 文件（gcc -o target.o -c 源文件）
1. gcc -o 目标文件 target.o
1. 制作库文件的时候会用到 .o 格式的目标文件

1. gcc
    1. sudo apt install build-essential
    1. gcc -std=c99 源文件
    1. gcc -o 目标文件 源文件.c
1. g++

1. windows dev-c++

编写程序    
编译    
链接:通过"链接器"将目标文件链接生成可执行文件
调试运行

## gcc
交叉平台的编译器，能在当前cpu平台为多种不同架构的硬件平台开发软件

-c 只编译，不连接
-v 版本
--std 要放在 -o 的前面

### 优化选项
1. -O
1. -O2:一般选用这个
1. -o3
### 警告
1. -w 关闭所有警告
1. -Wall 允许发出警报
    1. -std=c89 不写return 0;时发出warning

### 制作库文件选项
1. math.h
    1. 编译的时候要加上 -lm (link math)
        * gcc -o target source -lm

src:源文件
bin:可执行
obj:.o目标文件
include:头文件


## include <stdio.h> 头文件的位置
以# 开头的预处理指令

whereis stdio.h
    /usr/include/stdio.h
    /usr/share/man/man3/stdio.3.gz

## 数据类型
1. 声明  初始化
    * 没有初始化的变量是不严格的？
    * int a,
            b;
    * 没有强制规定在定义的时候做初始化
    * 所有变量在第一次被使用之前(出现在赋值运算符的右边)应该被赋值一次

    ```
    int i;
    int j;
    j = i+10;
    ```

    * 分配的内存是不干净的,是有垃圾的，初始化/赋值就是清扫内存的行为

1. 基本数据类型
    1. 整型(补码形式)
        1. short  unsigned signed
        1. int:4 Byte  unsigned signed
        1. long  unsigned signed
        1. long long:8 Byte(l 或 L)
    1. 字符型
        1. ''
        1. %c 字符形式输出
        1. %d 十进制形式输出
        1. char  unsigned signed(u 或 U 表示无符号)
        1. 对应ASCII编码的二进制形式,占用一个字节
        1. **c语言把字符类型看作一种特别短的整数类型，允许参与算数运算**
        1. 'A'+2
        1. 字符常量
    1. 实型
        1. 单精度
        1. 双精度
    1. 枚举类型
1. 构造数据类型
    1. 数组类型
    1. 结构体类型
    1. 共用体类型（联合）
1. 指针类型

    1. 变量在内存中的地址
1. 空类型

    1. 类型说明符为void,一般用于函数返回值

1. 整型在内存中的存放形式
1. c语言对整型的大小没有明确定义，随机器不同而不同，可查看标准库<limits.h>头文件

    1. int 不能比 short 短，long 不能比 int 短

```
int i=10;
int j=-10;

gcc -g 
gdb
disassemble main    //反汇编
```

1. sizeof()    //字节数
1. ASCII
    1. 0-32 控制字符
    1. 空字符 '\0'  '0'
    1. \n   0
    1. %    37
    1. 空格 32
    1. '0' 48
    1. '9' 57
    1. 'A' 65
    1. 'a' 97
1. c语言允许对整型变量赋予字符值
    1. int a = 'a';
1. 字符串占内存数字符串中字节数加1，增加的一个字节中存放字符“\0”（ASCII编码为0），这是字符串结束的标志
    'Hello World' ☞     Hello World\0
    "a" 占用2个字节
    'a' 占用1个字节

1. 字符数组
    1. char str[]="hello";
    1. %s

## 常量
1. 常变量(只读变量)
1. const int AMOUNT = 100;
1. 一旦定义就不能被修改,即赋值一次就是read-only了
1. c可以通过指针修改，但c++中是绝对不可以的

1. 不能用作数组的index,也不能放在case关键字后边

```
1. 通过指针修改
int a=1;
int *p=&a;
*p=11;

2. 通过scanf修改
scanf("%d",&a);
```

1. 两种形式
    1. const int a=1;
    1. int const a=1;

### 分类
1. 整形常量
    12U,0L,-4
1. 实型常量
    1.5F,1.23
1. 字符常量
    'h'
1. 字符串常量
    "hello"

1. 符号常量(名字常量)
    #define 符号常量(通常大写)  值
    后面没有分号
    不能做"左值"

常变量，分配内存空间，有数据类型，可以和变量一样使用，但是不可以改变值
符号常量：不占内存空间

常变量是有名字的不变量，常量是没有名字的不变量

## 变量
1. 变量定义必须放在变量使用之前
1. 变量的声明
    1. 告诉编译器变量的类型和名字，在使用之前知道有这样一个变量的存在，随机分配存储空间
    1. int a;
    1. 定义性声明
1. 变量的定义
    1. 为变量分配存储空间，同时指明变量的类型和名字
    1. int a = 1;
    1. 真正的声明
        1. extern int a; 
        1. 引用性声明

1. **将 int a; int a=1; 视为定义，extern int a=1; 才是声明**
1. 声明和定义的区别?
    1. 是否分配存储空间
不可以多次定义

### 表达式
1. 有运算符的式子
1. 嵌入式赋值

    ```
    1. 
    int a = 6;
    int b;
    int c = 1 + (b=a);

    2. 
    result = (result = result * 2)*5*(result=3+result);
    ```

    * 不利于阅读，容易出错，不要用

1. 复合赋值

    1. 设计C语言的时候，有个想法，就是能表达出所有的机器语言指令，PDP-11 有这条指令。
1. 自增自减
    1. 前缀
    1. 后缀

1. == 的优先级比 >= > ... 的更低

    ```
    a>b == c<d
    ```

### 基础数据类型
#### 数值
##### 整数
1. char
1. short
1. int
1. long

##### 浮点数
1. 浮点这个词的本意就是指小数点是浮动的，另一种表示非整数的方式叫定点数，不过c中不会遇到。用浮点数这个词来表示所有的带小数点的数。
1. %f
1. 输入的时候用 %lf
1. float    精度为6
1. double 双精度浮点数,8 Byte,精度为15
1. long double 至少8 Byte

```
float a = 2.3; 2.3默认是双精度，隐式类型转换为单精度
```

1. printf double时，用f即可

1. 存储方式
                S符号位     E阶码       M尾数
                符号位      指数位      数据位
    float       1           8           23
    double      1           11          52
    

    ```
    5.5
        101.1(乘2取整)
        1.011e2
        阶码：float的范围 -128-127,指数+上限，2+127=129,应该是指数
        尾数：小数点后的,后补零
    ```


1. 指数
    默认double,l为long double,f为单精度

#### 字符串


#### 枚举类型
声明(不分配内存空间)
    enum 枚举类型名{枚举值，
                    枚举值，
                    ...
                    枚举值};

    枚举值的值是符号常量,不能做赋值操作

定义
    1. enum 枚举类型名 枚举变量1，枚举变量2,...枚举变量n;
    1. enum 枚举类型名 {枚举变量1，枚举变量2,...枚举变量n} 枚举变量列表;


    ```
    1. 
    enum Car_Type{BENZ,BMW,FORD,AUDI,JEEP};
    enum Car-Type my_car = BENZ,ur_car=FORD;


    enum weekday{
        SUN=0,
        MON=1,
        TUE,
        WED,
        THU=6,
        FRI
    }
    enum weekday holiday=SUN;

    enum weekday 相当于一个 int
    ```




#### boolean
没有true 和 false
1 和 0




## 关于编译
vi 有没有错误提示呢？？？youcompleteme怎么用？

## 练习

```
#include <stdio.h>
int main(){
    printf("liuzixian");
    return(0);
}
输出结果:liuzixian%
为什么最后有一个 '%'


#include <stdio.h>
int main(){
    printf("      *      1\
           \n     ***     2\
           \n    *****    3\n");

    return(0);  // return 0;
}

解:
\n 两个字符代表一个字符，所以上边那个没有\n 的缩进一个就可以了



返回较大数
int a,b;
scanf("%d %d",&a,&b);
int max=a;
if(a>b){
    max =a;
}
```

## 输入输出
### 输出
1. 非格式字符串
1. 格式字符串
    1. 以%开头
    1. %f   浮点数
    1. %d   双精度浮点数
    1. %
1. printf("hello\n");
    1. f format
1. printf("%d + %d = %d\n");

1. %[标志][宽度][.精度][长度]类型
1. 类型
    1. d
    1. o
    1. x/X
    1. u 无符号整数
    1. f
    1. e/E
    1. c
    1. s

1. 标志 
    1. -    左对齐
    1. +    输出符号（+，-）
    1. 空格 正值冠以空格，负数冠以负号
    1. # 
        1. 对于 c,s,d,u 无影响
        1. 对于o, 加前缀
        1. 对于x/X
        1. 对于 e,g,f 有小数是才给出小数点
1. 最小宽度
    1. %07d
1. 长度
    1. h 短整型
    1. l 长整形

1. 错误输出 stderror

### 输入 
1. %[宽度][长度][类型]
1. 输入的多余的宽度会被截掉

1. scanf("%d",&a)
    1. f format

1. scanf("%d %d",&a,&b);

1. scanf 可能会出错的
```
scanf("%d %d",&a,&b);
输入的时候
```

scanf("%d%d",&a,&b);  //默认用空格隔开,"%d %d" 等同于 "%d%d"

数组名就是地址(首地址)
char s[20];
scanf("%s",s);
**碰到空格终止读取**

fgets(s,sizeof(s)-1,stdin);//读取一行(file),包括最后键入的换行


#### scanf陷阱1
scanf("%d",&a);
printf("...")
scanf("%d",&a);
printf("...")
实际不会等待用户第二次输入，第一次提示输入时，我们输入8<回车>,这两个字符进入缓存，第一个scanf读取了一个，第二个scanf看到缓存里有，就直接将 回车读取了

* 所有的输入输出都会通过“缓存”
缓存中读
getchar();获取单个字符

scanf("%d",&a);
printf("...")
getchar();//获取那个回车
scanf("%d",&a);
printf("...")

* scanf("%c %c",a,b); "%c %c"

* 自定义宽度、精度  

```
scanf("%d%d",&width,&precision);
printf("salary:%*.*f\n",width,precision,salary);
```

* 跳过/忽略

```
int n;
scanf("%*d %*d %d",&n);//跳过前两个，获取第三个
printf("n:%d\n",n);
```
## getchar putchar
int 字符变量 =getchar();
只接收一个字符

int putchar(字符变量);
只会输出字符，而不会输出数字
putchar(65);

```
char a,
     b,
     c;

a = getchar();
b = getchar();
c = getchar();
//也可以在这里接收回车
getchar();
putchar(a);
putchar(b);
putchar(c);
putchar('\n');

return 0;

输入b后马上敲回车，再输入o，输入回车，缓冲区内容为 "b\no"
不要在输入b后马上敲回车键
```
## 循环

do{
循环体语句
}while( 条件 );



## 调试工具gdb 
1. GNU gcc debug

1. gcc -g 

1. gdb 可执行文件
    1. l [行] //查看源码(list)
    1. gdb 进行调试的是可执行文件而不是源代码,这样编译出的可执行文件才包含调试信息
    1. b(breakpoint) 行号    //设置断点
        1. 也可以是函数名 b main
    1. info b   //查看设置的断点情况
    1. r(run)   //运行程序，默认从第一行开始，或 r 9
    1. p n  //查看变量n的值(print)
    1. n(next)  //单步运行下一行代码（不会进入被调用的函数内部）
    1. s(step)  //单步运行下一行代码  （会进入被调用的函数内部）
    1. c(continue)  //恢复程序的运行

## 函数
函数定义
函数原型
1. 如果函数定义在执行函数的下边，则需要在执行函数内部声明那个函数
    * 程序的编译是自上而下的

## 参考内容
1. https://ke.qq.com/course/101461

