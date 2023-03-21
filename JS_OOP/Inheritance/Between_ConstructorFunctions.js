"use script";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  const year = new Date().getFullYear();
  console.log(year - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);  // this is get access to the parent class's defined properties(it's like "super" keyword)
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(
    `My name is ${this.firstName} and I'm a student of ${this.course}`
  );
};

const mike = new Student("Mike", 2002, "Computer Science");
console.log(mike);
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); // true as intended
console.log(mike instanceof Person);
// above one is also 'true' as because we connected mike's prototype with Person as well through Object.create at line-19
// however if we comment that line then it will be false

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); // checking for the above code