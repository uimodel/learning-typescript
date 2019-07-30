var User = /** @class */ (function () {
    function User(firsName, lastName) {
        this.firstName = firsName;
        this.lastName = lastName;
        this.fullName = firsName + ' ' + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var user = new User('lisa', 'bird');
console.log(greeter(user));
