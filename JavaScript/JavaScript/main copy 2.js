// Compare
//  === !== > >= < <=

let number = 4 >= 4; // true , false
console.log(number);

// conditional statement
if (2 !== 2) {
  console.log("Yes");
} else {
  console.log("No");
}

// dell , lenovo , lg, apple , chrome
let product = "dell";
switch (product) {
  case "dell":
    console.log(`product is ${product}`);
    break;
  case "lenovo":
    console.log(`product is ${product}`);
    break;

  default:
    console.log(`given product is  not available`);
    break;
}

// Logic
//  && (and)
//  || (or)
//  ! (not)

// userSub is silver and Coupon Code "MAKE ME GOLD" ==> 4K else 480p
// userSub is gold ==> 4k
let userSub = "";
let couponCode = "";

if (userSub === "silver" || couponCode === "MAKE ME GOLD") {
  console.log("you are watching a video in 4k");
} else {
  console.log("you are watching a video in 480p");
}

// Nullish
// ??

// ternary operator
// condition ? true : false;

// 21/2 ==> 10.5
// 25 % 2 ==> 1

// ops , loops , function , arrays
