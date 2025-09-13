// every() → All must match

// Returns true if all elements match a condition.

let numbers = [5, 10, 15];
console.log(numbers.every(num => num > 3)); // true
console.log(numbers.every(num => num > 10)); // false


// ✅ Like saying: “Do all elements match?”