"use script";

const account = {
  owner: "aneesh",
  movements: [200, 530, 120, 300],

  // getter
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // setter
  set latest(mov){
    this.movements.push(mov);
  }
};

console.log(account.latest);
account.latest = 210;
console.log(account.movements);
console.log(account.latest);


// Using getters and setters in classes

class PersonCl{
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calAge(){
        const currYear = new Date().getFullYear();
        console.log(currYear - this.birthYear);
    }

    greet(){
        console.log(`Hey it's ${this.firstName} this side 😀`);
    }

    get age(){
        const currYear = new Date().getFullYear();
        return currYear - this.birthYear;
    }

    // Set a property that already exists
    set firstName(name){
        if(name.includes(' ')){
            this._firstName = name;  // creating a new variable through '_'
        }else{
            return `${name} is not a full name`;
        }
    }

    get fullName(){
        return this._firstName;
    }

    
}

const paul = new PersonCl('aneesh', 2002);
console.log(paul.age);
const walter = new PersonCl('Walter White', 1965);
console.log(walter.fullName);