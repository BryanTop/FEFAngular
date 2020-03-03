"use strict";
var ContactCard = /** @class */ (function () {
    function ContactCard(firstName, phoneNumber) {
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
    }
    ContactCard.prototype.sendMessage = function () {
        console.log("Name: " + this.firstName + " Phone: " + this.phoneNumber);
    };
    return ContactCard;
}());
var newPerson = new ContactCard("Bryan", 18888888989);
newPerson.sendMessage();
