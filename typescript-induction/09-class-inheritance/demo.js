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
* 类的继承设
* 1、extends 用来声明类的继承关系
* 2、super  调用父类的构造函数或者方法
*/
//extends
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayName = function () {
        console.log(this.name);
    };
    return Person;
}());
var Exployee = /** @class */ (function (_super) {
    __extends(Exployee, _super);
    function Exployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Exployee.prototype.work = function () {
    };
    return Exployee;
}(Person));
var e1 = new Exployee("张三");
console.log(e1); // {name:张三}
//super
// 1、调用父类的构造函数
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    //code:string;
    // name属性为父类构造函数中定义的属性，code为当前子类需要定义的构造函数属性
    function Employee2(name, code) {
        var _this = _super.call(this, name) || this;
        _this.code = code;
        return _this;
        //this.code = code; // 定义子类构造函数的属性 也可以直接在构造函数参数中使用public来定义不必在子类的属性中单独定义属性
    }
    Employee2.prototype.work = function () {
    };
    return Employee2;
}(Person));
var e2 = new Employee2("李四", 'coding');
console.log(e2); // {name:'李四',code:"coding"}
//2、调用父类的其它方法
// 通过使用super. 来调用
var Employee3 = /** @class */ (function (_super) {
    __extends(Employee3, _super);
    function Employee3(name, code) {
        var _this = _super.call(this, name) || this;
        _this.code = code;
        return _this;
    }
    Employee3.prototype.work = function () {
        _super.prototype.sayName.call(this); // super的第二种使用方式。调用父类的其它方法
        this.doWork();
    };
    Employee3.prototype.doWork = function () {
        console.log("im working");
    };
    return Employee3;
}(Person));
var e3 = new Employee3("王五", 'coding');
e3.work(); // 王五
// 注意 如果在ts中的实例调用类的private私有方法会报错，只能使用类中的public方法间接调用private方法。不加private默认为public
// 但是在js中代码可以正常运行。ts使用编译器对代码进行编译处理，在js中并没有特使的含义。
