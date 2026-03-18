// Level 3 — Error Handling

// Create a function fetchData() that randomly resolves or rejects after 1 second. Use async/await with try/catch to handle errors gracefully.

// Write an async function that calls three APIs sequentially. If any API fails, log the error but continue with the next API.



//example of async/await to fetch data from an API and log it as a JSON string
const webDataJSON = async () =>{ 
let response = await fetch('https://dummyjson.com/products'); 
let data = await response.json(); //parse to JS object 
let jsonString = JSON.stringify(data); 
console.log(jsonString); 
} 
webDataJSON()