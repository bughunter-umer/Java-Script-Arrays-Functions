// slice() → Copy part of array (non-destructive)
/* 

slice(start, end) returns a new array:

Includes start

Excludes end

Doesn’t change the original */




let fruits = ["Apple", "Banana", "Mango", "Orange"];
let sliced = fruits.slice(1, 3);
console.log(sliced); // ["Banana", "Mango"]
console.log(fruits);


const number =[1 , 2, 3, 4 ,4, 5, 6,]
let remove = number.slice(2,3);
console.log(remove);
console.log(number);






/* 
🔑 Summary Table

Method  	What it does	             Changes Original?
push()	    Add at end	                 ✅ Yes
pop()	    Remove last	                 ✅ Yes
unshift()	Add at start	             ✅ Yes
shift()	    Remove first	             ✅ Yes
splice() 	Add/remove at any index	     ✅ Yes
slice()	    Copy part of array	         ❌ No
                (non-destructive)
*/