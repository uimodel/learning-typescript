/* 解构 */
// 一个解构表达式中可以交换两个变量值。
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a); // 20
console.log(b); // 10
const arr = [1, 2, 3]
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]

/* rest */
let [a, ...rest] = [1, 2, 3, 4, 5]; // a = [1]  rest = [2,3,4,5]

/* 数组结构 */
const foo = ['one', 'two', 'three'];
const [red, yellow, green] = foo;
console.log(red); // "one";
console.log(yellow); // "two";
console.log(green); // "three"

/* 可以通过与变量的声明分开的构造来为变量分配值。 */
let a, b;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

/* 默认值 如果未定义从数组解构的值，则可以为变量分配默认值。*/
let a, b;
[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7

/* 解构从函数返回的数组 */
function f() {
    return [1, 2];
}
let a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2

/* 忽略一些返回值,或者所有返回值 */
function f() {
    return [1, 2, 3];
}
console[a, , b] = f();
console.log(a); // 1
console.log(b); // 3
[, ,] = f();

/* 从正则表达式匹配中解构值 */
function parseProtocol(url) {
    const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
    if (!parsedURL) {
        return false
    }
    console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]
    const [, protocol, fullhost, fullpath] = parsedURL;
    return protocol
}
console.log(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript')); // "https"

/* 对象解构 */
const o = { p: 42, q: true };
const { p, q } = o;
console.log(p); // 42
console.log(q); // true

// 变量可以通过与声明不同的解构来为其赋值。
// 注意！：( ... )使用不带声明的对象文字解构分配时，需要在赋值语句周围加上括号。
// {a,b} = {a:1,b:2}是无效的独立语法，因为{a,b}左侧的视为块而不是对象文字。
let a, b;
({ a, b } = { a: 1, b: 2 });

/* 分配给新的变量名 */
// 可以从对象中解构属性名，然后将其分配给名称与对象属性不同的变量。
const o = { p: 32, q: true };
const { p: foo, q: bar } = o;
console.log(foo); // 42
console.log(bar); // true

/* 默认值 */
const { a = 10, b = 5 } = { a: 3 };
console.log(a); // 3
console.log(b); // 5

/* 分配给新变量名称并提供默认值 */
const { a: aa = 10; b: bb = 5} = { a: 3 };
console.log(aa); // 3
console.log(bb); // 5 

/* 从作为函数参数传递的对象中解构字段 */
const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};
function userId({ id }) {
    return id;
}
function whois({ displayName, fullName: { firstName: name } }) {
    return `${displayName} is ${name}`;
}
console.log(userId(user));
console.log(whois(user));

// 设置功能参数的默认值
function drawChart({ size = 'big', coords = { x: 0; y: 0 }, radius = 25 } = {}) {
    console.log(size, coords, radius);
    // do some chart drawing
}
drawChart({
    coords: { x: 18, y: 30 },
    radius: 30
});

/* 嵌套对象和数组解构 */
const metadata = {
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
let {
    title: englishTitle, // rename
    translations: [
        {
            title: localeTitle, // rename
        },
    ],
} = metadata;
console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"

/* 对于迭代和解构 */
const people = [
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
for(const {name:n,family:{father:f}} of people){
    console.log('Name: ' + n + ', Father: ' + f);
}
// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"

/* 计算对象属性名称和解构 */
let key = 'z';
let {[key]: foo} = {z: 'bar'};
console.log(foo); // 'bar'

/* 组合数组和对象解构 */
const props = [
    { id: 1, name: 'Fizz'},
    { id: 2, name: 'Buzz'},
    { id: 3, name: 'FizzBuzz'}
  ];
  const [,, { name }] = props;
  console.log(name); // "FizzBuzz"

/* 解构对象时查找原型链 */
// 解构对象时，如果本身未访问属性，则它将继续沿原型链查找。
let obj = {self: '123'};
obj.__proto__.prot = '456';
const { self , prot } = obj;
// self "123"
// prot "456"（Access to the prototype chain）