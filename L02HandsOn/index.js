"use strict";
var Entry = /** @class */ (function () {
    function Entry(firstName, lastName, birthdate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(birthdate);
    }
    Entry.prototype.stateData = function () {
        console.log("Name: " + this.firstName + " " + this.lastName + " Birthday: " + this.birthday);
    };
    return Entry;
}());
var newPerson = new Entry("Albert", "Einstein", "5/14/1879");
newPerson.stateData();
var numbers = ['twelve', 'one-hundred', 'sixteen', 'forty-four', 'seventy-three', 'three-million'];
console.log(numbers);
function Sort(array) {
    return array.sort();
}
console.log(Sort(numbers));
