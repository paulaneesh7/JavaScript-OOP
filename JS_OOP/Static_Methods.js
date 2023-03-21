"use script";

// Constructor function
const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const aneesh = new Person('Aneesh', 2002);
console.log(aneesh);

// Static method
Person.hey = function(){
    console.log('Hey there 🙋‍♂️');
    console.log(this);
}

Person.hey();

// In Class
class PersonCl{
    // Constructor method
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Instance method
    calcAge(){
        const currYear = new Date().getFullYear();
        console.log(currYear - this.birthYear);
    }

    // Static method(mainly used for helper functions)
    static hey(){
        console.log('Hey there 🙋‍♂️');
        console.log(this);
    }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);

PersonCl.hey();


