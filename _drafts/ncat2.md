Ncat operates in one of two primary modes:
    1. connect mode 
        1. <hostname> and <port> arguments tell what to connect to. <hostname> is required, and may be a hostname or IP address. 
        1. If <port> is supplied, it must be a decimal port number. If omitted, it defaults to 31337.
    1. listen mode
        1. <hostname> and <port> control the address the server will bind to. Both arguments are optional in listen mode. 
        1. If <hostname> is omitted, it defaults to listening on all available addresses over IPv4 and IPv6. 
        1. If <port> is omitted, it defaults to **31337.**
    类似于CS架构，Client and Server

## chat
ncat -l -p 31337
ncat -lp 31337
ncat -v -lp 31337


## file transfer
-w, --wait :connect timeout //这个参数有什么作用呢？没有看到效果

server:
    ncat -v -lp 31337 -w 30 < a.txt
client:
    ncat -v -w 2 localhost 31337 > b.txt


## scan port
ncat -v www.z.cn 80
然后输入
get / http /1.1 或者    apache  并没有返回任何消息啊,这是怎么回事? netcat 确实可以返回信息


## version 
ncat localhost 22       //注意用法，ncat -p 22 localhost 这种用法是不行的!
同 nmap -sV -p 22 localhost









