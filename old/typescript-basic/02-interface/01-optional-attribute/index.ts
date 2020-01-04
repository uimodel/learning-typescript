// 可选属性
// 可选属性在应用"option bags"模式时很常用，即给函数传入的参数对象中只有部分属性赋值了
interface SquareConfig{
    color?:string
    width?:number
}
function createSquare(config:SquareConfig) :{ color:string,area:number }{
    let newSquare = {color:'white',area:100}
    if(config.color){
        newSquare.color = config.color
    }
    if(config.width){
        newSquare.area = config.width * config.width
    }
    return newSquare
}

// 带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号
