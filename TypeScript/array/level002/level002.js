"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Initial data
var nums = [3, 1, 2, 5, 2, 9];
var names = ['ram', 'shyam', 'hari', 'hema'];
// -------------------- Q1 --------------------
// Filter & Transform
// Keep only even numbers, multiply by 10, print resulting array
var numsFilter = nums.filter(function (item) { return item % 2 === 0; }).map(function (item) { return item * 10; });
console.log("Q1 → Even numbers multiplied by 10:", numsFilter); //[ 20, 20 ]
// -------------------- Q2 --------------------
// Find & Uppercase
// Find the first name starting with 'h' and convert it to uppercase
var initialNameh = names.filter(function (name) {
    return name.charAt(0) === 'h';
});
var initialNameH = initialNameh.map(function (item) { return item.toUpperCase(); });
console.log(initialNameH);
//[ 'HARI', 'HEMA' ]
// -------------------- Q3 --------------------
// Sum of numbers greater than 2 using reduce
// -------------------- Q4 --------------------
// Create a new array of strings for nums in format "Value: X"
// e.g., [3, 1, 2] -> ["Value: 3", "Value: 1", "Value: 2"]
