/* let语句的编写方式与var语句的编写方式相同，关键的区别不在于语法，而在于语义 */
/* 块级作用域 */
// 与声明var的作用域泄漏到其包含函数到变量不同，
// 块级作用域变量在其最近到包含块或for循环之外不可见。
function f(input:boolean){
    let a = 100;
    if(input){
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }
    // Error: 'b' doesn't exist here
    return b; 
}

/* 在catch子句中声明到变量也具有类似的作用域规则 */
try{
    throw "oh on!";
}
catch (e) {
    console.log("Oh well.");
}
// Error: 'e' doesn't exist here
console.log(e);

/* 块范围变量的另一个特性是，在实际声明它们之前，不能对其进行读写 */
a++; //  illegal to use 'a' before it's declared;
let a;

/* 在同一作用域内，不允许重复声明 */
let x = 10;
let x = 20; // error: can't re-declare 'x' in the same scope

/* 干扰参数 */
function f(x){
    let x = 100; // error: interferes with parameter declaration
}

function g(){
    let x = 100;
    var x = 100;
}

// 并不是说永远不能使用函数范围的变量声明块范围的变量。
// 只需在明显不同的块中声明块范围的变量。
function f(condition, x){
    if(condition){
        let x =100;
        return x;
    }
    return x;
}
f(false,0); // returns '0'
f(true,0); // returns '100'

/* 块范围变量捕获 */
// 每次一个作用域运行时，它都会创建一个变量的环境。该环境及其捕获的变量即使在其范围内的所有内容执行完毕后也可以存在。
function theCityThatAlwaysSleeps(){
    let getCity;
    if(true){
        let city = "Seattle";
        getCity = function(){
            return city;
        }
    }
    return getCity();
}
// 由于我们是从执行环境中捕获city的，因此尽管if块已经完成执行，我们仍然可以访问它。
// 回想一下，前面的setTimeout实例中，我们最终需要使用IIFE来为循环每次迭代捕获变量的状态for。
// 实际上，我们正在做的是为捕获的变量创建一个新的变量环境。这有点痛苦，但幸运的是，不必再在TypeScript中再次这样做。

// let声明为循环的一部分时，声明具有截然不同的行为。这些声明不仅为循环本身引入了新的环境，还为每次迭代创建了一个新的作用域。
// 由于无论如何我们都是通过IIFE进行此操作，因此我们可以将旧的setTimeout示例更改为仅使用let声明
for(let i=0;i<10;i++){
    setTimeout(function(){console.log(i);},100*i);
}


/* const 声明 */
// 它们就像let声明，但绑定后就无法更改其值，在相同范围规则下，它们与let相同，但是不能将它们重新分配。
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat
}
// Error
kitty = {
    name: "Danielle",
    numLives: numLivesForCat
}
// all "okay"
kitty.name  = "Rory";
kitty.name =  "Kitty";
kitty.name = "Cat";
kitty.numLives --;
