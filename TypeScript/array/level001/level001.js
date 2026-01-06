"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ================== TypeScript Exercises ==================
// Q1 – Easy
// Add 'age' property and print alongside name and rollNo
var name = 'Krishna';
var rollNo = 21;
var isStudent = true;
var age = 20; // New property
console.log("Q1 \u2192 Name: ".concat(name, ", Roll No: ").concat(rollNo, ", isStudent: ").concat(isStudent, ", Age: ").concat(age));
// ---------------------------------------------------------
// Q2 – Beginner
// Remove last element from nums array and print
var nums = [3, 1, 2, 5, 2];
nums.push(9); // adds 9
nums.shift(); // removes first element
console.log("Q2 \u2192 Updated nums array: ".concat(nums));
// ---------------------------------------------------------
// Q3 – Intermediate
// Print all names in uppercase using a loop
var names = ['john', 'roman', 'orton', 'johnson'];
var namesUpperCased = names.map(function (item) { return item.toUpperCase(); });
namesUpperCased.forEach(function (item) { return console.log(item); });
//JOHN
// ROMAN
// ORTON
// JOHNSON
//note: good practice to not name var that uses forEach 
console.log(namesUpperCased); //[ 'JOHN', 'ROMAN', 'ORTON', 'JOHNSON' ]
// ---------------------------------------------------------
