





// --------------------------------------------------------------
//  REDUCE + GROUPING + CREATE/UPDATE LOGIC — PRACTICE SET
//  (No answers included. Solve inside each empty section.)
// --------------------------------------------------------------


// Q1. Group words by first letter.
// Expected pattern: { a: ["ant","apple"], b:["ball"] }
const words1 = ["ant", "apple", "ball"];


// Q2. Group words by last letter.
// Expected pattern: { t:["cat","bat"], g:["dog"] }
const words2 = ["cat", "bat", "dog"];


// Q3. Group words by length.
// Expected pattern: { 3:["sun","car"], 5:["apple"] }
const words3 = ["sun", "apple", "car"];


// Q4. Count how many words start with each letter
// Expected pattern: { a:2, b:1 }
const words4 = ["apple", "ant", "ball"];


// Q5. Convert this array into an object where key = word,
// value = array of characters of that word.
// Expected: { cat:["c","a","t"], bat:["b","a","t"] }
const words5 = ["cat", "bat"];


// Q6. Convert this array into an object where keys are
//   true: words that contain "a"
//   false: words that don't contain "a"
// Expected: { true:["cat","ball"], false:["dog"] }
const words6 = ["cat", "dog", "ball"];


// Q7. Group numbers by even or odd
// Expected: { even:[2,4], odd:[1,3,5] }
const nums1 = [1, 2, 3, 4, 5];


// Q8. Build frequency map of characters in each word
// Expected: { hi:{h:1, i:1}, dad:{d:2, a:1} }
const words7 = ["hi", "dad"];


// Q9. Turn this array into:
// { long:["elephant","giraffe"], short:["dog","cat"] }
// Rule: word length > 4 ⇒ long, else ⇒ short
const words8 = ["dog", "cat", "elephant", "giraffe"];


// Q10. Group by first two letters
// Expected: { ap:["apple","apply"], ba:["ball","bat"] }
const words9 = ["apple", "apply", "ball", "bat"];


// --------------------------------------------------------------
// EXTRA CHALLENGE (BONUS)
// --------------------------------------------------------------
// Convert an array of objects into this structure:
// Input:
// [
//   {name:"ram", city:"kathmandu"},
//   {name:"sita", city:"pokhara"},
//   {name:"hari", city:"kathmandu"}
// ]
//
// Output:
// {
//   kathmandu:["ram","hari"],
//   pokhara:["sita"]
// }
const users = [
    { name: "ram", city: "kathmandu" },
    { name: "sita", city: "pokhara" },
    { name: "hari", city: "kathmandu" }
];


// --------------------------------------------------------------
// END OF EXAM FILE
// --------------------------------------------------------------
