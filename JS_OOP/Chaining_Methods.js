"use script";

class Account {
  locale = "hi-IND";

  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // this is the current object
  }

  withdrawal(val) {
    this.deposit(-val);
    return this; // returning "this" will make the methods chainable and this makes sense in methods that actually set some properties
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
      return this;
    } else {
      console.log(`Loan not approved`);
      return this;
    }
  }

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
Account.helper();

acc1
  .deposit(300)
  .deposit(500)
  .withdrawal(35)
  .requestLoan(25000)
  .withdrawal(4000);

// All the above done operations is now PRESENT in the movements array
console.log(acc1.getMovements());
