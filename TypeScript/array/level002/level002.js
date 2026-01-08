"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Initial data
const nums = [3, 1, 2, 5, 2, 9];
const names = ['ram', 'shyam', 'hari', 'hema'];
// -------------------- Q1 --------------------
// Filter & Transform
// Keep only even numbers, multiply by 10, print resulting array
const numsFilter = nums.filter(item => item % 2 === 0).map(item => item * 10);
console.log("Q1 → Even numbers multiplied by 10:", numsFilter); //[ 20, 20 ]
// -------------------- Q2 --------------------
// Find & Uppercase
// Find the name starting with 'h' and convert it to uppercase
const initialNameh = names.filter(name => name.charAt(0) === 'h');
const initialNameH = initialNameh.map(item => item.toUpperCase());
console.log('Q2 -> ', initialNameH);
//[ 'HARI', 'HEMA' ]
// -------------------- Q3 --------------------
// Sum of numbers greater than 2 using reduce
// -------------------- Q4 --------------------
// Create a new array of strings for nums in format "Value: X"
// e.g., [3, 1, 2] -> ["Value: 3", "Value: 1", "Value: 2"]
//# sourceMappingURL=level002.js.map