
-t 
    Specify a particular host to ARP poison (if not specified, all hosts on the LAN).  Repeat  to  specify
    multiple hosts.
    
    -t 192.168.1.2 -t 192.168.1.3 -t 192.168.1.4

host   
    Specify the host you wish to intercept([ˌɪntəˈsept] 拦截) packets for (usually the local gateway).
    希望拦截**被攻击机和哪个host之间的通信**，一般都是网关。
    **-i的物理地址是哪个ip**

被攻击者 
    192.168.1.100
网关
    192.168.1.1
攻击者
    192.168.1.200

arpspoof 192.168.1  //广播192.168.1.1（网关）的mac地址是本机-i的mac , 不写-i的话针对只有一块网卡能上网的情况
    

ARP欺骗一般目的是把自己伪装成网关，从而欺骗目标机器，使本应发送到真实网关的数据包发送到欺骗者的机器。

广播arpspoof 也会告诉网关1.1 的mac地址是攻击者的mac , 这样可以吗？

-r
    毒化两个主机（目标和主机（host））以捕获两个方向的网络流量。（仅仅在和-t参数一起使用时有效）双向欺骗

    sudo arpspoof -t 192.168.1.100 -r 192.168.1.1



-c 
指定在恢复ARP配置时使用的硬件地址；当在清理（cleaning up）时，数据包的源地址可以用自己的也可以用主机（host）的硬件地址。使用伪造的硬件地址可能导致某些配置下的交换网络、AP网络或桥接网络通信中断，然而它比起默认值————使用自己的硬件地址要工作地更为可靠。


参考链接
1. https://www.anquanke.com/post/id/151762


MITM(Man in the middle attack)
    https://en.wikipedia.org/wiki/Man-in-the-middle_attack
