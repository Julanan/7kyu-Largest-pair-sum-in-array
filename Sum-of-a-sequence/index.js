// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript

// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

// SAMPLE TEST 
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(sequenceSum(2, 6, 2), 12)
//     assert.strictEqual(sequenceSum(1, 5, 1), 15)
//     assert.strictEqual(sequenceSum(1, 5, 3), 5)  
//   })
// })

//input: integers
//output: returns the sum of a sequence of integers.
//If begin value is greater than the end, function should returns 0

const sequenceSum = (begin, end, step) => {
    let result = 0;
    if(begin > end) return 0;
    for(let i=begin; i<=end; i+=step){
      result += i
    }
    
    return result
  };