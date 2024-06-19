// const numbers = [10, 20, 30, 40, 50];

// loop ==> array methods

// array is object of array class

// numbers.forEach(function (value, index) {
//   console.log(value, index);
// });

// console.log(numbers);
// add start
// numbers.unshift(100, 200, 300, 400);

// add end
// numbers.push(100);

// delete start
// numbers.shift();
// numbers.shift();

// delete end
// numbers.pop();
// numbers.pop();

// user location delete
//numbers.splice(0, 2); // index , how much data to delete (count)
// console.log(numbers);

// 0 index value
// undefined
// error

// clean
// numbers = [];
// numbers.splice(0, numbers.length);
// numbers.length = 0;
// console.log(numbers);

// search
const numbers = [10, 20, 30, 30, 40, 30, 50, 30];

// let isFound = numbers.includes(100); // string or number
let search = 300;
let isFound = numbers.filter(function (value, index) {
  return search === value;
});
console.log(isFound);

// undefined
// []

// include --> true / false
// find --> value / undefined
// findIndex --> index / -1
// filter --> [value] / []

// deep copy and shallow (spread operators)

// arrays are not primitive types
// data of array is store in reference ( memory allocation )

let a = [10, 20, 30];
let b = [...a];
a[1] = 200;

console.log(a);
console.log(b);
