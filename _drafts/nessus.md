## 
系统漏洞扫描与分析软件
可以产生报告、建议

漏洞扫描有两种：基于漏洞的匹配方法和基于插件方法
Nessus采用基于插件的技术,利用插件进行模拟攻击

## 安装

sudo cp Nessus-8.0.1-ubuntu1110_amd64.deb /opt

sudo dpkg -i Nessus-8.0.1-ubuntu1110_amd64.deb

sudo /etc/init.d/nessusd start

设置账号密码
    https://localhost:8834
    填写邮箱获得注册码
    插件下载
        一般提供的方法在没有VPN的时候下载不了，可以百度下载all-2.0.tar.gz
    
        加载nessus plugins 将all-2.0.tar.gz放到目录下，然后通过nessuscli update all-2.0.tar.gz进行升级
            sudo ./nessuscli update all-2.0.tar.gz
        启动nessus 
            sudo ./nessusd

修改默认端口
    ./nessuscli fix –set xmlrpc_listen_port=端口 

参考连接
    https://blog.csdn.net/qq_42280544/article/details/84147640

    https://blog.csdn.net/m0_37917446/article/details/81705058
