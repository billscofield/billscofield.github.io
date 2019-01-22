---
title: mysql
layout: post
---

使用c/c++编写


sudo apt install mysql-server
sudo apt install mysql-client
sudo apt install libmysqlclient-dev
    * 这个是干吗用的???

检查是否安装成功
    sudo netstat -tap | grep mysql
    一个监控TCP/IP网络的非常有用的工具,它可以显示路由表、实际的网络连接以及每一个网络接口设备的状态信息。

    -t:TCP
    -u:UDP
    -w::RAW
    -x:UNIX套接字连接

    -a, --all
       Show both listening and non-listening sockets.  With the --interfaces option, show interfaces that are not up

    -p, --program
           Show the PID and name of the program to which each socket belongs.


## Access denied for user 'root'@'localhost' 

1. 使用默认用户名登录
    1. /etc/mysql/debian.cnf
    1. user
    1. password

1. 然后重置 'root'@'localhost' 的密码
    1. use mysql
    1. select Host,User,authentication_string from user;
    1. update user set authentication_string=password('123456') where user='root'；
    1. 刷新权限：flush privileges;
    1. 退出mysql： quit;
    1. 重启mysql：service mysql restart / '/etc/init.d/mysql restart'
1. 登录
    1. sudo mysql -uroot -p
1. **Access denied 真正的原因**
    1. 查看一下user表，错误的起因就是在这里， root的plugin被修改成了auth_socket，用密码登陆的 plugin 应该是 mysql_native_password。
    1. use mysql 
    1. update user set authentication_string=PASSWORD('新密码'), plugin='mysql_native_password' where user = 'root' 
    1. https://www.cnblogs.com/leolztang/p/5094930.html

## 数据类型
1. 整数类型
整数类型    字节数  无符号范围(unsigned)    默认有符号（signed)
tinyint     1       [0,255]
smallint    2       []
mediumint   3
int         4
bigint      8

1. 浮点数类型
float       4       无符号      有符号
double      无符号      有符号
decimal(m,d)    
    m:总长度
    n:小数位
    四舍五入

1. 日期时间类型
YEAR            1
**DATE**        4
**TIME**        3
**DATETIME**    8
TIMESTAMP       4

1. 字符串
char        char(10)10个字符，不是字节大小
varchar
text        
    tinytext
    text
    mediumtext
    longtext
enum    枚举（只能取一个元素）不怎么用
set     集合类型（能取多个元素) 不怎么用

1. 二进制类型(一般不会用)
binary(m)   字节数为m, 
varbinary(m)
bit(m)
tinyblob
blob
mediumblob
longblob

## 基本操作
成功的路只有一条，失败的路千千万，不要研究失败的

### 增
create database if not exists 库名(一般都是有公司规范) default character set utf8;

### 删
drop database IF EXISTS 库名;

### 改

### 查
show databases;

show version();
show database();


### 表
#### 增
create table 表名(属性名 数据类型 [完整性约束条件],
                  属性名 数据类型 [完整性约束条件],
                  属性名 数据类型 [完整性约束条件],
);

约束条件            说明
primary key
auto_increment
foreign key
    alter table A add foreign key(列) references B(列);
    删 alter table 表名 drop foreign key 外键名
not null            该属性不能为空
unique              值是唯一的
default

create table t_bookType(
    id int primary key auto_increment;
    bookTypeName varchar(20);
    bootTypeDesc varchar(200);        
);

create table t_book(
    id int primary key auto_increment,
    bookName varchar(20),
    author varchar(10),
    price decimal(6,2),
    bookTypeId int,
    contraint `fk` foreign key(`bookTypeId`) references `t_bookType`(`id`)
);

#### 删
1. drop table 表名;

#### 改
1. **修改表名**
    1. alter table 旧表名 rename 新表名;
1. 修改字段名
    1. alter table 表名 change 旧字段名 新字段名 定义;
1. 修改字段属性
    1. alter table 表名 modify 字段名 定义;
1. 增加字段
    1. alter table 表名 add 字段名 定义 [first/before/after 字段名]
1. 删除字段
    1. alter table 表名 drop 字段名

#### 查
1. 查看表结构
    1. desc 表名;
    1. show create table 表名;

##### 单表查询
1. select 字段1,字段2,...字段n from 表名;
1. select * from 表名;
1. where id=2;
1. age in (21,23)
    1. not in 
1. between A and B
    1. between 21 and 23    [21,23]
    1. not between A and B
1. like
    1. % 任意个字符
    1. _ 一个字符
1. null值查询
    1. IS null 
    1. IS not null 
1. AND
1. OR
1. DISTINCT 去重复
1. 对结果进行排序
    1. order by 字段 ASC  
    1. order by 字段 DESC
1. group by 分组查询
    1. 单独使用没意义
    1. group_concat()
        1. select gradeName,GROUP_CONCAT(stuName) from t_student GROUP BY gradeName;
    1. 聚合函数
        1. COUNT(): select gradeName,COUNT(stuName) AS total  from t_student GROUP BY gradeName;
        1. AVG()
        1. SUM()
        1. MAX()
        1. MIN()
    1. having 对查询结果进行筛选
        1. count>=3的
            1. count: select gradeName,COUNT(stuName) fro t_student GROUP BY gradeName HAVING count(stuName)>3;
    1. **with rollup;**
        1. 数字的话相加
        1. 文本的话相连接
1. limit 分页
    1. limit start,length;

##### 连接查询
笛卡尔乘积

1. 内连接
    1. 两张表中的数据，两个的交集
1. 外连接
    1. 某一张表的所有信息
    1. 左连接(包含左表的所有 AU(A交集B))
        1. left join  on
    1. 右连接(包含右表的所有 BU(A交易B))
        1. right join on 

create table `t_book`(
    `id` int(11) not null auto_increment,
    `bookName` varchar(20) default null,
    `price` decimal(6.2) default null,
    `author` varchar(20) default null,
    `bookTypeId` int(11) default null,
    primary key (`id`)
)engine=innodb default charset=utf8;;

create table `t_booktype`(
    `id` int(11) not null auto_increment,
    `bookTypeName` varchar(20) default null,
    primary key(`id`)
)engine=innodb default charset = utf8;

insert into `t_booktype` values(1,'计算机类'),(2,'文学类'),(3,'教育类');


内连接
select A.id,A.bookName,A.price,A.author,A.bookTypeId,B.bookTypeName from t_book AS A,t_bookType AS B where A.bookTypeId=B.id;

外连接
1. 左连接
select * from t_book AS A left join t_booktype AS B on  A.bookTypeId=B.id;


## problems
access denied
    1. workbench
    1. mycli

## 子查询 
### in
create table `t_pricelevel`(
    `id` int,
    `priceLevel` int,
    `price` float,
    `description` varchar(300),
    primary key(`id`)
);
insert into `t_pricelevel` values(1,1,80.00,'价格贵的书'),(2,2,60.00,'价格适中的书'),(3,3,40.00,'价格便宜的书');


select id from t_booktype;
select * from t_book
select * from t_book where bookTypeId in (select id from t_booktype);


### 比较
select * fro t_book where price >=(select price from t_pricelevel where priceLevel=1);

### Exists
select * from t_booktype
select * from t_book where EXISTS (select * from t_booktype);
    1. 子查询有结果才会进行外层查询???
### ANY
1. 表示满足任何一条件
1. select price from t_pricelevel
1. select * from t_book where price >= ANY(select price from t_pricelevel)

### ALL
1. 满足所有的条件
1. select * from t_book where price >=ALL(select price from t_pricelevel)


## 合并查询
1. union
    1. 会去除掉相同的记录
    1. select id from t_book 
    1. select id from t_booktpe;
    1. select id from t_book union select id from t_booktype
1. union all
    1. 不会去除掉相同的记录
    

## 数据
### 增
1. insert into 表名 values()
1. insert into 表名() values()

### 删
delete from 表名 where
delete from 表名

### 改
update 表名 set 字段=值,字段=值 where 条件

### 查


## 索引
1. 一列或多列组合而成，起作用是提高对表中数据的查询速度
1. 缺点：创建和维护索引的时间增加了

1. 唯一，全文，主键

### 分类
1. 普通索引
    1. index(列)
1. 唯一索引
    1. unique index(列)
    1. unique index 自定义索引名(列)
1. 全文索引
    1. fulltext, 只能对 char varchar text类型的字段
    1. myisam
1. 单列索引
1. 多列索引
    1. index index_userName_pass(userName,password)
1. 空间索引
    1. spatial
    1. myisam

### 创建索引
#### 建表时
create table 表名(
    ...
    [unique | fulltext | spatial | index | key 
        [别名](属性名1[(长度)][ASC|DESC])
);


#### 已存在的表
1. create [unique | fulltext | spatial ] index 索引别名 on 表(列)

1. alter table 表名 ADD INDEX 别名(列)

### 删除索引
drop index 索引名 on 表名


## 视图
1. 虚拟表
1. 并未存放数据
### 作用
1. 使操作简单化
1. 增加数据的安全性
1. 提高逻辑独立性

1. 视图是否有主键外键，索引???

### 创建
create [algorithm]
    view 视图名 [(新列名1,列明2)]
    AS select 语句
    [with [cascaded | local ] check option]

1. with check option 可选，更新视图时


create view v1 as select * from t_book;

### 查看
1. desc 视图名
1. show table status like 视图名
1. show create view 视图名
1. 系统表中的view表中查看

### 修改视图
1. **create or replace** [algorithm]
    view 视图名 
    AS select 语句
    [with ...]

CREATE OR REPLACE v1(bookname,price) AS select bookname,price from t_book;

1. alter view 视图名 as select ...

### 更新视图
insert update delete 转化为对真实表的操作

只能更新权限内的数据

### 删除视图
只会删除视图，而不会删除数据


## 触发器 trigger
由事件来触发某个操作，这些事件包括insert,update,delete

### 创建
1. 只有一个执行语句的触发器
create trigger 触发器名 before|after 触发事件 [insert|update|delete]
on 表名 for each row 
执行语句

过度变量 new old

1. 有多个执行语句的触发器
create trigger 触发器名 before|after 触发事件
on 表名 for each row
begin
    执行语句
end

delimiter???

### 查看
show triggers;
information/triggers


### 删除
drop trigger 触发器名;



## 函数
### 日期时间
1. curdate();当前日期
1. curtime();
1. month(字段) [1,12]

### 加密函数
1. password(str)
1. md5(str)
1. encode(str,pswd_str)
1. decode(crypt_str,pswd_str)
    1. pswd_str:钥匙
### 数学函数
1. abs(字段)
1. sqrt(字段)
1. mod(x,y)  求余

### 字符串
1. char_length(字段);   字符个数
1. upper(字段);
1. lower(字段);









