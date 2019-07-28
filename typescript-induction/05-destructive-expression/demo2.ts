// @ts-ignore
var array = [1,3,4,1,2];

var [number1,number2,...others] = array;

console.log(number1);  // 1
console.log(number2);  // 3
console.log(others); // [4,1,2]

//  析构表达作为方法的参数
function doSomething([number1, number2, ...others]) {
    console.log(number1); // 1
    console.log(number2); // 3
    console.log(others); // [4,1,2]
}
// @ts-ignore
doSomething(array);