// Exercise: Array Destructuring Basics

// You have an array of fruits
const fruits = ["Apple", "Banana", "Cherry"];

// Task:
// 1️⃣ Use array destructuring to assign the first fruit to a variable called 'firstFruit'
// 2️⃣ Assign the second fruit to a variable called 'secondFruit'
// 3️⃣ Assign the remaining fruits (if any) to a variable called 'otherFruits'

// Example: 
// firstFruit should be "Apple"
// secondFruit should be "Banana"
// otherFruits should be ["Cherry"]
const [firstFruit, secondFruit, ...otherFruits] = fruits

console.log(firstFruit)//Apple
console.log(secondFruit)//Banana
console.log(otherFruits)//['Cherry']

// Exercise: Level-Up Array Destructuring

// You have an array of numbers
const numbers = [10, 20, 30, 40, 50];

// Task:
// 1️⃣ Use array destructuring to assign the first two numbers to variables called 'first' and 'second'
// 2️⃣ Assign the last number to a variable called 'last'
// 3️⃣ Assign all remaining numbers in the middle to a variable called 'middleNumbers'

// Example:
// first should be 10
// second should be 20
// middleNumbers should be [30, 40]
// last should be 50

const [first, second, ...rest] = numbers

const last = rest.pop()
const middle = [...rest]

console.log(first)//10
console.log(second)//20
console.log(last)//50
console.log(middle)//[ 30, 40 ]

// You have an array of players with their scores
const players = [
    { name: 'Alice', score: 10 },
    { name: 'Bob', score: 15 },
    { name: 'Charlie', score: 20 }
];

// Task:
// 1️⃣ Use array destructuring to get the first two players into variables: player1, player2
// 2️⃣ Use object destructuring to get their names and scores
// 3️⃣ Print: "Player X has Y points" for the first two players

const [player1, player2] = players
const {name : name1, score: score1} = player1
const {name : name2, score: score2} = player2
console.log(`Player ${name1} has ${score1} points`)//Player Alice has 10 points
console.log(`Player ${name2} has ${score2} points`)//Player Bob has 15 points




