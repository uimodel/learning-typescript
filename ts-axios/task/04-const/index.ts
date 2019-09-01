// 常量声明后无法修改，但是对属性可以修改
const numLivesForCat = 9;

const kitty = {
    name: 'Kitty',
    numLives:numLivesForCat
}
/*
无法修改
kitty= {
    name:'Tommy',
    numLives: numLivesForCat
}*/

// 这是允许的，因为是引用没有变化，只是引用里的值发生了变化，不会报错。
kitty.name = 'Jerry'
kitty.numLives--

/*
* 什么时候用let，什么时候用const
* */
// 除非你是后期要修改的，否则一律用const。