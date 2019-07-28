/*
* generic 泛型
*/
// 参数化的类型，一般用来限制集合的内容
// @ts-ignore
class Person{
    constructor(public name:string,public age:number){
        // console.log(`create new people, name is ${name}, age is ${age}`);
    }
    eat(){
        console.log("im eating");
    }
    work(){
        console.log("im working");
    }
}

class Employee extends Person{
    constructor(name:string,age:number,public code:string){
        super(name,age);
        console.log("lili");
    }
    eat() {
        super.eat();
        this.doWork()
    }
    private doWork() {
        super.work();
    }
}
var workers: Array<Person> = [];
workers[0] = new Person("zhangsan",20);
workers[1] = new Person("lisi",19);
//workers[3] = 1; // 类型错误 只能是Person类型

var e1 = new Employee('张三',20,"coding");
e1.eat();

