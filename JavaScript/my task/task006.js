//! Q1: Count how many times each word appears in the string.
//? Example: "apple banana apple mango banana apple"
//? Expected: apple→3, banana→2, mango→1
//* Hint: Use an object or Map to store word → count.

const text = "apple banana apple mango banana apple";

// TODO: Write code to count word frequency using a Map or {}.
const words = text.split("")
let count = new Map()

//! Q2: Find the first character in the string that appears only once.
//? Example: "swiss" → output: 'w'
//* Hint: First pass → frequency map. Second pass → find char with freq 1.

const str = "swiss";

// TODO: Write code to find the first non-repeating character.


//! Q3: Check whether two strings are anagrams.
//? Example: "listen" and "silent" → true
//^ Rule: Same letters, same counts, order doesn't matter.
//* Hint: Build two frequency maps OR sort both strings.

const s1 = "listen";
const s2 = "silent";

// TODO: Write code to check if s1 and s2 are anagrams.


//! Q4: Build a mini dictionary using a Map or object.
//^ Steps:
//^ 1. Ask user for 5 words + meanings (you can hardcode for now).
//^ 2. Store them as { word: meaning }
//^ 3. Ask/search for a word.
//^ 4. If found → print meaning. Else → print "Not found".

// TODO: Write code for this dictionary system using JS Map or object.


//! Q5: From the given array, find all numbers that appear more than once.
//? Example: [1,2,3,2,4,3,5,3] → duplicates: 2, 3
//* Hint: Use a Map/object to count each number.

const nums = [1, 2, 3, 2, 4, 3, 5, 3];

// TODO: Write code to find duplicates using a Map or {}.
