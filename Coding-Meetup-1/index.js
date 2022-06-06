// https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript

// Count the number of JavaScript developers coming from Europe

// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

// Notes:

// The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.




// This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.

// SAMPLE TEST 
// const assert = require('chai').assert;
// describe("Sample tests", () => {
//   const list1 = [
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//     { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//     { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//     { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
//   ];

//   it("should find JavaScript developers from Europe", () => {
//     assert.strictEqual(countDevelopers(list1), 1, "Noah is the only JavaScript developer from Europe");
//   });
  
//   const list2 = [
//     { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
//     { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
//   ];
  
//   it("should not find HTML developers from Europe", () => {
//     assert.strictEqual(countDevelopers(list2), 0, "Lukas is not a JS devolper");
//   });
// });

//input: arr of objects
//output: num
//create a counter
//iterate through the arr and check the property
//language to be java and continent to be Europe
//add counter if the codition is true

function countDevelopers(list) {
    let counter = 0;
    for(let i=0; i<list.length; i++){
      list[i].continent == 'Europe' && list[i].language == 'JavaScript' ? counter++: counter;
    }
    return counter;
  }
