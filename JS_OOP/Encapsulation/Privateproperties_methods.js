"use script";
/*
Class Fields: 
1)Public field 
2)Privat field 
3)Private methods 
4)Public methods
Public fields are not preset on the prototype but on the instances
*/

class Account {
  // 1)Public fields
  locale = "hi-IND";

  // 3)Private field
  #movements = []; // private fields are denoted with '#'
  #pin; // initialising it here and then defining it inside constructor

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Interface(same as Public Methods)
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdrawal(val) {
    this.deposit(-val); // calling the other method from another method
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    } else {
      console.log(`Loan not approved`);
    }
  }

  // 4) Privat methods(same as like private fields, using a '#' before writing them)
  #approveLoan(val) {
    const initialValue = 0;
    const sumWithInitial = this.#movements.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

    if (sumWithInitial > 20) {
      return true;
    }
    return false;
  }

  static helper() {
    console.log("HELP");
  }
}

const acc1 = new Account("Aneesh", "EUR", 1111);

acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

// console.log(acc1.#movements);   will give error
// console.log(acc1.#approveLoan(100));   will give error as well

Account.helper(); // this is how static methods work, they are not available on the instances

// AS IN 2023 MAXIMUM OF THE BROWSER DON'T SUPPORT THESE CLASS FIELDS, SO IT'S BETTER NOT TO USE THEM RIGHT NOW WHILE MAKING PROJECTS   
