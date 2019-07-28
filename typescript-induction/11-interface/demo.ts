/*
* interface 接口
* 两个关键字来支撑接口的特性
* 1、interface 声明一个接口、
* 2、implements 用来声明某一个类(class)实现了某一个接口
*/
// 用来建立某种代码约定，使得其它开发者在调用某个方法或者创建新的类时，必须遵循接口定义的代码约定
// 第一种使用方式： 用作一个方法参数的类型声明
interface IPerson {
    name:string;
    age:number;
}
class Person{
    constructor(public config:IPerson){ // 用作一个方法参数的类型声明

    }
}
var p1 = new Person({name:"张三",age:20}); // 需满足接口声明属性的要求，否则ts报错

// 第二种使用方式：接口来声明方法
interface Animal {
    eat();
}
class Sheep implements  Animal{ // 声明Sheep这个类实现（implements）Animal接口, 必须实现接口里面定义的方法。
    eat() {
        console.log("i eat grass");
    }
}
class Tiger implements Animal{
    eat(){
        console.log("i eat meat");
    }
}

/* implements 和 extends 区别： */
//1、implements:
//通过声明这个类实现一个或者多个接口
//2、extends：
// 通过继承父类，拥有了父类的功能，可以重写父类的方法，也可以不重写。

// 一个类不能extends多个类，但是可以通过接口让一个类去implements多个接口。