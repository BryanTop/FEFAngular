interface Person {
    firstName: string;
    lastName: string;
    birthday: Date;
}

class Entry implements Person {
    firstName: string;
    lastName: string;
    birthday: Date;
    constructor(firstName: string, lastName: string, birthdate: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(birthdate);
    }

    stateData(): void {
        console.log("Name: " + this.firstName + " " + this.lastName + " Birthday: " + this.birthday);
    } 
}

const newPerson = new Entry("Albert", "Einstein", "5/14/1879");

newPerson.stateData();


const numbers: string[] = ['twelve', 'one-hundred', 'sixteen', 'forty-four', 'seventy-three', 'three-million']

console.log(numbers);
function Sort<S>(array: S[]): S[]{
    return array.sort();
}
console.log(Sort(numbers));