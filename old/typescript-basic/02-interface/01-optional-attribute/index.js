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
// 带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号
