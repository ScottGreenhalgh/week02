console.log("Hello");

// complex data type

let arrayWithArray = ["Scott", "Norwich", "icecream", [23, 12, 9, 16]];

console.log(arrayWithArray.length);
console.log(arrayWithArray[3]);

console.log(arrayWithArray[3][1]);

//objects

let myInfoObject = {
  name: "Scott",
  city: "Norwich",
  food: "icecream",
  numbers: [23, 12, 9, 16],
};
// accessing elements
console.log(myInfoObject.name);
console.log(myInfoObject["city"]);
console.log(myInfoObject.numbers[1]);

//add content to objects
myInfoObject.color = "orange";

console.log(myInfoObject.color);
console.log(myInfoObject);

//logging objects
let car = {
  make: "bmw",
  model: "m3",
  color: "black",
};

console.log(car);

let book = {
  title: "Harry Potter",
  author: "JK Rowling",
  pages: 309,
};

console.log(
  `${book.title} is a book by ${book.author}, containing ${book.pages} pages.`
);

// complex object

const blogPost = {
  title: "My first blog post",
  author: {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "This is my blog post about learning objects and arrays.",
};

console.log(blogPost.tags.length); // Output: 4

//loop the array inside the object
for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]);
}

console.log(
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
); // Output: There are 4 tags for post "My first blog post":
for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]); // Output: coding, javascript, objects, arrays
}

console.log(`Tags for post "${blogPost.title}":`); // Output: Tags for post "My first blog post":
for (let tag of blogPost.tags) {
  console.log(tag); // Output: coding, javascript, objects, arrays
}

//functions in objects
const giraffe = {
  name: "Jeff",
  breed: "Masia",
  img: "https://en.wikipedia.org/wiki/Giraffe#/media/File:Giraffe_Mikumi_National_Park.jpg",
  favFood: "Tree leaves",
  eat: function () {
    console.log("Yummy leaves");
  },
  eatString: function () {
    return "Yummy leaves written as a string";
  },
  getName: function (humanName) {
    return `${humanName} loves ${giraffe.name}`;
  },
};

giraffe.eat();
console.log(giraffe.eatString());
console.log(giraffe.getName(myInfoObject.name));

const complexCar = {
  make: "bmw",
  model: "m3",
  color: "black",
  advert: function () {
    return `The car is a ${complexCar.make} ${complexCar.model} in ${complexCar.color}.`;
  },
};

console.log(complexCar.advert());

const complexBook = {
  title: "Harry Potter",
  author: "JK Rowling",
  pages: 309,
  advert: function () {
    return `${complexBook.title} is a book by ${complexBook.author}, containing ${complexBook.pages} pages.`;
  },
};

console.log(complexBook.advert());
