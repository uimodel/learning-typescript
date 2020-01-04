/*
* 解构分为：
* 1、数组解构
* 2、对象解构
* */
// 数组结构：
let input:[number,number] = [1,2]

/*let first = input[0]
let seccond = input[1]*/

let [first,second] = input;
console.log(first);  // 1
console.log(second); // 2

function f2([first,second]:[number,number]) {
    console.log(first)
    console.log(second)
}

f2(input) // 1,2

// rest
let [firstNum,...rest] = [1,2,3,4,5];
console.log(firstNum); // 1
console.log(rest);  // [2,3,4,5]

/**
 * 对象结构
 */
let o = {
    a: 'foo',
    b: 12,
    c: 'bar'
}
let {a,b} = o
console.log(a,b);  // foo 12

// 以下写法在ts中会引起困惑，其实是重命名
let {a:newName1,b:newName2} = o;  // foo 12
console.log(newName1,newName2);  // foo 12

// 用于默认值
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let {a,b=1001} = wholeObject; // 即便b是可选值，没有传参，b会有一个默认值1001
}

