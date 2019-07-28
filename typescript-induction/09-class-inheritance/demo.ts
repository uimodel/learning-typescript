/*
* 类的继承设
* 1、extends 用来声明类的继承关系
* 2、super  调用父类的构造函数或者方法
*/
//extends
class Person{
    constructor(public name:string){
    }
    sayName(){
        console.log(this.name);
    }
}
class Exployee extends  Person{
    // 继承后 拥有父类的方法 实际上是是用子类实例的原型指向父类的实例，通过原型链往上查找调用父类的方法。
    code: string; // 继承后的扩展
    work(){ // 继承后的扩展

    }
}
var e1 = new Exployee("张三");
console.log(e1); // {name:张三}

//super
// 1、调用父类的构造函数
class Employee2 extends  Person{
    //code:string;
    // name属性为父类构造函数中定义的属性，code为当前子类需要定义的构造函数属性
    constructor(name:string,public code:string){
        super(name); // 调用父类构造函数属性
        //this.code = code; // 定义子类构造函数的属性 也可以直接在构造函数参数中使用public来定义不必在子类的属性中单独定义属性
    }
    work(){

    }
}
var e2 = new Employee2("李四",'coding');
console.log(e2); // {name:'李四',code:"coding"}

//2、调用父类的其它方法
// 通过使用super. 来调用
class Employee3 extends Person{
    constructor(name:string,public code:string){
        super(name); // super的第一种使用方式
    }
     work(){
        super.sayName(); // super的第二种使用方式。调用父类的其它方法
        this.doWork();
    }
    private doWork(){
        console.log("im working");
    }
}
var e3 = new Employee3("王五",'coding');
e3.work(); // 王五

// 注意 如果在ts中的实例调用类的private私有方法会报错，只能使用类中的public方法间接调用private方法。不加private默认为public
// 但是在js中代码可以正常运行。ts使用编译器对代码进行编译处理，在js中并没有特使的含义。
