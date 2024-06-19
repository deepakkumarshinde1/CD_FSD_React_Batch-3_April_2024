console.log("Hi");
// let studentDetails = {
//   name: "Mayur",
//   age: 12,
//   isPresent: true,
//   city: {
//     pinCode: 422002,
//     locality: "Dwarka",
//     city: "Nashik",
//   },
//   hobbies:["Playing", "Reading"],
//   updateName: function(){}
// }; // JS Object

const studentDetails = Object.freeze({
  name: "Deepakkumar",
  age: 32,
});

console.log(studentDetails);

console.log(studentDetails.age);

console.log(studentDetails["age"]);

let prop = "name";
console.log(studentDetails[prop]);

studentDetails.name = "Mayur";
console.log(studentDetails);

// const array = Object.freeze([10, 20, 30, 40, 50]);
// array[0] = 1000;

const product = {
  brand: "dell",
  brand: "hp",
};

// console.log(product);
console.clear();
const products = [
  {
    name: "dell",
    price: 15000,
  },
  {
    name: "hp",
    price: 12000,
  },
  {
    name: "appel",
    price: 50000,
  },
]; // array + object = arrayOfObject

// console.log(products);
let minPrice = 15000;
let searchedProduct = products.filter(function (value, index) {
  return value.price >= minPrice;
});

console.log(searchedProduct);
