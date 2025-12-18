// -------------------------------------------------------
// Replace part of a string
let word = 'typescript';


// Q1: Replace 'type' with 'java'
// Expected Output: "javascript"
let newWord = word.replace('type', 'java');
console.log(newWord); // Output: javascript


// -------------------------------------------------------
// Trim extra spaces from a string
let greeting = '  hello world  ';

// Q2: Remove leading + trailing spaces
// Expected Output: "hello world"

let Greetings = greeting.trim();
console.log(Greetings); // Output: hello world
console.log(greeting); // Original string remains unchanged: "  hello world  "


// -------------------------------------------------------
// Check whether a string contains a substring
let framework = 'nodejs';

// Q3: Check if framework contains "js"
// Expected Output: true
console.log(framework.includes('js')); // Output: true
