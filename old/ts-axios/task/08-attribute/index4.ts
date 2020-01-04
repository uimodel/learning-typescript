// 额外的属性检查可选属性

interface Square{
    color: string
    area: number
}
// 方式一：使用索引签名
interface SquareConfig {
    color?: string
    width?: number
   // [propName:string]:any // 使用索引签名 表示除了color width 之外的属性类型
    // 方式二：在config中定义新增到属性
}

function createSquare(config:SquareConfig):Square {
    let newSquare = {color:'white',area:100}
    if(config.color){
        newSquare.color = config.color
    }
    if(config.width){
        newSquare.area = config.width * config.width
    }
    return newSquare
}

// 方式三：虽然将参数先单独写在变量里再传递能绕过额外类型检查，但是不推荐。因为当
let squareOptions = { color: 'black', width:100}

// let mySquare = createSquare({color:'black',width:100})
let mySquare = createSquare(squareOptions)
