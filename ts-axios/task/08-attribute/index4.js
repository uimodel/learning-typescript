// 额外的属性检查可选属性
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
// 方式三：虽然将参数先单独写在变量里再传递能绕过额外类型检查，但是不推荐。因为当
var squareOptions = { color: 'black', width: 100 };
// let mySquare = createSquare({color:'black',width:100})
var mySquare = createSquare(squareOptions);
