/*
* 类的声明
*/
var Person = /** @class */ (function () {
    function Person() {
        this.name = "";
    }
    Person.prototype.sayName = function () {
        console.log("im " + this.name);
    };
    return Person;
}());
var p1 = new Person();
p1.name = "batman";
p1.sayName(); // im batman
/*
* private  只有类的内部能访问 外部不能访问
*/
var Person2 = /** @class */ (function () {
    function Person2() {
        this.name = "";
    }
    Person2.prototype.sayName = function () {
        console.log("im " + this.name);
    };
    return Person2;
}());
var p2 = new Person2();
p2.name = 'superman'; // TS报错
p2.sayName(); // TS报错
/*
* public 类的外部能访问到
*/
var Person3 = /** @class */ (function () {
    function Person3() {
        this.name = "";
    }
    Person3.prototype.sayName = function () {
        console.log("im " + this.name);
    };
    return Person3;
}());
var p3 = new Person3();
p3.name = '张三';
p3.sayName(); // im 张三
/*
* protected 受保护的属性和方法，在类的部和子类中可以被访问到
*/
var Person4 = /** @class */ (function () {
    function Person4() {
        this.name = "李四";
    }
    Person4.prototype.sayName = function () {
        console.log("im " + this.name);
    };
    return Person4;
}());
var Person5 = /** @class */ (function () {
    function Person5() {
        this.name = name; // 不会报错
    }
    return Person5;
}());
var p5 = new Person5();
console.log(p5.name); // TS报错
p5.sayName(); // TS报错
