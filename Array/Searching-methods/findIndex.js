/* 
findIndex() → Index of first match

Like find(), but returns the index instead of the value.
If no match → returns -1.

Returns index of the element
*/


let numbers = [10, 25, 40, 55, 70];

let result = numbers.findIndex(num => num > 30);
console.log(result); // 2 (index of 40)



const array = [10 ,23, 45, 67, 7, 9, 0, 12];
let find = array.findIndex(num => num < 1);
console.log(find);

const array2 = [10 ,23, 45, 67, 7, 9, 0, 12];
let find2 = array.findIndex(num => num < 1);
console.log(find);

const array3 = [10 ,23, 45, 67, 7, 9, 0, 12];
let find3 = array.findIndex(num => num < 1);
console.log(find);




/* 
Summary Table

Method	         Returns	Search Direction	              Works with Condition?
indexOf()	          Index (first match)	Left → Right	  ❌ Exact value only
lastIndexOf()	      Index (last match)	Right → Left	  ❌ Exact value only
includes()	          true / false	Left → Right	          ❌ Exact value only
find()	              Element	Left → Right	              ✅ Condition allowed
findIndex()	          Index	Left → Right	                  ✅ Condition allowed

*/