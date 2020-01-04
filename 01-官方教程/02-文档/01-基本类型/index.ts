/* boolean */
let isDone:boolean =  false;
/* number */
let decimal: number = 0xff00d;
let hex: number  = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
/* string */ 
let color: string = "blue";
color = 'red';
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }
I'll be ${ age + 1 } years old next month.`;
/* array */ 
let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];
/* Tuple */ 
let x: [string,number]; // 元组声明
x = ['hello', 10]; // 初始化（注意，必须按照声明的类型顺序来初始化）
/* enum */ 
enum Color {
    Red =1,
    Green,
    blue
}
let c:Color = Color.Green;
let colorName:string = Color[2];
console.log(colorName)
/* any */ 
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; 
/* voild */ 
function warnUser():void{
    console.log("This is my warning message");
}
let unusable: void = undefined;
unusable = null;
/* null and undefined */ 
let u: undefined = undefined;
let n: null = null;
/* never */ 
function error(message:string):never{
    throw new Error(message);
}
function fail(){
    return error("Something failed");
}
function infiniteLoop():never{
    while(true){

    }
}
/* object */ 
declare function create(o: object | null):void;
create({ prop: 0});
create(null);
// create(42); // Error
// create("string") // Error
// create(false); // Error
// create(undefined); // Error
/* Type assertions */
let someValue: any = "this is a string";
let someLength:number = (<string>someValue).length;
/* a note about let */
// 您可能已经注意到了，到目前为止，我们一直使用let关键字而不是var关键字。
// let关键字实际上是一个较新的JavaScript构造，可以缓解JavaScript中许多常见问题。
// 因此应该尽可能的不使用var