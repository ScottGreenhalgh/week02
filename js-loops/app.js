console.log("Hello world!");

// While Loops

let counter = 1;

while (counter <= 5) {
  console.log(`Count ${counter}`);
  counter++;
}

let keepLooping = true;
let i = 0;
while (keepLooping === true) {
  console.log("Iteration", i);
  // set keepLooping to false with 10% chance: Math.random() returns a random value between 0 and 1
  keepLooping = Math.random() < 0.1;
  console.log(keepLooping);
  i++;
}

// generate random numbers between 0 and 1000
let stopLooping = false;
let maxAttempts = 10;

while (!stopLooping) {
  if (maxAttempts === 0) break;
  let randNumber = Math.floor(Math.random() * 1000);
  console.log(`Random Number ${maxAttempts} is ${randNumber}.`);

  maxAttempts--;
}

// looping till a specific number is found
let rollCount = 1;
let keepRolling = true;
while (keepRolling === true) {
  // track number of rolls adding 1 to rollcount per loop
  rollCount++;
  // random number between 0 and 1, times 6 plus 1, rounded to nearest whole number
  let diceRoll = Math.floor(Math.random() * 6) + 1;

  if (diceRoll === 1) {
    keepRolling = false;
    console.log(`It took your ${rollCount} rolls to get a 1.`);
  }
}

// For Loops

for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

for (let counter = 0; counter < 5; counter++) {
  console.log(`Current count: ${counter}`);
}

// loops and arrays

favouriteAnimals = [
  "unicorns",
  "butterflies",
  "horses",
  "panda",
  "penguin",
  "octopus",
];

favouriteColours = [
  "green",
  "red",
  "blue",
  "white",
  "black",
  "gold",
  "silver",
  "orange",
  "purple",
];

favouriteNumbers = [12, 24, 48, 64, 128, 256, 512, Infinity];

for (let i = 0; i < favouriteAnimals.length; i++) {
  console.log(`This is animal #${i}: ${favouriteAnimals[i]}`);
}

//for of loop
for (let colour of favouriteColours) {
  console.log(`This is colour #${favouriteColours.indexOf(colour)}: ${colour}`);
}

//for each loop
favouriteNumbers.forEach(function (favouriteNumber, i) {
  console.log(`This is number #${i}: ${favouriteNumber}`);
});
