// https://www.codewars.com/kata/57ced2c1c6fdc22123000316/train/javascript

// You will be given an array of numbers.

// For each number in the array you will need to create an object.

// The object key will be the number, as a string. The value will be the corresponding character code, as a string.

// Return an array of the resulting objects.

// All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.

// SAMPLE TEST
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Numbers  to Objects", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(numObj([118,117,120]),[{'118':'v'}, {'117':'u'}, {'120':'x'}]);
//     assert.deepEqual(numObj([101,121,110,113,113,103]),[{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}]);
//   });
// });

//input: arr of num
//create for loop
//output: arr of obj

function numObj(s) {
  let newArr = [];
  for (let i = 0; i < s.length; i++) {
    let obj = {};
    obj[s[i]] = String.fromCharCode(s[i]);
    newArr.push(obj);
    obj = {};
  }
  return newArr;
}
