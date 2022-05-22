// https://www.codewars.com/kata/5b37a50642b27ebf2e000010/train/javascript

// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

// Examples
// sumOfABeach("WAtErSlIde")                    ==>  1
// sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
// sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
// sumOfABeach("cItYTowNcARShoW")               ==>  0

// SAMPLE TEST 
// const { assert } = require("chai");

// function testing(inp, exp) {
//   it(`Testing for "${inp}", expecting: ${exp}`, function() {
//     assert.strictEqual(sumOfABeach(inp), exp);
//   });
// }

// describe("Fixed tests", function() {
//   describe("Sample tests", function() {
//     testing("SanD", 1);
//     testing("sunshine", 1);
//     testing("sunsunsunsun", 4);
//     testing("123FISH321", 1);
//   });

//   describe("Longer tests", function() {
//     testing("weoqipurpoqwuirpousandiupqwoieurioweuwateruierqpoiweurpouifiShqowieuqpwoeuisUn", 4);
//     testing("sAnDsandwaTerwatErfishFishsunsunsandwater", 10);
//     testing("joifjepiojfoiejfoajoijawoeifjowejfjoiwaefjiaowefjaofjwoj fawojef ", 0);
//     testing("jwefjwjfsandsandwaterwaterfishfishsunsunsandwateriojwhefa;jawof;jawio;f", 10);
//     testing(
//       "saNdsandwaterwAterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwater",
//       100
//     );
//   });

//   describe("Sliced words", function() {
//     testing("sununsu", 1);
//     testing("sandandndsansa", 1);
//     testing("wateratertererwatewatwa", 1);
//     testing("fishishshfisfi", 1);
//   });
// });

//given: beach with str of words
//return: how many words appear without overlapping

function sumOfABeach(beach) {
    return (beach.match(/water|sand|fish|sun/gi)||[]).length
  
  }