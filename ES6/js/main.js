// let const
// freeze
// const array = [10,20,30]
// Object.freeze(array)

// ES6 Features which we use in react js are
// destructuring --> we extract a data from array or object
let array = [10, 20, 30, 40, 50];
// let numberOne = array[0];// 10
// let numberTwo = array[1];// 20
let [numberOne, numberTwo, ...arrayList] = array;
console.log(numberOne);
console.log(numberTwo);
console.log(arrayList);

// state --> react concept
// let [data, updateFunction] = useState(data); //[data, updateFunction]  ::  string , number , boolean , [] , {}
let studentDetails = {
  sName: "Deepakkumar",
  sCourse: "React Master Program",
  sMobile: 8007070845,
};

let { sMobile } = studentDetails;
console.log(sMobile);

// spread operators
// deep copy and shallow
let array2 = [10, 20, 40, 50];
// let array3 = array2; // shallow copy
let array3 = [...array2]; // deep copy or array

let product = {
  name: "Dell",
  prices: 40000,
};
let product2 = { ...product }; // deep copy of object

// Object Literals
let blogName = "React JS";
let myBlog = {
  blogName,
  blogDetails: "React is a library",
};
console.log(myBlog);

// String Template
let text = `My Blog Name is ${blogName}`;
console.log(text);

console.clear();

// Rest Parameters
function addOfNumber(...values) {
  let result = 0;
  values.forEach(function (value) {
    // result = result + value
    result += value;
  });
  console.log(result);
}
addOfNumber(1, 2, 100);
// error

// Default Parameters
function fun(a = 0, b = 0) {
  let result = a + b; // NaN
  console.log(result);
}
fun();

// Arrow functions

function fun2() {}

// function expression
// let fun2 = function () {};
// let fun2 =  () => {};

let fun2 = function () {
  return {
    name: "deepak",
  };
};

// let fun3 = () => "hello";
let fun3 = () => ({
  name: "deepak",
});

// arrow function don't have there own context
// they collect context from surrounding
