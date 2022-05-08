// https://www.codewars.com/kata/5697fb83f41965761f000052/train/javascript

// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

// Example:

// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']

// SAMPLE TEST

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Test Cases", function() {
//   it("basic example", function() {
//      assert.deepEqual(filterLongWords("The quick brown fox jumps over the lazy dog", 4), ['quick', 'brown', 'jumps']);
//   });
// });



    //Solution here
    //return a list of all words longer than n
    //split method to get all the list of all words
    //filter words that are longer than n
function filterLongWords(sentence, n) {

    return sentence.split(' ').filter(word=>word.length>n)
    
  }