
// flatMap() → Map + Flat

// Applies a map function, then flattens the result.


let numbers = [1, 2, 3];
let result = numbers.flatMap(num => [num, num * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6]



