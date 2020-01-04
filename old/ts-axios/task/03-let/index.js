// let 和 var 的区别不在语法上,而在语义上
/*
* 块级作用域
* */
function f(input) {
    var a = 100;
    if (input) {
        var b = a + 1;
        return b;
    }
    //  return b // 访问不到b 这和var不同，不会变量提升，let声明的变量的环境会有块级作用域{}
}
/*
* let声明的变量必须声明后在调用，否则会报错的
* */
//console.log(a); //  Block-scoped variable 'a' used before its declaration.
//let a = 10; // 暂时性死区，在声明之前是不能对let声明的变量进行访问的，
// 这种情况下就不会报错，因为编译后会将let变成var。
function foo() {
    return a2;
}
foo();
var a2;
// 如果是编译成ES6（es2016），就会报错，在使用tsc编译时，添加参数 --target es2015
// tsc index index.ts --target es2015
//  Block-scoped variable 'a' used before its declaration.
/*
* let 不允许在块内重复声明
* */
// let x= 10;
// let x =20;
// function g(x) {
//     let x =10
// }
// error TS2451: Cannot redeclare block-scoped variable 'x'.
// 这种情况下允许
function f3(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
f3(false, 0);
f3(true, 0);
/*
* 屏蔽的功能
* */
// 这样是允许的，应为内层的let 的i把外层的let的i屏蔽了
function sumMartrix(martrix) {
    var sum = 0;
    for (var i = 0; i < martrix.length; i++) {
        var currentRow = martrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) { // 建议将i换成j
            sum += currentRow[i_1];
        }
    }
    return sum;
}
var martrix = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(sumMartrix(martrix)); // 21
/*
* let特性 块及作用域变量获取
* */
