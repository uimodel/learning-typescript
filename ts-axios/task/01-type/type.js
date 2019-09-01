/*let isDon:boolean = false
let decLiteral:number = 20    // 10进制
let hexLiteral:number = 0x14  // 16进制
let binaryLiteral:number = 0b10100 // 2进制
let octalLiteral:number = 0o24 // 8进制*/
var name1 = 'bob';
name1 = 'smith';
/*
* 使用模版字符
* */
var name2 = 'lisa';
var age = 20;
var sentence = "Hello, my name is " + name2 + "\n    \n    I'll be " + (age + 1) + " year old next month.";
console.log(sentence);
//Hello, my name is lisa
//
//     I'll be 21 year old next month.
/**
 *  定义数组 两种方式
 */
//1.类型
var list = [1, 2, 3];
console.log(list); // [ 1, 2, 3 ]
//2.泛型
var list2 = [1, 2, 3];
console.log(list2); // [ 1, 2, 3 ]
/*
* 元祖： 已知元素数量和元素类型的数组。
* */
var x;
x = ['hello', 2];
x[0].split(''); // x[0].forEach(v=>v); 会报错 Property 'forEach' does not exist on type 'string'.
console.log(x); // [ 'hello', 2 ]
/*
* 枚举类型
* */
var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
console.log(c); // 3
console.log(Color.Blue); // 5
var c2 = Color[4];
console.log(c2); // Green
/*
* any 类型
* */
// 对js进行重构时候，也会用到，移除类型检查。
var notSure = 4;
notSure = 'maby a string instead';
notSure = false;
console.log(notSure); // false
// 当数组元素类型不确定时
var list3 = [1, true, 'free'];
list[1] = 100;
/*
* void 和any相反表示没有任何类型 通常用在函数返回值
* */
function warnUser() {
    console.log('This is my warning message');
}
console.log(warnUser()); // undefined
/*
* undefined 和 null 在typescript中是所有类型当子类型。因此可以赋值给所有类型
* */
var unusable1 = undefined;
var unusable2 = null;
// 下面代码在编译并不会报错，
var num = 3;
num = null;
// 如果需要报错在编译时后面加上 --strictNullChecks 编译后就会报错。
// Type 'null' is not assignable to type 'number'.
/*
* never 表示永远不存在的类型
* */
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('something failed');
}
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 });
create(null);
/*
以下基础类型都不行
create(42)
create('string')
create(flase)
create(undefined)*/
/**
 * 类型断言：
 * 有的时候你会比TS更加确切知道定义的类型，类型断言相当于告诉编译器我知道这是什么类型，我知道自己在干什么。
 */
var someValue = 'this is a string';
// 会报错 someValue.length 编译器并不知道它是string类型
// 方法一： 将someValue强制转化为string
var strLength = someValue.length;
// 方法二（推荐）:  使用as
var strLength2 = someValue.length;
