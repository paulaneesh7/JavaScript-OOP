"use script";


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
aneesh.calcAge(); 
matilda.calcAge();
sneha.calcAge();
shruti.calcAge();



console.log(aneesh.__proto__);
console.log(aneesh.__proto__ === Person.prototype);


console.log(Person.prototype.isPrototypeOf(aneesh)); 
console.log(Person.prototype.isPrototypeOf(Person)); 


Person.prototype.species = 'Homo Sapiens'
console.log(aneesh.species, matilda.species);

console.log(aneesh.hasOwnProperty('firstName'));  
console.log(aneesh.hasOwnProperty('birthYear')); 
console.log(aneesh.hasOwnProperty('species'));  


console.log(Person.prototype.constructor);


// Prototypal Inheritance
console.log(aneesh.__proto__);
console.log(aneesh.__proto__.__proto__);  // climbing higher in Prototypal chain, this returns the Object() function
// Object's prototype

console.log(aneesh.__proto__.__proto__.__proto__);  // "null" as there's nothing above Obejcts's prototype
console.dir(Person.prototype.constructor);


let arr = [3,6,9,12,15,18,21];  // same as new Array[]
console.log(arr.__proto__); // returns all the array methods, each array inherits these methods from it's prototype
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);  // returns Object.prototype


// setting new function on Array constructor function using the process as known earlier, this will return all unique values from the array
Array.prototype.unique = function(){
    return [...new Set(this)]  // this === the arry passed
};

arr = [3,6,6,9,12,15,18,21,12,3];
console.log(arr.unique());

// All the arrays will inherit this unique method now as we set it using the prototype property of the Array constructor