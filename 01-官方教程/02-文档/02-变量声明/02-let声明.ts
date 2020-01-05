/* let语句的编写方式与var语句的编写方式相同，关键的区别不在于语法，而在于语义 */
/* 块级作用域 */
// 与声明var的作用域泄漏到其包含函数到变量不同，
// 块级作用域变量在其最近到包含块或for循环之外不可见。
function f(input:boolean){
    let a = 100;
    if(input){
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }
    // Error: 'b' doesn't exist here
    return b; 
}

