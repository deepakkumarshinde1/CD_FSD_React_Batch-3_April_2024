let a = 10; // global

if (2 === 2) {
  let a = 40;
}

function fun() {
  let a = 20;
}

// fun();

// console.log(a);

// let / const ==> block scope variable
// var global scope or function scope

function fun2() {
  let a = 100;
  if (2 === 2) {
    let a = 10;
  }
  console.log(a);
}

fun2();

// fun2   10 am to 6.00 pm
// Project B   2 pm tp 3 pm
