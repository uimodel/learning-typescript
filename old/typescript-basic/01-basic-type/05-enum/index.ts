// enum 枚举类型是对 JS 标准类型对一个补充
enum Color {
    Red,
    Green,
    Blue
}
let c:Color = Color.Green

// 测试枚举类型
// { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
console.log(Color)
