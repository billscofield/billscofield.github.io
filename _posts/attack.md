## TCP 攻击
### SYN攻击
在三次握手过程中，服务器发送SYN-ACK之后，收到客户端的ACK之前的TCP连接称为半连接(half-open connect).此时服务器处于Syn_RECV状态.当收到ACK后，服务器转入ESTABLISHED状态.

Syn攻击就是 攻击客户端 在短时间内伪造大量不存在的IP地址，向服务器不断地发送syn包，服务器回复确认包，并等待客户的确认，由于源地址是不存在的，服务器需要不断的重发直 至超时，这些伪造的SYN包将长时间占用未连接队列，正常的SYN请求被丢弃，目标系统运行缓慢，严重者引起网络堵塞甚至系统瘫痪。

Syn攻击是一个典型的DDOS攻击。检测SYN攻击非常的方便，当你在服务器上看到大量的半连接状态时，特别是源IP地址是随机的，基本上可以断定这是一次SYN攻击.在Linux下可以如下命令检测是否被Syn攻击

netstat -n -p TCP | grep SYN_RECV

一般较新的TCP/IP协议栈都对这一过程进行修正来防范Syn攻击，修改tcp协议实现。主要方法有SynAttackProtect保护机制、SYN cookies技术、增加最大半连接和缩短超时时间等.

但是不能完全防范syn攻击。

### 参考链接
https://www.cnblogs.com/zmlctt/p/3690998.html


## 扫描
1. UDP  扫描
1. TCP OPEN 扫描
1. TCP HALFOPEN 扫描
1. FIN 扫描
1. XMAS 扫描
1. NULL 扫描




-sU UDP扫描
-p <port-num> 端口
nmap -Pn 
-sS     //TCP SYN扫描
    匿名扫描（日志会在建立连接后才会有）
    client 一般会发3次SYN包
    Server 安全设备有可能会丢掉首次SYN包











