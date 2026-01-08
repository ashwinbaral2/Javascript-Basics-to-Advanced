"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ================== TypeScript Exercises ==================
// Q1 – Easy
// Add 'age' property and print alongside name and rollNo
let name = 'Krishna';
let rollNo = 21;
let isStudent = true;
let age = 20; // New property
console.log(`Q1 → Name: ${name}, Roll No: ${rollNo}, isStudent: ${isStudent}, Age: ${age}`);
// ---------------------------------------------------------
// Q2 – Beginner
// Remove last element from nums array and print
const nums = [3, 1, 2, 5, 2];
nums.push(9); // adds 9
nums.shift(); // removes first element
console.log(`Q2 → Updated nums array: ${nums}`);
// ---------------------------------------------------------
// Q3 – Intermediate
// Print all names in uppercase using a loop
const names = ['john', 'roman', 'orton', 'johnson'];
const namesUpperCased = names.map(item => item.toUpperCase());
namesUpperCased.forEach(item => console.log('Q3 -> ', item));
//JOHN
// ROMAN
// ORTON
// JOHNSON
//note: good practice to not name var that uses forEach 
console.log('Q3 -> ', namesUpperCased); //[ 'JOHN', 'ROMAN', 'ORTON', 'JOHNSON' ]
// ---------------------------------------------------------
//# sourceMappingURL=level001.js.map