/*
* 闭包
* */
function f() {
    var a = 10
    return function g() {
        var b = a + 1
        return b
    }
}
var g = f();
console.log(g()); // 11

/*
* 作用域规则
* */
function f1(shoudInitialize) {
    // 相当于 var x
    if(shoudInitialize){
        var x = 10 // var 声明提前，变量提升到作用域最前
    }
    return x
}

console.log(f1(true)); // 10
console.log(f1(false)); // undefined

/*
* 矩阵运算
* */
function sumMatrix(matrix) {
    var sum = 0
    for (var i = 0; i < matrix.length;i++){
        var currentRow = matrix[i]
        for (var j =0;j<currentRow.length;j++){
            sum += currentRow[j]
        }
    }
    return sum
}

var matrix = [
    [1,2,3],
    [4,5,6]
]
console.log(sumMatrix(matrix)); // 21

/*
* var 的经典例子
* */
for(var i=0;i<10;i++){
    setTimeout(function () {
        console.log(i)
    },100*i)
} // 10 10 10 10 10 10 10 10 10 10

// 使用立即执行函数，延长作用域链来输出预期效果
for(var i=0;i<10;i++){
    (function(j){
        setTimeout(function () {
            console.log(j)
        },100*j)
    })(i)
}  // 0 1 2 3 4 5 6 7 8 9
