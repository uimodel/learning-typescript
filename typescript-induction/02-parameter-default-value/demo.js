// @ts-ignore
var myname = "zhangsan";
function test(a, b, c) {
    if (c === void 0) { c = "hello"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
test("xx", "yy"); // xx yy hello
