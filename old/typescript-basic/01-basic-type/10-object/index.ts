// object 表示非原始类型，也就是除number，string,boolean,symbol,null或undefined之外类型
// 使用object 类型，就可以更好的表示像Object.create 这样的API
declare function create(o: object | null):void;

create({prop: 0}) // ok
create(null) // ok
// create(42); // Error

