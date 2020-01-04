var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var first = [1, 2];
var seconed = [3, 4];
var bothPlus = first.concat(seconed);
console.log(bothPlus); // [ 1, 2, 3, 4 ] 浅拷贝
var defualts = {
    food: 'spicy',
    price: '$10',
    ambiance: 'noisy'
};
var search = __assign({}, defualts, { food: 'rich' });
console.log(search); // { food: 'rich', price: '$10', ambiance: 'noisy' }
