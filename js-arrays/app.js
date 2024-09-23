console.log("Hello world!");

// creating an array

const blogPosts = [
  "My first blog post",
  "My second blog post",
  "My third blog post",
];

console.log(blogPosts);

// console.log(blogPosts.at(0));
// console.log(blogPosts[1]);
// console.log(blogPosts[2]);

// same as above (post referring to blogposts)
blogPosts.forEach((post) => {
  console.log(post);
});

// check index of content
console.log(blogPosts.indexOf("My second blog post"));

// output total length of array
console.log(blogPosts.length);

//add array contents
blogPosts.push("Dynamically added blogpost");
console.log(blogPosts.length);
console.log(blogPosts);

blogPosts[20] = "The very far away array content";
console.log(blogPosts.length);
console.log(blogPosts);

blogPosts.forEach((post) => {
  console.log(post);
});

// additional arrays

const favouriteFoods = [
  "pizza",
  "mcdonalds",
  "kfc",
  "cake",
  "icecream",
  "coke",
];

const favouriteColours = ["pink", "hotpink", "muave", "purple"];

const favouriteNumber = [69, 420, 42, 7, 13];

//logging and formatting

console.log(favouriteFoods);

let favouriteFoodsString = "My favourite foods are ";

favouriteFoods.forEach((post) => {
  let currentIndex = favouriteFoods.indexOf(post);
  if (currentIndex === 0) {
    favouriteFoodsString += post;
  } else if (currentIndex === favouriteFoods.length - 1) {
    favouriteFoodsString = favouriteFoodsString + " and " + post + ".";
  } else {
    favouriteFoodsString = favouriteFoodsString + ", " + post;
  }
});
console.log(favouriteFoodsString);

console.log(favouriteColours);
favouriteColours.forEach((post) => {
  console.log(post);
});

console.log(favouriteNumber);
favouriteNumber.forEach((post) => {
  console.log(post);
});

// array of arrays

const favourites = [];

favourites.push(favouriteFoods);
favourites.push(favouriteColours);
favourites.push(favouriteNumber);

console.log(favourites);

// mixed datatype array

const mixedArray = ["string1", "string2", 1, 2, true, false];

console.log(mixedArray);
