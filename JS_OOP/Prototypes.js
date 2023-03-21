"use script";


const Person = function(firstName, birthYear){
    // console.log(this);
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const aneesh = new Person('Aneesh', 2002);
console.log(aneesh);
console.log("Name is: "+aneesh.firstName+" birthYear is: "+aneesh.birthYear);


const matilda = new Person('Matilda', 2017);
const sneha = new Person('Sneha', 2009);
const shruti = new Person('Shruti', 2018);
console.log(matilda, sneha, shruti);


console.log(aneesh instanceof Person);

// Prototypes

Person.prototype.calcAge = function(){
    const currYear = new Date().getFullYear();
    console.log(currYear - this.birthYear);
}

console.log(Person.prototype);
aneesh.calcAge();  // we can get access to it because of prototypal inheritance
matilda.calcAge();
sneha.calcAge();
shruti.calcAge();

// Any object always has access to the methods and properties of it's prototype
// Prototype of aneesh,matilda etc is Person.prototype

console.log(aneesh.__proto__);
console.log(aneesh.__proto__ === Person.prototype); // this returns true as intended
// Person.prototype is not the prototype of Person, rather it can be used as the prototype of all the objects created using Person constructor function


console.log(Person.prototype.isPrototypeOf(aneesh));  // confirms the above statement
console.log(Person.prototype.isPrototypeOf(Person));  // false as said above

// Consider it as .prototypeOfLinkedObjects for making it more suitable to understand Prototypes


// Setting properties on Prototype
Person.prototype.species = 'Homo Sapiens'
console.log(aneesh.species, matilda.species);
// this property are not the own property of the object, only firstName and birthYear are, this is an inherited property

console.log(aneesh.hasOwnProperty('firstName'));  // true
console.log(aneesh.hasOwnProperty('birthYear')); // true
console.log(aneesh.hasOwnProperty('species'));  //false


console.log(Person.prototype.constructor);