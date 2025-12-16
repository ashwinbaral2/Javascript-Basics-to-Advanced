let words = ["apple", "bat", "catastrophe", "dog"];
// Sort by length ascending
// Output: ["bat","dog","apple","catastrophe"]
const wordLength = words.sort((a, b) => a.length - b.length);
console.log(wordLength)

let nums = [2, 11, 101, 3];
// Sort lexicographically → ["101","11","2","3"]
// Output: [101,11,2,3]
//const numSort = nums.sort(a.localeCompare(b))
const numSort = nums.sort()
console.log(numSort)

let arr = [5, 8, 1, 4, 3, 10, 7];
// Sort by even numbers first, then by odd numbers
// Expected: [8,4,10,5,1,3,7]
const arrSort = arr.sort((a, b) =>
    a % 2 === 0 && b % 2 !== 0 ? -1 :
        a % 2 !== 0 && b % 2 === 0 ? 1 :
            0
)
console.log(arrSort)

let players = [
    { name: "Rita", score: 88 },
    { name: "Gita", score: 88 },
    { name: "Sita", score: 91 },
    { name: "Nita", score: 75 }
];
// Sort by score descending, if score same then by name ascending
// Expected Output:
// [
//   {name:"Sita", score: 91},
//   {name:"Gita", score: 88},
//   {name:"Rita", score: 88},
//   {name:"Nita", score: 75}
// ]


let names = ["hari", "Anu", "BIBEK", "chandra"];
// Sort names case-insensitively A→Z
// Expected Output: ["Anu", "BIBEK", "chandra", "hari"]