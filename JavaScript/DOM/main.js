const sectionObject = document.querySelector("section");
const button = document.querySelector("#changeText");
const input = document.querySelector(".inputText");

button.addEventListener("click", function () {
  //   sectionObject.innerHTML = "Code Drift";
  //   sectionObject.style.fontStyle = "italic";
  //   sectionObject.style.backgroundColor = "red";
  //   sectionObject.style.color = "white";
  //   sectionObject.classList.add("animateColor");

  sectionObject.innerHTML = input.value;
  input.value = "";
});

let sectionId = document.querySelector("#section-id");
let htmlCode = ``;
for (let i = 1; i <= 5; i++) {
  htmlCode += `<section class="section-class">`;
  for (let j = 1; j <= i; j++) {
    htmlCode += `<div></div>`;
  }
  htmlCode += `</section>`;
}
sectionId.innerHTML = htmlCode;
