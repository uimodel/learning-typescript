// 可索引类型 ts支持两种索引类型 字符串签名和数字签名 而且可以同时使用
// 当同时使用时，数字类型必须是字符串类型的子类型
interface StringArray {
    [index:number]:string
}
let myArray: StringArray

myArray = ['Bob','Fred']
let myStr:string = myArray[0]



