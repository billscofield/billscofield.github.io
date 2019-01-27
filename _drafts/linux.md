
## 分发版本
Debian, Slackware, RedHat
Debian:
    (Ian Murdock,Debra )
    在1993年创造了Debian，并于1996年正式发布，当时他还只是普渡大学的本科生
    Ubuntu
Slackware:
    S.u.S.E
        OpenSUSE
    1. Slackware Linux是由Patrick Volkerding开发的GNU/Linux发行版。与很多其他的发行版不同，它坚持KISS(Keep It Simple Stupid)的原则。一开始，配置系统会有一些困难，但是更有经验的用户会喜欢这种方式的透明性和灵活性。 
    1. Slackware 很多特性体现出了KISS原则，最为有名的一些例子就是不依赖图形界面的文本化系统配置、传统的服务管理方式和不解决依赖的包管理方式。它的最大特点就是安装灵活，目录结构严谨，版本力求稳定而非追新。Slackware的软件包都是通常的tgz(tar/gzip) 或者txz(xz) 格式文件再加上安装脚本。Tgz/Txz 对于有经验的用户来说，比RPM更为灵活，并避免了APT 之类管理器可能带来的的依赖地狱。
RedHat:
    Fedora
    CentOS
Gentoo
arch Linux

GNU/Linux:通常以源码方式提供
    自由、灵活，对使用者的要求比较高

    x86 
    x64(amd64) 第一款64bit是AMD研发的
    m68000(m68k) Moto(以前unix的CPU都是 Moto 的)
    arm(手持移动)
    sparc(SUN),ultrasparc 系统solaris
        1. 全称为“可扩充处理器架构”（Scalable Processor ARChitecture），是RISC微处理器架构之一。它最早于1985年由Sun电脑所设计
        1. 1987年，SUN和TI公司合作开发了RISC微处理器——SPARC。SPARC微处理器最突出的特点就是它的可扩展性，这是业界出现的第一款有可扩展性功能的微处理器。SPARC的推出为SUN赢得了高端微处理器市场的领先地位。
        1. 1999年6月，UltraSPARC III首次亮相。

    power(IBM) **全球第一款双核**，性能强，制作工艺没有 intel 好，价格昂贵;精简指令集
        1. Performance Optimization With Enhanced RISC 
        1. PC:Performance Computing
        1. POWER是1991年，Apple（苹果电脑）、IBM、Motorola（摩托罗拉）组成的AIM联盟所发展出的微处理器架构。

    MIPS
        1. MIPS是世界上很流行的一种RISC处理器。MIPS的意思是“无内部互锁流水级的微处理器”(Microprocessor without interlocked pipelined stages)，其机制是尽量利用软件办法避免流水线中的数据相关问题。
        1. 它最早是在80年代初期由斯坦福(Stanford)大学Hennessy教授领导的研究小组研制出来的。

    alpha(HP)
        1. The **Alpha processor** was developed by Digital Equipment Corporation (DEC). DEC was later bought by Compaq, which then merged with HP. Alpha always had a reputation for excellent performance and could run many different operating systems.

微码（汇编）
移植：portable
交叉编译(cross compile) 比如在pc上将软件编译ram的程序


IDE(集成电子设备)40芯带状排线
    主板上内置两个IDE接口，每个接口通过40芯连线连接两个IDE设备
    一般两个IDE控制器，最多支持4个设备
	（Integrated digital equipment）
	（integrated development environment）

SCSI(小型计算机接口 Small Computer System Interface;)
    一个SCSI控制器最多可支持15个设备
    所有的设备只需占用一个IRQ，同时SCSI还支持相当广的设备，如CD-ROM、DVD、CDR、硬盘、磁带机、扫描仪等
    Interrupt Request 中断请求
	（IRQ:Interrupt Request）

swap分区仅用于系统访问，是唯一不需要挂载点的分区,且它的格式只能是swap分区

GNOME(GNU Network Object Model Environment) 墨西哥软件设计师 Miguel 与1997年发起和领导的一个图形桌面开发项目
在GNOME之前，KDE(K Desktop Environment)，KDE却不是完全的免费软件，因为KDE是基于Qt开发的免费软件，但QT却不是免费软件，因此Miguel和一些黑客决定开发一个图形桌面系统即GNOME
在Red Hat的支持下，14个月得以完成

通常USB设备被识别为SCSI设备

程序员的编程接口
    API:Application Program Interface
    ABI:Application Binary Interface

**libraries**
kernel 面向硬件，起初只支持x86，现在全支持
硬件规格，硬件标准，

Unix-like
    API
    ABI

加壳 编译时加密，防止反编译

开源协定(代码的共产主义运动)
    GPL:流毒无穷，只要参考了GPL,你就必须遵循 GPL
        LGPL:lesser(宽松的):基于库调用的话，可以不开源
        FSF: Free Software Foundation
    BSD
        二次开发发布的产品中包含源代码，则在源代码中必须带有原来的代码中的BSD协定
        是二进制格式，需在文档中生命包含的源代码的BSD协定
        不可用源码作者名或组织名做推广
    Apache
        ASF: Apache Software Foundation
    
    双线授权
        1. 社区版（community):遵循开源协定
        1. 商业授权(Enterprise):提供更多的功能

《穿越计算机的迷雾》《量子物理史话》《奇点临近》

GCC
    GCC 原名为 GNU C 语言编译器（GNU C Compiler），因为它原本只能处理 C语言。
    后来又扩展能够支持更多编程语言，如Fortran、Pascal、Objective-C、Java、Ada、Go以及各类处理器架构上的汇编语言等，所以改名GNU编译器套件（GNU Compiler Collection）。




1946年世界上第一台电子计算机 ENIAC 在美国诞生

Ken Thompson(1943年2月4日)
    1966年加入了贝尔实验室。
    B语言的作者
    1969年Unix第一版本
    1973年Thompson和Ritchie用C语言重写了UNIX。安装于PDP-11的机器之上。

    
Dennis Ritchie(1941-2011)
    在技术讨论中，他常被称为dmr，这是他在贝尔实验室的Email地址
    1983年他与肯·汤普逊一起获得了图灵奖。
    1967年加入贝尔实验室

ARPA(advanced research projects agency)
    1969年提出多台计算机互联的设想,当年仅有4个节点，到1983年有100多个节点
    ARPANET是计算机网络技术发展的一个重要里程碑

1972年 Xerox公司发明了以太网

1977年，ISO(international standardization orgznization)设立分委员会，以“开放互联”为目标，专门研究网络体系结构
1984年，颁布 "开放系统互连基本参考模型" (Open system interconnection basic reference model)

multics
    1964年，贝尔实验室、麻省理工学院和通用电器, multics项目
    1969年，因MULTICS计划的工作进度过于缓慢，最后终究遭裁撤的命运，贝尔实验室退出此计划。
    1970年，GE出售其电脑业务，霍尼韦尔公司，作为一个商业化的产品提供了Multics系统，并远销几十个国家。

Bell Lab
    2001年，**朗讯**公司接手贝尔实验室，决定关闭大多数实验室，许多研究人员纷纷离开，包括Unix发明者之一的肯汤普森都去了Google，但是丹尼斯里奇哪里也没去，还是留了下来。
    2006年12月1日，贝尔实验室被整体卖给了**法国阿尔卡特公司**，第二年他就选择退休了。


反托拉斯法案
    美国的反垄断法于**1890年7月20日**正式生效。这部法律的全称是《抵制非法限制与垄断保护贸易及商业法》。该法因最初是由参议院共和党议员约翰·谢尔曼提议，所以命名为“谢尔曼法”。又由于当时企业兼并多是通过“托拉斯”的形式进行，所以这部法律也叫“反托拉斯法”。

    AT&T的前身是由电话发明人贝尔于1877年创建的美国贝尔电话公司

    **1984年，美国司法部 依据《反托拉斯法》拆分AT&T**，分拆出一个继承了母公司名称的新AT&T公司(专营长途电话业务)和七个本地电话公司(即“贝尔七兄弟”)，美国电信业从此进入了竞争时代。

    1995年，又从公司中分离出了从事设备开发制造的朗讯科技和NCR，只保留了通信服务业务。

    由于AT&T公司受到美国反托拉斯法的诉讼，与联邦政府签署了一份协议，这份协议不允许AT&T公司生产与电话和电报服务无关的设备，也不允许从事除“公用通信服务”外的任何商业活支。
    这样，AT&T公司就陷入了不能经营计算机产品的尴尬局面。 
    而自从在《ACM通信》中发表了关于UNIX的论文后，越来越多的人希望能够获得UNIX软件和源码。
    为了不违背与政府签署的协议，AT&T公司既不出售UNIX、也不为其作广告、不对其提供技术支持。
    而同时为了满足大家的需要，AT&T公司在签署简单协议的前提下，将UNIX系统无偿地提供给大学，以供教学与研究。 

    由于AT&T公司对UNIX的策略，使得UNIX在全世界范围内快速发展。
    到1975年底，它已经传播到西至耶路撒冷的Hebrew大学，南至澳大利亚的新南威尔士大学，北至加拿大多伦多大学的世界各地。 

    **1979年1月发行的UNIX版本是一个真正可移植的UNIX系统，**它对其后的UNIX发展有着深远的影响。
    该版本最初是运行在PDP-11和Interdata 8/32上的，该系统更加健壮，而且提供了比版本6更强大的功能，但其相当慢。许多领取了许可证的用户针对这一情况从不同方面对系统的性能进行了改进，AT&T又将这些改进中的许多加入了其以后的UNIX发行中。 

    这种使用者与开发者之间的合作精神正是UNIX快速成长和不断发展的关键因素。
    不幸的是，当UNIX在商业上取得很大成功之后，这种精神就不存在了。

unix
    Thompson和Ritchie借着Space Travelling和开发文本处理系统的幌子开发出了Unix

    MULTICS其实是"Multiplexed Information and Computing Service"的缩写，在1970年时，那部PDP－7却只能支持两个使用者，当时，Brian Kernighan就开玩笑地称他们的系统其实是："UNiplexed Information and Computing Service"，缩写为"UNICS"，后来，大家取其谐音，就称其为"UNIX"了。1970年可称为"UNIX元年"。

    1972年， D.M.Ritchie 在B语言的基础上最终设计出了一种新的语言，他取了BCPL的第二个字母作为这种语言的名字，这就是C语言。
    1973年初，C语言的主体完成。

    1977年，Dennis M.Ritchie发表了**不依赖于具体机器系统的C语言编译文本《可移植的C语言编译程序》**


关于1970年1月1日
    32bit 用有符号存储最大存储2^31-1
    (2^31-1)/86400/365 = 68.1年

    1000 0000 : 0000 0000 : 0000 0000 : 0000 0000 

1979年，AT&T宣布了UNIX的商业化计划

1984年 Richard Stallman GNU计划

1987年 GCC 出世
    苹果是LLVM和基于LLVM的C/C++的原生编译器Clang的最主要支持者。

1989年
    CygnusSupport(天鹅座支持公司)
    Cygnus Solutions（最初名为Cygnus Support）旨在为自由软件提供商业支持。它的口号是："让自由软件使用无忧(Making free software affordable)"。Cygnus是"Cygnus, Your GNU Support"的递归式首字母缩写词。

Minix系统的功能时分有限，因为它是专门为炒作系统的教学而设计的

1991年10月 Linus Torvalds 发布了linux

1994年3月14日，Linux内核的第一个正式版本Linux 1.0 发布。

1995年 Bob Young 创办了 Red Hat 公司

1998年，GUN骨干分子 终于认识到 GUN Linux体系的**产业化道路的本质**，并不是什么自由哲学，而是市场竞争的驱动，因此创办了 Open Source Initiative [ɪˈnɪʃətɪv] (开放源代码促进会)











程序管理
    程序的组成部分
        二进制程序
        配置文件,帮助文件
            可被查看其内容的文件
        库文件
            不能独立执行，只能被调用执行
            /lib  
            /lib64
            /usrlib
            /usr/lib64
            /usr/local/lib
            /usr/local/lib64
            我的Ubuntu还有 /lib32,
        帮助文件

Debian /ˈdɛ.bi.ən/ : debian package(dpkg), 前端管理工具叫 apt-get, 后缀.deb
    伊安·默多克（Ian Murdock）
    妻子叫 Deb 

    Debian的发行及其软件源有五个分支：
		旧稳定分支（oldstable）
		稳定分支（stable）
		测试分支（testing）
		不稳定分支（unstable）
		实验分支（experimental）
		
    当前的稳定分支即Stretch  （即下一个旧稳定分支），所有开发代号均出自Pixar的电影《玩具总动员》。

RedHat: rpm,前端管理工具叫yum, 最新的yum升级版叫 dnf
S.u.S.E: rpm, 前端管理工具叫 zypper
ArchLinux: 
Gentoo:
    首个稳定版本发布于2002年
    由于开发者对FreeBSD的熟识，所以Gentoo拥有媲美 FreeBSD的广受美誉的ports系统 ——Portage包管理系统。
    不同于APT和YUM等二进制文件分发的包管理系统，Portage是基于源代码分发的，必须编译后才能运行，对于大型软 件而言比较慢，不过正因为所有软件都是在本地机器编译的，在经过各种定制的编译参数优化后，能将机器的硬件性能发挥到极致。
    Gentoo是所有Linux 发行版本里安装最复杂的，但是又是安装完成后最便于管理的版本，也是在相同硬件环境下运行最快的版本。
LFS(Linux From Scratch(抓) 从零开始，是一本书，告诉你怎么组装)
    就是一种从网上直接下载源码，从头编译LINUX的安装方式。它不是发行版，只是一个菜谱，告诉你到哪里去买菜（下载源码），怎么把这些生东西( raw code) 作成符合自己口味的菜肴──个性化的linux，不单单是个性的桌面。
    同时也是一款赛车仿真游戏
kali:

centOS的镜像站点
    1. http://mirrors.aliyun.com
    1. http://mirrors.163.com
    1. http://mirrors.sohu.com

## centos
VM
    桥接
语言
localectl list-locales
zh_CN.gbk
zh_CN.utf8
localectl set-local LANG=zh_CN.utf8

终端 terminal

centos7

ssh 
    #ssh -tnl
        查看系统是否监听于tcp协议的22号端口
网址
    1. ifconfig
    1. ip addr list
	1. hostname -i
	1. hostname -I

防火墙 iptables
    查看
        iptables -L -n
		
		-L, --list
		-n, --numeric		numeric outpus of address and ports
		
    关闭    
        (centos7)systemctl disable firewalld.service
                 systemctl stop firewalld.service
       （centos6) service iptables stop
                  chkconfig iptables off
ssh
    xshell

echo（回显） $SHELL

物理终端 
    console
    /dev/console
	
虚拟终端 
    tty
    ctrl alt f[1,6]
    /dev/tty#[1,6]
	
图形终端 
    ctrl alt f7

串行终端 
    ttys
    用不着显卡
    /dev/ttys#[]

伪终端(仿真终端)
    pty
    xshell, 图形窗口一个终端窗口
    /dev/pts/

显示当前终端：tty
启动终端后，与用户接口程序（shell)，即可实现交互

CLI接口:
    命令提示符:prompt
        #:管理员
        $:普通用户

关机
    [systemctl] poweroff/reboot
    halt

自由学习修改，自由分发，自由创建衍生版

Linux哲学思想
    1. 一切皆对象
    1. KISS(keep it simple stupid)
    1. 尽量避免和用户交互
        1. 目标：易于以编程的方式实现自动化任务
    1. 使用文本文件保存配置信息


文件系统，文件，目录

文件:一段流式数据(管道，tompson老板给的强迫性建议，O(∩ ∩)O哈哈~)
    平面化，层次化

目录：路径映射

文件名规则
    1Byte 不超过255chars
    目录也是文件，在同一路径下，两个文件不能同名
    最后一个叫 basename, 不论是文件还是目录
    前面的叫 direction-name
    除/以外任意字符



命令
    命令 选项 参数
        1. 发起一个进程请求，
    
    多数系统程序文件都放在 /bin,/sbin,/usr/bin,/usr/sbin,/usr/local/bin,/usr/local/sbin
        /usr 目录

        /usr usually contains by far the largest share of data on a system. Hence, this is one of the most important directories in the system as it contains all the user binaries, their documentation, libraries, header files, etc…. X and its supporting libraries can be found here. User programs like telnet, ftp, etc…. are also placed here. In the original Unix implementations, /usr was where the home directories of the users were placed (that is to say, /usr/someone was then the directory now known as /home/someone). In current Unices, /usr is where user-land programs and data (as opposed to ’system land’ programs and data) are. The name hasn’t changed, but it’s meaning has narrowed and lengthened from “everything user related” to “user usable programs and data”. As such, some people may now refer to this directory as meaning ‘User System Resources’ and not ‘user’ as was originally intended.（via 1,2）
    
    file 查看文件类型
    
    并非所有的命令 都有一个在某目录下与之对应的可执行程序文件，如 cd
        内部命令(builtin)
            是shell自带的命令
            帮助
                help 命令(shell 内建命令的帮助)
        外部命令
            帮助
                --help
                man 
                    /usr/share/man
                    压缩格式的文件，有章节之分，如/usr/share/man 下的man1/,man2/
                        就好像 vim 的帮助文件 :help user-manual
                        **1. 用户命令**
                        2. 系统调用 ls /usr/share/man/man1/
                        3. c库调用
                        4. 设备文件及特殊文件
                        **5. 文件格式：（配置文件格式）**
                        6. 游戏使用帮助
                        7. 杂项
                        8. 管理工具及守护进程
                        并非每个command在所有章节都有手册
                        man 5 passwd
                
                        查看有哪些章节的帮助
                            whatis COMMAND
                            updatedb
                        翻屏
                            空格   b
                            ctrl d   /  ctrl u
                            j k
                        man手册可以放在任意位置，如不在/usr/share/man下则找不到，可以自己制定
                            man -M 路径
                        
                info COMMAND
                    在线文档
                很多应用程序自带帮助文档 /usr/share/doc/
                    README
                    INSTALL
                    CHANGES
                主流发行版官方文档
    shell 是独特的程序，负责解析用户提供的命令
        环境变量
            PATH:从那些路径中查找用户键入的命令对应的命令文件
        shell自带的命令

    **查看命令类型：type**
        1. 内部的话 就是 build-in
        1. 并显示绝对路径

    选项有2中形式
        1. 短选型
            有些没有 -
            可以合并
        1. 长选项


    cd -
        $PWD
        $OLDPWD
		
    ls 
        -A 不显示 ./ ../
        文件类型
            -: regular file,其他程序会用 f 来表示
            d: 目录
            b: block devices 块设备文件
            c: character device 字符设备文件
                主设备号，标识设备类型，进而确定要加载的驱动程序
                次设备号, 标识同一类型中的不同设备
            l: 软链接
            s: socket套接字文件, 两个进程进行通信的文件
            p: pipe管道
        
		-rw-rw-r-- 1 bill bill 2.7K Aug 17 15:26 font.md
            1:硬链接数
            2.7k 文件大小, 一般是byte格式的,不是的话加 -h 选项
                可能丢失精度
            文件最后一次被修改的时间
        -d 看basename 为目录的目录自身的信息
        -r 逆序
        -R 递归
		
    cat(concatenate 美[kɑnˈkæt(ə)ˌneɪt] 把 （一系列事件、事情等）联系起来)
        不要查看二进制文件，有可能损坏二进制文件
        -S 每行末尾显示$
    tac
        同cat, 只是内容是逆序的
    file
        
    echo 
        -n 执行完成后，不换行
        -e 让转移符生效  \n \r
        在shell 中，STRING 可以使用引号，单引号，双引号均可以
            单引号:强引用，变量引用不执行替换
            双引号:弱引用，变量引用执行替换
            命令引用`` 或者()
        注意：变量引用的正规符号
            ${PWD}
    shutdown 
        -k 逗你玩 kidding
        -c //取消
    
	wall
        send message to everyone
    
    date
        查看 系统时钟
        设置
            [+format] 
                date +%Y.%m.%d
                date '+%Y %m %d'
            **%F   full date    %Y-%m-%d**
            %s  timestamp 1970年1月1日0点0分
            %S  seconds
            [MMDDhhmm[[CC]YY][.ss]]
            月日时分年.秒
    clock(软链接)
        硬件时钟（Ubuntu没有)
		
    hwclock(我的Ubuntu mate 说不能获取)
        hardware clock
        系统启动是从硬件读取日期和时间信息，之后就不再与硬件相关联
        -s --hctosys
        -w --systohc
        hwclock -w
		
    cal(calendar)
        cal 2018
        cal 12 2018
    
	w(who)


## Linux 文件系统
glibc:linux 的标准c库，gnu lib c
编译方式
    静态编译
        将库同软件一同编译到一起
    动态编译
        仅编译软件，不编译库


进程
    与终端相关: 通过终端启动
    与终端无关: 操作引导启动过程当中自动启动
操作系统的组成
    静态：kernel, 库等程序
    动态：
FHS(filesystem hierarchy standard) 文件系统层次标准
    * 有每个路径的结构，作用等的规范
    * 可选的话就可以挂在到别的硬盘

    1. /bin :essential user command binaries
    1. /sbin: system binarys
    1. /boot : static files of the boot loader, kernel, initramfs(initrd),grub
    1. /dev : device files or special files (例如虚拟出来的)
        1. 字符设备, 如屏幕,一个一个字符。       叫线性设备，有时序（先后顺序)
        1. 块设备, 把字符打包,硬盘,一块区域全是。叫随机设备，任意访问任意数据. 随机访问存储器
    1. /etc host-specific system configuration 系统程序的配置文件(只能为静态static)
        1. opt  configuration for /opt
        1. x11  可选optional
        1. sgml 可选
        1. xml 可选
    1. /home    可选
    1. /root    可选
    1. /lib     essential shared libraries and kernel modules, /bin /sbin 会用到的
          微系统启动或应用程序提供共享库, 以及为内核提供内核模块
        1. libc.so.* :  the dynamically-linked c library
        1. ld* : 运行时链接器/加载器
        1. /modules : 用于存储内核模块的目录
        /lib64 : 64bit 特有的
    1. /media
        1. for removeable media
    1. /mnt
        1. 临时挂载点
    1. /opt 
        1. add-on application software packages **第三方 非关键性 程序安装位置**
    1. /srv   data for services povided by this system
        1. 一般用不到
    1. /tmp   temporary files
    1. /usr     
        1. the second major section of the filesystem
        1. sharable , ready-only data
            1. /bin
            1. /sbin
            1. /include     c头文件
            1. /lib
            1. /lib64 (32bit 可选)
            1. /share 命令自带文档，命令手册
            1. X11r6 x-window 程序的安装位置
            1. /local 另一个层级结构
                1. 现在用来安装第三方软件,一个命令可能系统有，版本低，但是不能替换，就放到/usr/local中
                1. etc
                1. include
                1. lib 
                ...
    1. /var variable data files
        1. cache
        1. log
    1. **/proc **
        1. kernel and process information virtual filesystem 内核，进程虚拟文件系统
        1. 内核，进程 运行时相关信息,内核参数,抽象为了文件格式  net.ipv4.ip_forward  虚拟为 net/ipv4/ip_forward
    1. /sys
        1. /proc 的升级版. 比proc 更为理想的访问内核数据的途径
        1. 为管理设备提供了统一的接口


**要运行原命令 : \ls**

which  --skip-alias 忽略别名
\which ls    是没有别名的

who -b 系统最近一次的启动时间
    -u 谁登录了，
    -r 运行级别
	
w who的增强版，显示他们在做什么

$HISTSIZE
$HISTFILE 持久保存命令历史的文件
    ~/.bash_history
    登出时，才会保存进 这个文件
history 内存中的
$HISTFILESIZE (要切换到bash,zsh没有)

history -c 清空命令历史(内存中的)
        -w 

!3 执行历史列表中第3条命令
!STRING  历史命令列表中最近一个以STRING开头的命令
$HISTCONTROL
    ignoreups 忽略重复的命令
    ignorespace 忽略以空格开始的命令
    ignoreboth 以上两者同时生效

mkdir -v 查看创建过程，通常配合 -p

rmdir 删除空目录

rmdir -p /tmp/m/n/p   删除p后，n 下没有文件，则继续删除n, n空了，继续删除m,...

**mkdir /tmp/{a,b}  -> /tmp/a, /tmp/b**
    mkdir -pv /tmp/x/{y1/{a,b},y2}
        x/y1
        x/y1/a
        x/y1/b
        x/y2

tree -L [number]    显示的层级

bash 的执行结果状态结果  存于 $? 中
    0:成功
    非0(1,255):错误
    最近一次的命令

ls 的结果是 命令返回值

引用命令的**执行结果**, 变量引用 1. $(COMMAND) 命令替换符
    1. `COMMAND`

文件查看  
    cat
    tac
    head
    tail 
        -f --follow
    more
    less
    stat <file> 
        文件的状态,文件名，大小，块，
        最近访问(access)时间，cat 也是
        最近更改(modify)时间，数据改变
        最近改动(change)时间, 元数据改变
            数据改变，元数据一定改变
            atime mtime ctime 时间可以改变
            touch 这个文件  3个全改  touch 原来是用来修改时间戳的
                -c --no-create 制定文件不存在时，不创建
                -a 仅 access time  touch -a <file>
                -m 仅 modify time
                change 没有独立的,
                -t 自己制定时间
                    [[CC]YY]MMDDhhmm[.ss]


**文件: 有两类数据**
    1. 元数据: metadata 例如书的前言，描述的是书的属性
    1. 数据: data   书的正文部分

cat 得到的是 data
stat 得到的是 元数据


cp 是复制数据，而不是元数据
    目标是非目录，则覆盖
    目标是目录，则创建文件，并写入数据
    多源复制 目标只能是目录
    -i --interactive
    -f --force
    -r,-R 递归
    -d 如果是符号链接，复制软链接 --preserve=
    如果是符号链接,将真实文件复制
    -a : -dR --preserve=all    用于实现归档 保留所有属性
    --preserve=
        mode 权限   
        ownership 属主和属组
        timestamps 时间戳
        all 所有属性
    

变量
    字符型
    数值型
        精确数值型
        近似数值型

bash正则表达式 基础特性
    globbing: 文件名通配(整体文件名匹配，而非部分)
    1. * 匹配任意长度的任意字符
        1. pa*, *pa*, *p*a*
    1. ? 匹配任意单个字符(1个)
        1. pa(false),paa(true),passwd(false)
    1. []范围内的任意单个字符，[a-z],[A-Z],[0-9],[a-z0-9]   **[]里边不区分大小写**
        1. [adfd]
    1. [[:upper:]] 大写字母, [:upper] 字符集合
        1. [[:upper:]][0-9]a
    1. [[:lower:]]
        1. 小写
    1. [[:alpha:]] 所有字母
    1. [[:digit:]] 所有数字
    1. [[:alpha:] [:digit:]]    
        ** [[:alnum:]]   字母和数字**
    1. [[:punct:]]  所有标点符号
    1. [[:space:]]   空白字符

    1. [^[:upper:]]  同regexp
        1. [^[:alpha:]]
    1. 练习
        1. /var 目录，以l开头，一个小写字母结尾，且中间出现一位任意字符的文件或目录
            * ls -d /var/l?[[:lower:]]
        1. /etc 目录下，以任意数字开头，且以非数字结尾的文件或目录
            * ls -d /etc/[0-9]*[^0-9]
        1. /etc 目录下，以非字母开头，后面跟一个字母及其他任意长度任意字符的文件或目录
            * ls /etc/[^a-z][a-z]*


        ls -d 不影响文件，只是对目录有影响

IO 重定向及管道
    1. 标准输入 stdin   键盘    0
    1. 标准输出 stdout  显示器  1
    1. 错误输出 stderr  显示器  2

    覆盖输出
    cat a.txt > /dev/tty1 
    cat a.txt > /dev/sdb1   非常危险
    
    cat a.txt 2> b.txt

    特殊设备 ： **/dev/null 黑洞啊**
    ls /var &> /dev/null
    echo $?

set 设置或撤销shell参数
    set -C 禁止覆盖输出重定向到已存在的文件(如果目标文件存在的话)
    cat a.txt >| b.txt    >|  强制覆盖输出
    set +C  关闭

    &>
        合并输出, 不论正确还是失败的

    tr translate or delete characters
        tr [option] ... set1 [set2]
        凡是在set1定义范围内出现的，换成set2中对应的字符
        tr [a-z][A-Z] <C>

    cat << EOF
    >what
    >are
    >you
     EOF

    cat > /PATH/TO/FILE << EOF
    >...
    > EOF

PPA:personal package archive[ˈɑ:kaɪv] 档案文件; 档案室


## shell
解释性的语言
1. echo $SHELL
1. cat /etc/shells
    1. Bourne shell :/bin/sh
    1. C shell: /bin/csh
        与C语言语法相近
    1. Korn shell: /bin/ksh
    1. Bourne again shell: /bin/bash
    1. Tenex C shell: tcsh
    1. /usr/zsh
    1. tcsh 微型shell,在一些小型的系统里使用，如嵌入式

终端
    终端仿真器
        1. 比如terminator
    虚拟终端
        1. ctrl alt f1

Linux命令
内置命令：指的是构造在shell中的命令

字符含义
    1. \    :续行符,原是命令
    1. $    :变量置换符
    1. `    :命令置换，置换``中命令执行的结果
    1. "    :允许变量置换
    1. &    :后台执行符
    1. ()   :在子shell中执行命令
    1. {}   :在当前shell中执行命令

stdin(0) 标准输入
stdout(1) 标准输出
stderr(2) 标准错误输入
他们均是屏幕设备，
<改变输入源
>改变输出源
2>改变错误输入


$LANG 语言
$PS1,$PS2 命令提示符


logout 
    not logout shell
    ctrl alt f1-f6 使用logout命令，重新登录


info 在线文档都以info文件的形式存在，info是GUN的超文本帮助系统


mesg 从来设定允许或拒绝接受由其他用户发来的write通信信息
    mesg y
    mesg n


cal 
    -j 凯撒历
    -y 整年年历

bc basic calculator
    quit退出


sync
    通常是在关闭Linux时使用。
    应避免用简单的关闭电源的方法关闭系统，这是由于Linux 同其他Unix系统一样，在内存中缓存有数据，在关闭系统时需要进行内存数据与硬盘数据的同步校验，保证硬盘数据在关闭系统时是最近更新的内容。
    一般正常的关闭系统的过程是自动进行这些工作的，在系统运行过程中也会定时做这些工作，不需要用户干预。
    sync是强制把内存中的数据写回硬盘

whoami:我是谁
who:都有谁
w:都有谁，都在干什么


3中文件
    1. 普通文件
    1. 目录文件
    1. 设备文件

    -
    d 目录  
    b 块设备文件
    c 字符设备文件
    p 管道文件pipeline ['paɪplaɪn]
    l





### shell基本命令
1. su
    1. - :同时使用新用户的环境变量
1. mount/unmount
    1. 只能由root用户进行操作
    1. 不能在挂在目录下实施挂载或卸载操作??
    1. 一个目录只能挂载一个文件系统
    1. 挂载目录必须事先存在且不为空
1. ls
    1. -A : 不包括 . ..
    !1. -m : 文件名之间用逗号隔开显示在一行上
    1. -S : 按文件大小进行排序(sort)
    !1. -s : 每个目录所用的**块数(size),包括间接块**
        1. du -h 应该总是 >= ll -h

    !1. -c : 按文件的修改时间排序
    !1. -u : 按上次文件存取的时间
    !1. -t : 显示时按修改时间排序，修改时间取决于是否使用了 -t -c 选项

    !1. -lh: human readable (默认单位为字节)
1. mkdir 
    1. -p : 一次性创建多级目录
1. cp 
    1. -p : 保留权限模式和更改时间
    1. -i : 覆盖之前进行提示
    1. -r : 拷贝目录及其相应的子目录(就是用于拷贝文件夹)
    1. -b : 如果存在同名文件，覆盖前备份源文件    
        1. cp -ib a.txt A/  
            1. 是否覆盖，是；备份的文件更名为 文件名~
    1. -f : 强行覆盖
1. mv
    1. -b : 如果存在同名文件，覆盖前备份源文件    
    1. -f : 强行覆盖
1. less
    1. more 只能向后翻页
1. grep
    !1. grep te *
        1. 搜索出当前目录下所有**文件中**含有“te"字符串的行"

## 











#### 系统维护命令
1. uname
    1. -a : 所有信息
    1. -n : 网络节点名字
    1. -s : 内核名字

    1. -v : 只输出了内核的release日期。
    1. -r : 内核版本号
1. du(disk usage)
    1. -s : 只显示总计
    1. du现实的磁盘空间占用是以4096字节的块来表示的
    1. 块默认4096Byte

1. 查看文件系统块大小
    1. sudo /sbin/tune2fs -l /dev/sda1|grep "Block size" 
    1. 数值单位是字节
1. **答疑**
    1. du 不是显示文件大小,而是显示文件所占用的 block 大小，默认linux系统分区的 block size 是4k,也就是说即使文件只有1个字节，也会占用4k.
    1. ls -l则是文件的实际大小(字节为单位)
1. free
    1. 内存和Swap的使用情况
1. top
    1. 任务队列,是uptime的结果
    1. 2,3行是cpu信息,有多个cpu时，可能超过两行
    1. 最后两行是内存信息，是free的结果

1. w:目前登入系统的用户信息
    1. 相应的还有who,whoami




## 用户管理
1. /etc/passwd
    1. 用户名:密码:uid:gid:comment:主目录:shell
    1. rw-r--r--
        1. 用户名不能有冒号
        1. 密码只存一个象征性的 x 或 ※
        1. uid [0,65535]
            1. 0: root标识
            1. [0,99]系统保留
            1. 系统用户从100开始，到500
            1. 之后的是普通用户,不同衍生版本一般很不一样，不必纠结
            1. 可以用id命令查看
                1. id 用户名 或 id id号码
1. /etc/shadow
    1. 用户名:密码:上次修改密码时间:最小时间间隔:最大时间间隔:警告时间:(不活动时间)密码过期之后多少天禁用此用户:失效时间:保留字段
        1. 上次修改密码时间：1970.01.01算天数
        1. 最少间隔天数：0，表示禁用
        1. 最小时间间隔:指的是两次修改口令之间所需的最小天数。
        1. 最大时间间隔:指的是口令保持有效的最大天数。
        1. 警告时间:字段表示的是从系统开始警告用户到用户密码正式失效之间的天数。
        1. 不活动时间:表示的是用户没有登录活动但账号仍能保持有效的最大天数。
            1. **密码过期的恕限时间**：如果用户过了警告期限没有重新输入密码， 使得密码失效了，也就是说，你在‘必须变更密码的期限前，并没有变更你的密码！’ 那么该组密码就称为‘失效的密码’啰～怎么办？没关系，还有这个栏位的天数设计啊～ 意思就是说，当密码失效后，你还可以用这个密码在 n 天内进行登入的意思。 而如果在这个天数后还是没有变更密码，呵呵！那么您的帐号就失效了！无法登入！
        1. 失效时间:字段给出的是一个绝对的天数，如果使用了这个字段，那么就给出相应账号的生存期。期满后，该账号就不再是一个合法的账号，也就不能再用来登录了。
    1. rw-r-----

1. /etc/group
    1. 组名称:组密码:GID:组成员列表
        1. 用户列表用逗号分开
        1. 为空表示为GID的全部用户

1. /etc/gshadow
    1. 组名称:组密码:用户组管理者:组成员

### 增 useradd 
1. -c : comment
1. -d : --home-dir,指定主目录,不存在，配合-m 会进行创建
1. -m :--create-home
1. -g : 用户组名或组id 也就是说可以是一个新的喽？
1. -G : 用户所属的附加组，逗号隔开
1. -s : shell
1. -o : --non-unique,可以重复uid
1. -u : uid,唯一且大于499
1. -p : 密码，此处的密码是经md5加密后的密文，所以用的不多

useradd -d /tmp/tom -m tom
useradd -s /bin/sh -g group -G adm,root gem

cdmgGsoup

### 删 userdel
1. -r 同时删除主目录
userdel -r tom

### 改 usermod
1. usermod -l 新用户名 旧用户名
    --login NEW_LOGIN  (貌似普通用户可以这样给自己修改登录名)

1. 临时禁止用户登录（锁定）
    1. usermod -L 用户名
    1. shadow 文件的密码字段前加"!"来实现
1. 解锁账户
    1. usermod -U 用户名

1. 加入到其他组 --append
    1. usermod -a 用户名 -g 组名或GID???
        usermod -a tom -g admin 
1. 修改shell
    1. -s
        usermod -s /bin/bash tom
1. 主目录
    1. -d
        usermod -d /home/z tom
1. 修改所属组
    1. -g

aglLU


### 查看
1. id [用户]
1. groups [用户]

### 密码管理
passwd [选项] 用户名

1. 下次登录时修改密码?help里没有啊
    1. -f
    passwd -f tom
1. 删除密码
    1. -d
    passwd -d tom
1. passwd
    1. 修改自己的密码
    1. root 可以passwd 用户名






## samba
NETBIOS(Network Basic input/output system),通过netbios获得计算机名称，然后把计算机名解析成ip地址

sudo apt install samba

service smbd start
/etc/init.d/smbd start

开机启动
chkconfig 我这没有


查看端口连接情况
netstat -antpu | grep smbd


如何访问
smbclient -L ip地址
    1. -L, --list=HOST                           Get a list of shares available on a host

win+r:\\ip地址


## 配置
1. /etc/samba/smb.conf,指定共享目录，并为共享目录设置共享权限
1. 在smb.conf中指定日志文件名和路径
1. 共享目录的本地权限 和 samba共享权限
1. 重新加载配置文件 或重启samb,使配置生效



1. 注释
    1. 分号一般是配置项
    1. 井号一般是说明信息

1. global settings
    1. = 左右要有space
    1. workgroup = WORKGROUP 工作组或域名
    1. server string =    描述信息
    1. security = user 安全模式,用户身份验证
        1. 这个在4.7版本中废弃了
            1. security = share在新版中已经被废弃了
        1. server
        1. domain
        1. ad
        1. share 匿名共享

1. share definitions 定义共享设置项
    1. 默认共享了[homes],[printers]
    1. [共享名称] 不能重复
        1. comment 自定义描述信息
        1. path = 绝对路径
        1. browseable = yes  是否允许别人查看此共享内容，如果否，只可通过绝对路径查看
        1. public = yes 允许匿名查看
        1. 权限
            1. valid users = 用户名,
            1. valid users = @组名,
            1. readonly = yes  
            1. writable = yes
            1. write list = 用户名1,用户名2
            1. write list = @组

1. logging option
    1. 日志文件
        1. log file = /var/log/samba/
    1. max log size = 50

1. 重载
service smbd restart




### 案例
mkdir ~/share
/global
    workgroup = WORKGROUP
    security = share
/share definition
    [共享名]
        comment = 描述信息
        path = /home/bill/share
        public = yes
    




security = user
密码文件位置
    pasdb backend = smbpasswd 
    smb passwd file = /etc/samba/smbpasswd
        如果不写这个的话，密码存到哪里去了呢？
重启服务
    就有了smbpaswd文件了
添加用户和组
    groupadd xsb
    useradd -g xsb  xsb01
    useradd -g xsb  xsb02
添加对应的samba账户
    smbpasswd -a xsb01
    smbpasswd -a xsb02


### 知识
1. samba账户必须和一个系统账户相关联

1. https://zhidao.baidu.com/question/275235679.html
    1. samba自己并不创建账号的，必须使用已经存在的用户账号
    1. 你可以创建系统用户，但是改用户是不可以登陆的那种账号，这样这个账号就不能直接登你机器了，然后再加到samba用户里面就好了呀

1. https://zhidao.baidu.com/question/626502471299959404.html
    1. samba可以使用系统用户（单独设置密码），搭建好samba服务器后，如果想单独建立samba用户，采用账号映射的方式

1. 安全账户管理sam   passdb backend
    1. https://www.cnblogs.com/jary-wang/archive/2013/05/21/3091343.html

1. --daemon ['diːmən] 守护进程；后台进程
1. --foreground
1. --log-stdout
    to log to standard output rather than a file
1. --interactive
1. --debuglevel=level
    1. level [0,10], 0 default
    1. the higher this value, the more detail will be logged to the log files about the activities of the server



1. filespace 文件空间

1. SMB or CIFS protocol 
1. LanManager protocol

1. mandatory ['mændət(ə)rɪ] 强制的，命令的
1. parameter n. 参数；系数；参量
1. detach 分离




## 网络服务器
tomcat
    1. apache 的一个组件
    1. java


## DNS
bind






## 启动项
vi /etc/default/grub


## iptables
1. 作用
    1. 一个过滤器 netfilter
    1. 数据分类，白的，黑的，灰的等等
1. 原理
    1. 物理上，网络边界,作为一个网络海关的角色
    1. 获取数据
    1. 识别
        1. 协议头，具体内容等
    1. 过滤
        1. 丢弃
        1. 修改
        1. 放过
        1. 记录日志等
1. 防火墙的日志是 IDS, IPS等高级安全设备的基础

1. Netfilter 是linux内核的功能，很多基于Linux内核的安全设备都是使用Netfilter做的底层工作

prerouting 路由之前
postrouting 路由之后
netfilter网络控制点


iptables
-t
    nat
    filter
        1. -A
        1. -D
        1. -E
        1. -F
        1. -I
        1. -L
        1. -N
        1. -P
        1. -R
            
    mangle


### 金枪鱼之夜
https://www.bilibili.com/video/av9105368?from=search&seid=2386896615551522767
https://www.bilibili.com/video/av9248095?from=search&seid=2386896615551522767

node:一个ip节点
router:可转发
host:不可转发的node
link:一个局域网

那5个钩子 在iptables 叫chain, 是预定义的，所以也可以由自定义的
每个chain有多条规则
drop / accept
默认是 filter表
iptables -p FORWARD DROP

加
    iptables -A [匹配] [动作]
        没有匹配，则全匹配
        没有动作，可以做流量统计
    匹配：都是 & 的关系
        -i:input
        -o:output
        -s:source
        -d:destination
        -p:protocol
        不是所有的chain都有上述5个匹配
    动作
        -j:jump
            ACCEPT
            DROP
        --goto [chain]
            

删
    iptables -D

改
    加一条规则 -I    
查
    -C 
    -L
    -v

自定义chain 用-N, 通常用作动作
    return
    自定义的chain是没有自定义动作

man iptables
5个表，3个较为常用
filter
nav
mangel
nav
security


iptables-extensions
    -m 
    否定

    是有状态的，而iptables是无状态的

### 兄弟连
https://www.bilibili.com/video/av7911478/?p=3

网络或主机边缘

位置
    网络防火墙一般叫做硬件防火墙
    主机防火墙一般叫做软件防火墙

原理
    包过滤防火墙
        1. 源地址目的地址
    应用层防火墙
        1. url过滤
特点
    内核态防火墙
        1. netfilter
        1 位于内核中，用户直接控制不了
    用户态防火墙
        1. iptables
        1. 一个控制netfilter的工具

规则
    默认规则
        1. DROP 关闭 堵
        1. ACCEPT 开放 
    自定义规则
        匹配
            1. IP头部
                源地址、目的地址
            1. TCP头部
                源端口、目的端口
            1. UDP头部 
                源端口、目的端口
        动作

    数据过滤
        1. 数据走向
            外走内
            内走外
            本地负责转发
        1. 规则
            1. 规则要放到正确的位置
            1. 多条规则的执行自上而下
                1. 匹配就停止
            
            1. foreward 转发
        1. 规则表(防火墙规则链)
            1. raw
                1. 状态跟踪
                1. 规则列
                    1. prerouting
                    1. output
            1. mangle
                1. 标记
                    1. 如 ttl+1
                1. 规则列
                    1. 所有的
            1. **nat**
                1. 地址转换，
                1. 规则列
                    output
                    prerouting
                    postrouting
            1. **filter**
                1. 规则列
                    input
                    output
                    forward

防火墙规则
    iptables -t 表名 选项(增删改） 链名  匹配 -j  动作

        1. 默认表名 filter
        1. 默认链名 所有链
        1. 选项 链名 动作 必须大写

        iptables -t filter -L INPUT


选项
    A:添加规则,默认放在最后一行
    I:添加规则,默认放在第一行

    F:清空规则
    D:删除一条规则
    P:默认规则 DROP/ACCEPT
        DROP会发送通知
    X:清空自定义链
    
    L:查看规则

匹配
    通用匹配
        可以直接使用，不依赖其他条件或扩展
        包括网络协议、ip地址
        协议匹配
            -p 协议名
            -p !协议名  (取反)
        地址匹配
            -s 源地址
            -d 目的地址
        接口匹配
            -i 入站网卡
            -o 出站网卡
    隐含匹配
        要求以特定的协议匹配 作为前提
        包括端口、icmp类型等条件
        端口匹配
            --sport 源端口
            --dport 目的端口
                20:21 [20,21]端口
        ICMP类型匹配
            --icmp-type ICMP类型 
            8 echo-request
            3 destination-unreachable
            0 echo-reply
    显式匹配
        需要扩展模块 iptables-extensions
        多端口匹配
            iptables -A INPUT -m multiport -p tcp --deport 50,100:120 ACCEPT
        IP范围匹配
            -m iprange --src-range IP范围
            iptables -A FORWARD -p tcp -m iprange --src-range 192.168.1.10-192.168.1.20 ACCEPT




动作
    ACCEPT
    DROP
    REJECT
    LOG:
    SNAT:NAT 源地址转换
    DNAT:NAT 目的地址转换
    REDIRECT



## 网络
resolver    英[rɪ'zɒlvə] 解析器
http://www.t086.com/article/5219

查看dns
    dig
    nslookup

查看域名ip
    host 域名

配置本机DNS
    vim /etc/resolv.conf
        nameserver 223.5.5.5
        nameserver 223.6.6.6
        nameserver 8.8.8.8
        nameserver 8.8.4.4
    这时候dns修改成功，保存不用重启网络，即使生效
    nslookup www.z.cn 查看是否成功

### CNAME 和 A记录
CNAME记录
    别名记录。这种记录允许您将多个名字映射到同一台计算机。 通常用于同时提供WWW和MAIL服务的计算机。例如，有一台计算机名为“host.mydomain.com”（A记录）。 它同时提供WWW和MAIL服务，为了便于用户访问服务。可以为该计算机设置两个别名（CNAME）：WWW和MAIL。
    
    CNAME记录www和@是为了 www.example.com 和 example.com 都能访问到你的页面

    购买的域名是不带 www 的

    canonical   英[kəˈnɒnɪkl] 权威的； nslookup www.baidu.com c 应该是 canonical的缩写
    https://blog.csdn.net/zcmuczx/article/details/79389238

    关于百度 a.shifen.com
    https://www.jianshu.com/p/8c318314f2f0 (不懂)

A记录
    A(address)记录是用来指定主机名（或域名）对应的IP地址记录。用户可以将该域名下的网站服务器指向到自己的web server上。同时也可以设置您域名的二级域名。

    A记录也有一些好处，例如可以在输入域名时不用输入WWW.来访问网站

http://blog.xieyc.com/differences-between-a-record-and-cname-record/


### 一级域名 二级域名 三级域名
https://www.cnblogs.com/ambon/articles/5631391.html


为什么我ping百度的时候，却显示正在ping www.a.shifen.com 

这是dns解析过程中，www.baidu.com作为cname记录（相当于别名），在dns服务器中配置了www.baidu.com到www.a.shifen.com的映射记录。而www.a.shifen.com是作为A（address）记录，映射到了真实的IP信息。

host www.baidu.com 发现 www.baidu.com is an alias for www.a.shifen.com.
既然这个别名指向的IP地址是和www.baidu.com指向的IP地址是一样的，那为什么进不了www.a.shifen.com这个网站
    因为域名指向的IP是一样的， 但是这个IP上的http服务，只绑定了域名www.baidu.com，当你用其他域名访问它的80端口，会在应用层被重置。我们可以用telnet命令连接到网站，发送请求获取内容来试一下。如果输入的host是www.a.shifen.com，直接就连接被主机关闭了。没有返回任何数据


    ICANN（The Internet Corporation公司，法人，团体  for Assigned Names and Numbers）互联网名称与数字地址分配机构是一个非营利性的国际组织，



## 常用端口号
20 21  ftp
22  ssh
23  telnet
3389    mstsc
53  dns
110 pop3    995
143 imap    993
25  smtp    465
80  http
443 https
3306    mysql   



## 
切换到root
    sudo su 

切换到家目录
    cd 


## vpn
openvpn
easy-rsa
openssh-server


raspberry mac-address
B8:27:EB:BB:64:68




## compress
tar -c
    -tvf    (list)
    -x
    
    -z:gzip
    -j:bunzip2

    -C 更改目录
        tar -zxvf a.tar.gz -C ./test/

### 针对单个文件
1. gzip
    gzip 文件
1. bzip2
    bzip2 文件
1. xz
    xz 文件

-c 均可换成 --stdout 
    gzip -k a.txt -c > ./test/a.txt.tar.gz
    bzip2 -k a.txt -c > ./test/a.txt.bz2
    xz -k a.txt -c > ./test/a.txt.xz

    gzip -k a.txt --stdout > ./test/a.txt.tar.gz
    bzip2 -k a.txt --stdout > ./test/a.txt.bz2
    xz -k a.txt --stdout > ./test/a.txt.xz
    
#### 解压缩
1. gunzip 文件
    -c --stdout
        gunzip -c a.gz>a.txt
            gunzip --stdout a.gz>a.txt
        gunzip -k -c a.gz>./test/a.txt

1. bunzip2 文件
    -c / --stdout
1. unxz 文件
    -c / --stdout

-k 保留源文件

### 针对文件和目录
1. zip 目标名 文件1 文件2 
    unzip 文件 -d 目标目录

1. zip -r 目标名.zip 目录
    没有-r 的话，目录里面的东西不会放到.zip文件中


1. **zip -d a.zip 待删除文件(从.zip文件中删除文件)**

1. **zip -m a.zip 待添加文件(向.zip文件中添加文件)**
     是 --move,而不是 copy


1. **unzip 文件 -d 目标目录**


## nibble 半字节
在计算机中，通常将9位二进制数成为字节，而把4位二进制数称为半字节

## Byte
8bit

## Word
3Byte 24bit
