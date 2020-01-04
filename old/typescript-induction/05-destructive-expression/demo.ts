// @ts-ignore
function getStock() {
    return {
        code: "IBM",
        price: {
            price1:200,
            price2: 400
        },
        xx: 'xxx',
        yy: 'yyy'
    }
}
var {code,price:{price2}} = getStock();
console.log(code);  // IBM
console.log(price2); // 400