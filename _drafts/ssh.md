# SSH
## SSH (Secure Shell) 安全外壳协议
1. 建立在应用层

1. 端口号:22
1. linux中守护进程：sshd
1. OpenSSh
1. 服务器端主程序：/usr/sbin/sshd
1. 服务器端配置文件：/etc/ssh/sshd_config

1. 客户端主程序：/usr/bin/ssh
1. 客户端配置文件：/etc/ssh/ssh_config

* telnet 是明文的
    * 交换机、路由器好像很多都是telnet明文的
* ftp 是明文的

## SSH 加密原理
### 对称加密算法（单秘钥加密）
一个锁和一个钥匙

### 非对称加密算法(asymmetric cryptographic algorithm)又名公开密钥加密算法
1. 公钥（想象成锁）publickey
1. 私钥（想象成钥匙）privatekey
1. 1024bit 加密，可以看成是不可破解的

rsa 和 dsa

Bill 有一个私密文件想传给 Xian,Xian 就把他的锁给Bill,Bill用这把锁把文件锁上传给Xian,Xian 就可以拿自己的钥匙把他打开了。锁子是明文传输的也没有问题。

SSH 便是在 非对称加密的基础上产生的

## SSH 配置文件
ubuntu-mate 默认没有安装 sshd
    apt install openssh-server
    apt install openssh-client
/etc/ssh/sshd_config

Port 22     //运营的话建议修改掉
ListenAddress 0.0.0.0       监听的IP
Protocol 2                  二代协议 
HostKey /etc/ssh/ssh_host_rsa_key   私钥保存位置
HostKey /etc/ssh/ssh_host_dsa_key   私钥保存位置
ServerKeyBits 1024                  1024bits 加密
SyslogFacility AUTHPRIV     ???
LogLevel                            日志等级
GSSAPIAuthentication yes            GSSAPI认证,可以关闭
    * 需要DNS
    * 服务器端无法控制，关闭自己的


PermitRootLogin yes 允许root的ssh登录   建议no
PasswordAuthentication yes  允许使用密码验证登录 改为no
上边两个改为no,以启用下面的钥匙对验证

服务器上开的端口号是有限的

ssh秘钥对验证登录

### 原理
公钥登录是为了解决每次登录服务器都要输入密码的问题，流行使用RSA加密方案，主要流程包含：
　　　　1. 客户端生成RSA公钥和私钥
　　　　2. 客户端将自己的公钥存放到服务器
　　　　3. **客户端请求连接服务器，服务器将一个随机字符串发送给客户端**
　　　　4. **客户端根据自己的私钥加密这个随机字符串之后再发送给服务器**
　　　　5. **服务器接受到加密后的字符串之后用公钥解密，如果正确就让客户端登录，否则拒绝。这样就不用使用密码了。**
### 实践
PubkeyAuthentication yes    是否允许公钥验证
AuthorizedKeyFile   .ssh/authorized_keys    公钥保存位置

PermitEmptyPasswords no 允许空密码登录



client端
ssh-keygen -t rsa   //会提示保存位置

server端
scp id_rsa.pub root@1294iw:/root
mkdir .ssh
cat id_rsa.pub >> .ssh/authorized_keys
chmod 600 authorized_keys   // /etc/selinux

RSSAuthentication yes   开启RSA验证
PubkeyAuthentication yes    是否使用公钥验证
AuthorizedKeyfFile  .ssh/authorized_keys    公钥的保存位置
PasswordAuthentication no   禁止使用密码验证登录

service sshd restart



## 使用
* 连接
    * ssh root@192.168.1.104
* scp 远程复制
    * 下载  scp root@192.68.1.2:/root/home/bill/a.txt ./
    * 上传  scp -r /home/bill/a.txt root@192.1.1.1:/tmp/


sftp 使用ssh的ftp 文件传输协议
    * lls:list local files
    * ls:查看所在远程主机的文件资源
    * get 下载
    * put 上传

window 工具
    * securityCRT
    * xshell
