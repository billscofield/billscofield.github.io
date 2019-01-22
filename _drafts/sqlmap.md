A SQL Injection Tool
开源SQL自动化注入工具，可以用来检测和利用SQL注入漏洞

基于Python

github中找


## 支持5种不同的注入模式
1. 基于Boolean的盲注
    即可以根据返回页面判断条件真假的注入
1. 基于时间的盲注
    即不能根据页面返回内容判断任何信息，用条件语句查看时间延迟语句是否执行（即页面返回时间是否增加）来判断
1. 基于报错注入
    即页面会返回错误信息，或者把注入的语句的结果直接返回在页面中
1. 联合查询注入
    可以使用union的情况下的注入
1. 堆查询注入
    可以同时执行多条语句的执行时的注入

## 用法
sqlmap -u 目标url

sqlmap -r 目标http请求
    post请求时用这个


--dbs               列出所有的数据库
--current-db        列出当前数据库
--current-user      列出当前用户
--table             列举数据库表名
--columns           列举数据库列名
--dump              获取表中的数据
--is-dba            判断是否为管理员
-D                  指定数据库
-T                  指定表
-C                  指定列
-P                  指定参数

--users             列出用户
--passwords         列出并破解数据库用户的hash
--privileges        列出数据库管理员权限
    当前用户有权限读取包含所有用户的表的权限时，很可能列举出每个用户的权限，sqlmap将会告诉你哪个是数据库的超级管理员
--count             获取表中数据个数
    有时候用户只想获取表中的数据个数而不是具体的内容,那么用这个参数即可
--file-read
    当数据库为MySQL, PostgreSQL或Microsoft SQL Server, 并且当前用户有权限使用特定的函数。读取的文件可以使文本也可以是二进制文件
--file-write, --file-dest       把文件上传到数据库服务器中
    当数据库为MySQL, PostgreSQL或Microsoft SQL Server, 并且当前用户有权限使用特定的函数。上传的文件可以是文本也可以是二进制文件
--delay             HTTP请求延迟
    可以设定两个HTTP(S)请求间的延迟，单位为秒，默认没有延迟
--timeout           设定超时时间
    可以设定一个HTTP(S)请求超过多久判定为超时，单位为秒，默认是30秒
--sql-query, --sql-shell        运行自定义sql语句
    sqlmap会自动检测确定使用哪种SQL注入技术，如何插入检索语句
--os-cmd, --os-shell
    当数据库为MySQL, PostgreSQL 或 Microsoft SQL Server, 并且当前用户有权限使用特定的函数 
--level             探测等级
    共有5个等级，默认为1，如果你不确定哪个payload或者参数为注入点的时候，为了保证全面性，建议使用高的level值(通常用3)
--risk              风险等级
    共有4个风险等级，默认是1，会测试大部分的测试语句，2会增加基于事件的测试语句，3会增加OR语句的SQL注入测试








