// 💡 Fun JS Exercises inspired by Dice Game logic,

// Exercise 1: Treasure Chest
// You have an array of treasure objects. Each treasure has a value. Use destructuring and array methods to find total value.
const treasures = [
    { name: "Gold Coin", value: 10 },
    { name: "Silver Ring", value: 5 },
    { name: "Ruby Gem", value: 20 },
];

// Task: Use destructuring to log each treasure's name and value, then compute total value


// Exercise 2: Space Mission
// Each astronaut has a name and a list of missions completed.
const astronauts = [
    { name: "Alice", missions: ["Moon", "Mars"] },
    { name: "Bob", missions: ["ISS"] },
    { name: "Charlie", missions: ["Moon", "ISS", "Mars"] },
];

// Task: Use array and object destructuring to print: "Astronaut X completed Y missions"

// Exercise 3: Potion Mixer
// Combine ingredients stored as objects into a new potion object.
const ingredients = [
    { ingredient: "Unicorn Hair", potency: 5 },
    { ingredient: "Phoenix Feather", potency: 10 },
    { ingredient: "Dragon Scale", potency: 15 },
];

// Task: Use spread operator to combine all ingredients into a single potion object with a total potency

// Exercise 4: City Population Tracker
// Cities stored as objects in an array. Calculate population growth.
const cities = [
    { name: "Metropolis", population: 1000000 },
    { name: "Gotham", population: 800000 },
    { name: "Star City", population: 500000 },
];

// Task: Destructure each city and add 10% growth to population, log the new populations

// Exercise 5: Mystery Boxes
// Boxes contain items with points. Create a function to add points to a player score.
const boxes = [
    { item: "Gem", points: 10 },
    { item: "Scroll", points: 5 },
    { item: "Elixir", points: 20 },
];

// Task: Write a function that takes currentScore and box index, adds the box points, returns new score

// Exercise 6: Library Books
// Books are objects in an array. Filter and map to get titles of books above 300 pages.
const books = [
    { title: "JS Magic", pages: 250 },
    { title: "React Secrets", pages: 350 },
    { title: "TS Guide", pages: 400 },
];

// Task: Use array destructuring and array methods to get titles of books with pages > 300
