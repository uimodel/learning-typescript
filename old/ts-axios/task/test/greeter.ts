class User{
    fullName:string
    firstName:string
    lastName:string
    constructor(firsName:string,lastName:string){
        this.firstName = firsName
        this.lastName = lastName
        this.fullName = firsName + ' ' + lastName
    }
}

interface Person {
    firstName:string
    lastName:string
}

function greeter(person:Person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName
}
let user = new User('lisa','bird')

console.log(greeter(user));
