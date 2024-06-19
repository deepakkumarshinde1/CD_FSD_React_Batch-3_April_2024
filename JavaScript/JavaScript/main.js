// Nullish
// ??
// undefined or null
let number = 0;
let marks = number ?? "Absent";
// console.log(`marks are ${marks}`);

// ternary operator
// condition ? true : false;

let numberOne = 10;
let result = numberOne % 2 === 0 ? "even" : "odd";
console.log(result);

// ops , loops , function , arrays
// for , while , do while
// i++ (inc) and i-- (dec)
for (let i = 1; i <= 10; i++) {
  console.log("for loop ", i);
}

let i = 1;
while (i <= 10) {
  console.log("while loop ", i);
  i++;
}

let j = 12;
do {
  console.log("do while loop ", j);
  j++;
} while (j <= 10);

// function and array
