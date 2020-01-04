// @ts-ignore
function* getStockPrice(stock) {
    while (true) {
        yield Math.random()*100;
    }
}

var priceGenerator = getStockPrice("IBM"); // 返回一个generator函数

var limitPrice = 15;

var price = 100;

while (price>limitPrice){
    price = priceGenerator.next().value;
    console.log(`the generator return ${price}`);
}

console.log(`buying at ${price}`);