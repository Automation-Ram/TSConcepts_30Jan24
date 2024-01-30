var Person = /** @class */ (function () {
    function Person(firstName, age) {
        var _this = this;
        this.display = function () { return console.log(_this.firstName + ' ' + _this.age); };
        this.firstName = firstName;
        this.age = age;
    }
    return Person;
}());
var part = new Person("Tome", 50);
part.display;
