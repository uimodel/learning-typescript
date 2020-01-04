var p1 = { x: 10, y: 20 };
// p1.x = 5  // 报错  Cannot assign to 'x' because it is a read-only property.
// TypeScript具有ReadonlyArray<T>类型，他与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改
var a = [1, 2, 3, 4];
var ro = a;
// ro[0] = 12 // error
// ro.push(5) // error
// ro.length = 100 // error!
// a = ro // error 就算把整个ReadonlyArray赋值到一个普通数组也是可以的。
// 但是你可以用类型断言重写
a = ro;
// readonly vs const
// 最简单判断该用readonly 还是 const 的方法是看它作为变量还是作为一个属性，作为变量使用的话就用const，作为属性就用const
