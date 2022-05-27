// https://www.codewars.com/kata/56bf3287b5106eb10f000899/train/javascript

// Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

// Vowels are (in this kata): a, e, i, o, u

// Note: all provided input strings are lowercase.

// Examples
// "day"    ==>  "dya"
// "apple"  ==>  "pplae"

// SAMPLE TEST 

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Move all vowels", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(moveVowel("day"),"dya");
//     assert.strictEqual(moveVowel("apple"),"pplae");
//     assert.strictEqual(moveVowel("peace"),"pceae");
//     assert.strictEqual(moveVowel("maker"),"mkrae");   
//   }) 
// });


//Input: a string 
//Output: Move all of its vowels to the end of the string as the same order


const moveVowel = input => input.replace(/[aeiou]/g, '') +input.replace(/[^aeiou]/g, '')
  
  
  
//  let noVow = input.replace(/[aeiou]/g, '')
//  let vow = input.replace(/[^aeiou]/g, '')
//  return noVow + vow
// console.log(noVow)
  

function moveVowel(input) {
let vows = 'aeiou'
let splitStr = input.split('')
let joinVow = []
let joinNonVow = []
for(let i=0; i<splitStr.length; i++){
if (vows.includes(splitStr[i])){
  
//  if(splitStr[i] == 'a'||splitStr[i] =='e'||splitStr[i] =='i'||splitStr[i] =='o'||splitStr[i] =='u') {
joinVow.push(splitStr[i])
  } else {
joinNonVow.push(splitStr[i])
  }
}
return joinNonVow.join('') + joinVow.join('')
  
  
}