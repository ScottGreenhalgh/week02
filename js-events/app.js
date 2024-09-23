console.log("Hello");

//select element

const button = document.getElementById("counter");

//attach event listener -- addEventListener(string event, function to run)
button.addEventListener("click", function () {
  console.log("You clicked me");
  console.log(button.textContent);
});

//passing a function

const button2 = document.getElementById("counter2");

button2.addEventListener("click", logSomething);

function logSomething() {
  console.log("Something");
}

//passing function with arguments

const button3 = document.getElementById("counter3");

button3.addEventListener("click", function () {
  logArguments("Arguments");
});

function logArguments(string) {
  console.log(string);
}

// build counter

const counter = document.getElementById("counter");
let count = 0;

counter.addEventListener("click", function () {
  count += 1;
  counter.textContent = `You've clicked ${count} times`;
});

// button for background colour

const backGroundButton = document.querySelector("#bg-color-button");

backGroundButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});

backGroundButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "orange";
});

// lmabda button

document.querySelector("#lambda-button").addEventListener("mouseover", () => {
  document.body.style.color = "purple";
});
