

// Level 5 — Advanced Challenges

// Implement a race condition using Promise.race():

// Two functions: fast() resolves in 1 second, slow() resolves in 3 seconds

// Use async/await to log which resolves first

// Create an async function that takes an array of URLs, fetches data from each (simulate with setTimeout), and returns an array of results. Ensure that:

// If one fetch fails, it does not stop the others

// You log both success and failure

// Simulate a retry mechanism with async/await:

// A function fetchWithRetry() tries to fetch data, and if it fails, retries up to 3 times with 1-second delay between retries