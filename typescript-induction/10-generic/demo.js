var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* generic 泛型
*/
// 参数化的类型，一般用来限制集合的内容
// @ts-ignore
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        // console.log(`create new people, name is ${name}, age is ${age}`);
    }
    Person.prototype.eat = function () {
        console.log("im eating");
    };
    Person.prototype.work = function () {
        console.log("im working");
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, code) {
        var _this = _super.call(this, name, age) || this;
        _this.code = code;
        console.log("lili");
        return _this;
    }
    Employee.prototype.eat = function () {
        _super.prototype.eat.call(this);
        this.doWork();
    };
    Employee.prototype.doWork = function () {
        _super.prototype.work.call(this);
    };
    return Employee;
}(Person));
var workers = [];
workers[0] = new Person("zhangsan", 20);
workers[1] = new Person("lisi", 19);
//workers[3] = 1; // 类型错误 只能是Person类型
var e1 = new Employee('张三', 20, "coding");
e1.eat();
