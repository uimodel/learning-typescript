// number
let decimal: number = 6
let hex: number = 0xff00d
let binary: number = 0b10100
let octal: number = 0o744
// let big: bigint = 9007199254740995n
console.log('number:', decimal, hex, binary, octal)

// Boolean
let isDone: boolean = false
console.log('boolean:', isDone)

// string
let color: string = 'blue'
color = 'red'
let fullName: string = `Bob Bobbington`
let age: number = 37
let sentence: string = `Hello, my name is ${fullName}`
console.log('string:', color, fullName, age, sentence)

// 子面量
let color2: 'red' | 'blue' | 'black'
let num2: 1 | 2 | 3 | 4 | 5

// any
let d: any = 4
d = 'hello'
d = true
console.log('any:', d)

// unknown
let notSure: unknown = 4
notSure = 'hello'
console.log('unknown:', notSure)

// volid
let unusable: void = undefined
console.log('vold:', unusable)

// never
function error(message: string): never {
  throw new Error(message)
}
console.log('never:', error)

// object (没啥用)
let obj: object = {}
console.log('object:', obj)

//array
let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]
console.log('array:', list)

//tuple
let x: [string, number]
x = ['hello', 10]
console.log('tuple:', x)

//enum
enum Color {
  Red,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green
console.log('enum:', c, Color[2])

// 断言
let someValue: unknown = 'this is a string'
let strLength: number = (someValue as string).length

let someValue2: unknown = 'this is a string2'
let strLength2: number = (<string>someValue).length
console.log('断言:',someValue)