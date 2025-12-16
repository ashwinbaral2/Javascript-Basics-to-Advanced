// Level 2 String Practice Questions

// Q1: Reverse a string
let str1 = "Hello";

const reversed = str1.split('').reverse()
console.log(reversed)
//Output:  [ 'o', 'l', 'l', 'e', 'H' ]
//-------------------------------------------------------

// Q2: Count the number of vowels in a string
let str2 = "Programming";
let count = 0
let vowels = 'aeiou'
const vowelCount = str2.split('').forEach(item=> vowels.includes(item)? count += 1: count)
console.log(vowelCount)//undefined => forEach doesnt give anything
console.log(count)//3

//-------------------------------------------------------

// Q3: Replace a word in a string
let str3 = "I love JavaScript";
// Replace 'JavaScript' with 'Python'
const strReplace = str3.replace("JavaScript", "Python")
console.log(strReplace);

//-------------------------------------------------------

// Q4: Find the index of a substring
let str4 = "I love coding";
// Find index of 'coding'
const str4SubString = str4.indexOf('coding');
console.log(str4SubString)
//-------------------------------------------------------

// Q5: Remove whitespace from the beginning and end of a string
let str5 = "   Hello World   ";
const str5Trim = str5.trim(" ")
console.log(str5Trim)
console.log(str5)
