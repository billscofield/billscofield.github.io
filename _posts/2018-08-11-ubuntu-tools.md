---
layout: post
title: My Ubuntu and Tools Recommend
redirect_from:
    - /2018/08/11/
---

## fim 用终端打开图片
* https://my.oschina.net/ssdlinux/blog/1825580
* 与大多数 GUI 图片浏览器相比，它非常轻巧。
* FIM 意即 Fbi IMproved。对于那些不知道的人，Fbi 是指 Linux 中的 frame buffer imageviewer。它使用系统的帧缓冲器直接从命令行显示图像。默认情况下，它能用终端显示 bmp、gif、jpeg、PhotoCD、png、ppm、tiff 和 xwd。对于其他格式，它会尝试使用 ImageMagick 的转换。
* FIM 基于 Fbi，它是一款高度可高度定制及脚本化的图像浏览器，非常适合使用 Vim 文本编辑器或 Mutt 等软件的用户。
* sudo apt-get install fim

### 快捷键
* PageUp / Down：上一张/下一张图片
* + / - ：放大/缩小
* a：自动缩放
* w：自适应宽度
* H：自适应高度
* h：左边
* j / k：平移/向上
* l：右边
* f / m：翻转/镜像
* r / R：旋转（顺时针/逆时针）
* ESC / q：退出

## SMPlayer(Qt)

## glances (glance[glɑ:ns] 一瞥)
* 一款资源监视工具，可以监视内存，cpu等资源占用情况，功能要比top命令要强大得多
    * 安装：sudo apt-get install glances

## cmus 命令行音乐播放器 C Music Player
* https://cmus.github.io/

### 常用功能
* 添加文件
    * :add ~/Music
* 播放
    * x
* 清空播放列表
    * :clear
* 下一首
    * b
* 上一首
    * z
* stop
    * v
* 暂停
    * c
* 音量
    * 加 ]
    * 减 [
* 展开
    * 空格

##  启动栏：Docky
* 一款很像OS X的启动栏，把系统启动栏自动隐藏，然后使用这个启动栏，会很像MAC一样。支持自动隐藏、透明、调整图标大小等。

## TeamViewer


## 图片外链网站
* <del><a href='http://www.tietuku.com/'>贴图库</a></del>
    * <del>根据官网介绍，“为用户提供无限空间、无限流量、无限数量的图片存储服务”，并且第一次使用时感觉很好，所以向大家推荐</del>
    * 免费的居然只保存7天，故删除


## markdown 编辑器
* <a href='https://typora.io'>typora</a>
    * Typora 使用的是 GitHub 风格的 Markdown 语法
    * 免费

## you-get
1. 安装
    1. 安装 ffmpeg
        1. 添加源。
            * sudo add-apt-repository ppa:djcj/hybrid
        1. 更新源。
            * sudo apt-get update
        1. 下载安装。
            * sudo apt-get install ffmpeg
    1. 安装 you-get
        1. pip3 install you-get

1. 下载视频
    1. --info/-i 以查看所有可用画质与格式
        * you-get -i [url]

    1. 暂停与恢复
        1. 暂停 ctrl + c
            * 临时的.download文件将保存于输出目录。下次使用you-get传入相同参数时，下载将从上次继续开始. 如果下载已经完成 (临时的.download 扩展名消失), you-get将忽略下载.
        1. 用--force/-f强行重下载. (注意: 将覆盖同名文件或临时文件!)

    1. 设置输出文件名或路径
        * 使用--output-dir/-o 设定路径, --output-filename/-O 设定输出文件名:

            ```
            $ you-get -o ~/Videos -O zoo.webm 'https://www.youtube.com/watch?v=jNQXAC9IVRw'
            ```

        * 提示:
            * 如果原视频标题含有与系统不兼容字符，十分有效.
            * 也可以帮助使用脚本批量下载于指定目录和文件名.
1. 观看视频

使用 --player/-p 将视频喂进播放器, 例如 mplayer 或者 vlc,而不是下载:

```
$ you-get -p vlc 'https://www.youtube.com/watch?v=jNQXAC9IVRw'
```

或者你想在浏览器中观看而不希望看广告或评论区:

```
$ you-get -p chromium 'https://www.youtube.com/watch?v=jNQXAC9IVRw'
```

To know more about you-get, please go to https://github.com/soimort/you-get/wiki/%E4%B8%AD%E6%96%87%E8%AF%B4%E6%98%8E



## asciinema 
    Terminal session recorder

## nethack 游戏
sudo apt-get install nethack
然后会有提示安装哪个版本


## mysql 自动补全工具
1. sudo apt install mycli
    1. F4 切换为vim模式
    access denied for root@localhost???
    1. use mysql 
    1. update user set authentication_string=password("密码"), plugin='mysql_native_password' where user=root;

## 路由跟踪指令traceroute(ICMP)(windows 用tracert)
用来检测发出数据包的主机到目标主机之间所经过的网关数量的工具。

sudo apt-get install traceroute
    1. -n代表，仅要看ip地址，不要显示主机名、域名那些东西，

ping 太粗糙

tracerout www.baidu.com


## gns3
sudo add-apt-repository ppa:gns3/ppa
sudo apt-get update
sudo apt-get install gns3-gui


Dynamips hypervisor process has stopped, return code: -11  ??? CPU不支持虚拟化??
应该就是了，T4500 CPU 不支持虚拟化



## epub(Electronic Publication)



## recuva 数据恢复软件


## nessus
安装完成后首先进行配置
    https://localhost:8834
    这一步要输入license number,并会自动下载 the files(plugins) needed to scan your assets
    

## wine
Virtual packages like 'wine' can't be removed
