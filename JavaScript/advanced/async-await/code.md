```js
// Level 1 — Basic Understanding

// Write an async function that returns the string "Hello Javascript" after 2 seconds using Promise.
const greeting = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Hello Javascript");
	}, 2000);
})
	.then((message) => {
		console.log("The problem is resolved");
		console.log(message);
	})
	.catch((err) => {
		console.log(err);
	});
//--------------------------------------------------------------------------------------
// Convert this Promise-based function to use async/await:
const greet = async () => {
	let res = await new Promise((resolve) =>
		setTimeout(() => {
			resolve("Namaste javascript!");
		}, 1000),
	);
	return res;
};
greet().then(console.log);
greet();
//--------------------------------------------------------------------------------------
// Write a function fetchData() that returns a Promise which resolves with the string "Data fetched" after 1 second. Use .then() to log the result.
function fetchData() {
	return new Promise((resolve) => {
		setTimeout(() => resolve("Data fetched"), 1000);
	});
}
fetchData().then(console.log);

// const data = async () =>{
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Data fetched"), 1000);
//   });
// }
// data().then(console.log);

// Create a function getNumber() that returns a random number after 1 second.
//  Use async/await to log the number.
const getNumber = async() => {
	return new Promise((resolve)=>{
		setTimeout(() => {
		resolve(Math.random()) ;
	}, 1000);
	})
};
getNumber().then(console.log)

```
