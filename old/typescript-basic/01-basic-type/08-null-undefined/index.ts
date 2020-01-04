// undefined 和 null 两者各自有自己的类型分别叫做undefined和null。和void相似，他们本身的类型用处不是很大
let u:undefined = undefined
let n:null = null
// 默认情况下null和undefined是所有类型的子类型。就是说你可以把null和undefined赋值给number类型的变量
// 当你制定了 --strictNullChecks 标记，null和undefined只能赋值给void和他们各自。
let num:number = 12;
num = undefined
num = null
