// JavaScript Practice Questions: Ternary, Loops, map, filter, reduce, forEach
// --------------------------------------------------------------
// Copy-paste and solve inside this file.

// =============================
// SECTION 1: TERNARY OPERATOR
// =============================

// Q1: Use a ternary to check if a number is positive or negative.
let num = 10;
let numCheck = num >= 0 ? "Positive" : "Negative";
console.log(numCheck);
//-----------------------------------------------------------
// Q2: Use a ternary to assign "Adult" or "Minor" based on an age value.
let age = 30;
let ageGroup = age >= 18 ? "Adult" : "Minor";
console.log(ageGroup);
//-----------------------------------------------------------
// Q3: Given a variable "score", use nested ternaries to assign grades A, B, C, or D.
let score = 82;
let result = score >= 80 ? "A" :
    score >= 60 ? "B" :
        score >= 40 ? "C" :
            "D"
//nested ternary 
console.log(result);//A
//-----------------------------------------------------------
// Q4: Use a ternary inside a function that returns "Even" or "Odd".
const num1 = (n) => (n % 2 === 0 ? "Even" : "Odd")
//using arrow function
console.log(num1(10));
//Even
//-----------------------------------------------------------
// Q5: Use a ternary to pick a default username if the given one is null.
let user = null;
let userName = user === null ? "adminUser123" : ""
console.log(userName);//adminUser123
//-----------------------------------------------------------
// =============================
// SECTION 2: for, while, do-while LOOPS
// =============================

// Q6: Write a for loop that prints numbers 1 to 20.
for (i = 0; i <= 20; i++) {
    console.log(i);
}//0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
//-----------------------------------------------------------
// Q7: Write a while loop that counts down from 10 to 1.
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}//10 9 8 7 6 5 4 3 2 1
//-----------------------------------------------------------
// Q8: Write a do-while loop that runs at least once, printing numbers until 5.
let k = 5
do {
    console.log(k);
    k--;
} while (k >= 1)
//5 4 3 2 1
//-----------------------------------------------------------
//Q9:Sum all numbers from 1 to 100 using a for loop.
let sum = 0;
for (p = 0; p <= 100; p++) {
    sum += p;
}//5050
//-----------------------------------------------------------
// Q10: Use a while loop to print only even numbers from 2 to 30.
let q = 2;
while (q <= 30) {

    console.log(q);
    q = q + 2;
}//2 4 6 8 10 12 14 16 18 20 22 24 26 28 30
//-----------------------------------------------------------
// =============================
// SECTION 3: forEach, map, filter
// =============================

// Q11: Use forEach to print each item in an array [2, 4, 6, 8].
const evenNum = [2, 4, 6, 8];
let evenNums = evenNum.forEach(num => console.log(num));//2 4 6 8 
console.log(evenNums);//undefined
//-----------------------------------------------------------
// Q12: Use map to multiply each element of an array by 10.
let evenNumMaps = evenNum.map(num => num * 10);
console.log(evenNumMaps);// [ 20, 40, 60, 80 ]
//-----------------------------------------------------------
// Q13: Use filter to keep only odd numbers from an array.
let nums = [1, 2, 3, 4, 5, 6, 7];
let numsFilter = nums.filter(num => num % 2 === 0);
console.log(numsFilter);//[ 2, 4, 6 ]
//-----------------------------------------------------------
// Q14: Use map to convert an array of strings to uppercase.
const stringValue = ["Ram", "Shyam", "Krishna", "Hari"];
let stringUpperCase = stringValue.map(name => name.toUpperCase());
console.log(stringUpperCase);//[ 'RAM', 'SHYAM', 'KRISHNA', 'HARI' ]
//-----------------------------------------------------------
// Q15: Use filter to remove all values less than 50 from [12, 99, 54, 33, 100].
let nums1 = [12, 99, 54, 33, 100];
let numFilters = nums1.filter(num => num < 50)
console.log(numFilters)//[ 12, 33 ]
//-----------------------------------------------------------



// =============================
// SECTION 4: reduce
// =============================
/*
arr.reduce((container , nextItem, nextID, OriginalArray) => {
    ~do something
    return accumulator;
}, initialValue)
*/

// Q16: Use reduce to add all numbers from an array [1, 2, 3, 4].
const num2 = [1, 2, 3, 4];
const num2Sum = num2.reduce((a,b)=>a+b, 0);
console.log(num2Sum);//10
//-----------------------------------------------------------
// Q17: Use reduce to find the maximum value in [10, 5, 22, 8].
const num3 = [10, 5, 22, 8];
const num3Max = num3.reduce((a,b)=> Math.max(a,b));
console.log(num3Max);//22
//-----------------------------------------------------------
// Q18: Use reduce to count occurrences of each item in ["a", "b", "a", "c", "b", "a"].
const items = ["a", "b", "a", "c", "b", "a"];
const itemCount = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});
console.log(itemCount);//{ a: 3, b: 2, c: 1 }
//-----------------------------------------------------------
// Q19: Use reduce to calculate the total price of items: [{price: 100}, {price: 250}, {price: 50}].

const itemsPrice = [{ price: 100 }, { price: 250 }, { price: 50 }];
const totalPrice = itemsPrice.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);//400
//----------------------------------------------------------- 
// Q20: Use reduce to flatten a nested array [[1,2],[3,4],[5,6]].

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((acc, arr) => acc.concat(arr), []);
console.log(flattenedArray);//[ 1, 2, 3, 4, 5, 6 ]
//-----------------------------------------------------------   


// End of file