/*
* 解构分为：
* 1、数组解构
* 2、对象解构
* */
// 数组结构：
var input = [1, 2];
/*let first = input[0]
let seccond = input[1]*/
var first = input[0], second = input[1];
console.log(first); // 1
console.log(second); // 2
function f2(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f2(input); // 1,2
// rest
var _a = [1, 2, 3, 4, 5], firstNum = _a[0], rest = _a.slice(1);
console.log(firstNum); // 1
console.log(rest); // [2,3,4,5]
/**
 * 对象结构
 */
var o = {
    a: 'foo',
    b: 12,
    c: 'bar'
};
var a = o.a, b = o.b;
console.log(a, b); // foo 12
// 以下写法在ts中会引起困惑，其实是重命名
var newName1 = o.a, newName2 = o.b; // foo 12
console.log(newName1, newName2); // foo 12
// 用于默认值
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a; // 即便b是可选值，没有传参，b会有一个默认值1001
}
