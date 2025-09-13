/* 
find() → First element that matches condition

Finds the first element that satisfies a condition (with a callback function).
If no match → returns undefined.

Returns element

*/


let numbers = [10, 25, 40, 55, 70];

let result = numbers.find(num => num > 30);
console.log(result); // 40 (first element > 30)
let secondResult = numbers.find(num=> num < 10);
console.log(secondResult);
