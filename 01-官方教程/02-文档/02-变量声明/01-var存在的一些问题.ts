/* var 存在的一些问题 */
// 这里有两个问题：
//1。包含var声明的某些代码块并不会产生作用域。
//2。var 声明的变量会提升到当前作用域内的最上面。
function f(sholdInitialize) {
    if (sholdInitialize) {
        var x = 10;
    }
    return x;
}
console.log(f(true)); // return '10'
console.log(f(false)); // return 'undefinded'

/* i引用了相同的作用域变量 */
function sumMatrix(matrix: number[][]){
    var sum = 0;
    for(var i = 0; i<matrix.length;i++){
        var currentRow = matrix[i];
        for(var i = 0; i< currentRow.length; i++){
            sum += currentRow[i]
        }
    }
    return sum;
}

/* 变量捕获怪僻 */ 
for(var i = 0;i<10;i++){
    setTimeout(function(){console.log(i)},100*i);
}
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 这不是我们想要的结果。
// 常用的解决方法是使用IIFE（立即嗲用执行函数表达式）i 在每次迭代时捕获：
for(var i = 0;i<10;i++){
    // 捕获i的当前状态
    // 通过调用具有当前值的函数
    (function(i){
        setTimeout(function(){console.log(i);},100*i)
    })(i)
}
