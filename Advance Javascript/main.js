let spanElement = document.querySelector(".h1-class > span");
let countdown = document.querySelector(".countdown > span");
let startBtn = document.querySelector(".start-btn");
let stopBtn = document.querySelector(".stop-btn");
console.log("hi");
// for (let i = 1; i <= 10000; i++) {
setTimeout(function () {
  console.log("server request");
}, 0);

// }
console.log("deepak");

// async way --> Event Loop

// timer
setInterval(function () {
  let date = new Date();
  spanElement.innerHTML = date.toLocaleTimeString();
}, 1000);

let intervalId = null;

stopBtn.addEventListener("click", function () {
  clearInterval(intervalId);
});
startBtn.addEventListener("click", function () {
  let countDown = 0;
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(function () {
    if (countDown === -1) {
      clearInterval(intervalId);
    } else {
      countdown.innerHTML = countDown;
      countDown++;
    }
  }, 50);
});
