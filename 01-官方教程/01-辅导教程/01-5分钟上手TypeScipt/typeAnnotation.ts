/* 类型注解 */
function typeAnnotation(person:string) {
    return "Hello, " + person;
}

let user = "Jane User";
// let user = [1,2,3]; // 尽管有错误，greeter.js文件还是被创建了。
document.body.innerHTML = typeAnnotation(user)
