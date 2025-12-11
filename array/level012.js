// JavaScript Practice Set

// Level 1 – Sum of Negative Numbers
// Q1. Given an array of numbers, calculate the sum of all negative values.
// Example Input: [-3, 5, -7, 10, -2]
// Expected Output: -12
const arrInput = [-3, 5, -7, 10, -2]
const sumNegative = arrInput.reduce((container, nextItem) => nextItem < 0 ? container + nextItem : container, 0);
console.log(sumNegative);

// Level 2 – Count Even Numbers
// Q2. Given an array of numbers, count how many even numbers exist.
// Example Input: [1, 2, 4, 7, 10]
// Expected Output: 3

let count = {}
const numbers = [1, 2, 4, 7, 10];
const numbersCount = numbers.reduce((container, nextItem) => { return nextItem % 2 === 0 ? container + 1 : container }, 0);
console.log(numbersCount);
// Level 3 – Character Frequency in a String
// Q3. Given a string, count how many times each character appears.
// Use: split() and reduce()
// Example Input: "hello world"
// Expected Output: 

const greet = "Hello World"
const stringCount = greet.split("")
    .reduce((container, nextItem) => {
        container[nextItem] ? container[nextItem] += 1 : container[nextItem] = 1;
        return container;
    }
        , {})
console.log(stringCount)



// Level 4 – Flatten a 2D Array
// Q4. Flatten a 2D array into a single array using reduce.
// Example Input: [[1,2],[3,4],[5]]
// Expected Output: [1,2,3,4,5]
const nestedArr = [[1, 2], [3, 4], [5]];

const flatArr = nestedArr.reduce((container, nextItem) => { return container.concat(nextItem) }, []);
console.log(flatArr);
console.log(nestedArr.flat(Infinity));


// Level 5 – Maximum Number Using Reduce
// Q5. Find the maximum number in an array using reduce.
// Example Input: [3, 9, 1, 20, 7]
// Expected Output: 20
const num = [3, 9, 1, 20, 7];
const maxNum = num.reduce((container, nextItem) => container < nextItem ? nextItem : container);
console.log(maxNum);


// 6 – Sort + Sum of First 3 Elements
// Q6. Sort an array of numbers in ascending order and then calculate the sum of the first 3 elements using reduce.
// Example Input: [9, 1, 4, 7, 2]
// Expected Output: 1 + 2 + 4 = 7


// 7 – Group Words by First Letter
// Q7. Given an array of words, group them by their first letter into an object using reduce.
// Example Input: ["apple", "ball", "bat", "cat"]
// Expected Output: { a:["apple"], b:["ball","bat"], c:["cat"] }


// 8 – Reverse Order of Words
// Q8. Given a string of words separated by spaces, reverse the order of the words.
// Use: split(), reverse(), join()
// Example Input: "I love coding"
// Expected Output: "coding love I"


// 9 – Remove Duplicates Using Reduce
// Q9. Remove duplicates from an array of numbers using reduce.
// Example Input: [1, 2, 2, 3, 4, 4, 5]
// Expected Output: [1, 2, 3, 4, 5]


// 10 – Word Frequency
// Q10. Count the frequency of each word in a sentence.
// Use: split() + reduce()
// Example Input: "cat dog cat lion dog"
// Expected Output: { cat: 2, dog: 2, lion: 1 }
