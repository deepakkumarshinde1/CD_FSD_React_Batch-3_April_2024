async function div(a, b) {
  if (b !== 0) {
    let result = a / b;
    return Promise.resolve(result);
  } else {
    return Promise.reject(`Cannot divide a ${a} by zero`);
  }
} // promise definition

console.log("promise start");
div(10, 0)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error(error);
  }); // promise call

console.log("promise end");

// Server Call (API)
// DB operations
// Error handling
