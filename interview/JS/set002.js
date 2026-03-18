
// JavaScript Mixed Problems

// 1. Object 
// Create an object 'student' with name, age, and grade
// Print the highest grade using sort().
const students = [
    { name: "Aswin", age: 24, grade: 90, },
    { name: "Chikumaya", age: 20, grade: 80 },
    { name: "LuppiBudo", age: 22, grade: 70 }
]
const studentGrades = students.sort((a, b) => b.grade - a.grade)
console.log(studentGrades);
// 2. Array + map/filter
// Given an array of numbers [10, 15, 20, 25, 30]
// Use map to create a new array with each number doubled, then filter out numbers > 40.
const number = [10, 15, 20, 25, 30];
const numsMap = number.map(item => item * 2);
console.log(numsMap);
const numsFilter = numsMap.filter(item => item > 40);
console.log(numsFilter);
// 3. String + loops
// Given a string 'JavaScript', write code to count how many vowels are in the string.
const string = "JavaScript";
//const vowels = string.split("").reduce((container, nextItem) => { container[nextItem] ? }, {})

console.log(vowels)
// 4. Deep Copy Object
// Create an object 'book = {title: 'JS', author: 'Alice', tags: ['programming','js']}'
// Make a deep copy of the book and change the first tag in the copy to 'coding'.
// Print both objects to verify original is unchanged.

// 5. Mean and Median
// Given an array of numbers [12, 7, 22, 9, 5], calculate and print the mean and median.

// 6. Nested Objects + Loops
// Create a 'company' object with multiple employees (nested objects with id, name, salary).
// Print the names of employees earning more than 50000.

// 7. Reverse Strings + Numbers
// Given a number 12345, reverse it to 54321.
// Given a string 'hello', reverse it to 'olleh'.

// 8. Object keys/values + Array methods
// Given an object {a: 1, b: 2, c: 3},
// get an array of values, double each value using map, then sum them.