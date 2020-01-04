// never 类型表示的是那些永远不存在的值类型。例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或者箭头函数表达式的返回值类型，变量也可能是never类型，当它们被用不为真的类型保护所约束时
// never 类型是任何类型的子类型，也可以赋值给任何类型，然后没有类型是never的子类型或可以赋值给never类型(除了never本身之外)。即使any也不可以赋值给never

// 返回never函数必须存在无法达到的终点
function error(message:string):never {
    throw new Error(message)
}

function infiniteLoop():never{
    while (true){

    }
}
