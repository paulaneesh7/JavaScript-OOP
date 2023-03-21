"use script";

const PersonProto = {
  calcAge() {
    const year = new Date().getFullYear();
    console.log(year - this.birthYear);
  },

  init(firstName, birthYear) {
    // for just initialising
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

// We want to add another prototype between PersonProto and the object, like between middle of the chain
const StudentProto = Object.create(PersonProto);

// Creating the init for StudentProto
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};


StudentProto.introduce = function(){
    console.log(`My name is ${this.firstName} and I'm from ${this.course} dept`);
}

const jay = Object.create(StudentProto); //it will inherit from StudentProto
// StudentProto is the prototype of jay object and PersonProto is the prototype of StudentProto
// PersonProto is a parent prototype of jay which means that it's in its prototype chain

jay.init('Jay', 1999, 'Computer Science');
jay.introduce();
jay.calcAge();