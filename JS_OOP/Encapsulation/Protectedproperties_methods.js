"use script";


class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = []; // protected property now as we used "_" before it
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdrawal(val) {
    this.deposit(-val); // calling the other method from another method
  }

  _approveLoan(val) {
    const initialValue = 0;
    const sumWithInitial = this._movements.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

    if (sumWithInitial > 20) {
      return true;
    }
    return false;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    } else {
      console.log(`Loan not approved`);
    }
  }
}

const acc1 = new Account("Aneesh", "EUR", 1111);

// These methods here are the API's to our objects
acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
