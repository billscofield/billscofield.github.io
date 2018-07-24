https://www.sojson.com/json/json_syntax.html

Javascript Object（Java Script Object Notation）

JSON 文件的文件后缀是 ".json"，如：sojson.json
JSON 文本的 MIME 类型是 "application/json"


创建包含 JSON 语法的 JavaScript 字符串：

var txtJson = '{ "star_male" : [' +
'{ "name":"鹿晗" , "age":26 },' +
'{ "name":"李易峰" , "age":29 },' +
'{ "name":"陈赫" , "age":31 } ]}';
由于 JSON 语法是 JavaScript 语法的子集，JavaScript 函数 eval() 可用于将 JSON 文本转换为 JavaScript 对象。

eval() 函数使用的是 JavaScript 编译器，可解析 JSON 文本，然后生成 JavaScript 对象。必须把文本包围在括号中，这样才能避免语法错误：

var obj = eval ("(" + txtJson + ")");


方法
JSON.parse()可以把JSON规则的字符串转换为JSONObject
JSON.stringify()    JSON to String
