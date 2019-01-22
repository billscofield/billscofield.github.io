## 端口基础
16bits

一般用到的是1到65535,其中0不使用,1-1023为系统端口,也叫BSD保留端口;

0-1023: Well-known ports(知名端口)系统端口,这些端口只有系统特许的进程才能使用;
1024-65535为用户端口,又分为: 临时端口(1024-5000)和服务器(非特权)端口(5001-65535).
    1024-5000: 临时端口,一般的应用程序使用1024到5000来进行通讯;
    5001-65535: 服务器(非特权)端口,用来给用户自定义端口.

## 端口号划分
1. well-known ports: [0,1023] 由ICANN指派和控制
1. register ports: [1024,49151],IANA不指派也不控制，但须注册
1. dynamic ports: [49152,65535],IANA不指派也不控制，无须注册

应用程序 →  应用进程 →  应用进程端口 → 服务

## 端口号配置
Linux中有限定端口的使用范围，如果我要为我的程序预留某些端口，那么我需要控制这个端口范围。
    /proc/sys/net/ipv4/ip_local_port_range定义了本地TCP/UDP的端口范围，
    可以在/etc/sysctl.conf里面定义net.ipv4.ip_local_port_range = 1024 65000

/proc/sys/net/ipv4/ip_local_port_range定义了本地tcp/udp的端口范围。可以理解为系统中的程序会选择这个范围内的端口来连接到目的端口

Sysctl是一个允许您改变正在运行中的Linux系统的接口。

配置文件中也许没有定于范围，那么可以在文件中加上
    ```
    #test 
    net.ipv4.ip_local_port_range =  
    32768 
    59000 
    ```
重新加载
    sysctl -p /etc/sysctl.conf 
再次查看，发现端口范围已经修改了
(http://www.it610.com/article/1670943.htm)


## 端口检测工具
### nmap(Network Mapper)
1. 功能
    1. 主机探测(host discovery):有时候也称为ping扫描,但比ping功能强大
    1. 版本检测:探测目标主机的网络服务，服务名称、版本号(amap在这个方面更强一些)
    1. 端口扫描:探测目标主机所有开放的端口
    1. 系统检测:主机的操作系统,设备的硬件特性
    1. 脚本扫描，支持探测脚本的编写:使用Nmap的脚本引擎（NSE）和Lua编程语言
        1. /usr/share/nmap/scripts/
        1. 脚本数据库 cat script.db
            1. discovery
            1. brute
            1. safe
            1. intrusive
            1. vlun
        
    1. 漏洞扫描

1. 更新脚本库
nmap --script-update

1. 帮助
    1. nmap.org/man/zh/
    1. drops.wooyun.org/tips/4333
    1. www.xuebuyuan.com/953530.html

nmap --script 脚本名称 参数
    whois
        namp --script whois-domain 目标1 目标2 ...
    nmap --script http-methods -p80,443 scanme.nmap.org
    http代理
        nmap --script http-open-proxy -p8080,80 <target>
    web应养成须的脆弱性检测,有目录列表，用户账户美剧，配置文件等
        nmap --script http-enmu -p80 <target>
    暴力破解http身份认证
        http-brute

### netstat
### lsof
### telnet
### netcat




## 常用端口号
67 DHCP服务器端端口
68 DHCP客户端端口
                    SSL
FTP传输     20 
FTP控制     21
TFTP        69  
Telent      23
SMTP        25          465
DNS         53
http        80
https       443
POP2        109
POP3        110         995
IMAP        143         993
mstsc       3389
Finger      79
MySQL       3306
MySQLServer 1433

QQ  8000(Server)  4000(client)

TFTP是Cisco公司开发的一个简单文件传输协议，类似于FTP
