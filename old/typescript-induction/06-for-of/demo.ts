// forEach、 for in 、 for of 的区别
//1、forEach  循环遍历输出数组的下标，但是不会输出给数组对象添加的属性的key,不能是用break打断遍历。
var array = [1,2,3,4];
// @ts-ignore
array.desc = "desc";
array.forEach(function (index) {
   console.log(index);  // 1 2 3 4
});

//2、for in 循环遍历输出数组的下标，包括输出给数组对象添加的属性的key。
for(var index in array){
    console.log(index); // 1 2 3 4 desc
}

//3、for of 循环遍历输出数组的value,但是不会输出给数组对象添加的属性的value，允许使用break打断遍历。
for(var value of array){
    if(value>2) break;
    console.log(value);  // 1 2
}