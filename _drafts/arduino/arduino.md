## Arduino 来历
1. Arduino Srl来自意大利，是全球领先的开源电路板提供商，

1. arduino uno [un ˈəʊ]], Arduino 的翻译成中文是“阿尔杜伊诺”，正确的英文发音中“r”和“i”的音通常就迅速带过。

1. Arduino 源于意大利，是1000多年前一位国王的名字，而在这位国王的出生地，意大利北部一个如诗如画的小镇【Ivrea】，有家叫【di Re Arduino】的酒吧，Arduino 联合创始人经常光临这家酒吧，公司因此而得名。

1. Uno意大利语”1“的意思，这其实就是表示Arduino Uno是第一块电路板的意思
1. 正确发音是：wu no（no是英文No的发音），按照中文的“乌诺”读了会变成“wu nuo”。

关于奥松机器人
奥松机器人于2013年正式成为Arduino中国区域代理商。

## Power
1. vcc 是电源的供电电压
1. vdd 是芯片工作电压
    1. 早期TTL门电路的说明书中往往用VCC标注电源引脚。后来出现了CMOS工艺的门电路，电源引脚往往标注VDD。
    1. 早期是有讲究的，现在都随便用了
1. GND 接地，相当于低电平
1. AREF:Reference voltage for the analog inputs(模拟输入的基准电压）
1. VIN：voltage input(电压)，是作为有外部电源时的输入端口。

1. reset 按钮：重启？

1. Shields 模组
    1. 直流电刷马达
    1. 手柄
    1. 电子调速器
    1. 飞行控制板
    1. ...

## 接口(接脚Pins)
1. 14个数字接口：0～13号，0号和1号口属于串口通信用的，一般我们不去占用；
    1. 从2号口到13号口是我们可随意使用的数字接口数字接口可以读取数字信号，也可以输出数字信号
    1. 而在2到13号口中带有“～”符号的 **3/5/6/9/10/11(6个)** 接口代表 PWM，它不仅可以输出高电平和低电平信号，也可以输出调制的模拟信号
    1. 不带“～”符号的接口就只能输出5V高电平或者0V低电平
    1. 13脚旁边有个板载发光led,标识为L ,由 Pin13 控制
    1. （这里不深究高低电平的细节，因为事实上对于TTL型的接口高低电平并不严格等于5V和0V，而CMOS型的高低电平则是5V和0V，Arduino上的数字引脚属于TTL型所以严格的讲它们输出的高低电平是有一个误差范围的只要在这个误差范围之内Arduino都认可而不会误判）。

1. 6个模拟接口：Arduino下方A0，A1......,A5这几个带A的接口就是模拟接口。
    1. 需要点出一下的是模拟接口**只能读取不能输出模拟量**（其实也可以输出，不过只能输出5V和0V，并且模拟接口输出的是CMOS信号而非数字接口那种TTL信号），总之呢我们基本上是用模拟接口接收传感器信号就对了，模拟接口是否有其余的功能目前我也还没用到。
    1. 单片机只认0和1这种数字信号，它怎么认得模拟信号？其实这里面用的是一个“映射”的方式来实现模数转换的。

    1. 例如，我们输入一个5V的电平，那么**模数转换器**会自动把0对应0V，1023对应5V，然后我们可以算出5V/1023=0.0048V=4.8mV,所以1对应4.8mV,2对应9.6mV,以此类推一直到5V。可见这里面的**分辨率**是4.8mV,也就是说我们通过这种方法可以辨认出0V到5V之间的电平，例如2.5V就会对应到512这个数字上，然后将512这个数字传入单片机，单片机就知道原来输入了一个2.5V电压。

## TTL电平和CMOS电平
    1. http://www.dzsc.com/data/2017-1-18/111484.html
    1. https://zhidao.baidu.com/question/46832488.html

## USB 接口
1. USB接口：有两个功能 
    1. 用来给Arduino供电 
    1. 和电脑串口通信。

1. 工作状态灯：如果L和On两个灯亮，则说明Arduino在工作。

1. TX，RX灯：这两个灯和串口通信有关，TX闪说明Arduino正通过串口通信发送信息，RX闪说明Arduino正通过串口通信接受信息。

## 教程
lazytomato


## IDE
工具 →  板子 →  Arduino/Genuino Uno
工具 →  序列 →   选择uno

//宣告，声明
int led = 7;
char
double 
boolean
    1. true/HIGH
    1. false/LOW

void setup(){
    //只执行一次
    **pinMode(工作接脚,模式)**
            0-13 A0-A5,INPUT OUTPUT
}

void loop(){

}

每个工作接脚都可以是INPUT或者OUTPUT

数位讯号
    digitalWrite(工作接脚，状态)
                            ,HIGHT   LOW
    
模拟讯号

暂停
    1. delay(时间长度，毫秒ms)


pinMode(13,OUTPUT)
digitalWrite(13,HIGHT)
delay(1000)
digitalWrite(13,LOW)


1. 验证
1. 上传
新增
开启
储存


digitalRead(工作接脚)



if(){

}
else if(){

}
else{

}


端口悬空时，状态不确定

???上拉电阻
    pinMode(7,input)
    digitalWirte(7,HIGH)

???阻抗





根据功率的计算公式：P=U^2/R,在并联电路中,所有的用电器两端的电压基本相等,R越小,其功率也就越大,电炉也不例外.但为什么会有电炉却电阻越大,功率越大这种说法呢?原来是串联电路里才能有这种说法.在串联电路中,通过所有用电器的电流是相等的,根据功率的另一个计算公式：P=I^2*R可知,当电流一定时,电阻越大,其功率也就越大.
所以一定要分析清楚串联还是并联电路,不能一概而论.串联电路时就用公式：P=I^2*R；并联电路就用公式：P=U^2/R.

电压一定
电流一定



1. 都是按照电压一定进行设计的，因为220V电压是一定的，不会出现电流一定的情况
小功率红黄的，它的电阻=电压/电流=1.8/0.02=90Ω
小功率蓝绿的，它的电阻=电压/电流=3.2/0.02=160Ω

大功率红黄的，它的电阻=电压/电流=2.2/0.35=6Ω
大功率蓝绿的，它的电阻=电压/电流=3.4/0.35=10Ω


一般串联一个220欧姆的，1k的更安全

## 半导体
https://baike.baidu.com/item/%E5%8D%8A%E5%AF%BC%E4%BD%93/385669?fr=aladdin

本征半导体
    1. 4 个共价键，束缚电子
    1. 绝对0°导电能力为零
混杂半导体  

电子器件所用的半导体具有晶体结构，因此也把半导体成为“晶体”

si 14   2 8 4
p  15   2 8 5(N型半导体 negative)
b  5    2 3(P型半导体 positive)

PN节
P(B硼) 阳极
    1. 最初始时，上边空穴多，下边可被抢劫的电子多，最终导致电子向P节移动，显负电
N(P磷) 阴极

阳极 -△ |- 阴极

二极管导通之后，它所分得的电压为0.7V
发光二极管导通后所分得的电压为1~2V,电流值为5~20mA,一般0.4v导通
根据上述内容计算所需电阻

1. 烧坏时内部处于断开状态 正反向电阻应该都很大； 短路时电阻为零.

### 稳压二极管
    1. 它的正向特性与普通二极管相同，而反向特性却比较特殊：当反向电压加到一定程度时，虽然管子呈现击穿状态，通过较大电流，却不损毁，并且这种现象的重复性很好;反过来着，只要管子处在击穿状态，尽管流过管子的电流变化很大，而管子两端的电压却变化极小，起到稳压作用。这种特殊的二极管叫稳压管。
    1. 稳压管起着电流的自动调节作用，而限流电阻起着电压调整作用。稳压管的动态电阻越小，限流电阻越大，输出电压的稳定性越好。


中间是势垒
    1. P节靠近中间的地方因为本方面空穴多，中间位置多是电子, 显负电
    1. N节本身点子多，靠近中间的位置，电子被抢劫的多，显正电

有外部电压电子才能冲破势垒

可以直接测试二极管的势垒，万用表 二极管选项

PN节被破坏，我觉得是因为

伏安特性曲线 x-电压  y-电流

-1kv 的反向击穿电压，0.7v的突破势垒电压，用于整流，交流电变直流

磁控管 微波炉，微波主要使水分子运动起来


整流：
    1. 半波

电子翻倍器(肖克利)

最早的灯泡使用电池
后来爱迪生使用直流电

最初的时候
    欧洲220V 50Hz
    美国110V 60Hz


4个二极管的整流桥


三极管 一个开关而已
    光电三极管(base 光敏原件) 
继电器，可以控制更大的，可以控制高压
    光耦继电器
        1. 有高电平触发的
        1. 有低电平触发的

火线：live wire
零线：Neutral wire
底线：earth wire

漆包线


蜂鸣器 就是电铃 继电器 的原理

PCA9865 控制电机芯片

电机作为电感保持电流而产生的反向电动势，可以加一个二极管,有保护的电源提供装置

电梯的原理


神经电流 肌肉电流

光敏电阻

定时器
    延时电路

声敏电阻
    驻极体话筒


## 排阻

```
1   2   3   4
@@@@@@@@@@@@@
@@@@@@@@@@@@@
a   b   c   d
```

1与a2与b3与c4与d之间的电阻都是10欧，与其它的管脚没有任何关系．就是一排电阻，做在了一个原件上


1. 有的还有一个公脚，就是为了方便使用，拿万用表量一下就会发现所有脚对公共脚的阻值均是标称值，除公共脚外其它任意两脚阻值是标称值的两倍，很明显任意两脚通过公共脚脚串联的

```
@@@@@@@@@@@@@
|  |  |  |  |
G  1  2  3  4
```
