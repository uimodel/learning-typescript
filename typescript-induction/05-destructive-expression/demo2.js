// @ts-ignore
var array = [1, 3, 4, 1, 2];
var number1 = array[0], number2 = array[1], others = array.slice(2);
console.log(number1); // 1
console.log(number2); // 3
console.log(others); // [4,1,2]
//  析构表达作为方法的参数
function doSomething(_a) {
    var number1 = _a[0], number2 = _a[1], others = _a.slice(2);
    console.log(number1); // 1
    console.log(number2); // 3
    console.log(others); // [4,1,2]
}
// @ts-ignore
doSomething(array);
