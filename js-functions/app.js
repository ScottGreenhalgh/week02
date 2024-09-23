function sayHello() {
  console.log("Hello world!");
}

sayHello();

function sayHelloTo(userName) {
  console.log("Hello " + userName + "!");
}

sayHelloTo("Jeff");
sayHelloTo("Steve");
sayHelloTo("Deez");

function greet(greeting, userName) {
  console.log(greeting + " " + userName + "!");
}

greet("Morning", "Jeff");
sayHelloTo("Salutations", "Steve");
greet("Dragon", "Deez");

function add(x, y, z) {
  return x + y + z;
}

function subtract(x, y, z) {
  return x - y - z;
}

function multiply(x, y, z) {
  return x * y * z;
}

function divide(x, y, z) {
  return x / y / z;
}

function ensureDefined(operator, value) {
  if (value === undefined) {
    if (operator === "+" || operator === "-") {
      value = 0;
    } else {
      value = 1;
    }
  }
  return value;
}

function calculate(operator, x, y, z) {
  x = ensureDefined(operator, x);
  y = ensureDefined(operator, y);
  z = ensureDefined(operator, z);

  switch (operator) {
    case "+":
      return add(x, y, z);
    case "-":
      return subtract(x, y, z);
    case "*":
      return multiply(x, y, z);
    case "/":
      return divide(x, y, z);
  }
}

console.log(calculate("+", 15));
console.log(calculate("-", 20, 3, 7));
console.log(calculate("*", 3, 5, 2));
console.log(calculate("/", 18, 3));
