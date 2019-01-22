-p- //所有端口

默认情况下，Nmap会发送一个ICMP回声请求和一个TCP报文到目标端口。也就是说默认是Ping扫描+TCP扫描喽？

TCP SYN scanning 是Nmap默认的扫描方式，通常被称作半开放扫描（Half-open scanning）

-p0 无ping扫描，通常用于防火墙禁止ping的情况下，默认情况下Nmap只对host up的主机进行高强度的探测，如端口扫描，版本探测或者操作系统探测
    可以躲避某些防火墙的防护
    -p0 协议
        如果想知道这些协议是如何判断目标主机是否存活可以使用 --packet-trace选项
        1 ICMP (既然-p0是无ping扫描，这里怎么又出来了一个ICMP呢???)
        2 IGMP Internet 组管理协议
        6 TCP
        17 UDP

-PS 设置了SYN标志位的空TCP报文，默认目标端口是80(可以改变nmap.h文件中的DEFAULT-TCP-PROBE-PORT值进行配置)
    -PS22,23,25,80,115,3306,3389   //每个端口会被并发的扫描
    当防火墙阻止了默认的扫描行为时(TCP SYN不就是默认吗)，可以使用TCP SYN Ping 扫描来进行目标主机存活判断
    
    通过 SYN/ACK 和RST相应来对目标主机进行存活判断，但在特定情况下防火墙会丢弃RST包，这种情况下扫描结果会不准确，这时，我们需要制定一个端口或端口范围来避免这种情况
    nmap -PS80,100-200 -v 192.168.1.1
    

-PA TCP ACK Ping 扫描，和 TCP SYN Ping 扫描非常类似，唯一的区别就是标志位是ACK而不是SYN，
    很多防火墙会封锁SYN报文，所以Nmap提供了 TCP SYN Ping 和 TCP ACK Ping 两种探测方式，这两种方式可以极大的提高通过防火墙的概率
    我们可以同时使用-PS 与 -PA来既发送SYN又发送ACK，
    在使用TCP ACK Ping扫描时，Nmap会发送一个ACK标志的TCP包给目标主机，如果目标主机不存活则不响应该请求，如果目标主机在线则会返回一个RST包

    防火墙可以设置阻止SYN包，ACK包？那还怎么提供TCP服务?

-PU 发送一个空的UDP报文到制定端口，默认是40125，可以在nmap.h中的DEFAULT-UDP-PROBE-PORT修改,这么个大端口，因为一般不会用到这个端口
    如果主机响应则返回一个ICMP端口不可达错误
    如果不存活则返回各种ICMP错误信息

ICMP Ping types扫描
-PE;-PP;-PM
    Nmap发送一个ICMP type8(回声请求)报文到目标IP地址，从运行的主机得到一个type0(回声响应)报文
    -PE 简单的向目标主机发送 ICMP echo 数据报来探测主机是否在线，
    -PP ICMP时间戳Ping扫描，虽然大多数防火墙配置不允许ICMP echo 请求，但是由于配置不当可能回复ICMP时间戳请求
    -PM ICMP地址掩码Ping扫描, 通常有不错的穿透防火墙效果

-PR ARP Ping扫描
    通常在扫描局域网时使用
    在本地局域网中防火墙不会进制ARP请求

-sL 列表扫描是主机发现的退化形式，仅仅列出网络上的每台主机，不发送任何报文到目标主机,
    默认情况下，Nmap仍然对主机进行反向域名解析以获取他们的名字
    那是如何列出主机的呢？（不发送任何报文)

-n 禁止**反向域名解析**
    1. 如果对一台有域名绑定的服务器通常不会使用该选项
    1. 如果是单纯扫描一段ip，为了加快速度，会使用

--system-dns 系统域名解析器
    1. 默认情况下，Nmap使用主机上配置的域名服务器来解析域名

-PY
    SCTP(Stream CTP 流控制传输协议) TCP的改进，通过向目标发送INIT包，进行存活判断


----
filtered(被过滤的)意味着防火墙，过滤器或者其他网络障碍阻止了该端口被访问，Nmap无法得知它是Open(开放的)还是Closed(关闭的)

Closed(关闭的)端口上面没有应用程序监听，但是他们随时可能开放

/usr/share/nmap/scripts

Nmap提供了6个端口状态
1. Open 对外为开放状态
1. Closed 也可能是被欺骗,
1. Filtered 不一定是被专业的设备过滤了，也许是因为网络堵塞造成的
1. Unfiltered 意味着端口可以访问，但是不能判断处于开放状态还是关闭状态?
    关闭的端口也可以接收Nmap发出去的探测报文,使用ACK扫描时才会呈现出这种状态?
1. Open|Filtered
    1. 可以使用SYN扫描（-sS）SYN扫描可以很明确的区分出端口的开放状态，
        1. 发送SYN
            1. 如果收到RST则表名无法连接目标主机,即目标主机端口关闭
            1. 如果目标主机端口是开放的，目标主机会响应一个SYN/ACK包，Nmap向目标主机发送一个RST替代ACK包，连接结束
1. Closed|Filtered
    只可能出现在IPID Idle扫描中


-T
    慢的扫描多用于IDS逃避，一般用-T4
    一般配合-F

    nmap-services 包含了默认扫描的端口

--port-ratio
    和--top-ports 较为相似，只是这里的参数作为频率来使用,具体值在nmap-services文件中


-sT 全链接扫描
-sS 隐蔽扫描
    SYN扫描不能用时，会使用默认的TCP扫描
        1. SYN
        1. SYNACK
        1. FIN(这一个完全没必要啊)

    -sS 配合 -sA 模拟服务器向外部请求服务，攻击端回应服务器,貌似穿透性更强
-sA

-sU
    非常慢,所以常常-p
    发送空的UDP报文
    如果返回ICMP端口不可达错误 就可以认定该端口是关闭的，其他的就可以被认定是被过滤的
    如果得到正确的响应,则判断目标端口是开放状态


隐蔽扫描
-sN,-sF,-sX
    -sN Null扫描，若主机相应端口是关闭的，会响应一个RST数据报
    若目标端口是开放的则不会相应任何信息
-sF Fin扫描
    如果收到目标响应的RST包，则说明目标端口是开放的,
    否则如果没有收到RST包说明目标端口是关闭的
-sX Xmas圣诞树扫描
    FIN,PSH,URG 打开，标志为1
    如果目标主机端口是开放的则会相应一个RST标志包


-sA ???page 70
    TCP ACK 扫描有一个知名缺点，他不能确定端口是否是开放的还是被过滤的
    当扫描未被过滤的系统时，open(开放的) 和 closed（关闭的）端口都会返回RST报文
    当Nmap把它们标记为unfiltered(未被过滤的),意思是ACK报文不能到达，至于它们是open还是closed,无法确定

    

-sW TCP窗口扫描

-sM Maimon扫描,(它的发现者 Uriel Maimon命名的)
    探测报文是FIN/ACK

-sI 空闲扫描
    Nmap高级用法，允许进行端口完全欺骗扫描。
    可以使攻击者不使用自己的IP向目标主机发送数据包，可以利用不活跃的僵尸主机反弹给攻击者一个旁通信道，从而进行端口扫描。IDS会把不活跃的僵尸主机当做攻击者。

    nmap -sI www.0day.com:80 192.168.126.131
        www.0day.com:80 僵尸主机的80端口
    需要注意的是选择的端口必须不能被自己的Nmap主机或目标主机过滤掉并且改端口必须为开放的,我们可以事先对僵尸主机进行端口扫描

-O 
    在使用-O参数的同时，可以搭配使用-A参数以达到更好的效果
 
--osscan-limit
    只对满足“具有打开和关闭的端口”条件的主机进行操作系统检测，以节约时间
    仅在使用-O | -A 时起作用

--osscan-guess | --fuzzy
    推测系统并识别

## 小知识
FingerPrinting
    因为身份的不确定性是互联网反欺诈分子的根本支撑，在无法识别操作用户的情况下，可以从设备着手，识别可疑上网设备，及时对高风险的设备及相关操作做出反应，即可控制风险降低损失。

IDS Intrusion Detection Systems 入侵检测系统
    依照一定的安全策略，通过软硬件，对网络、系统的运行状况进行监视，尽可能发现各种攻击企图、攻击行为或者攻击结果，以保证网络系统 资源的机密性、完整性和可用性。

    防火墙像是一幢大楼的门锁，IDS就像这幢大楼的监视系统

    IDS分为
        实时入侵检测系统
        事后入侵检测系统:由具有网络安全专业知识的 网络管理人员定期或不定期进行的，不具有实时性。


## 例子
### TCP
sudo nmap -sS -sA 192.168.1.1

You specified more than one type of TCP scan.  Please choose only one of -sA, -b, -sT, -sF, -sI, -sM, -sN, -sS, -sW, and -sX

nmap --scanflags SYNACK 192.168.1.1 -p80 --reason










