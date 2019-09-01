interface ReadonlyStringArray {
    readonly [index:number]:string
}
let myArray: ReadonlyStringArray = ['Alice','Bob']
// myArray[2] = 'Mallory' // 报错 Index signature in type 'ReadonlyStringArray' only permits reading.

