let first = [1,2]
let seconed = [3,4]
let bothPlus = [...first,...seconed]
console.log(bothPlus); // [ 1, 2, 3, 4 ] 浅拷贝

let defualts = {
    food: 'spicy',
    price: '$10',
    ambiance: 'noisy'
}
let search = {...defualts,food: 'rich'}
console.log(search); // { food: 'rich', price: '$10', ambiance: 'noisy' }


