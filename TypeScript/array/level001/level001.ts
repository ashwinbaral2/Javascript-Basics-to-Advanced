export{}
// ================== TypeScript Exercises ==================

// Q1 – Easy
// Add 'age' property and print alongside name and rollNo
let name: string = 'Krishna';
let rollNo: number = 21;
let isStudent: boolean = true;
let age: number = 20; // New property

console.log(`Q1 → Name: ${name}, Roll No: ${rollNo}, isStudent: ${isStudent}, Age: ${age}`);

// ---------------------------------------------------------

// Q2 – Beginner
// Remove last element from nums array and print
const nums: number[] = [3, 1, 2, 5, 2];
nums.push(9); // adds 9
nums.shift();  // removes first element
console.log(`Q2 → Updated nums array: ${nums}`);

// ---------------------------------------------------------

// Q3 – Intermediate
// Print all names in uppercase using a loop
const names :string[] = ['john', 'roman', 'orton' , 'johnson']
const namesUpperCased :string[] = names.map(item => item.toUpperCase())
namesUpperCased.forEach(item=> console.log('Q3 -> ',item)); 
//JOHN
// ROMAN
// ORTON
// JOHNSON
//note: good practice to not name var that uses forEach 
console.log('Q3 -> ',namesUpperCased); //[ 'JOHN', 'ROMAN', 'ORTON', 'JOHNSON' ]

// ---------------------------------------------------------
