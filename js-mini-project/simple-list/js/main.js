let inputBox = document.querySelector("#input-box");
let btnSave = document.querySelector("#btn-save");
let list = document.querySelector("#list");

let friendsList = [];

btnSave.addEventListener("click", function () {
  // check validation
  let nameValidationCap = new RegExp(/^[A-Z]$/); // 1st letter capital

  let nameValidation = new RegExp(/^[A-Z][a-zA-Z]+$/); // valid name

  let value = inputBox.value;
  if (value === "") {
    alert("Enter Friends Name");
    return false;
  }

  if (nameValidationCap.test(value[0]) === false) {
    alert("Friends Name Must Start With Capital Letter");
    return false; // stop your code
  }

  if (nameValidation.test(value) === false) {
    alert("Invalid Friend Name / Name must have at list 2 letters");
    return false; // stop your code
  }

  // store data in an array
  friendsList.push(inputBox.value);

  // clear input
  inputBox.value = "";

  // creating a li array
  let newArray = friendsList.map(function (value, index) {
    return `<li>${value}</li>`;
  });

  // array to string and the assigning it to inner html
  list.innerHTML = newArray.join("");
});

// foreach returns nothing
// map returns a new array
