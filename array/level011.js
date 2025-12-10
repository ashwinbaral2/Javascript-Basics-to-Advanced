// HARD QUESTION 1 — Multi-Level Sorting Challenge
// ------------------------------------------------
/*
Given the array:
let users = [
    { name: "Ram", age: 21, score: 88 },
    { name: "Shyam", age: 19, score: 91 },
    { name: "Hari", age: 21, score: 95 },
    { name: "Anu", age: 19, score: 91 },
    { name: "Mina", age: 21, score: 88 },
];

TASK:
Sort using the following rules:
*/

//1. Sort by age (ascending)

//2. If age is same → sort by score (descending)
//3. If both age & score match → sort by name alphabetically


/*
Expected Output:
[
  { name: "Anu", age: 19, score: 91 },
  { name: "Shyam", age: 19, score: 91 },
  { name: "Hari", age: 21, score: 95 },
  { name: "Ram", age: 21, score: 88 },
  { name: "Mina", age: 21, score: 88 },
]
*/


// HARD QUESTION 2 — Sorting Dates + Time Difference
// --------------------------------------------------
/*
Given the array:
let logs = [
  new Date("2024-05-02T10:23:00"),
  new Date("2024-01-12T09:15:30"),
  new Date("2024-05-02T10:22:00"),
  new Date("2023-12-31T23:59:59"),
];

TASKS:
1. Sort logs from NEWEST → OLDEST
2. Calculate how many SECONDS passed between newest & oldest

Expected Sorted Output:
[
  new Date("2024-05-02T10:23:00"),
  new Date("2024-05-02T10:22:00"),
  new Date("2024-01-12T09:15:30"),
  new Date("2023-12-31T23:59:59"),
]

Expected Additional Output:
DifferenceInSeconds: <your_value_here>

Write the code for both.
*/
