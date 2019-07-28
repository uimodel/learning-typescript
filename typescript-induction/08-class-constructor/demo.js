/* 类的构造函数 */
var Person = /** @class */ (function () {
    // 如果没有构造函数，实例化的时候，会先自动创建一个构造函数进行实例化，
    // 如果构造函数有参数，实例化的时候
    function Person() {
        console.log("hello");
    }
    Person.prototype.eat = function () {
        console.log("im eating");
    };
    return Person;
}());
var p1 = new Person(); // 实例化时 调用构造函数 输出 hello
p1.eat(); // im eating  调用原型中的eat方法
// 定义类的构造函数参数后，实例化需根据规则指定参数
var Peron2 = /** @class */ (function () {
    //name;
    /*constructor(name:string){  // 可以这么写 (public name:string)
        this.name = name;
    }*/
    function Peron2(name) {
        this.name = name;
        this.name = name;
    }
    Peron2.prototype.sayName = function () {
        console.log(this.name);
    };
    return Peron2;
}());
var p2 = new Peron2("张三");
p2.sayName(); // 张三
