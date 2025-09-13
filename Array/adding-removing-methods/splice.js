// splice() → Add/Remove at index

// splice(startIndex, deleteCount, newItems...)

//startIndex → where to start

//deleteCount → how many to remove

//newItems → items to add

const number =[1 , 2, 3, 4 ,4, 5, 6,]
let remove = number.splice(0,2)
console.log(remove);
console.log(number);
number.splice(3, 0 ,  "Add" );
console.log(number);


