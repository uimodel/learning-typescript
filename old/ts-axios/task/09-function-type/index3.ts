class Animal{
    name: string
}
class Dog extends Animal{
    breed: string
}

interface NotOkay {
    [x:number]:Dog
    [x:string]:Animal
}
