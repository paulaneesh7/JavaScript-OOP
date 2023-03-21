"use script";

// Function declarations and Function expressions work in Constructor functiond
// Arrow functions doesn't have it own "this" keyword so it can't be used
const Person = function(firstName, birthYear){
    // console.log(this);
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never create a method inside of Constructor function
    // this.calAge = function(){
    //     const currYear = new Date().getFullYear();
    //     console.log(currYear - this.birthYear);
    //     return currYear - this.birthYear
    // };
}

const aneesh = new Person('Aneesh', 2002);
console.log(aneesh);
console.log("Name is: "+aneesh.firstName+" birthYear is: "+aneesh.birthYear);

// What exactly happens when we call a function with a new operator:
// 1) New Empty object{} is created
// 2) Function is called, "this" keyword is set to this newly created object{} , this = {}
// 3) This newly created object is linked to a prototype, {} linked to prototype
// 4) Function automatically return {}


const matilda = new Person('Matilda', 2017);
const sneha = new Person('Sneha', 2009);
const shruti = new Person('Shruti', 2018);
console.log(matilda, sneha, shruti);

// Here "matilda", "sneha", "shruti" are instances of their respective Constructor functions
// Constructor functions are like classes in JavaScript

console.log(aneesh instanceof Person);  // to check whether it's an instance or not