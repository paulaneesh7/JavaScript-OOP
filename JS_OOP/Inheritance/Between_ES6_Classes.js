"use script";

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calAge() {
    const currYear = new Date().getFullYear();
    console.log(currYear - this.birthYear);
  }

  greet() {
    console.log(`Hey it's ${this.firstName} this side 😀`);
  }

  get age() {
    const currYear = new Date().getFullYear();
    return currYear - this.birthYear;
  }

  // Set a property that already exists
  set firstName(name) {
    if (name.includes(" ")) {
      this._firstName = name; // creating a new variable through '_'
    } else {
      return `${name} is not a full name`;
    }
  }

  get fullName() {
    return this._firstName;
  }
}

// Inheritance
class Studentl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // the parameters we want from the parent class
    this.course = course;
  }

  introduce() {
    console.log(
      `My name is ${this._firstName} and I'm a student of ${this.course}`
    );
  }

  set Age(year) {
    this.birthYear = year;
  }

  calAge() {
    const thisYear = new Date().getFullYear();
    console.log(
      `I'm ${
        thisYear - this.birthYear
      }yr old, but as a student I feel more like ${2037 - this.birthYear + 10}`
    );
  }
}

const martha = new Studentl("Martha Jones", 2012, "Computer Science");
console.log(martha);
martha.Age = 2002;
martha.introduce();
martha.calAge();
