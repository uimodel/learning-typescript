// number
var decimal = 6;
var hex = 0xff00d;
var binary = 20;
var octal = 484;
// let big: bigint = 9007199254740995n
console.log('number:', decimal, hex, binary, octal);
// Boolean
var isDone = false;
console.log('boolean:', isDone);
// string
var color = 'blue';
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName;
console.log('string:', color, fullName, age, sentence);
// 子面量
var color2;
var num2;
// any
var d = 4;
d = 'hello';
d = true;
console.log('any:', d);
// unknown
var notSure = 4;
notSure = 'hello';
console.log('unknown:', notSure);
// volid
var unusable = undefined;
console.log('vold:', unusable);
// never
function error(message) {
    throw new Error(message);
}
console.log('never:', error);
// object (没啥用)
var obj = {};
console.log('object:', obj);
//array
var list = [1, 2, 3];
var list2 = [1, 2, 3];
console.log('array:', list);
//tuple
var x;
x = ['hello', 10];
console.log('tuple:', x);
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log('enum:', c, Color[2]);
// 断言
var someValue = 'this is a string';
var strLength = someValue.length;
var someValue2 = 'this is a string2';
var strLength2 = someValue.length;
console.log('断言:', someValue);
// 如果需要将当前项目下创建的所有文件编译为js文件，
// 要先在项目根目录下创建一个ts的配置文件tsconfig.json
console.log('编译选项: 如果需要将当前项目下创建的所有文件编译为js文件，要先在项目根目录下创建一个ts的配置文件tsconfig.json');
