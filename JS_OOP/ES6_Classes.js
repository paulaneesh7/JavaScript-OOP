"use script";

// Classes in JS are not like the one's in Java/C++. They still implement prototypal inheritance behind the scenes

// class expression:
// const PersonCl1 = class{

// }


// class declaration
class PersonCl{
    // Constructor method
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // this will be created on the prototypes just like before, Methods will be added to .prototype property
    calcAge(){
        const currYear = new Date().getFullYear();
        console.log(currYear - this.birthYear);
    }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);  // true as we know

// Even this will work
PersonCl.prototype.greet = function(){
    console.log(`Hey ${this.firstName}`);
}
jessica.greet();

// So doing it through class hides just hides the true nature of prototypal inheritance in JS

// Important things about classes
// 1.Classes are NOT hoisted
// 2. Classes are also first-class citizens just like functions, it means we can passes them into functions and return them from functions(classes are a specila type of function behind the scenes)
// 3.Classes are executed in strict mode(even if we haven't included them above)