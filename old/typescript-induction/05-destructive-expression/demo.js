// @ts-ignore
function getStock() {
    return {
        code: "IBM",
        price: {
            price1: 200,
            price2: 400
        },
        xx: 'xxx',
        yy: 'yyy'
    };
}
var _a = getStock(), code = _a.code, price2 = _a.price.price2;
console.log(code); // IBM
console.log(price2); // 400
