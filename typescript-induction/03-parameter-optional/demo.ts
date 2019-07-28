// @ts-ignore
// !!!可选参数必须声明在必选参数后面
function test(a: string, b?: string, c: number="hello") {
    console.log(a);
    console.log(b);
    console.log(c);
}
// 可选参数没有传值，参数就为undefined，最好在方法内处理可选参数没传的情况。
test("xx");  //xx undefined hello