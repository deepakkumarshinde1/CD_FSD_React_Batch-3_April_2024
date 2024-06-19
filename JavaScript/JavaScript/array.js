let student = "Deeepak";
let number = 10;

// array ==> array collection same or different data types
function fun() {}

let arrayName = [10, "a", true, null, fun];
console.log(arrayName[3]);

let numbers = [10, 20, 30, 40, 50, 60];

let maxValue = numbers.length;

// for (let i = 0; i < maxValue; i++) {
//   console.log(numbers[i]);
// }

// for in
for (index in numbers) {
  //   console.log(numbers[index]);
}
// for of
for (value of numbers) {
  console.log(value);
}
