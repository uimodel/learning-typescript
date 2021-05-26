"use strict";
// 定义变量必须指定类型
Object.defineProperty(exports, "__esModule", { value: true });
// 布尔类型
var flag = true;
// 数值类型
var a = 123;
// 字符串类型
var str = '字符串';
console.log(str);
// 数组
var arr = [1, 2, 3, 4, 5];
console.log(arr);
var arr2 = ["a", "b", "c"];
var arr3 = [11, 123, 223, 2323];
// 元祖类型
var arr4 = ['dss', 31, true];
// 枚举类型
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
console.log(f);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 5] = "blue";
    Color[Color["orange"] = 6] = "orange";
})(Color || (Color = {}));
var c = Color.orange;
console.log(c);
// 任意类型 any
var num2 = 4;
num2 = '123';
console.log(num2);
// let elBox:any = document.getElementById('div')
// elBox.style.color = 'red'
// undefined null
var num3 = null;
// viod 类型
function run() {
    console.log('run');
}
