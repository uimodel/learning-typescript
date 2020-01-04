var Person = /** @class */ (function () {
    function Person(config) {
        this.config = config;
    }
    return Person;
}());
var p1 = new Person({ name: "张三", age: 20 }); // 需满足接口声明属性的要求，否则ts报错
var Sheep = /** @class */ (function () {
    function Sheep() {
    }
    Sheep.prototype.eat = function () {
        console.log("i eat grass");
    };
    return Sheep;
}());
var Tiger = /** @class */ (function () {
    function Tiger() {
    }
    Tiger.prototype.eat = function () {
        console.log("i eat meat");
    };
    return Tiger;
}());
/* implements 和 extends 区别： */
//1、implements:
//通过声明这个类实现一个或者多个接口
//2、extends：
// 通过继承父类，拥有了父类的功能，可以重写父类的方法，也可以不重写。
// 一个类不能extends多个类，但是可以通过接口让一个类去implements多个接口。
