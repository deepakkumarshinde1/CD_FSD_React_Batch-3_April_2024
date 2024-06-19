let a = 10;
// function def
function abc(b, c = 0) {
  console.log(b, c);
}

// function call
abc(a, 12);
abc(true);
abc("Hello");

let userName = "";
let password = "";

function userLogin(u, p) {
  // server call to for username and password
}

userLogin(userName, password);

// -------------------------------

// i = counter

//generate random number between 1-256
function randomRGB() {
  return Math.floor(Math.random() * 256); // 256 0 - 1
}

//generate random color
function randomColor() {
  var color = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
  return color;
}

/*
  rgb(10 ,50 ,  60 )\
  1 - 256

  black --- white
  0 ---- 255
  0,0,90
*/

//counter and random color for each div
let htmlCode = "";
for (let i = 1; i <= 100; i += 1) {
  let rgbColor = randomColor();
  htmlCode += `<div style = "background-color:${rgbColor}">${i}</div>`;
}
document.querySelector("section").innerHTML = htmlCode;

// operators
// cond statements

// loop
// function

// for
// while
// do while
// for in
// for of

function randomNumber() {
  let number = Math.floor(Math.random() * 10000); // 0.5678908765435678876456789098765
  // 5678
  return number;
}

function genOtp(number) {
  if (number > 999 && number < 10000) {
    return number;
  } else {
    genOtp(randomNumber());
  }
}

// let otp = genOtp(randomNumber());
// console.log("your otp is ", otp);
