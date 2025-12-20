// Q1. Create an object `student` with properties: name, age, marks
// Print the student's name and marks.
const student = {
  name: "Krish",
  age: 28,
  marks: 100,
}
console.log(student.name);
console.log(student.marks);
//---------------------------------------------------------------

// Q2. Create an object `car` with properties: brand, model, year
// Add a method `getDetails()` that returns all details as a string.
const car = {
  brand: "Mercedes benz",
  model: "A-Class",
  year: "2012",
  getDetails: function () {
    return ` The car is ${this.brand} of model ${this.model} released in ${this.year}. `
  }
}
car.getDetails()
//----------------------------------------------------------
// Q3. Create an object `user` with properties: username and isLoggedIn
// Write a method `login()` that sets isLoggedIn to true.

const user = {
  username: "adminUser",
  isLoggedIn: false,
  login: function () {
    return this.isLoggedIn = true
  }
}
user.login()


//-----------------------------------------------------------

// Q4. Create an object `rectangle` with properties width and height
// Add a method `area()` that returns the area.

const rectangle = {
  width: 10,
  height: 15,
  area: function () { return this.width * this.height }
}
rectangle.area();

//-----------------------------------------------------------

// Q5. Create an object `counter` with a property count = 0
// Add methods `increment()` and `decrement()` to update count.
let count = 0
const counter = {
  count: 0,
  increment: function () { return count += 1 },
  decrement: function () { return count -= 1 },
}
counter.increment()//1
counter.increment()//2
counter.decrement()//1

// Q6. Create an object `person` with properties name and age
// Add a method `isAdult()` that returns true if age >= 18.

const person = {
  name: "ChikyMaya",
  age: 21,
  isAdult: function () { return (this.age >= 18 ? true : false) }
}
person.isAdult()

//----------------------------------------------------------------------

// Q7. Create an object `book` with properties title, author, price
// Change the price property after object creation and print the object.
const book = {
  title: "Geological Field Excursion Guide Book for Malekhu",
  author: "Dr. Santa Man Rai",
  price: 300,
}
book.price = 350;
console.log(book);

// -----------------------------------------------------------

// Q8. Create an object `calculator` with properties a and b
// Add methods add(), subtract(), multiply(), divide().
const calculator = {
  a: 10,
  b: 20,
  add: function () { return this.a + this.b },
  sub: function () { return this.a - this.b },
  product: function () { return this.a * this.b },
  divide: function () { return this.a / this.b }
}
console.log(calculator.add());
console.log(calculator.sub());
console.log(calculator.product());
console.log(calculator.divide());

//--------------------------------------------------------------

// Q9. Create an object `team` with a property members (array of names)
// Add a method `addMember(name)` that pushes a new name.
const team = {
  members: ['ingu', 'mingu', 'tingu'],
  addMember: function (name) {
    this.members.push(name)
  }
}
team.addMember("bhidu")
console.log(team.members)//[ 'ingu', 'mingu', 'tingu', 'bhidu' ]

//---------------------------------------------------------------

// Q10. Create an object `bankAccount` with balance
// Add methods `deposit(amount)` and `withdraw(amount)`
// Prevent withdrawal if balance is insufficient.

const bankAccount = {
  balance: 10000,

  deposit: function (amount) {
    this.balance += amount;
    return this.balance;
  },
  withdraw: function (amount) {
    if (amount > 0) {
      this.balance -= amount; return this.balance;
    } else {
      console.log("Balance is insufficient!");
      return this.balance;
    }
  }
};


bankAccount.deposit(1000)
bankAccount.withdraw(2000)
console.log(bankAccount.balance)







