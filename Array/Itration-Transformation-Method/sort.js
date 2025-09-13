// Sort() → Sort array

// Sorts elements (alphabetically by default).
// ⚠️ It modifies the original array.

let fruits = ["Banana", "Apple", "Orange"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Orange"]

let numbers = [10, 5, 30, 2];
numbers.sort((a, b) => a - b); // ascending
console.log(numbers); // [2, 5, 10, 30]
