var mySearch;
// 实现   参数名可以和接口定义的不一样，但是类型必须一样，或者干脆不写类型，让ts自己推断
mySearch = function (/*source:string,subString:string*/ src, sub) {
    var result = src.search(sub);
    return result > -1;
};
