function Person(name, email, birthday) {
    let person = Object.create(personsPrototype);
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
}

const personsPrototype = {
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
};

// Person.prototype.calculateAge = function () {
//    const diff = Date.now() - this.birthday.getTime();
//    const ageDate = new Date(diff);
//    return Math.abs(ageDate.getUTCFullYear() - 1970);
// };

const john = new Person('John', 'kenaa@example.com', '7-10-91');
const han = new Person('Han', 'aa@example.com', '2-8-91');

console.log(john);
