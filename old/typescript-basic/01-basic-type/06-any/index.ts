// 有时候，我们想要为那些编程阶段还不清楚类型对变量指定一个类型,这些值可能来自与动态对内容，比如来自用户输入第三方代码库。这种情况下，我们不希望类型检查器对这些值进行检查而是直接让他们通过编译阶段的检查
let notSure:any = 4
notSure.ifItExists() // 好吧，ifItExists可能在运行时存在
notSure.toFixed() // 好的，toFixed存在（但编译器不检查）