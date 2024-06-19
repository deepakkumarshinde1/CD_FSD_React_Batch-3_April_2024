// let a = 10;
// let b = 20;

// addition
// let result = a + b;
// console.log(result);

// let result1 = 10 + 30;
// console.log(result1);

// function add(){
//     // write a code
// }// function definition

// function call
// add();

let a = 10;
let b = 20; // global scope

function add(a, b) {
  let result = a + b;
  console.log(result);
  a = 70;
  // result ==> local scope variables
}

add(a, b);
add(100, 50);

console.log(a); // 10 or 70

// area of circle
function areaOfCircle(r) {
  // isNaN --> true for string
  // and false for number
  if (isNaN(r) === true) {
    console.log(`Invalid Number`);
  } else {
    const PI = 3.14;
    let result = PI * (r * r); // NaN => not a number
    console.log(`Area of circle for ${r} radius is ${result}`);
  }
}

areaOfCircle();

// write a program to create a nth loop
// for , while ,do while

function loop(n = 0) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

loop(70);

loop();
