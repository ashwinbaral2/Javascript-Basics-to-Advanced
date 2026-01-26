// Simple array
const arr = [3, 1, 2, 5, 2];
arr.push(9); 
console.log(arr); // [3, 1, 2, 5, 2, 9]

// Nested array ---> An array inside of an array.
const arr1 = [1, [2, 3]];

// Shallow copy
const arr2 = [...arr1];  // top level copied, nested array shared
arr2[1][0] = 99;  // changes inner array
console.log(arr2); // [1, [99, 3]]
console.log(arr1); // [1, [99, 3]]  ← original changed due to shallow copy

// Deep copy
const arr3 = JSON.parse(JSON.stringify(arr1)); // fully independent copy
arr3[1][0] = 100;  // change inner array in copy
console.log(arr3); // [1, [100, 3]]
console.log(arr1); // [1, [99, 3]]  ← original safe


// -------------------------------------------------------
const Arr = [3,4,5,6,1]

const arr2 = [6,2,3,1,5]


//Q1.  Output should be [3,4,5,6,1,6,2,3,1,5]

const arrMerge = Arr.concat(arr2)
console.log(arrMerge);
console.log([...Arr, ...arr2])//Output: [3,4,5,6,1,6,2,3,1,5]

//Q2. output shoulb be [5,1,3,2,6]
const Arr1 =[...Arr]
const arrReverse = Arr1.reverse()
console.log(arrReverse);//Output: [5,1,3,2,6]

//Q3. Output should be ascending order of elements in array
const arrAscend = arrMerge.sort((a,b) => a-b)
console.log(arrAscend);//Output: [1,1,2,3,3,4,5,5,6,6]

//Output should be descending order of elements in array
const arrDescend = arrMerge.sort((a,b)=>b-a)
console.log(arrDescend);//Output: [6,6,5,5,4,3,3,2,1,1]

//Q4. Output should be 5
console.log(arr[2]);

//Q5. Output should be [5,6,1]
const arrS = [...arr]
const arrSlice = arrS.slice(2,5)
console.log(arrSlice);//Output: [5,6,1]