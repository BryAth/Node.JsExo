class Person {
    Person(lastname,firstname){
        this.lastname= lastname;
        this.firstprenom = firstprenom;

    }
}

let bidule = new Person ("MAchin" , "Bidule");

module.exports = function(lastname,firstname,birthdate){
    this.lastname = lastname;
    this.firstname = firstname;
    this.birthdate = birthdate;
    this.fullname = `${this.lastname}  ${this.firstname} né le ${this.birthdate.toDateString()}`
}