"use script";

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Interface
  deposit(val) {
    this.movements.push(val);
  }

  withdrawal(val) {
    this.deposit(-val); // calling the other method from another method
  }

  approveLoan(val) {
    const initialValue = 0;
    const sumWithInitial = this.movements.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

    if (sumWithInitial > 20) {
      return true;
    }
    return false;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
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
console.log(acc1);
