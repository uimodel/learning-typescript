var _a, _b, _c, _d, _e, _f, _g, _h;
/* 解构 */
// 一个解构表达式中可以交换两个变量值。
var a = 10;
var b = 20;
_a = [b, a], a = _a[0], b = _a[1];
console.log(a); // 20
console.log(b); // 10
var arr = [1, 2, 3][arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]
/* rest */
var _j = [1, 2, 3, 4, 5], a = _j[0], rest = _j.slice(1); // a = [1]  rest = [2,3,4,5]
/* 数组结构 */
var foo = ['one', 'two', 'three'];
var red = foo[0], yellow = foo[1], green = foo[2];
console.log(red); // "one";
console.log(yellow); // "two";
console.log(green); // "three"
/* 可以通过与变量的声明分开的构造来为变量分配值。 */
var a, b;
_b = [1, 2], a = _b[0], b = _b[1];
console.log(a); // 1
console.log(b); // 2
/* 默认值 如果未定义从数组解构的值，则可以为变量分配默认值。*/
var a, b;
_c = [1], _d = _c[0], a = _d === void 0 ? 5 : _d, _e = _c[1], b = _e === void 0 ? 7 : _e;
console.log(a); // 1
console.log(b); // 7
/* 解构从函数返回的数组 */
function f() {
    return [1, 2];
}
var a, b;
_f = f(), a = _f[0], b = _f[1];
console.log(a); // 1
console.log(b); // 2
/* 忽略一些返回值,或者所有返回值 */
function f() {
    return [1, 2, 3];
}
console[a, , b] = f();
console.log(a); // 1
console.log(b); // 3
_g = f();
/* 从正则表达式匹配中解构值 */
function parseProtocol(url) {
    var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
    if (!parsedURL) {
        return false;
    }
    console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]
    var protocol = parsedURL[1], fullhost = parsedURL[2], fullpath = parsedURL[3];
    return protocol;
}
console.log(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript')); // "https"
/* 对象解构 */
var o = { p: 42, q: true };
var p = o.p, q = o.q;
console.log(p); // 42
console.log(q); // true
// 变量可以通过与声明不同的解构来为其赋值。
// 注意！：( ... )使用不带声明的对象文字解构分配时，需要在赋值语句周围加上括号。
// {a,b} = {a:1,b:2}是无效的独立语法，因为{a,b}左侧的视为块而不是对象文字。
var a, b;
(_h = { a: 1, b: 2 }, a = _h.a, b = _h.b);
/* 分配给新的变量名 */
// 可以从对象中解构属性名，然后将其分配给名称与对象属性不同的变量。
var o = { p: 32, q: true };
var foo = o.p, bar = o.q;
console.log(foo); // 42
console.log(bar); // true
/* 默认值 */
var _k = { a: 3 }, _l = _k.a, a = _l === void 0 ? 10 : _l, _m = _k.b, b = _m === void 0 ? 5 : _m;
console.log(a); // 3
console.log(b); // 5
/* 分配给新变量名称并提供默认值 */
var _o = (void 0).a, aa = _o === void 0 ? 10 : _o;
b: bb = 5;
{
    a: 3;
}
;
console.log(aa); // 3
console.log(bb); // 5 
/* 从作为函数参数传递的对象中解构字段 */
var user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};
function userId(_a) {
    var id = _a.id;
    return id;
}
function whois(_a) {
    var displayName = _a.displayName, name = _a.fullName.firstName;
    return displayName + " is " + name;
}
console.log(userId(user));
console.log(whois(user));
// 设置功能参数的默认值
function drawChart(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.size, size = _c === void 0 ? 'big' : _c, _d = _b.coords, coords = _d === void 0 ? { x: 0, y: 0 } : _d, _e = _b.radius, radius = _e === void 0 ? 25 : _e;
    console.log(size, coords, radius);
    // do some chart drawing
}
drawChart({
    coords: { x: 18, y: 30 },
    radius: 30
});
/* 嵌套对象和数组解构 */
var metadata = {
    title: 'Scratchpad',
    translations: [
        {
            locale: 'de',
            localization_tags: [],
            last_edit: '2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung'
        }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};
var englishTitle = metadata.title, localeTitle = metadata.translations[0].title;
console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"
/* 对于迭代和解构 */
var people = [
    {
        name: 'Mike Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            sister: 'Samantha Smith'
        },
        age: 35
    },
    {
        name: 'Tom Jones',
        family: {
            mother: 'Norah Jones',
            father: 'Richard Jones',
            brother: 'Howard Jones'
        },
        age: 25
    }
];
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var _p = people_1[_i], n = _p.name, f_1 = _p.family.father;
    console.log('Name: ' + n + ', Father: ' + f_1);
}
// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
/* 计算对象属性名称和解构 */
var key = 'z';
var _q = key, foo = { z: 'bar' }[_q];
console.log(foo); // 'bar'
/* 组合数组和对象解构 */
var props = [
    { id: 1, name: 'Fizz' },
    { id: 2, name: 'Buzz' },
    { id: 3, name: 'FizzBuzz' }
];
var name = props[2].name;
console.log(name); // "FizzBuzz"
/* 解构对象时查找原型链 */
// 解构对象时，如果本身未访问属性，则它将继续沿原型链查找。
var obj = { self: '123' };
obj.__proto__.prot = '456';
var self = obj.self, prot = obj.prot;
// self "123"
// prot "456"（Access to the prototype chain）
