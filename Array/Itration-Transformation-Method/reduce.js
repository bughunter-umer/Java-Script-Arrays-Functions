// reduce() → Reduce to single value

// Applies a function to reduce array → single result.

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10


// ✅ Often used for sums, totals, averages, etc.

// acc = accumulator (result so far)

// num = current value