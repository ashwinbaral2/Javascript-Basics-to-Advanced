// Level 1 — Basic Understanding

// Write an async function that returns the string "Hello World" after 2 seconds using Promise.
function greet(){
  setTimeout(() => console.log('hello world'), 4000);
}
greet();
// Convert this Promise-based function to use async/await:

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Data fetched"), 1000);
//   });
// }
// fetchdata().then(console.log);

const data = async () =>{
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched"), 1000);
  });
}
data().then(console.log);

const webDataJSON = async () =>{ 
let response = await fetch('https://dummyjson.com/products'); 
let data = await response.json(); //parse to JS object 
let jsonString = JSON.stringify(data); 
console.log(jsonString); 
} 
webDataJSON()

// Create a function getNumber() that returns a random number after 1 second. Use async/await to log the number.


