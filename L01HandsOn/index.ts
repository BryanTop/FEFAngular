interface Person {
    firstName: string;
    lastName?: string;
}

interface Contact {
    phoneNumber: number;
    email?: string;
}

class ContactCard implements Person, Contact {
    firstName: string;
    phoneNumber: number;
    constructor(firstName: string, phoneNumber: number) {
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
    }

    sendMessage(): void {
        console.log("Name: " + this.firstName + " Phone: " + this.phoneNumber);
    }
}

const newPerson = new ContactCard("Bryan", 18888888989);

newPerson.sendMessage();