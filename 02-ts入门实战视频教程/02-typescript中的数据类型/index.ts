// 定义变量必须指定类型

import { log } from "console"
import { runInContext } from "vm"

// 布尔类型
const flag: boolean = true

// 数值类型
let a: number = 123

// 字符串类型
const str: string = '字符串'
console.log(str)

// 数组
const arr: number[] = [1, 2, 3, 4, 5]
console.log(arr);

let arr2: string[] = ["a", "b", "c"]

let arr3: Array<number> = [11, 123, 223, 2323]

// 元祖类型
const arr4: [string, number, boolean] = ['dss', 31, true]

// 枚举类型
enum Flag {
  success = 1,
  error = -1
}
const f: Flag = Flag.success
console.log(f);

enum Color { red, blue = 5, orange }
const c: Color = Color.orange
console.log(c);

// 任意类型 any
let num2: any = 4
num2 = '123'
console.log(num2);

// let elBox:any = document.getElementById('div')
// elBox.style.color = 'red'

// undefined null
const num3: null | undefined = null

// viod 类型
function run():void {  // 表示方法没有返回任何类型
  console.log('run');
}

function run2(): number {
  return 123
}

// never 类型： 是其他类型，包括null和undefined的子类型,代表不会出现的值
let a2: never;

a2 = (() => {
   throw new Error('错误')
})()