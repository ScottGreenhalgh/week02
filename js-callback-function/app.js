console.log("Hello world");

function notifyUserCallback() {
  console.log("notifyUser function was called!");
}

function takingCallbacksAsArguments(notifyUserCallback) {
  console.log("Taking a callback function as an argument");
  notifyUserCallback();
}
// using multiple callback functions
function statusCheckFunction(onSuccessCallback, onFailureCallback) {
  const success = Math.random() > 0.5;
  if (success) {
    onSuccessCallback({
      message: "This is the message of success",
    });
  } else {
    onFailureCallback();
  }
}

// anon arrow function
statusCheckFunction(
  (data) => {
    console.log("Success!", data.message);
  },
  () => {
    console.log("It failed :(");
  }
);
// anon function
statusCheckFunction(
  function (data) {
    console.log("Success!", data.message);
  },
  function () {
    console.log("It failed :(");
  }
);

function calculate(a, b, operatorFunction) {
  return operatorFunction(a, b);
}

function add(a, b) {
  return a * b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

calculate(2, 4, add);
