/*
* 类的声明
*/
class Person{
    name = "";
    sayName(){
        console.log("im "+ this.name);
    }
}
var p1 = new Person();
p1.name = "batman";
p1.sayName();  // im batman

/*
* private  只有类的内部能访问 外部不能访问
*/
class Person2{
    private name = "";
    private sayName(){
        console.log("im "+ this.name);
    }
}
var p2 = new Person2();
p2.name = 'superman'; // TS报错
p2.sayName(); // TS报错

/*
* public 类的外部能访问到
*/
class Person3{
    public name = "";
    public sayName(){
        console.log("im "+ this.name);
    }
}
var p3 = new Person3();
p3.name = '张三';
p3.sayName(); // im 张三

/*
* protected 受保护的属性和方法，在类的部和子类中可以被访问到
*/
class Person4{
    private name = "李四";
    protected sayName(){
        console.log("im "+ this.name);
    }
}
class Person5 implements Person4{
    private name = name;  // 不会报错
}
var p5 = new Person5();
console.log(p5.name); // TS报错
p5.sayName(); // TS报错
