华为公司
    早起和cisco的系统一模一样
3com公司
    有自己的系统


华为收购3com
3com后被hp收购
3com后被紫光收购

华为对代理商有要求，必须达到HCIE、HCNP的比例

HCIE好像通过了几千人

数通 RS

1. HCNA
1. HCNP
1. HCIE

可以不考NA 直接考NP(3500RMB左右)


VRP(Versatile Routing Platform) 操作系统 通用路由平台
    1. VRP1
    1. VRP2
    1. VRP3
    1. VRP5 目前主流
    1. VRP8

Console口
Mini USB(需要安装Mini USB驱动)

Serial
9600
8
1


eNSP(Enterprise Network Simulation Platform)

不区分直通线和交叉线




1. 用户视图
    1. <>尖括号
    1. 查看运行状态或其他参数
1. 系统视图
    1. 进入方式 system-view
    1. 方括号
    1. 退出方式 quit
    1. 配置设备的系统参数等
1. 接口视图
    1. 进入方式 interface 接口
    1. 退出方式 quit
    1. 退到用户视图 return(ctrl + z)
    1. 配置接口参数
1. 协议视图
    1. 配置路由协议



快捷命令
    ctrl + a    将光标移动到第一列
    ctrl + e    将光标移动到最后一列
    ctrl + c    停止当前命令的运行
    ctrl + z    回到用户视图，同return
    ctrl + ]    终止当前连接或切换连接(telnet)  ctrl+c不行？ 

display hotkey
    
tab命令补全
    d?

interface gigabitethernet x/y/z 
    第x台设备、第y板卡、第z端口
    我觉得x应该是这样的，因为设备可以级联
    
帮助系统
    1. d?
    1. display ?
    

## 常用命令
1. sysname 名字
    sys在用户视图下是system-view
    sys在系统视图下是sysname

1. display clock    //显示时钟
    1. clock ?
        clock timezone CST add 8
        clock datetime ?
        clock datetime 17:0:0 2017-01-01

    CST同时可以代表如下 4 个不同的时区：
        Central Standard Time (USA) UT-6:00
        Central Standard Time (Australia) UT+9:30
        **China Standard Time UT+8:00**
        Cuba Standard Time UT-4:00
        可见，CST可以同时表示美国，澳大利亚，中国，古巴四个国家的标准时间

    这个事件不应该是服务器同步的吗？

1. 标题信息 header
    用来设置用户登录设备时终端上显示的标题信息
    motd：登录终端界面前的欢迎信息。
    incoming：登录终端用户界面时的欢迎信息。
    login：登录验证时的欢迎信息。
    shell：进入用户视图时的欢迎信息。

    http://blog.sina.com.cn/s/blog_aafb158a0101iliv.html
    

    header login information 开始字符
        信息
    开始字符

    标题内容以第一个英文字符作为起始和结束符，输入结束符后，按<回车>键退出交互过程。

    display current-configuration 就能看到配置了


1. 用户等级     命令等级        名称
    0               0           访问级
    1           0 and 1         监控级
    2           0,1 and 2       配置级
    3-15        0,1,2 and 3     管理级

    command-privilege level 3 view user save
        把save命令等级改为3
        view: 指定可以执行后面指定的命令的命令行视图名称
    可使用"undo command-privilege view view command"恢复默认情况

缺省情况下，命令级别分为0～3级：
级别0即参观级，网络诊断工具命令（ping、tracert）、从本设备出发访问外部设备的命令（包括：Telnet 客户端、SSH）等。该级别命令不允许进行配置文件保存的操作。

1. 级别1即监控级，用于系统维护，包括display命令。该级别命令不允许进行配置文件保存的操作。
1. 级别2即配置级，可以使用业务配置命令，包括路由、各个网络层次的命令，向用户提供直接网络服务。
1. 级别3即管理级，用于系统基本运行的命令，对业务提供支撑作用，包括文件系统、FTP、TFTP、配置文件切换命令、备板控制命令、用户管理命令、命令级别设置命令、系统内部参数设置命令；用于业务故障诊断的debugging命令。

如果用户想要实现权限的精细管理，则可以将命令级别扩展到0～15级。
缺省情况下，可以将所有级别为2的命令提升到10级，级别为3的命令提升到15级。
4～9级和11～14级这些命令级别中没有命令行。
用户可以单独调整命令行到这些级别中，以实现权限的精细化管理。




1. 用户界面
    用户界面类型        编号
    Console             0
    VTY                 0-4

    system-view
    user-interface maximum-vty 15   //the default is 5 [0,4]

    console配置密码
    user-interface console 0 
    authentication-mode password 密码

    set authentication password 密码

    display current-configuration

    user privilege level 3

    空闲时间
        idle-timeout 
            idle-timeout 0  //永不超时
            
    screen-length

    历史命令
        display history-command //默认10条
        history-command max-size 20

    undo shutdown

    ip add 192.168.1.1 255.255.255.0
    ip add 192.168.1.1 24



    display ip interface brief



















