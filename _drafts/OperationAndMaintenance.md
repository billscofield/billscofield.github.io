---
title: Operation and Maintenance
layout: post
---

## 计算机组成
CPU
内存储器/外存储器
输入设备/输出设备

## 操作系统的分类
计算机网络是把地理上分散的、具有独立功能的多台计算机和终端设备通过通信线路连接起来，以实现数据通信和资源共享目的的计算机系统。

批处理操作系统
分时操作系统
实时操作系统
微机操作系统
    单用户单任务操作系统
        主要配置在8位和16位微型计算机上
        代表有 CP/M, MS-DOS
    单用户多任务操作系统
        主要配置在32位和64位微型计算机上
        代表有 OS/2, 低版本的MS-Windows
    多用户多任务操作系统
        UNIX,Linux,较高版本的MS-Windows
网络操作系统
分布式操作系统

NetWare
    Novell公司(诺勒有限公司)是一老字号的网络公司，在80和90年代公司成长非常迅速几乎垄断了整个网络市场
    Novell公司是最早涉足网络操作系统的公司。
    1981年，Novell提出了文件服务器的概念。
    1982——1994年，Novell公司在其总裁Raymond Noorda(1924-2006)的领导下，创造了网络操作系统历史上辉煌的一页，他还领导了与Microsoft公司的抗衡。
    1983年，Novell公司开始推出Netware操作系统，这个产品在网络操作系统市场曾经雄霸一方，占到70%的份额。
    2003年收购了SUSE后，它开始转向Linux的新策略

网络模式
    对等网
    客户机/服务器
    浏览器/服务器

## 计算机启动模式
### Legacy
1. LEGACY启动模式：一般它分的区就是MBR(Master Boot Record)普通分区，它们之间的关系是分不开的，所以我们也可以叫LEGACY+MBR;
    1. legacy 遗产，遗赠

1. 主分区数目不能超过4个

1. MBR分区方案无法支持超过2TB容量的磁盘。
1. 因为这一方案用4个字节存储分区的总**扇区数**，最大能表示2的32次方([13,16])的扇区个数，按每扇区512Byte计算，每个分区最大不能超过2TB。
1. 磁盘容量超过2TB以后，分区的起止位置也就无法表示了，BIOS将无法识别分区。
    1. 2^32 × 1024Byte/2

### UEFI
1. Unified Extensible Firmware Interface 统一的可扩展固件接口
1. 旨在代替BIOS（基本输入/输出系统 Basic input/output system）
1. UEFI启动模式：一般它分的区就是GPT分区，它们之间的关系也是分不开的，所以我们也叫它UEFI+GPT。
    1. GUID/GPT(GUID Partition Table)

1. EFI在功能上完全等同于一个轻量化的OS，但是EFI在制定时就定位到不足以成为专业OS的地位上，首先，它只是一个硬件和操作系统间的一个接口；

1. 当EFI发展到1.1的时候，**英特尔**决定把EFI公之于众，于是后续的2.0吸引了众多公司加入，EFI也不再属于英特尔，而是属于了Unified EFI Form的国际组织，EFI在2.0后也遂改称为UEFI，UEFI，其中的EFI和原来是一个意思，U则是Unified（一元化、统一）的缩写，所以UEFI的意思就是“统一的可扩展固件接口”

1. UEFI抛去了传统BIOS需要长时间自检的问题，让硬件初始化以及引导系统变得简洁快速。换种方式说，**UEFI已经把电脑的BIOS变得不像是BIOS，而是一个小型固化在主板上的操作系统一样**，加上UEFI本身的开发语言已经从汇编转变成C语言，高级语言的加入让厂商深度开发UEFI变为可能。

1. 如果显卡不支持uefi，主板就会强制开启csm，自检也是会有的，不能使用纯uefi环境。

1. 每个磁盘的分区个数几乎没有限制。?
1. 分区大小几乎没有限制。又是一个“几乎”。因为它用64位的整数表示扇区号。?

1. 分区表自带备份。在磁盘的首尾部分分别保存了一份相同的分区表。其中一份被破坏后，可以通过另一份恢复。

1. GPT 支持2TB以上的大硬盘

1. GPT分区表下的隐藏分区
    1. ESP分区：EFI system partition，该分区用于采用了EFI BIOS的电脑系统，用来启动操作系统。分区内存放引导管理程序、驱动程序、系统维护工具等。如果电脑采用了EFI系统，或当前磁盘用于在EFI平台上启动操作系统，则应建议ESP分区。
    1. MSR分区：即微软保留分区，是GPT磁盘上用于保留空间以备用的分区，例如在将磁盘转换为动态磁盘时需要使用这些分区空间。

1. 引用
    1. https://blog.csdn.net/Scythe666/article/details/79708293
    1. http://www.cfan.com.cn/2017/0929/129446.shtml
    1. https://www.dujin.org/11274.html

**bootmgr pbr** 黄色
    1. Bootmgr是Boot Manager的缩写,
    1. Primary Boot Record,中文意思是 主要引导记录
    1. bootmgr pbr指的是分区引导信息，UEFI下面启动用不到，BIOS启动才用得到，不用管就是
    1. 选UEFI方式就是为了不读那个分区信息，简化开机流程，起到加速的作用

### legacy 和 UEFI的区别
Legacy
    开机 →  BiOS初始化  →   BIOS自检    →   引导操作系统    →   进入系统
UEFI
    开机 →  UEFI初始化  →                   引导操作系统    →   进入系统

1. 省略了自检的步骤(但是显卡不支持的话，还会自检的)

1. UEFI 支持图形化操作，支持鼠标

1. 不管是UEFI还是LEGACY，分区时都会额外多出小分区。
    1. Legacy多出一个小分区
    1. UEFI
        1. ESP
        1. MSR

查看是UEFI还是BIOS
    1. 在 Windows 中检查使用的是 UEFI 还是 BIOS
        1. 开始 →   系统信息 →   BIOS Mode
            1. 有的没有啊
    1. 打开磁盘管理，在主硬盘上右键单击，如果出现“转换成GPT磁盘”，那说明硬盘为MBR类型;如果出现“转换成MBR磁盘”则说明硬盘为GPT类型(因为是主硬盘，这一项是灰色不可用状态)

    

## BIOS
OS Optimized ( ['ɒptɪmaɪz] 最优化，使完善) Defaults

1. CSM兼容模块，因为这个选项设置是为legacy模式下工作的设备，如果你的电脑是UEFI模式的话就需要关闭掉(例如，由于很多独立显卡都没有GOP BIOS支持，无法在UEFI模式下正常工作，此时须“开启(Enable)”CSM。)。

### Secure Boot
1. Secure Boot安全启动设置是uefi模式的一个选择标准(好处是设置之后可让电脑启动安全)，而这个选项在Legacy模式下是不支持的，如果你的电脑是传统模式的话，就不用多做设置了。一般来说，如果是预装了Win8/8.1电脑出厂时安全启动默认为“开启(Enable)”状态，所以造成你想升级或者降级系统则出现没办法引导其他系统的问题，大家可作关闭处理。

1. 降低了启动型程序在操作系统启动前被预加载造成的风险，但是这也会造成系统安装变得垄断
1. 这意味着你在加载操作系统之前加载的所有内容都必须签名。这为你的系统提供了额外的保护层。

1. win8

## 硬盘
### MBR
1. 扇区
    1. 为了方便计算机访问硬盘，把硬盘上的空间划分成许许多多的区块（英文叫sectors，即扇区），然后**给每个区块分配一个地址，称为逻辑块地址（即LBA, Logical Block Address）。**

    1. 引导扇区是每个分区（Partition）的第一扇区，而主引导扇区是硬盘的第一扇区。

    1. 0柱面、0磁头、1扇区的主引导记录（MBR）

    1. 硬盘的主引导记录（MBR）是不属于任何一个操作系统的，它先于所有的操作系统而被调入内存，并发挥作用，然后才将控制权交给主分区（活动分区）内的操作系统，并用主分区信息表来管理硬盘。

    1. 硬盘的分区规则是：一个分区的所有扇区必须连续，硬盘可以有最多4个物理上的分区

    1. 在一个划分有多个主分区的硬盘上，则可安装多个不同的操作系统。也可以安装到逻辑分区

    1. 对于DOS/Windows来说，它能够把它所能管辖的一个主分区和一个扩展分区格式化，然后按照 C:、D:、E:逻辑盘的方式来管理。**而Linux则不同，它是把“分区”看作一个设备，既没有“扩展分区”的概念，也没有“逻辑盘”的概念。**

    1. MBR是硬盘的第一个扇区中的前446字节。一个扇区共512字节，剩下另外的64个字节用于存储“硬盘分区表”DPT(Disk Partition Table)，最后两个字节“55，AA(0x55aa)”是分区表结束的标志。这个整体构成了硬盘的主引导扇区。

    1. 硬盘分区表占据主引导扇区的64个字节(偏移01BEH--偏移01FDH)，可以对四个分区的信息进行描述，其中每个分区的信息占据16个字节。
        1. 第[13,16]字节表示分区扇区总数,共4Byte,也就是4*8=32bit
            1. 2^32/2/1024/1024/1024 = 2TB
                KB MB   GB   TB
            1. https://blog.csdn.net/hyy5801965/article/details/51136395

        1. MBR分区格式，使用LBA寻址，这种寻址机制是32位的，因此最大能够支持2^32（2的32次方）个扇区，而每个扇区的数据量是512字节，于是2^32 x 512KB，就得出了最大支持容量，
            1. MBR分区格式不能超过2TB说的是单个硬盘。 和几个分区无关,也是单个分区最大空间???
                1. **磁盘容量超过2TB以后，分区的起始位置也就无法表示了。**

    1. 活动分区这个概念主要是存在于Windows下，linux则没有这个概念。因为window要将一个主分区设置为活动分区，然后将系统安装在这个被标记为活动分区的主分区上，这样windows的引导程序——ntldr才能判断windows系统被装在哪里了，然后再跳到该分区上引导系统。
        1. NT Loader(New Technology Loader)
        1. 存放于C盘根目录下，是一个具有隐藏和只读属性的系统文件。它的主要职责是解析Boot.ini文件

1. 启动代码 和 硬盘分区表
    1. 在MBR磁盘的第一个扇区内保存着**启动代码(主引导记录)**和**硬盘分区表**。启动代码的作用是**指引计算机从活动分区引导启动操作系统（BIOS下启动操作系统的方式）**；分区表的作用是记录硬盘的分区信息。

    1. 在MBR中，分区表的大小是固定的，一共可容纳4个主分区信息。

    1. 在MBR分区表中逻辑块地址采用32位二进制数表示，因此一共可表示2^32（2的32次方）个逻辑块地址。如果一个扇区大小为512字节，那么硬盘最大分区容量仅为2TB。

    1. 一个硬盘最多可创建4个主分区。活动分区是基于主分区的，磁盘分区中的任意主分区都可以设置为活动分区。如果电脑上4个主分区都安装了不同的系统，那被标记为活动分区的主分区将用于初始引导，即启动活动分区内安装的系统。

### GTP
PMBR的作用是，当使用不支持GPT的分区工具时，整个硬盘将显示为一个受保护的分区，以防止分区表及硬盘数据遭到破坏。UEFI并不从PMBR中获取GPT磁盘的分区信息，它有自己的分区表，即GPT分区表。

1. GPT磁盘分区样式支持最大卷为128 EB（Exabytes）并且每磁盘的分区数没有上限，只受到操作系统限制（由于分区表本身需要占用一定空间，最初规划硬盘分区时，留给分区表的空间决定了最多可以有多少个分区，IA-64版Windows限制最多有128个分区，这也是EFI标准规定的分区表的最小尺寸）。与MBR分区的磁盘不同，至关重要的平台操作数据位于分区，而不是位于非分区或隐藏扇区。另外，GPT分区磁盘有备份分区表来提高分区数据结构的完整性。???

1. GPT分区表，没有扩展分区与逻辑分区的概念，所有分区都是主分区。


1. 链接
    1. http://tech.hqew.com/news_1847730 (good)
    1. http://www.cnblogs.com/sddai/p/6351715.html


    1. https://www.cnblogs.com/ForestNet/p/6060508.html

### 物理结构 CHS
1. 盘片
1. Cylinder（柱面）具有相同磁道编号的同心圆组成柱面
1. Head（磁头，就是几个盘面,一个盘片有两个盘面,可以有两个磁头）
1. Sector（扇区就是每一个磁道中被分成若干等分的区域，每个扇区512Byte大小）

存储容量＝磁道（柱面）数 × 磁头数 × 每道扇区数 × 每扇区字节数 

1. 簇是一个或多个扇区组成的单位。文件占用磁盘空间时，基本单位不是字节而是簇。
1. 扇区是磁盘最小的物理存储单元，一般而言是512kb大小每个扇区，但是操作通常不直接管理每一个扇区，而是通过将若干个扇区组成的一个更大的集合来去进行操作管理。
1. 这个比扇区更大的集合，在Windows下叫做簇；在Linux下叫做块（block）。

1. 簇是操作系统所使用的逻辑概念，而非磁盘的物理特性。

File Allocation Table 是“文件分配表”

FAT16（Windows）：支持最大分区2GB，最大文件2GB。
    最小簇：2KB
            4KB
            8KB
            16KB
    最大簇：32KB    →   2GB
FAT32（Windows）：支持最大分区128GB，最大文件4GB。???有那些簇大小,tmd怎么算的
    1. 簇大小有那些
        1. https://support.microsoft.com/zh-cn/help/192322/description-of-default-cluster-sizes-for-fat32-file-system

NTFS（Windows）：支持最大分区2TB，最大文件2TB。

ExFAT： 专为闪存和U盘设计，空间浪费小

在Windows操作系统中，我们可以使用Chkdsk命令查看硬盘分区的簇大小(“分配单元”或者“Allocation unit”。)

 簇：系统读读写文件的基本单位，一般为2的n次方个扇区(由文件系统决定)

https://blogs.technet.microsoft.com/askcore/2010/02/18/understanding-the-2-tb-limit-in-windows-storage/

https://blog.csdn.net/Ming_5257/article/details/73014942





每个磁道上划分出很多扇形区域，称为扇区，每个磁道上的扇区都从1开始编号，每个扇区512字节，英语中称为Sectors。一个磁道一般有63个扇区。

一个需要注意的地方：每磁道扇区编号从1开始，全硬盘绝对扇区编号从0开始(man fdisk | less )

整块硬盘可以分为很多分区，每个分区可以格式化为不同的文件系统。每个分区的第1扇区（相对该分区开始来讲），叫做引导扇区（Boot Sector）。在全硬盘的第0扇区，也有一块引导扇区，为了以示区别，将之称为主引导扇区（Master Boot Sector，MBR）。MBR里面前446字节是引导程序，后面紧跟64字节的分区表，再加上2字节的引导标志正好是512字节。每个分区的分区表表项为16字节，整个分区表可以记录四个分区的信息，所以一块硬盘只能有4个主分区。引导扇区一共5个（4个分区的+1个MBR）
https://blog.csdn.net/mirage1993/article/details/50855114


In CHS addressing the sector numbers always start at 1, there is no sector 0,[1] which can lead to confusion since logical sector addressing schemes (e.g., with logical block addressing (LBA), or with "relative sector addressing" in DOS) typically start counting with 0.

iFor physical disk geometries the maximal sector number is determined by the low level format of the disk. However, for disk access with the BIOS of IBM-PC compatible machines, the sector number was encoded in six bits, resulting in a maximal number of 111111 (63) sectors per track. This maximum is still in use for virtual CHS geometries.

https://en.wikipedia.org/wiki/Cylinder-head-sector#endnote_a



第一个分区不从1扇区开始是有传统的。虽然MBR本身确实一个扇区512B就能放下（除了分区表等固定开销更只有446字节——用grub术语，这里的代码称为stage1），但往往习惯上用接下来的63扇区存放其他启动代码。因为可想而知446字节基本连分区格式都描述不清，更别提从各种各样的文件系统里提取接下来的引导目标了。因此一般MBR的写法都是直接载入接下来的2~63扇区(stage 1.5)继续执行，而stage 1.5有30k多点的空间基本可以写进常用文件系统的判断和载入了，就可以进一步载入磁盘上的部分（stage2）了。设计更精巧的引导程序比如grub2的stage 1.5确实可以放在磁盘上而不用占用2~63扇区，但是这是以它安装时必须在MBR里硬写进stage1.5相对stage1的偏移为代价的。事实上63扇区对有些引导器还是不太够用的。

到了GPT上，因为EFI已经确保至少会支持FAT32文件系统并且一开始就支持以文件为stage1（不考虑EFI本身的情况下），就完全没必要继续这种精巧而脆弱的设计了。



CHS方式寻址时，扇区号是从1开始的。但是实际的物理扇区是从0开始的，对于LBA寻址方式来说扇区号也是从0开始
https://zhidao.baidu.com/question/1987866988258664547.html



Block devices can be divided into one or more logical disks called partitions.  This division is  recorded  in the  partition  table, usually found in sector 0 of the disk.  (In the BSD world one talks about `disk slices' and a `disklabel'.)

man fdisk | less 
usualy found in sector 0 of the disk
印证了对于整块硬盘来说扇区从0开始，对于分区来说，1是个相对数字



SATA/USB/SAS 等磁盘接口都是使用 SCSI 模块来驱动的, 因此这些接
口的磁盘装置文件名都是/dev/sd[a-p]的格式。 所以 SATA/USB 接口的磁盘根本就没有一定的顺序,
那如何决定他的装置文件名呢? 这个时候就得要根据 Linux 核心侦测到磁盘的顺序了


早期的 Linux 系统为了兼容于 Windows 的磁盘,因此使用的是支持 Windows 的 MBR(Master Boot
Record, 主要开机纪录区) 的方式来处理开机管理程序与分区表!


## CPU
/proc/cpuinfo
    1. address sizes
        1. 我的sl410k 查看的address sizes是36，即64GB,

## 内存
1. 32位CPU每次可以处理32个字位，即32bits=4Bytes,每一个位置都是1Byte,这是内存的基本单位，所以32位操作系统配32位CPU，理论上可以寻找4GB的地址。由于硬件等原因，系统显示会不到4G。

1. 在单片机中，存储的容量都以字节（byte）为单位的，就是说STM32是32位的，其寻址范围应该是4Gbyte而不是4Gbit。
    2^32bit * 1Byte

    2^64 = math.pow(2,64)/1024/1024/1024/1024/1024 == 16384P
                          k     M   G     T     P
    1. 为什么64bit系统可使用的内存达不到理论值呢?
        1. CPU /proc/cpuinfo 
        1. 操作系统
        1. 主板

1. KVR就是Kingston Valuebale Ram，金士顿经济型内存，供应一般市场。还有高端的HyperX系列
    1. KVR1333D3
    1. D3就是ddr3
## 显卡


## 一些插槽
1. AGP插槽主要用在显卡上(被PCI-E淘汰)
1. PCI插槽的用途则更广一些，不仅有用在显卡上，还能用于扩展其它设备，如网卡、声卡、调制解调器等等。(被PCI-E淘汰)
1. PCI-E
    1. PCI Express
    1. 诸如独立声卡、独立网卡、USB 3.0/3.1接口扩展卡以及SSD等硬件都可以使用PCI-E插槽 
    1. PCI-E插槽有x1，x2，x4，x8，x12，x16和x32共计7种版本，对应1/2/4/8/12/16/32通道，
        1. PCI-E x32由于体积问题，仅应用在某些特殊场合中，对应的量产产品几乎为零；
        1. PCI-E x12则主要用在服务器领域，基本不会出现在消费级平台上；
        1. PCI-E x2则主要用于内部的接口而非扩展插槽，即便是部分有提供该接口的主板，其PCI-E x2也基本是以M.2接口的形式出现，而非PCI-E插槽的形式。
        1. 因此目前主板上主流的PCI-E插槽，基本就集中在PCI-E x1/x4/x8/x16四种上

    1. 常用PCI-E 针脚总数
        1. PCI-E x1: 36
        1. PCI-E x4: 64
        1. PCI-E x8: 98
        1. PCI-E x16: 164

    1. 链接
        1. http://www.expreview.com/57764.html

1. IEEE1394
    1. 接口是苹果公司开发的串行标准，俗称火线接口（firewire）。同USB一样，IEEE1394也支持外设热插拔，可为外设提供电源，省去了外设自带的电源，能连接多个不同设备，支持同步数据传输。
    1. 一般用于视频

1. USB
    1. USB2.0没有S标志
    1. USB3.0有SS标志

BIOS:黑色的小芯片,一般采用DIP封装方式

CMOS也是个芯片，是个RAM，里面存的是电脑硬件配置信息和电脑其他有关的东西，电脑启动了就由电脑电源为其供电，电脑关闭则由一个后备电池供电保证数据不丢失。

BIOS的第三条功能——CMOS设置程序，所以CMOS的设置程序是BIOS本身的一个功能，而BIOS又是存在BIOS芯片中的，所以原则上应该这样描述：用存储在BIOS芯片中的BIOS中的CMOS设置程序对CMOS进行设置。但是这种准确的阐述显得非常长，也有些拗口。于是干脆就把它简单称作“BIOS设置”或者叫“CMOS设置”。但是请一定要明白，CMOS设置才是正确的，而BIOS根本没有设置这一说，它本身只是一个程序，实现一些功能而已，BIOS程序本身不需要任何设置

https://www.ithome.com/html/digi/317426.htm

DIP封装，是dual inline-pin package的缩写，也叫双列直插式封装技术
    1. 衡量一个芯片封装技术先进与否的重要指标是芯片面积与封装面积之比，这个比值越接近1越好。
    1. DIP数字，数字表示有几个针
    1. 链接
        1. https://wenku.baidu.com/view/2b0dbd1a876fb84ae45c3b3567ec102de2bddfd4.html

### DVI
1. DVI-A
    1. Anolog
1. DVI-D
    1. Digital
    1. DVI-D接口是纯数字的接口，只能传输数字信号，不兼容模拟信号。由于不传输模拟信号，因此无法转换vga接口。
1. DVI-I
    1. Integrated
    1. DVI-I接口是兼容数字和模拟接口的，为了兼容传统VGA模拟信号，就比DVI-D多了4个信号引脚，用来传输模拟信号。

1. 参考
    1. https://baike.baidu.com/item/DVI%E6%8E%A5%E5%8F%A3/9731353?fr=aladdin

### DP（display port)

### 莲花线
RCA是Radio Corporation of American的缩写词，因为RCA接头由这家公司发明的。
RCA又叫AV端子，也称AV 接口，几乎所有的电视机、影碟机类产品都有这个接口。 RCA接头是目前为止最为常见的一种音/视频接线端子。

RCA端子采用同轴传输信号的方式，中轴用来传输信号，外沿一圈的接触层用来接地，可以用来传输数字音频信号和模拟视频信号。

一分为二线
就是你可以同时用耳机和音响,没有这个线你只能用耳机和音响的其中的一个。
一分为三线
连接 DVD 和电视的音频线 视频线 

https://wenku.baidu.com/view/60e8651342323968011ca300a6c30c225901f010.html





### 双绞线
        1       2       3       4       5       6       7       8
568B    白橙    橙      白绿    蓝      白蓝    绿      白棕    棕
568A    棕      白棕    橙      白蓝    蓝      白橙    绿      白蓝
        8       7       6       5       4       3       2       1
    
    1 发送 +
    2 发送 -
    3 接收 +
    6 接收 -

## 重做系统注意
## 备份
1. C盘
1. 邮箱
    1. 邮件文件
        1. 控制面板、邮件、数据文件(outlook)
        1. outlook设置选项中查找
            1. pop3模式的本地文件格式为pst
            1. imap/exchange 是ost
            1. 不能互转的
    1. 规则
        1. 导出规则
1. 聊天记录
1. 浏览器收藏夹
    1. IE C:\users\用户名\Favorites\Links
1. IP
1. 驱动
    1. 驱动精灵/百宝箱/修改文件路径 可以选择压缩

1. WinPE(Windows Preinstallation Environment)
    1. Windows预安装环境，是带有有限服务的最小Win32子系统，基于以保护模式运行的Windows XP Professional及以上内核
    1. UEFI版本 和 Legacy版本
    1. 品牌
        1. 微PE(WePE)
            1. 可以不安装到系统，直接安装到U盘
        1. 老毛桃
        1. 大白菜

1. Ghost
    Disk：磁盘的意思；
　　Partition：即分区，在操作系统里，每个硬盘盘符（C盘以后）对应着一个分区；
　　Image：镜像，镜像是Ghost的一种存放硬盘或分区内容的文件格式，扩展名为.gho；

    proceed with parlition image creation?
        proceed with 继续做

## 文件系统
1. 磁盘配额：在一台电脑有多个用户使用时，而作为系统管理员，可以给用户设置不同的磁盘空间容量。
1. 使用的簇越小，保存信息的效率就越高
1. fat16
    1. 最大分区为2GB
1. fat32
    1. 单文件小于4G
    1. 单个分区最大32G
    1. 磁盘空间可支持[512MB,2TB]
    1. 不支持磁盘配额
    1. 文件安全设置：不支持
    1. 比fat16更小的簇
1. NTFS
    1. 单个文件没有容量限制
    1. 单个分区最大2TB
    1. 不支持磁盘配额
    1. 文件安全设置：支持(权限、加密之类的)
    1. 比fat32更小的簇

1. 双系统
    1. window
        1. 另一个系统可以安装到逻辑分区，只要保证有一个是正常安装即可
    1. linux


## 疑问
1. 分区表，文件管理系统
1. UEFI是为了代替BIOS的，UEFI是放在哪里的？Legacy是放在哪里的？


## outlook邮箱
### 服务协议
#### 发送
1. POP3(Post Office Protocol，邮局协议)
    1. 收邮件
    1. 端口110  SSL:995
1. IMAP
    1. 端口143  SSL:993

客户端授权码

#### 接收
1. SMTP
    1. 发邮件
    1. 端口25   SSL:994
1. exchange


outlook
1. 不要勾选[要求使用安全密码验证(SPA)进行登录]

发送服务器
    1. 勾选 [我的发送服务器（SMTP)要求验证]
        1. 使用与接收邮件服务器相同的设置
高级
    1. 发送和接收选择SSL
以上是针对126邮箱

### POP3 和 IMAP的区别
POP3协议允许电子邮件客户端下载服务器上的邮件，但是在客户端的操作（如移动邮件、标记已读等），不会反馈到服务器上，比如通过客户端收取了邮箱中的3封邮件并移动到其他文件夹，邮箱服务器上的这些邮件是没有同时被移动的 。

POP3作为三者中最老的协议，它会将邮件数据下载到第一个连接客户本地，如果还有用户想要连接下载的话，服务端已经没有了。它的好处是应用广泛；坏处是无法同步消息；一旦下载服务端即消失（你可以设置在服务端保存副本，但这并不改变协议的本质）；无法同步联系人、日历和子邮件目录。


而IMAP提供webmail 与电子邮件客户端之间的双向通信，客户端的操作都会反馈到服务器上，对邮件进行的操作，服务器上的邮件也会做相应的动作。

POP3 是单向传输的
IMAP 是双向传输的

若在web邮箱中设置了“保存到已发送”，使用客户端POP服务发信时，已发邮件也会自动同步到网页端“已发送”文件夹内。

http://help.163.com/10/0203/13/5UJONJ4I00753VB8.html

### outlook 图文签名排版问题
文件、选项、邮件、签名

1. 在Word中先写好签名内容并插入图片，然后点击图片，在“格式”->“位置”中选择你想要的布局和文字环绕方式。
1. 将编辑好的内容复制粘贴到Outlook邮箱的签名中，虽然粘贴过来之后看不到图片，但是实际创建邮件时，签名中就会显示图片了。


### Outlook怎么删除邮箱账户
1. 文件、账户、账户设置、选中删除
1. 控制面板、邮件、显示配置文件、删除所有配置文件。
1. 再打开outlook时会提示创建新的配置文件，起一个名字创建就可以了。

### 疑问
1. 什么是 SPA 验证？什么是SMTP验证




## 面试
1. 谈谈对IT运维工程师这个职位的认识
1. 主要的工作内容有哪些
1. 巡检要检查什么
    1. 
1. outlook不能接收邮件，但能发送邮件的原因
    1. 邮箱满了，这也可以？

1. 注册表(Registry)
    1. regedit
1. 组策略
    1. gpedit.msc 

1. 路由器的3个功能
    1. NAT
    1. 路径

    1. Linksys 2003年被Cisco收购
    1. 2013年被贝尔金收购
1. 标准的运维服务

### 实际操作
1. 共享文件夹
1. 防火墙限制DNS
1. Outlook



## 共享文件夹
win10遇到的坑
smbd 共享成功设置了，但是win10 不让访问,
你不能访问此共享文件夹,因为你组织的安全策略组织未经身份验证的来宾访问
这是windows10 的设置问题
解决方法
    1. gpedit.msc
    1. 找到“计算机配置-管理模板-网络-Lanman工作站”，在右侧内容区“启用不安全的来宾登录”状态是“未配置”
    1. 双击“启用不安全的来宾登录”将其修改为“已启用”并单击确定按钮，设置完成再次尝试访问发现可以正常访问了。






### HP BIOS密码
rzhl2018



## 
MSC(Microsoft Snap-In Control)文件，是微软管理控制台MMC(Microsoft Management Console)用来添加/删除的嵌入式管理单元文件

主动 勤奋 尊重 学习 适用


gemini:双生子；双胎
www.itgemini.net



## 打印机
1. 针式打印机
    1. 24针
    1. 复写纸
    1. USB、IEEE1284并口、串口
1. 喷墨打印机
    1. USB、无线
1. 激光打印机
    1. 硒鼓
        1. 一体硒鼓
        1. 二体硒鼓
        1. 三体硒鼓
    1. USB、网线、无线

1. guest账户用打开吗?
1. spool
    net start  spooler
1. services.msc/print spooler

关闭 win10 额 windows defender
gpedit.msc/计算机配置/管理模板/windows Defender防病毒程序/关闭 启用



## win server 
刷新组策略
gpupdate/force

**win2008 创建域命令**
dcpromo

**更新组策略**
gpupdate/force

组织单元 和 组 的区别
组织单元：相当于一个部门
组：权限


### 域
DC(domain control)
AD(activity directory)
OU(organization unit) 组织单位


安装dns时，要禁用ipv6
    提示静态ip，可以将IPV6取消
    同时设置静态ipv4地址

组账户
    相同属性，具有相同的权限，同linux中的group
    ad中需要自己创建组

将此服务器提升为域控制器
    目录服务还原模式（DSRM)密码
    NetBIOS名称 为不带.com 全大写
    创建DNS委派:否???
    新域管理员的密码将与此计算机本地管理员的密码相同
    

2012 启动wifi
角色、安装无线lan
若重新启动服务器后仍不能连接无线网络，可尝试在设备管理器卸载无线网卡驱动，再启动一次即可。

退域时输入的用户名密码是域管理员的？

ie增强
点击“本地服务器”--“ie增强的安全配置 ”后面的“未知”


AD域内DNS服务器如何解析公网域名
http://www.cnblogs.com/jfzhu/p/4022999.html
    一种方式是将域内每台计算机都额外添加一个公共DNS服务器
    另外一种比较简便的方法就是在域内DNS服务器上增加一个转发器（Forwarder）


## 一般问题
### 无法上网
cmd / control /网络和internet/网络和共享中心

DNS

防火墙设置了出站规则，禁用即可，防火墙不需要重新更新配置

c:\windows\System32\drivers\etc\hosts





## 外设 多媒体会议室
宝利通 Polycom
三方通话
多点控制单元MCU

电话交换机(集团电话)
    需要通过服务商开通

主机、分机

时分程控电话交换机


### 监控
摄 穿 控 显 录





mstsc域服务器，用户名可以是 BILL\Administrator 也可以是administrator


### 无法上网问题汇总
ie代理打开后，
    netstat -a   可以看到80端口listing
    ping www.z.cn OK
    

## 查看共享文件夹
net share

或者

计算机、管理、共享文件夹



## 关于加班
1. 邮件
    工程师发送邮件至 
1. 给直接领导
1. 钉钉 截图


## 关于请假
1. 客户
1. 同创双子
1. 融智汇力


## 产品
大牛驻场：7999起，我们一个人7999
大牛半驻场：69元/人/小时 
护航中文半驻场：89元/人/小时
护航英文文半驻场：元/人/小时


两电一机全网络
    电脑，电话，打印机，网络，wifi


有关钱的找
    陈倩


## 奖励



## vmware 安装 苹果系统
1. unlocker
1. 右键获取所有权.reg
    1. 提取vmware所有权
1. dmg 转换成 iso







