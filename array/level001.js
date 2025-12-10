// ================== EASY LEVEL ==================


// Initial Array
const arr = [3, 1, 2, 5, 2];


// Q1: Add 9 to the end of the array
arr.push(9);
console.log(arr);


// Q2: Remove the first element of the array
const removedElement = arr.shift();
console.log(arr);


// Q3: Concat two arrays
const arr2 = [10, 20, 30, 40];
const combinedarr = arr.concat(arr2);
console.log(combinedarr);


// Q4: Calculate total length of both arrays after concat
console.log(combinedarr.length);


// Q5: Remove the last element from the combined array
const removedElement1 = combinedarr.pop();
console.log(combinedarr);


// Q6: Remove elements at index 2 & 3 (5 and 2)
const removedElement3 = arr.splice(2, 2);
console.log(arr);




// ================== MEDIUM LEVEL ==================


let ramScore = [95, 92, 87];
let shyamScore = [77, 99, 99];


// Q1: calculate the length of array
console.log(ramScore.length);
console.log(shyamScore.length);


// Q2: get last element & check if divisible by 21
const lastElement = ramScore[ramScore.length - 1];
console.log(lastElement % 21 === 0);


// Q3: check if ram percentage > shyam percentage
let ramPercent = (ramScore[0] + ramScore[1] + ramScore[2]) / 300 * 100;
let shyamPercent = (shyamScore[0] + shyamScore[1] + shyamScore[2]) / 300 * 100;
console.log(ramPercent > shyamPercent);
console.log(ramPercent < shyamPercent);




// ================== HARD LEVEL ==================


// Q4: sort() use case in array
let arr1 = [12, 5, 8, 130, 44];
console.log(arr1.sort((a,b)=>a-b));


let Arr2 = [3, 45, 2, 67, 34];
console.log(Arr2.sort((a,b)=>b-a));


let fruits = ["banana", "apple", "cherry", "date"];
console.log(fruits.sort());


let names = ["zara", "mohan", "ram", "hari"];
// Swap the second & third items
[names[1], names[2]] = [names[2], names[1]];
console.log(names);