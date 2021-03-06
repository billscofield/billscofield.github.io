---
layout: post
title: 计算机网络
---

## 二进制
### 二进制取余法原理
**权位**

十进制数，有：万、千、百、十、个，各个位。
那么从一个数字中，比如 80486，
分离出来个位，应该先除以10，取出余数就是6(%)；
还要再分离出来十位数，应该再除以10，取出余数8；

二进制数，各个位是：8、4、2、个。
求其中每个位的数字，那就是“除二取余”

**借一当二**
**借一当八**
**借一当十**
**借一当十六**

binary
octonary 英['ɒktənərɪ] 八进制
decimal
hexadecimal 英[ˌheksəˈdesɪml]

15=2^4-1    四位二进制，最右侧是2^0,    故是 1111
    应该还是按照原来的想法来解释，所有位的和=(2^(n+1))-1 

### 乘法、除法
同10进制乘法

## 互联网的起源与发展
连接
1. http://jingji.cntv.cn/special/internetage/01/


美国军方ARPA net ☞  TCP/IP ☞  Internet

1. ARPA:(Advanced Research Projects Agency) 美国国防部(United States Department of Defense)高级研究计划署  1958年组建
    1. 作为对前苏联1957年10月5日(好像是美国时间)发射的Sputnik（第一颗人造地球卫星）的直接反应，以及由此导致的恐惧（潜在的军事用途），美国国防部组建了高级研究项目局（ARPA）大概1958年1月,办公地点就在五角大楼
    1. ARPA 资助了很多高科技项目

**The Defense Advanced Research Projects Agency (DARPA)** is an agency of the United States Department of Defense responsible for the development of emerging(浮现；摆脱；暴露) technologies for use by the military.

Originally known as the Advanced Research Projects Agency (ARPA), the agency was created in February 1958 by President Dwight D. Eisenhower in response to the Soviet(['səʊvɪət]) launching of Sputnik 1 in 1957.10.4.    

From 1958 to 1965, ARPA's emphasis centered on major national issues, including space, ballistic([bə'lɪstɪk] 弹道的) missile defense, and nuclear test detection([dɪ'tekʃ(ə)n]侦查，探测). During 1960, all of its civilian([sɪ'vɪlj(ə)n]民用的，平民) space programs were transferred to the **National Aeronautics([eərə'nɔːtɪks] 航空学) and Space Administration(行政机构) (NASA)** and the military space programs to the individual services

**The agency was renamed the Defense Advanced Research Projects Agency (DARPA) in 1972**, and during the early 1970s, it emphasized direct energy programs, information processing, and tactical technologies.

DARPA supported the evolution of the ARPANET (the first wide-area packet switching network)

**1966年春 罗伯特-泰勒(ARPA 信息技术处理办公室 Information Processing Techniques Office(IPTO)的第三任主任) 向ARPA署长 查尔斯-赫兹菲尔德 提出了ARPANET计划**
    罗伯特-泰勒 找到 拉里-罗伯茨(Larry Roberts, 前ARPANET项目负责人，互联网之父)
        1. 拉里•罗伯茨(Larry Roberts)负责开发一个名为APRAnet的网络程序，该程序能**将研究机构的电脑相互连通**。
1969年11月，ARPA 开始建立一个命名为ARPAnet的网络，最初只有4个结点，正式运行

 
每一个点都是重要的，每一个点都是不重要的,所有的你都让我变得更强，所有的我都让你变得更有效

1983年1月1日 TCP/IP

蒂姆-伯纳斯-李(Tim Berners-Lee) 发明了 http 并命名 world wide web
    1989年12月，蒂姆为他的发明正式定名为World Wide Web，即我们熟悉的WWW；
    1991年5月WWW在 Internet上首次露面，立即引起轰动，获得了极大的成功被广泛推广应用。
    2012年伦敦奥运会开幕式，THIS IS FOR EVERYONE


凯文-凯利
    《失控》《必然》《科技想要什么》

万尼瓦尔-布什(参与了第一颗原子弹和第一台计算机)
    1945 年就提出 了记忆延伸的概念,展望了关于信息检索、网络建设的可能前景。 

保罗·巴兰 带来了能够网罗地球的一张“渔网”。（注：保罗·巴兰提出“分布式通信系统”理论）

伦纳德·克兰罗克：提出“分组交换”理论
为了减轻节点计算机的压力，他们设计了专门的机器来分配数据，这就是路由器的前身。
1969年10月29日晚上10点30分，克兰罗克和助手在洛杉矶 同500公里之外的斯坦福研究所，发送一个包含5个字母的单词LOGIN, 只传送了LO，传输G时死机了
    第一条互联网上出现的信息是“L”和“O”,lo(看，瞧;)

罗伯特-卡恩 和 温顿-瑟夫(Vinton Cerf)：TCP/IP协议的起草者
    位于伯克利的研究者以一种新的编程接口（称之为socket）重写了TCP/IP，并且同时在此基础上写了很多应用软件、工具和管理程序来显示socket实现的方便性。


1969年最初的ARPANET只有4个节点，1973年，阿帕网跨越大西洋利用卫星技术与英国、挪威实现连接，世界范围的登录开始了。

不同的国家，不同的领域，一个国家内不同的地区，画地为牢的小圈子一个个出现，这些或被称为科研网，或被成为校园网，或被称为法国网英国网的网络们，如同十六世纪的欧洲大陆，公侯遍地，如何让这些操着不同语言，遵循着不同戒条的邦国，敞开门扉，互相接纳，形成统一的网络,互联网? ARPA的TCP/IP协议最终胜出
    1983年1月1日，原先的交流协议NCP被禁用,NCP成为历史，TCP/IP开始成为通用协议。
    1983年，原本意义上的ARPANET也寿终正寝，依照美国法律，所有政府出资的项目，因体现着纳税人的权利，都必须由纳税人分享，因此国防部出资并推动的阿帕网上 与国防与军事无关的年轻科学家们蜂拥而入，担心军事机密安全问题的美国军方，从阿帕网分离出来，建立了自己的军网。
    1985年成为TCP/IP协议突破的一年，当时它成为UNIX操作系统的组成部分。


罗伯特-梅特卡夫（以太网发明人）

美国加州 湾区 山景城的计算机历史博物馆

给我一个支点翘起地球的阿基米德，眼前的沙滩，天下所有沙漠中的沙粒能否用一个数字表达出来，他给了一个这样的描述，十的一百次方。
实际上，世界上的沙粒的确没有那么多，甚至宇宙中心以分子，粒子，原子存在事物的总和都没有这样的量。
人们将这个人类不可企及的理想量命名为**Googol(10^100)**
两千两百年后，两位斯坦福大学的年轻人,(拉里-佩奇，谢尔盖-布林)产生了一个堪比阿基米德的人生理想。Googol的同音词Googlo，在汉语中被翻译为“谷歌”。


迈克尔-莫里兹 红杉资本 沙丘路3000号

Yahoo
    杨致远
    大卫-费罗


### 第一代计算机网络
1. **20世纪60年代初，由多重线路控制器参与组成的网络，被称为第一代计算机网络**
1. 早期的计算机是为批处理信息而设计的，所以当计算机在与远程终端相连时，必须在计算机上增加一个接口才行。显然，这个接口应当对计算机原来的硬件和软件系统的影响尽可能的小些，这样，就出现了所谓的“线路控制器”（Line Controller）。由于在通信线路上是串行传输，而在计算机内采用的是并行传输，因此线路控制器的主要功能是进行串行和并行传输的转换以及执行简单的差错控制。随着远程终端数量的增多，为避免一台计算机使用多个线路控制器，在20世纪60年代初期，出现了多重线路控制器（Multiline Controller）。多重线路控制器可使计算机与多个远程终端相连接。

这种最简单的联机系统也称为**面向终端的计算机通信网**。

第一代面向终端的计算机网络，严格地讲，不能算作现在意义上的计算机网络。这些系统的建立没有资源共享的目的，只是为了能进行远程通信。它是以单计算机为中心的联机系统。

优点：终端设备简单；
缺点：主机负荷较重；通信线路的利用率低；网络结构属集中控制方式，可靠性低。

### 第二代计算机网络
第二代计算机网络是以资源子网为中心的计算机网络,是继第一代网络后新出现的网络资源交换模式。以分组交换为主。

分组交换网 ARPANET 就是第二代计算机网络

1964 年,巴兰(Baran)在美国兰德(Rand)公司“论分布式通信”的研究报告中提出了存储转发(store and forward)的概念
1966 年英国戴维斯提出了分组的概念

第二代计算机网络的特点： 
1. 以通信子网为中心
1. 数据处理与数据通信两功能分开 
1. 使用分组交换技术

### 第三代计算机网络
    1. 1977年OSI参考模型的提出，标志着计算机网络进入到第三个阶段




DoD:United States Department of Defense
NCP网络协议
1983年 ARPAnet 由NCP 向 TCP/IP 转移;

1985年和1986年，美国国家科学基金会（National Science Foundation）将5个超级计算机中心组建成为NSFNet。随后该网络扩展至多所大学，并谋求更大的发展。这个互联的计算机系统也就是后来人人皆知的“因特网”。万维网在后来才出现，其主要作用是方便人们浏览因特网。

1990年 NSFNET彻底代替了ARPAnet 成为 Internet的主干



### 计算机网络的三个阶段
计算机网络的发展共分为三个阶段：计算机终端网络，计算机通信网络，计算机网络体系结构。

1. 计算机终端网络：计算机的CPU计算时间昂贵，在通信软件的管理下，终端用户共同使用一台计算机。用户在终端输所要求的计算和数据，然后发往远地的计算机，计算机完成计算后把结果送回终端用户，由单个计算机多个终端组成，为第一代计算机网络。

1. 计算机通信网络：计算机通信网络是由通信线路将多个计算机终端网络联系在一起，实现相互通信并交换数据的功能，以数据交换为主。
此网络分内层和外层。
由CCP（通信控制处理机）和通信线路组成的子网叫做通信子网，是整个网络的内层。由计算机和终端组成的子网叫资源子网，负责数据处理，是整个网络的外层。

1. 计算机网络体系结构：实现各网络产品公司的产品能够互相通信，解决不同系统的互联问题，是一种不基于特定机型，操作系统或公司的网络体系结构。ISO在分析和消化已有的网络的基础上，考虑到联网的方便和灵活性等要求，提出了OSI/RM（开放系统互联参考模型）人们将符合这种国际标准的计算机网络称为第三代计算机网络。


## 互联网接入方法
1. 电话拨号接入(PSTN 公共交换电话网)
    1. modem:分为调制器 和 解调器
        1. RS232接口（类似VGA)
        1. RJ11
    1. 56kbps
    1. 电脑 电话 选其中一个同时

1. ISDN接入（电话线）综合业务数字网，也叫一线通, 
    1. 电话 和 电脑 可以同时
    1. 传输的是数字信号
    1. 128Kbps(窄带)

1. ADSL:非对称数字用户环路（电话线）
    * 非对称：上行最高1Mbps,下行最高8Mbps
    * ADSL2+: 下行最高24Mbps
    * 铜线
    * 3-5 km
    * 下行通道用于下载，中速双工通道用于上传
    * 可同时打电话上网
    * 上网不需要缴付电话费
    
    * 语音分离器(需要供电) 早期
        1. 出口
        1. modem口 接modem
        1. phone口
    * 路由器WAN口和LAN口各有一个MAC地址，WAN口MAC地址是对外通信的，LAN口地址是对内通信的。
        1. wds 无线分布式系统，路由器级联
        1. 秘钥更新周期就是路由隔段时间重新进行一次运算，产生新的哈希值，防止别人破译。本来根据哈希值回算密码就很难的，再加上定时地更新，就会更加安全。
        1. Beacon([ˈbi:kən]烽火，灯塔)时槽：信标间隔时槽,通俗的理解就是无线路由器要不停告知自己的存在（这样无线网卡才可以扫描到），向空口持续发送一个叫做beacon的报文，beacon时槽就是控制这个报文发送的速率。一般无线网卡都是做所谓的被动式扫描(passive scanning)
        1. 转发规则
            * 虚拟服务器，将公网上访问本地的数据，转发至指定本地ip、服务器
            * DMZ主机，
                * “demilitarized zone”的缩写，中文名称为“隔离区”，也称“非军事化区”。它是为了解决安装防火墙后外部网络不能访问内部网络服务器的问题，而设立的一个非安全系统与安全系统之间的缓冲区，这个缓冲区位于企业内部网络和外部网络之间的小网络区域内，在这个小网络区域内可以放置一些必须公开的服务器设施，如企业Web服务器、FTP服务器和论坛等。另一方面，通过这样一个DMZ区域，更加有效地保护了内部网络，因为这种网络部署，比起一般的防火墙方案，对攻击者来说又多了一道关卡。
                * 设置了虚拟服务器，此时虚拟服务器就在DMZ中
        1. 地址租期：这个ip的可使用时间

    * PPPoE是一种2层链路技术,Point to Point Protocol over Ethernet,以太网上的点对点协议
1. Cable MODEM接入
    * 线缆调制解调器
        * 有那种同轴电缆口 和 RJ45口
    * 是一种通过**有线电视网**来上网的技术
    * 非对称式数据传输
        * 上行：2Mbps - 10Mbps
        * 下行：10Mbps - 36Mbps

1. FTTH 光钎
    * 光纤交换机，光纤路由器 贵
1. 小区宽带
    * 一个大局域网，所有客户都在同一个网段中。
    * 共享带宽。



1. 局域网接入
1. 用户单机接入


信道：信息的通道
    全双工信道
        频分双工(FDD)
        时分双工（TDD)
    单工信道
    半双工信道
**基带信号**
    1. 就是数字信号，高低电平
**频带信号**
    1. 就是模拟信号

多路复用
    在一条传输介质上传输多个信号,提高信道利用率
    
    频分多路复用（FDM)
        * 模拟信号
        * 多路复用编码器
        * 多路复用解码器
    时分多路复用（TDM)
        * 数字信号
        * 时间分片

同步传输
    要双方进行合作
    发送者只有得到接收者送来的允许发送的信号后才能发送数据
    接收者也必须收到发送者所指示的数据发送完毕、允许接收的信号后才能接收
    以块为单位,帧

异步传输
    发送者和接受者之间不需要进行合作
    发送者可以在任何时候发送数据
    接收者只要数据到达就接收数据
    起始位-数据-结束位
    以字符为单位（8bit)
    比较浪费，因为起始位，结束位占比很高

1. 数据通信技术指标
    1. 传输数量
        1. 信道容量
        1. 传输速率
            1. 波特率
                * 通信领域
                * 针对于串口通信
                * 9600 bit/s
                * **波形速率**,单位事件传输了多少个波形,单位是“波特”
            1. 比特率
                * 一般用在PC领域
                * 信息传输
    1. 传输质量
        1. 误码率
            1. bit个数占比


## 网络通信协议

### OSI RM(open system interconnect Reference Model) 开放系统互联 参考模型
PDU(protocol data unit) 协议数据单元，每一层加上协议头，协议尾部
    * 对等层之间传递的数据单位

1. 应用层           APDU    
    * application layer
    * 用户和系统的接口
    * **和应用程序不一样的，一个联网的环境**
    * 为应用程序提供网络服务
    * 应用程序访问网络的窗口，允许接入网络资源

1. 表示层           PPDU    
    * presentation layer
    * 数据的表现形式，ASCII，jpg
    * 格式化数据
    * 提供加密
    * 压缩，解压缩
    
    * 编码，压缩，加密

1. 会话层           SPDU    
    * session layer
    * **建立、管理和终止在应用程序之间的会话**

    * 对会话的双方进行资格审查和验证的规则，
    * 规定双工模式

    * 是否远程
    * 允许不同计算机上的两个应用程序建立、使用和结束会话连接

上3层数据本质上没有发生变化,传输层数据发生变化了（分组,MTU）

1. 传输层           Segment  环节; 部分，段落; [计算机] （字符等的） 分段; [动物学] 节片;
    * transport layer
    * 不同系统之间的进程间数据交互的服务
    * 承上启下的层
        * 上边的可以说是 资源子网
        * 下边的可以说是 通信子网

    * **端到端的通信信道**
        1. 源端口无所谓，目标端口对就行了
    * **确保报文无差错、有序、不丢失、无重复的传输**
        * 有序：因为分组了
    * **分割数据与重组数据、按端口号寻址、连接管理、差错控制和流量控制**
    * 分组上加头信息

    * 可以为会话层提供**与网络类型无关的**可靠/不可靠信息传输机制

    * 可靠连接(TCP)

    * 不可靠连接(UDP)    
        * User Datagram Protocol

    * 端到端的报文传输和差错控制
    * **分段与重组，连接控制，流量控制，差错控制**

    * **数据分组了**
    * MTU 最大传输单元 Maximum Transmission Unit 以字节为单位
        1. 一般1500
        1. 最大传输单元这个参数通常与通信接口有关（网络接口卡、串口等）
    * TCP窗口确认
        1. 根据链路的拥塞状况，调整本次窗口大小

1. 网络层           报文,分组,包    Packet
    * network layer
    * 提供逻辑地址IP
    * **路径选择**
    * 拥挤控制
    * 路由器

    * **网络层关系的是通信子网的运行控制，主要解决如何使数据分组跨越通信子网从源主机传送到目的主机的问题。**

    * 用于实现数据的不可靠面向无连接的通信，实现三层数据封装与IP寻址
    
    * 只负责一段，比如从路由器A传输到路由器C。而传输层负责整体,负责端到端
    
    1. ICMP(internet control message protocol)
    1. IGMP(internet group management protocol)

1. 数据链路层       帧      Frame
    * data link layer
    * 成帧，用MAC地址访问媒介（48bits)
    * 网卡mac地址
    * 功能：
        1. 数据成帧
        1. 调节发送速率和接收速率的匹配？
    * 二层交换机
    * T标记（tail)
        1. 数据的结束
        1. 差错控制？
            * 传到对方之后保证数据没有丢失啊，之类的，估计是通过算法确定T标记，类似hash之类的
    
    * 全为1表示广播
    * 第8位为1，表示组播

1. 物理层           比特    Bit
    * physical layer
    * 物理接口，电气特性
    * 光钎，电缆，双绞线
    * 特性
        1. 机械特性
            * 几个孔，几个针，以及排列之类的
        1. 电器特性
            * 信号状态的电压、电流、最大传输速率
        1. 功能特性
            * 规定了接口信号的来源、作用及信号间的关系
        1. 过程特性
            * 进行数据交换的控制步骤

    * 双绞线速度
        1. 


1. 市场化失败的原因(还是根本没有去做市场化，仅仅是reference model)
    1. 实现起来比较复杂
    1. 层次划分并不合理，有些功能在过个层次中重复出现
    1. 没有商业驱动

1. 虚通信，实通信，对等实体
1. 实际的通信只在物理层完成


### TCP/IP(并不适用于非TCP/IP网络，如令牌环网)
目的：异种网的互联问题
传输控制协议/网际协议
是一个协议簇
IP(internet protocol)
ICMP(internet control message protocol)
ARP(address resolution protocol) 
RARP(reverse address resolution protocol)

1. 应用层(3)    AL
    * 各种服务，如 FTP、Telnet

    * 应用层、传输层的接口
        * 端口
            1. FTP 21
            1. ssh 22
            1. Telnet 23
            1. Smtp 25
            1. DNS 53
            1. TFTP 69

        * 一个服务可能会用到多个端口

1. 传输层   TL
    * TCP(在TCP/IP中一般叫做数据报)
        1. 三次握手
            * <img src='./assets/sanCiWoShou.png'>
            * 两军问题
            * **服务器发送SYN-ACK之后，收到客户端的ACK之前的TCP连接称为半连接(half-open connect)**
        1. 面向连接的
        1. 4次握手释放连接
            由于TCP连接是全双工的，因此每个方向都必须单独进行关闭。这个原则是当一方完成它的数据发送任务后就能发送一个FIN来终止这个方向的连接。收到一个 FIN只意味着这一方向上没有数据流动，一个TCP连接在收到一个FIN后仍能发送数据。首先进行关闭的一方将执行主动关闭，而另一方执行被动关闭。
            1. 客户端A发送一个FIN，用来关闭客户A到服务器B的数据传送(报文段4)。
            2. 服务器B收到这个FIN，它发回一个ACK，确认序号为收到的序号加1(报文段5)。和SYN一样，一个FIN将占用一个序号。
            3. 服务器B关闭与客户端A的连接，发送一个FIN给客户端A(报文段6)。
            4. 客户端A发回ACK报文确认，并将确认序号设置为收到序号加1(报文段7)。

    * UDP(User Datagram protocol)(在TCP/IP中一般叫做段)
        * 快

1. 网络互联层   NL
    * IP
        1. 寻址和路由
        1. 传递服务
            1. 不可靠，可靠性由上层协议提供
                尽最大努力
            1. 无连接
                发送数据前，不建立会话
        1. 数据报分段和重组???不是传输层的吗?
        1. 服务类型现在叫 差分服务
    * IGMP 互联网组管理协议
    * ICMP 互联网控制报文协议
    * ARP(地址解析协议) ip 找 MAC地址
    * RARP

1. 网络接口层(2)    NIL
    * IEEE:institute of electracal and electronics engineers 电气电子工程协会
    * IEEE802:
        1. 1980年02月份制定的
        1. 对象是数据链路层 和 物理层 
        1. 把数据链路层分为
            1. LLC:逻辑链路层(logic link control)
                1. 不确认的无连接服务:不需要对方确认要不要接收，不事先通知，（联想 电路交换,虚电路）
                    * 多播，广播时候
                1. 面向连接的服务:
                1. 需确认的无连接的服务
                    * 报警信号
                1. 高速传送的服务
                
            1. MAC:介质访问控制(media access control):决定对传输介质的访问权
                1. 循环式
                1. 预约式
                1. 竞争式：先到先得

        802.3:CSMA/CD(竞争式)
        802.4:Token bus 令牌总线    （淘汰）
        802.5:Token ring    令牌环  (淘汰)
        
        llc mac 的概念早就淘汰了



    局域网中使用网络接口层协议的代表
        1. 以太网
        1. 令牌环
        1. FDDI
    广域网中使用网络接口层协议的代表
        1. SLIP(串行链路网际协议)
        1. PPP(点对点协议，MTU 默认1500Bytes)

        MTU是数据链路层的概念

    * **逻辑链路控制**  LLC
        1. 不确认的无连接服务
            不需要事先通知我要开始传输了
        1. 面向连接的服务
            先建立连接
        1. 有连接的无连接服务
            
        1. 告诉传送的服务
    * **介质访问控制**  MAC

交换机判断是发往外网的还是局域网的

TCP/IP 相对于 OSIRM 淡化了许多分层的概念，强调了功能的实现

## 互联网的应用
### www
1. ssl加密
1. https 端口是443

### 邮件
#### 邮件用户代理(MUA,mail user agent)
1. POP3(Post office protocol 3) 110端口
    SSL协议端口号：995
1. IMAP(internet mail access protocol) 143端口
    SSL协议端口号：143
1. exchange
这几种协议用于接收用户的邮件,选择其中之一

IMAP 的所有操作都会同步到Server端
POP3 在本地不会和Server同步，所有操作仅仅影响客户端的

pop3.163.com(接收邮件服务器，服务器接收来自你的邮件)
    最初的pop3:当你在客户端接收了之后，Server里就没有了
    第三方应用程序
imap.163.com

outlook


例如：
foxmail
outlook

#### 邮件传输代理(MTA,mail transfer protocol) 报文传送代理
1. SMTP(simple mail transfer protocol) 25端口
    SSL协议端口号：465/994
针对服务器的，如从163 到 sina

smtp.163.com(发送邮件服务器，服务器发送)
MUA,MTA 也可是同一个Server
发送和接收一般一致

#### 邮件投递代理(MDA,mail delivery agent)
最后一个MTA也叫MDA

## FTP(File transfer protocol)
1. 21端口进行请求，应允的控制,进行控制
1. 20端口进行数据传输

## telnet(远程登录) 早期, 目前用SSH
windows上还要将用户添加到 telnetClients 组???

## 计算机网络
### 计算机网络的功能
1. 数据通信
1. 资源共享
1. 集中管理
1. 分布式处理
    1. 如视频渲染
1. 负载均衡

### 分类
#### 规模
1. LAN
1. MAN  城域网 metropolitan [ˌmetrəˈpɒlɪtən] 大都会，大城市
1. WAN  广域网
1. Internet


#### 拓扑结构
1. 总线型

1. 环形
    1. 令牌
        在令牌环网中有一个令牌（Token）沿着环形总线在入网节点计算机间依次传递，令牌实际上是一个特殊格式的帧，本身并不包含信息，仅控制信道的使用，确保在同一时刻只有一个节点能够独占信道。当环上节点都空闲时，令牌绕环行进。节点计算机只有取得令牌后才能发送数据帧，因此不会发生碰撞。由于令牌在网环上是按顺序依次传递的，因此对所有入网计算机而言，访问权是公平的。

1. 星型

1. 树型

1. 网状

## 网络设备
网络适配器（NIC）

按照总线分类
1. ISA(16bit)
1. EISA(32bit)
1. PCI(32bit)
    1. PCI  
    1. PCI-E  较短


1. **中继器 repeater**?
1. 集线器,特殊的中继器 hub 
1. 网桥(接口少)
1. 交换机
1. 路由器

## IP 包头
* 版本
    * ipv4
    * ipv6
        * 2^128
* 源IP地址
    * 2^32位=43亿
* 目标IP地址
    * 2^32位=43亿

### IP 分类
<img src='./assets/ipFenlei.png'>

计算机在和其他计算机通信之前，**首先要判断 目标IP地址 和 自己的IP地址 是否在一个网段**，这决定了数据链层的目标MAC地址是目标计算机的还是路由器接口的MAC地址。数据包的目标IP地址决定了数据包最终到达哪一个计算机，而目标MAC地址决定了该数据包下一跳由哪个设备接收，不一定是终点。

### IP 地址
点分十进制记法
十六进制记法(注册表、编程使用)(0x810b0bef)

#### 分类编址
早期设计方案，存在缺陷,A、B、C类编址

分类    标志    第一字节范围    网络地址长度    最大网络数       互联网可分配网络数     最大主机数      地址空间数      地址空间数/IP总数
A       0       [1,126](0,127)  1B              2^7 - 2(0,127)    (2^7-2)-1             2^24-2          2^31         2^31/2^32 = 1/2
B       10      [128,191]       2B              2^14              (2^14)-16             2^16-2          2^30         2^30/2^32 = 1/4
C       110     [192,223]       3B              2^21              (2^21)-256            2^8-2           2^29         2^29/2^32 = 1/8

D       1110    [224,239]       多播地址(主要留给 英特网结构体系委员会IAB使用)
E       1111    [240,255]       保留为以后使用
    255.255.255.254

主机位
    1. 全零：本主机所连接的单个网络地址/该网络的网络地址
    1. 全 1：广播地址

广播
    1. 直接广播（directed broadcasting）： 网络号.255
    1. 有限广播（limited broadcasting）: 255.255.255.255
        * 不需要知道网络号
        * 限制在本网络或本子网的范围内
        * 路由器会阻止有限广播

A
    0.      指本网络
    127.    本地回环测试,测试TCP/IP协议的正常与否,127.x.y.z
    10.0.0.0~10.255.255.255     私有地址,1个网络
B
    172.16.0.0~172.31.255.255    私有地址,16个网络
    **169.254.0.0/16 保留地址，DHCP不正常时，window自己分配的ip**
C
    **192.168.0.0~192.168.255.255    私有地址, 256个网络**

0.0.0.0  
    只能作为源地址
    最开始时候的ip地址，而使用255.255.255.255 作为目标地址,这样DHCP就可以给它分配ip
    默认路由
    **这个网络上的这个主机**

网络为全为0，主机地址为n, 表示**这个网络上的特定主机**
    0.0.0.64


单播，组播，广播

链路本地地址：169.254.0.0/16(windows)???
    1. 两台电脑直接网线连接
    1. 每台主机都需要一个IP地址，通常情况下是通过DHCP服务器自动分配，但某些特殊情况下，DHCP分配失败或者没有DHCP服务器时，机器可以自己分配一个IP来完成这个工作

私网地址不能在公网传播，用NAT转换

掩码

掩码
    网络位全为1，主机位全为零
    和ip地址做 与运算 得出网络地址
    CIDR记法(无类域间路由)：201.28.2.3/24
        Classless Inter-Domain Routing(https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
        It is based on the variable-length subnet masking (VLSM) technique

子网掩码
    从主机位借位
    比如借3位，就是2^3=8个子网(历史上要减2，现代不用-2，)

子网的主机范围
    1. 先算出子网号
    1. 算出广播地址
    1. [子网号+1，广播地址-1] 就是合法的主机范围了

子网数计算
    2^m
主机数计算
    (2^n)-2

超网(路由汇总)
    将小的网络合并，例如将4个C类地址合并为一个

    x.y.32.z
    x.y.33.z
    x.y.34.z
    x.y.35.z
    
    x.y.0010 0000.0 32
    x.y.0010 0001.0 33
    x.y.0010 0010.0 34
    x.y.0010 0011.0 35
              !

    从网络位借位(从网络位减位)，"!"处，子网掩码变为22位

#### 无分类编址
1996年因特网管理机构选不了新的体系结构-无分类编址，使分类编制变为过时的技术

CIDR(无类别域间路由 classless inter-Domain routing)

掩码
/n      掩码            /n      掩码            /n      掩码            /n     掩码
/1       128.0.0.0      /9      255.128.0.0     /17     255.255.128     /25     255.255.255.128
/2       128.0.0.0      /10     255.128.0.0     /18     255.255.128     /26     255.255.255.128
...
**/8       128.0.0.0      /16     255.128.0.0     /24     255.255.128     /32     255.255.255.128**


可以看出，**分类编址是无分类编址的一个特例**
前缀：网络位
后缀：主机位

1000 0000   128
1100 0000   192
1110 0000   224
1111 0000   240
1111 1000   
1111 1100   
1111 1110   
1111 1111   

可变长度的子网（VLSM variable length subnet mask)

IPv6
    1. 128bit
    1. 8部分16进制 128/8=16  16/4=4
        1. 2001:0410:0000:0000:FB00:1400:5000:45FF

## 局域网
局域网有很多种
    1. 令牌环
    1. ARCnet
    1. 以太网

### IEEE 802局域网标准
罗伯特-梅特卡夫(以太网的发明，施乐Xerox)
    CSMA/CD
    成立 3com 公司
    1980年2月，IEEE下属的802局域网标准委员会成立，推出一系列以太网标准
    DIX 2.0(Ethernet II,DIX V2):Xerox 与 DEC、Intel 在1982年制定以太网标准


### 10Base以太网
### 快速以太网
### 交换式以太网
### 千兆以太网
### 其他种类的局域网
### 局域网中常用的技术


## TCP/IP
### 历史
1. Transmission Control Protocol/Internet Protocol的简写，中译名为传输控制协议/因特网互联协议
1. "阿帕"（ARPA），是美国高级研究计划署（Advanced Research Project Agency）的简称

1. 军用，中心节点，迂回线路，分组交换
    1. 分组交换：某个节点被破坏后并不影响整个网络的数据交换

1. 69年 arpanet诞生，开始分组交换技术
1. 75年，TCP/IP诞生
1. 1982年，TCP/IP规范出炉，Unix最早开始实现TCP/IP协议

## 无线网
国际标准 WiFi
中国标准 wapi


## 物理层的概念
单工：单向传播
    1. 收音机
    1. 电视
双工
    1. 全双工：同时双向传递
        1. 手机
    1. 半双工：轮流双向传输
        1. 对讲机
中继器：信号放大器
双绞线：100m
细缆：180m
粗缆：500m

### hub
1. 超级简单的设备
1. 半双工
1. 共享带宽
1. 广播
1. 不记忆MAC地址
1. 没有任何安全性的考虑
1. 物理层设备

## 以太
以太是古希腊哲学家亚里士多德所设想的一种物质。是物理学史上**一种假想的物质**观念，其内涵随物理学发展而演变。“以太”一词是英文Ether或Aether的音译。

19世纪的物理学家，认为它是一种曾被假想的电磁波的传播媒质，所以叫以太网

## 冲突域(collision domain)
在以太网中，如果某个CSMA/CD网络上的两台计算机在同时通信时会发生冲突，那么这个CSMA/CD网络就是一个冲突域（collision domain)。如果以太网中的各个网段以集线器(Hub)连接，因为不能避免冲突，所以它们仍然是一个冲突域。

冲突域就是连接在同一导线上的所有工作站的集合，或者说是同一物理网段上所有节点的集合，或以太网上竞争同一带宽的节点集合.

集线器是一种物理层设备，本身不能识别MAC地址和IP地址，当集线器下连接的主机设备间传输数据时，数据包是以广播的方式进行传输，由每一台主机自己眼中MAC地址来确定是否接收。

这种情况下，同一时刻由集线器连接的网络中只能传输一组数据，如果发生冲突则需要重传。集线器下连接的所有端口共享整个带宽，即所有端口为一个冲突域

Hub 只能广播，

交换机则是工作在数据链路层的设备，在接收到数据后，通过查找自身系统MAC地址表中的MAC地址与端口对应关系，将数据传送到目的端口。

交换机在同一时刻可进行多个端口之间的数据传输，每一端口都是独立的物理网段，连接在端口上的网络设备独自享有全部的带宽。因此，**交换机起到了分割冲突域的作用**，每一个端口为一个冲突域.

## 广播域(broadcast domain)


## 以太网桥
混杂模式：即使目标地址不是自己，自己也会收下数据
两个口
学习源MAC地址(每个端口记录mac地址),第一次会进行转发，表中有了就可能不会转发了

可以隔离冲突域

## 三网
电信网
有线电视网
因特网


## 通信交换技术
### 电路交换(circuit switching)
典型的案例：专线电话
比特流直达终点
连接建立，数据(报文)传送，连接释放

连接建立需要花费很长时间

### 报文交换(message switching)
A → 报文 → B →  报文 → C
          **存储、转发**

报文 首部尾部会加信息

假设发生堵塞，可以将后来的数据存储，将先来的数据转发

如果报文过大，易堵塞；如果出错，整个报文要重新传送

没有在通信两端设备间建立一条物理线路

报文优先级

交换设备可以复制报文，广播

A 10mbps      交换机          B 100mbps
A -> B ok
B -> A 交换机的存储 做缓冲区

可以进行码型的转换，如 ASCII  转换为 IBM 开发的 EBCDIC 码

### 分组交换(packet switching 报文分组交换，包交换)
1. 数据报(data gram)
    1. 分组，每个组可以选择不同的线路，最后分组重组报文
    1. 多用于局域网
1. 虚电路(virtual circuit)
    1. 建立专用线路, 分组不打散？到达顺序？
    1. 两种古老的这种技术
        1. x.25
        1. 帧中继


将一个报文分成多个组来进行传输，每个组都有目标、源地址
也是一种存储转发
每一段报文加上地址、控制和差错校验等信息 

## 传输介质
### 有线传输
#### 双绞线(TP: twisted Pair wire)
非屏蔽双绞线(UTP)
  屏蔽双绞线(STP)

白色丝线:可以用来撕开皮

绞距:较短的比较好

铝箔

有的还有接地导线：处理静电

聚氯乙烯外皮

电气性能分类
1. 1,2,3,4类
1. 5,超5,6，超6,7类

3类：传输频率16MHz 最高传输速率10Mbps
5类：传输频率100MHz 最高传输速率100Mbps
    CAT 5
超5类：传输频率155MHz 最高传输速率100Mbps
    CAT 5E

6类：传输频率250MHz 最高传输速率1000Mbps
超6类：传输频率255MHz 最高传输速率1000Mbps,十字架

7类：传输频率600MHz 最高传输速率10Gbps

**回波信号干扰**


    568A:白绿 绿 白橙 蓝 白蓝 橙 白棕 棕
    1 3 2 6 对调
    568B:白橙 橙 白绿 蓝 白蓝 绿 白棕 棕

    对于双绞线来说，有4跟线在起作用；对于一台计算机来???

    直通：两边一个标准
    交叉线：一个A,一个B
    **同种设备用直通线，路由器和PC用交叉线**


#### 同轴电缆(BNC)
有线电视
监控

铜线 绝缘层 屏蔽膜 屏蔽线网 外层

监控线一般还包含电源线

粗缆 75-5
细缆 75-3

#### 光纤(optical fiber)
单模
    传输信息不依靠全反射
    光纤直径一般8.3微米
    50-100km
    S
    SM
多模
    传输信息依靠全反射
    直径大于10 一般是多模
    传输距离短，2-4km
    外皮的颜色一般是是黄色
    M
    MM

所谓"模"是指以一定角速度进入光纤的一束光。只能传导一种模式的光纤称单模光纤，而能传到多个模获成百上千个模式的光纤称为多模光纤。

https://zhidao.baidu.com/question/571023472.html


高频有直线传播的特性，穿透力较差。如手机（800MHZ）在楼房内通常信号比较弱，室外就会很好。
    1. 抗干扰能力强
    1. 天线很短
    1. 适合卫星通信等无障碍物的长距离传输

低频穿透力较强。折射反射性能较好。如收音机（1000KHZ 左右），在室内收听，基本没有影响。在山沟、楼群密集处都不容易影响信号的强度。
    1. 抗干扰能力弱,如对讲机
    1. 天线很长
    1. 适合有障碍物的城市传输



单模光纤光信号传输只传送一个模式，多模光纤里要同时传输几十甚至几百个模式，如果这些模式不能同时到达就会产生群延时，也就是色散所以影响多模光纤传输距离的是色散，单模光纤就不存在这方面的问题，由于色散的影响，多模光纤在传输低频信号时只能用于短距离传输，如果上百兆了，基本上传输距离也就那么1KM左右，频率越高，传输距离越短，而且多模基本上已经是上个世纪产品，相对来说是马上就要被淘汰的东西

总之，影响光纤传输距离的一般就：色散，衰耗，非线性效应

单模光纤的色散因数可忽略，多模光纤色散是主要问题

多模光纤一般情况下光源是LED，单模则是LD激光器，相比之下单模适合于短、中、长距离的低频或高频信号传输，多模只适用于低频短距离传输，这前提之下，单模光纤成为了主流

### 无线传输介质
1. 无线电波
    1. 直线传播
    1. 反射传播:电离层
1. 卫星(微波)
1. 红外线




## wireshark
1. 开源 
1. 跨平台 
1. 图形化

同类的还有 tcpdump

## 抓包原理

WinPcap/libpcap 一个东西，底层组件

1. 《wireshark网络分析实战》
1. 《wireshark网络分析就这么简单》
1. wiki.wireshark.org
1. 《wireshark 开发指南》

Help/Sample Captures

本机数据

外部数据
    1. 利用HUB设备(还有谁在用hub)
    1. 利用交换机
        1. 流量镜像SPAN
        1. 需要三台主机在同一个交换机上
        1. 不同的交换机上可以用 RSPAN  ERSPAN
    1. ARP欺骗
        1. 当对交换机没有权限的时候
    1. Mac地址表泛洪
        1. 交换机可以存一般64-128个地址表
        1. 当对交换机没有权限的时候
        1. 未知的单播帧
    

## 设置
layout
    1. Packet list
    1. Packet Details
    1. Packet Bytes(十六进制)

抓包选项
    工具栏齿轮
    1. 输入
    1. 输出
        1. 文件地址
        1. 输出格式
        1. **自动创建新文件**
            1. 根据文件大小
            1. 根据时间
        1. 环形缓冲器，滚动式保存
    1. 选项
        1. 解析名称
            1. MAC地址解析
            1. 解析网络名称
            1. 解析传输层名称
        1. 自动停止捕获，在经过
            1. 多少分组
            1. 多少文件
            1. 多少字节
            1. 多少时间


工具栏
    1. find a packet
    1. go to specified packet (specified line)
    1. go to the first packet
    1. go to the last packet
    1. automaticallyscroll to the last packet during a live capture
    1. color rules
    1. enlarge text-size
    1. shrink text-size


package list 右键
    1. 标记 mark/unmark
    1. 注释 package comment

导出特定分组
    文件/导出特定分组(export specified packets)
        1. All packet (default)
        1. Select packets only
        1. marked packets only
        1. first to last marked(两个标记之间的)
        1. range:
        captured / displayed


## 网络通信协议
对等层协议
接口层协议

物理层的实通信
其它层的虚通信

只有主机中才需要包含所有7层的功能，通信子网中的节点设备一般只需要低三层

一个网络协议主要由以下三个要素组成
    1. 语法，即数据和控制信息的结构或格式；它定义了怎么做
    1. 语义，即需要发出何种控制信息、完成何种协议以及做出何种应答；它定义了做什么
    1. 同步，事件实现顺序的详细说明；它定义了何时做

逻辑地址
    1. 全局唯一
    1. 软件实现
    1. 32bit
物理地址
    1. 本地唯一(局域)
    1. 硬件属性
    1. 48bit

ip地址容易修改，不能在网络上固定标识一台设备
MAC地址不易修改，容易在局域网中唯一标示以太设备

ARP
路由器隔绝广播，不传播广播信息

代理ARP:路由器代理完成
    计算机A发送请求，到了路由器之后，变成路由器请求了
    **主机没有设置网关的时候**
    mac 广播形式：ff-ff-ff-ff-ff-ff

ARP缓存表
    1. arp -a
    1. 静态映射(手工的)
    1. 动态映射
    1. 默认ARP的缓存超时时限是5分钟(有可能不一样),主机上好像4小时左右

arp 是解决同一个局域网上的主机或路由器的IP地址和硬件地址的映射问题

arp -d 清除本机arp缓存表
arp -a 查看本机当前arp表
apr -s 绑定arp地址（重启失效）

rarp 主要用于无盘工作站
    用于请求分配一个IP地址?和DHCP有什么区别?

ARP欺骗
    冒充网关
    解决方式，静态绑定mac;手动arp表

ICMP
    1. ttl（time to live)
        1. 64
        1. 128
IP缺点
    1. 无差错报告和差错纠正
    1. 缺少一种为主机和管理查询的机制
    1. 尽最大努力传送


网际层
    ICMP    IGMP
                IP
                    ARP RARP

差错报告报文：ICMP总是把差错报文报告给原始的数据源
    1. 类型3：终点不可达
        1. 比如到了路由器，路由器不知道往哪发
    1. 类型4：源点抑制(远点发送太快)
    1. 类型11：超时
    1. 类型12：参数问题
    1. 类型5：改变路由（路由重定向)
查询报文
    1. 类型8或0：回送请求或回答
    1. 类型13或14：时间戳请求或回答
    1. 类型17或18：地址码请求或回答(掩码)
    1. 类型10或9：路由器查询或通告


CCNA(associate)
CCNP(professonal)
CCIE(Export)

routing & switching     数通    CCNA,CCNP,CCIE
security
service provider

CCNA课程内容
1. 网络基础
    1. OSI模型
    1. IP编址，VLSM
    1. IOS基础命令
1. 路由
    1. IP选择远离
    1. 静态路由
    1. 动态路由
1. 交换
    1. 交换机处
    1. STP
    1. 高可用
1. WAN、高级功能
    1. ACL
    1. NAT
    1. PPP

交换机
    1. 连接网络**终端**的设备
    1. 平常用的路由器接口比较多，交换机的功能，属于傻瓜型路由器
    1. 24口，48口

    1. 二层交换机
    1. 三层交换机

    所有的不可网管的 傻瓜交换机 都是没有MAC地址的 只有一个MAC地址表 通过分析数据包的 原地址 和目的地址 来建立通道 本身端口是没有MAC地址的
    可网管的交换机 一定带1个或多个MAC地址
    1个MAC是为了和连接交换机管理 多个是可以划分VLAN 和MAC和IP绑定 这样就需要 每个端口都带有MAC地址

路由器
    1. console RJ-45-RS232
        console 配置
    1. console线缆，usb-rs232
    1. RJ45用于连接设备的RJ45 Console口
1u:
    U是一种表示服务器外部尺寸的单位(计量单位：高度或厚度)，是unit的缩略语，详细的尺寸由作为业界团体的美国电子工业协会（EIA）所决定。
    1U=4.445厘米

三层组网模型
https://www.bilibili.com/video/av12130806/?p=2

内网
核心层:三层交换机
汇聚层:三层交换机
接入层:二层交换机



## 路由器组件
内存        
    ROM
        Boot strap
        post 自检
        Mini IOS 类似PE系统，当IOS出故障时使用
        Rom monitor
    RAM
        IOS
            各种进程
            活动配置文件
            缓冲区
NVRam
    配置文件
Flash
    IOS


AUX口：辅助配置端口

配置

1. 用户执行模式(user exec)
    1. >
1. 特权执行模式(privileged exec)
    1. enable 进入
    1. #
    1. 退出 exit
1. 全局配置模式(config)
    1. configure terminal
    1. 退出 exit
1. 其他特定配置模式(config-)


### 帮助
1. 命令本身不区分大小写
    1. 名称可能区分

1. cl?

1. clock set ?
    1. clock set 19:50:00

1. tab补全

1. ctrl-d 删除光标处字符 

1. 下一行 
    1. enter
1. 下一屏
    1. space
1. 中断
    1. ctrl-c
1. 退出配置模式并返回执行模式
    1. Ctrl-z


show
1. show version
1. show flash
1. show interface
1. show processes CPU
1. show protocols
1. show memory
1. show stacks
1. show buffers

全局配置
1. 接口模式
1. 线路模式
1. 路由模式


1. 改名称
    1. hostname 名称
    1. no hostname 名称 → 默认名称
1. 密码
    1. line console 0
    1. password 密码
    1. login    (启用验证)
1. enable 密码
    1. enable password 密码(明文)
    1. enable secret 密码(密文，比password安全)
1. service password-encryption
    1. 使所有明文密码加密
1. banner motd #内容#
    1. 登录提示信息
1. 将运行配置保存到NVRam内的启动配置文件中
    1. copy running-config startup-config
1. 使设备还原到配置前的状态
    1. reload
1. 删除所有配置
    1. erase start-up config

接口
1. interface type port

1. ip address [ip-address] [netmask]

1. 关闭接口
    1. shutdown







## 路由选择原理
三层交换机也有路由表,
路由表存储在 RAM中,包含以下信息:
    直连网络
    远程网络连接:并非直接连到路由器上的网络
    网络的详细信息:源信息，网络地址和子网掩码，下一路由的ip地址

建立路由表的3种途径
1. 直连路由:直接连到路由器上的网络
1. 静态路由:
1. 动态路由:

查看路由表
    1. show ip route 
    1. C-connected 直连
    1. S-static
    1. I-IGRP



interface f0/0
ip address 192.168.1.1 255.255.255.0
no shutdown

 '#' show interface brief
 '#' show ip route
    '#' show ip route connected
    '#' show ip route static
    '#' show ip route ...


静态路由
1. config  ip route <目标 network-address> <submask>  下一跳ip或出口
    1. 写下一跳ip更好些,单播ip所在路由求mac地址
    1. 写出口f0/0 是广播求mac地址

默认静态路由 0.0.0.0   0.0.0.0
ip route 0.0.0.0  0.0.0.0 下一跳
    1. 所有本路由器中不知道的都会匹配默认路由
    1. 优先级是最低的
    1. s\* 


ping
    1. 当TTL为零时，会发送一个通知给包的源地址。
    1. 默认情况
        1. TTL=128，这是WINNT/2K/XP。
        1. TTL=32，这是WIN95/98/ME。
        1. TTL=256，这是UNIX。
        1. TTL=64，这是LINUX。
        1. 实际可能被欺骗
traceroute
    * 在每一条路径上的每台设备测3次，时间为 ms
    * 表示超时，某些路由器不经询问直接丢弃TTL过期的数据包，这在tracert中是看不到的，在这种情况下，将为该跃点（hot)显示一行星号（※ ）
    * -d 不解析计算机名
netstat
    1. 一个重要作用是端口占用查询
route 


show ip route
show ip interface brief
show cdp neighbors detail   搜集邻居信息



动态路由
    向路由表中添加远程网络
    探索网络
    自主网络探索

1. 内部网关协议
    1. 距离矢量协议DV
        1. RIPv1
        1. RIPv2

        1. IGRP
        1. EIGRP
    1. 链路状态协议Link-State
        1. OSPF
        1. IS-IS
1. 外部网关协议
    1. BGP
    


距离矢量
    并不了解到达目的网络的整条路径，该路由器只知道
    1. 自身与目的网络之间的距离
    1. 应该往哪个方向或使用哪个接口转发数据包

适用的网络
    1. 网络结构较为简单的,扁平化的



有类无无类路由协议

有类
RIPv1，IGRP (一般不考虑了)

无类
RIPv2,OSPF,IS-IS,BGP


度量是指路由协议用来分配到达远程网络的路由开销的值
    比较同种协议多条路径时

管理距离（AD administrator distance）:用于确定到达目的的最佳路径
    1. 不同种协议
    1. 越小越优先
    

路由选路3原则
1. 最长掩码匹配原则
1. 比较AD值(不同协议)
1. 比较Metric值（相同协议）



路由协议的主要作用：生成路由表


路由的收敛
    当所有路由表包含相同网络信息











## 交换
汇聚层 会有一些策略，如限速

交换机的功能
    地址学习（MAC）
    转发和过滤数据帧
    环路避免

**交换机是基于源mac地址进行学习的，基于目的mac地址进行转发的**
收到一个未知目标地址的单播帧，会进行泛洪（广播）

300s倒计时

1. vlan 虚拟局域网
将一个打的广播域分成若干小的广播域
一个vlan就是一个广播域，就是一个逻辑子网(一个网段)

广播不能跨越vlan传播

静态vlan
    基于交换机端口
动态vlan
    基于主机的MAC地址
语音vlan

普通范围的ID
1. 1-1005
1. 1002-1005保留供令牌环Vlan和FDDI vlan
1. 1 , 1002-1005 是自动创建的，不能删除
1. 存储在闪存中的 vlan.dat 文件内,15.0 IOS后保存在startup-config 中
扩展范围ID
1. 1006-4096


PVID:端口在缺省情况下所属vlan号，cisco 是Vlan1


show vlan brief(gns3上是 show vlan-switch brief)
show ip interface brief

interface f0/1
switchport mode access
switchport access vlan

delete flash:vlan.dat



vlan中继(trunk)
VLAN是一种比较新的技术，工作在OSI参考模型的第2层和第3层，一个VLAN就是一个广播域，VLAN之间的通信是通过第3层的路由器来完成的。

一个二层网络可以被划分为多个不同的广播域，一个广播域对应了一个特定的用户组，默认情况下这些不同的广播域是相互隔离的。不同的广播域之间想要通信，需要通过一个或多个路由器。这样的一个广播域就称为VLAN。

ISL(cisco私有的)
    1. 支持1024个vlan
802.1q
    1. 支持4096个vlan(12bit)

打标签在trunk中传输时，离开后去掉标签


switchport trunk encapsulation dot1q

switchport mode {access | dynamic | trunk}


show interfaces f0/1 switchport


native vlan 不打标记
switchport trunk native vlan1



enable password 密码
## vlan

创建vlan方法1
    1. vlan 10
    1. vlan name 名字

创建vlan方法2
    1. vlan database 
    1. vlan 20 name 名字


查看vlan
    1. show vlan brief
    1. show vlan 

查看 trunk
    1. show interface trunk
    1. 只有trunk上才有vlan id

将端口添加到vlan
    interface f0/1
    switchport access vlan 10

将端口从vlan中移出
    interface f0/1
    switchport trunk allowed vlan remove vlan号


用户模式，特权模式，全局配置模式，接口配置模式，vlan配置模式


查看交换机mac地址表
    show mac-address-table
    1. 默认300s
配置默认生存时间
    mac-address-table aging-time [0 | 10-1000000]
    0:关闭老化功能，不会被老化
    查看
        show mac-address-table aging-time

删除设备上的所有动态地址
    clear mac-address-table dynamic
删除一个特定MAC地址
    clear mac-address-table dynamic address mac地址


在trunk端口修改许可vlan列表的命令
    switchport trunk allowed vlan {all | [add | remove | except]} vlan-list
    vlan-list 可以是一个范围  vlan 10-20


真正的危险是广播，交换机是一个广播设备，划分vlan就是创建更小的广播域；路由器隔绝广播，
如果一个路由器的一个端口下的网络有两个网段，比如192.168.1.0/24 和 192.168.2.0/24 ，1.0请求通信2.0计算机，
如果只有1.0接入路由器，则广播包到不了2.0，无法通信
如果1.0,2.0均接入路由器，则可以通信，广播包还是到不了2.0，寻找计算机的任务交给了路由器


同一网段，不同vlan的话是不能访问的


dns同时占用tcp和udp的53端口！
**区域传送**时使用TCP，主要有一下两点考虑：
1. 辅域名服务器会定时（一般时3小时）向主域名服务器进行查询以便了解数据是否有变动。如有变动，则会执行一次区域传送，进行数据同步。区域传送将使用TCP而不是UDP，因为数据同步传送的数据量比一个请求和应答的数据量要多得多。
1. TCP是一种可靠的连接，保证了数据的准确性。
域名解析时使用UDP协议：
客户端向DNS服务器查询域名，一般返回的内容都不超过512字节，用UDP传输即可。不用经过TCP三次握手，这样DNS服务器负载更低，响应更快。虽然从理论上说，客户端也可以指定向DNS服务器查询的时候使用TCP，但事实上，很多DNS服务器进行配置的时候，仅支持UDP查询包。


## 综合布线
机柜
    （19英寸）
    网络机柜
    服务器机柜
配线架
    连接网线的那一排排东西(标准24口,配19寸)
    光纤配线架
PDU (Power Distribution Unit)电源分配单元（就是插排）

UPS (Uninterruptible Power System/Uninterruptible Power Supply)
桥架

110型通信跳线架
大对数
    线缆主色为：白、红、黑、黄、紫
　　线缆配色为：蓝、橙、绿、棕、灰

尾纤
    一端有，一端是线头

AP:Access Point

巡线仪
    声音大小

标准运维服务
   

远程
    计算机、属性、远程
    关闭防火墙 
    或者3389


iTop:itgemini.net


共享的端口
telnet 23
    telnet www.baidu.com 80
    看端口开了没有
smtp    25
pop     110         995
ftp     20,21          465
mstsc   3389
http    80
dns     53


## 网络命令
### ping
1. -a   audiable
1. -A     Adaptive ping 自适应ping，根据ping包往返时间确定ping的速度；
1. -b     Allow pinging a broadcast address
1. -c [count]
1. -i [interval] 设定间隔几秒发送一个ping包，默认一秒ping一次；
    1. 时间是秒，毫秒用 0.1
1. -f     Flood ping. 极限检测。大量且快速地送网络封包给一台机器，看它的回应。
    1. 普通用户 cannot flood; minimal interval allowed for user is 200ms
    1. root用户执行此操作无限制
1. -M  pmtudisc (path mtu discovery)
    1. 设置MTU（最大传输单元）分片策略。可设置为：
    　　1. 'do'：禁止分片，即使包被丢弃；
    　　1. 'want'：当包过大时分片；
    　　1. 'dont'：不设置分片标志（DF flag）；
    1. 网络中最小的MTU值，被称为路径MTU (path mtu)
1. -s [packetsize]
    1. 指定每次ping发送的数据字节数，默认为“56字节”+“28字节”的ICMP头，一共是84字节；
        1. 是icmp的大小，默认56字节，返回56+8=64字节
    1. icmp 头部 8Byte,ip 20Byte 头部
    1. 包头+内容不能大于65535，所以最大值为65507（linux:65507, windows:65500）；
1. -t ttl ping only.  Set the IP Time to Live.
1. -w [deadline]   Specify a timeout, in seconds 我就只Ping n秒，n秒后ping命令结束


#### 最值问题
IP数据报的最大长度是65535字节，这是由IP首部16比特总长度字段所限制的。
去除20字节的IP首部和8个字节的UDP首部，UDP数据报中用户数据的最长长度为65507字节。
应该和UDP没有关系，这个8Byte是icmp的头部

#### ping命令使用的tcp报文还是udp报文呢？
ping命令使用的是ICMP报文，ICMP报文封装在ip包里。ICMP协议也是tcp/ip协议族中的一个子协议，所以从这一层来看，icmp报文和tcp报文，udp报文是同一个级别。所以ping命令使用的报文既不是tcp报文也不是udp报文。

ICMP 跟TCP和UDP没有归属关系，ICMP位于传输层之下，属网络层。用的IP报头。

#### The ping of death attack, or PoD
这也是 Denial of Services 中的一种吧，不过被防范了

使用ping命令搞死一个局域网
sudo ping -f -s 65507 192.168.1.1

“Ping of Death”攻击的原理是：如果ICMP数据包的尺寸超过64KB上限时，主机就会出现内存分配错误，导致TCP/IP堆栈崩溃，致使主机死机。

Windows系列的系统都有一个安全漏洞（也许还包括其他系统）就是当向对方一次发送的数据包大于或等于65532时，对方就很有可能宕机，所以微软公司为了解决这一安全漏洞于是限制了ping的数据包大小为65500Byte



ping.exe的原理是，向指定的IP地址发送一定长度的数据包，按照约定，若指定IP地址存在的话，会返回同样大小的数据包，当然，若在特定的时间内没有返回，就是“超时”，就认为指定的IP地址不存在。由于ping使用的是ICMP协议，有些防火墙软件会**屏蔽ICMP协议**所以有时候ping的结果只能做为参考，ping不通并不一定说明对方IP不存在。

windows系统很早很早很早以前就能防止**ping of death**攻击了。对于现在的CPU和内存性能来说，处理ping实在是不占多少资源。


IPSec安全策略是如何“防ping”的？其原理是通过新建一个IPSec策略过滤本机所有的ICMP数据包。这样确实可以有效地“防ping”，但同时也会留下后遗症。因为ping命令和ICMP协议有着密切的关系。在ICMP协议应用中包含有11种报文格式，其中ping命令就是利用ICMP协议中的“Echo Request”报文进行工作的。但IPSec安全策略防ping时采用格杀勿论的方法，把所有的ICMP报文全部过滤了，特别是很所有用的其他格式的报文也同时被过滤了。因此在某些特殊应用的局域网环境中，容易出现数据包丢失现象，影响用户正常办公。因此建议使用防火墙。


#### Beini 奶瓶
Beini，“贝妮”的音译，意思为“奶瓶”。

Beini一词的来源，在这里是指的一款无线安全测试工具包，作者是赵春生先生，作为女儿贝妮的生日礼物并以其昵称命名。

Beini是一个基于 Tiny Core Linux 搭建的无线网络安全测试系统，

FeedingBottle：运行在 Beini 系统上的 Aircrack-ng 工具包的 GUI，俗称“奶瓶”。

Aircrack-ng是一个与**802.11**标准的**无线网络分析**有关的**安全软件**


#### 查看路由器的mtu值?
ping -c 1 -M do -s 1472 192.168.1.1 

不断改小data_length值，可以最终测算出gateway的MTU值

MTU是谁的，哪一层？


## 
网络分段（network segmentation）将大型网络划分成众多小网络，可以使用router,switch,网桥

1. 导致 LAN 拥塞的常见原因如下:
    1. 同一个广播域或冲突域中的主机太多;
    1. 广播风暴
    1. 组播数据流太多;
    1. 带宽太低;
    1. 使用集线器扩展网络。


广播域( broadcast domain )指的是同一个网段中所有设备组成的集合,这些设备侦昕该网段中发送的所有广播。

对广播域进行分割很重要,因为一台主机或服务器发送网络广播时,网络中的所有设备都必须读取并处理这一广播,除非在网络中使用了路由器。

路由器的接口收到广播后,可这样作出响应:将广播丢弃,而不将其转发给其他网络。虽然路由器默认对广播域进行分割,但请牢记它也对冲突域进行分割。

分组交换
分组过滤
网络间通信
路径选择

路由器使用路由选择表(互联网络地图)来选择路径并将分组转发到远程网络。


交换机不用于组建互联网络(默认情况下,交换机不对广播域进行分割),而用于提高 LAN的功能。
交换机的主要用途是让 LAN 更好地运行一一优化其性能,向 LAN 用户提供更高的带宽。
交换机不像路由器那样将分组转发到其他网络,而只在交换型网络内的端口之间交换帧。


交换机对冲突域(collision domain) 进行分割。
冲突域是一个以太网术语,指的是这样一种网络情形:某台设备在网络上发送分组时,当前网段中的其他所有设备都必须注意到这一点。如果同时有两台设备试图传输数据,将导致冲突,而这两台设备必须分别重传数据,因此效率不高!

交换机的每个端口都是一个独立的冲突域。


网桥和交换机的基本功能相同,都将 LAN 划分成多个冲突域。实际上,当前已买不到网桥,而只能买到 LAN 交换机,但它们使用的是桥接技术,因此思科仍将它们称为多端口网桥。

广播域太大时,用户可用的带宽就很少,必须处理的广播就很多,而网络的响应速度将会慢到引起办公室骚乱的程度。

以 LAN 交换机为核心建立了网络,因此路由器连接的只是逻辑网络。采用这种配置时,我们便创建了虚拟 LAN (叽AN)。

ISO (International Or ganization for Standardization ,国际标准化组织)

OSI (Open Systems lnterconnection ,开放系统互联)

OSI 规范最大的作用之一是帮助在不同的主机之间传输数据,这意味着我们可在 Unix 主机和 PC(或 Mac) 之间传输数据。

传输层：在重传前执行纠错
会话层:将不同应用程序的数据分离
数据链路层：执行错误检测,但不纠错

仅当马上需要访问网络时,应用层才会发挥作用 。
以 IE 为例,即使你将系统中所有的联网组件(如 TCP/IP、网卡等)卸载掉,仍可使用 E 浏览本地的HTML 文档,这没有任何问题。但如果你试图浏览必须使用 HπP 来获取的 HTML 文挡,或使用 FTP(TFTP) 来下载文件,就绝对会遇到麻烦 。 这是因为响应这些请求时, IE 将试图访问应用层 。


Word 等应用程序并不位于应用层中,而是与应用层协议交互。位于应用层中的程序有 FTP 和 TFTP 等

## 传输层
七层模型更类似于西方国家的地址写法，从小到大，而不像中国从大到小

更像门牌号
传输层负责提供如下机制:
    对上层应用程序进行多路复用
    建立会话以及拆除虚电路
    提供透明的数据传输,从而对高层隐藏随网络而异的信息。

分段
    序号：
        1 2 3 | 4 5 6 | 7 8         数据（字节为单位）
        段1      段2     段3        
        1        4       7          段序号(以每个段的第一个数据是第几字节就是多少编号)

两台主机**进程间**通信条件
    1. 本地主机（IP地址定义）（服务）
    1. 本地进程（端口定义）
    1. 远程主机（IP地址定义）
    1. 远程进程（端口定义）

两台主机通信条件
    1. 本地IP地址
    1. 远程IP地址

### 面向连接(可靠)的传输层协议
    1. 流量控制
        数据完整性由传输层确保,流量控制可避免作为发送方的主机让作为接收方的主机的缓冲区溢出

        实现如下目标:
            收到数据段后,向发送方进行确认;
            重传所有未得到确认的数据段;
            数据段到达目的地后,按正确的顺序排列它们;
            确保数据流量不超过处理能力,以避免拥塞、过载和数据丢失。

        流量控制旨在提供一种机制,让接收方能够控制发送方发送的数据量。

        流量控制方式包含缓冲、窗口技术和拥塞避免。

    1. 面向连接的通信
        建立或三方握手
        然后传输数据。
        传输完毕后,将进行呼叫终止,以拆除虚电路。    

    在面向连接的可靠数据传输中,数据报到达接收主机的顺序与发送顺序完全相同;如果顺序被打乱,传输将失败。如果在传输过程中,有任何数据段丢失、重复或受损,传输也将失败。为解决这个问题,可让接收主机确认它收到了每个数据段。

    1. 窗口技术
        如果传输方发送每个数据段后都必须等待确认,传输速度将变得缓慢。然而,从发送方传输数据段到处理完毕来自接收方的确认之间有一段时间,发送方可利用这段时间传输更多的数据。在收到确认前,传输方可发送的数据段数量(以字节为单位)称为窗口。

        窗口用于控制未确认的数据段数量。

        如果未收到所有应确认的字节,接收方将缩小窗口,以改善通信会话。

    1. 确认
        可靠的数据传输依靠功能完整的数据链路,从而确保机器之间发送的数据流的完整性。它确保数据不会重复或丢失,这是通过肯定确认和重传实现的,这种方法要求接收方在收到数据后向发送方发送→条确认消息。发送方记录每个以字节为单位度量的数据段,将其发送后等待确认,而暂不发送下一数据段。发送数据段后,发送方启动定时器,如果定时器到期后仍未收到接收方的确认,就重传该数据段。

        发送方传输了数据段 1 、 2 和 3 ,接收节点请求发送数据段 4 ,以此确认它收到了前 3 个数据段。收到确认后,发送方传输数据段 4、 5 和 6 。如果数据段 5 未能到达目的地,接收方将请求重传该数据段,以指出这一点。接下来,发送方将重传该数据段并等待确认;仅当收到确认后,接收方才会传输数据段 7


1. 如果服务具有如下特征,它就是面向连接的:
    1. 建立虚电路(如三次握手);
    1. 使用排序技术;
    1. 使用确认:
    1. 使用流量控制。


TCP发送进程以字节流的形式传递数据，而接收进程也把数据作为字节流来接收，
UDP发送进程发送的数据报文都是独立的，因此UDP不是面向流的协议
缓存：数据流向的每一个方向上都有两种缓存：发送缓存，接收缓存
TCP把如偶感字节构成一个分组，称为报文段（segment),长度不定，

字节号：[0,2^32-1],开始的第一个是随机的
序号：以字节号为基础，TCP给每个报文段指派一个序号，每个报文段的序号就是在这个报文段中的第一个字节数据的序号。

源MAC：货物中途所经过的上一个驿站
目标MAC：货物中途所要到达的下一个驿站


## NAT
1. 使用NAT的路由器都是私网的边界路由器；
1. 高端路由器一般作核心网络交换或RR, 所以高端路由器一般不会开启NAT

1. 静态NAT(1对1)
1. 动态NAT(1对1，公网地址池)
1. PAT(多对1)


switch是基于硬件的，网桥是基于软件的

Dynamips 基于硬件，可以和实体机器连接，但是只能模拟router,交换机是router添加模块，它的的命令和实体机稍微不太一样
GNS3也是基于Dynamips


GNS3组件
    必备组件
        GNS3-all-in-one 图形
        IOS
    优化组件
        SecureCRT
        WireShark
    增强组件
        VMware
        IOU
        IOU-IOS







