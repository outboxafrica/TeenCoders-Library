let myName = "bahati";

// console.log(myArray)

// syntax - way of writing of code
//semtatics - meaning

const cities = new Array(4, "coder", "geek ", true);

let type = typeof myName;

//
// console.log(cities.length)

const myArray = [4, "coder", "geek ", true];

//we start counting from 0

let lastItem = myArray[myArray.length - 1];

// console.log(lastItem)

//nesting - puttign things together
const myNestedArray = [
  4,
  "coder",
  true,
  "geek ",
  [5, "programmer", "pro", [10, 15]],
  20,
];

// console.log(myNestedArray[4][3][1])

// console.log(myNestedArray[5])

//concatenTION
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myBoys.concat("myGirls", 4);

//delete \
console.log(myGirls.pop());
console.log(myGirls);

//add item
console.log(myBoys.push(3));

//ad to the start
console.log(myBoys.unshift("Arthur"));

//arrange alphabetically
console.log(myBoys.sort());

const rev = [1, 2, 3, 4];

//reverse items
console.log(rev.reverse());
