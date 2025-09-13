// flat() → Flatten nested arrays


let arr = [1, [2, [3, 4]]];
console.log(arr.flat());    // [1, 2, [3, 4]]
console.log(arr.flat(2));   // [1, 2, 3, 4]  (2 levels deep)
