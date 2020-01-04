/* 类的构造函数 */
class Person {
    // 如果没有构造函数，实例化的时候，会先自动创建一个构造函数进行实例化，
    // 如果构造函数有参数，实例化的时候
    constructor(){
        console.log("hello");
    }
    name;

    eat(){
        console.log("im eating");
    }
}
var p1 = new Person();  // 实例化时 调用构造函数 输出 hello
p1.eat(); // im eating  调用原型中的eat方法

// 定义类的构造函数参数后，实例化需根据规则指定参数
class Peron2{
    //name;
    /*constructor(name:string){  // 可以这么写 (public name:string)
        this.name = name;
    }*/
    constructor(public name:string){
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
}
var p2 = new Peron2("张三");
p2.sayName(); // 张三