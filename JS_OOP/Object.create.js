"use script";

const PersonProto = {
  calcAge() {
    const year = new Date().getFullYear();
    console.log(year - this.birthYear);
  },

  init(firstName, birthYear){    // for just initialising
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

const steven = Object.create(PersonProto);  // manually connecting/setting the object's prototype to any object we want to
console.log(steven.__proto__);  // and it's connected now
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ == PersonProto);  // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
