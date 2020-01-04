var a = [1, 2, 3, 4];
var ro = a;
//ro.length = 100 // 会报错
//ro = 123 // 会报错
// 如果非要修改，可以用as断言
a = ro; // 改成非只读属性
a.length = 11;
// 变量用const
// 属性用readonly
