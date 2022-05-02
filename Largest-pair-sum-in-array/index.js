//https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

// SAMPLE TEST
// const strictEqual = require("chai").assert.strictEqual;

// function doTest (array, expected) {
//   const actual = largestPairSum(array);
//   strictEqual(actual, expected, `for array [${array.join(', ')}]:\n`);
// }

// it("Basic tests", () => {
//     doTest([10,14,2,23,19], 42);
//     doTest([-100,-29,-24,-19,19], 0);
//     doTest([1,2,3,4,6,-1,2], 10);
//     doTest([-10, -8, -16, -18, -19], -18);
// });




//input= given integers
//output= sequence contains two elements and every element is an integers (largest pair sum)
//use the sort method 
const largestPairSum = (numbers) => numbers.sort((a,b)=>b-a)[0]+numbers.sort((a,b)=>b-a)[1]