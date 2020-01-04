// 通过类型断言这种方式可以告诉编译器，"相信我，我知道自己在干什么"。类型断言相当于其它语言里的类型转换，但是不进行特殊的数据检测和解构。它没有运行时的影响，只在编译阶段起作用。TypeScript会假设你，程序员，已经进行了必须的检查。
let someValue:any = "this is a string"
let strLength:number = (<string>someValue).length
console.log(strLength); // 16

