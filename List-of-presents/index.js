// https://www.codewars.com/kata/5a84d485742ba347b90006b7/train/javascript

// Task:
// Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

// Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

// Example:
// Maximum budget: 20
// Gift List: [13, 2, 4, 6, 1]
// Should return 4.

// NOTE: All numbers will be integers >= 0, and the array will never be empty. _
// SAMPLE TEST
// describe("Foo", function(){

//     it("should return 4", function(){
//         Test.assertEquals(howManyGifts(20, [13, 2, 4, 6, 1]), 4);
//     });

//     it("should return 0", function(){
//         Test.assertEquals(howManyGifts(0, [1]), 0);
//     });

// });

//Input: We are given two parameters (Integer representing the max budget, an array representing the gifts)
//Output: Return integer representing the maximum amount of gifts.
//Use sort method on the gifts array.
//ascending order.
//Subtract each element in the array from max budget. Until we have less than the remaining elements.
//Intialize a counter at 0.
//Then we can start a for loop.
//Add one to counter everytime we subtract an element from an array.
function howManyGifts(maxBudget, gifts) {
  let sortGifts = gifts.sort((a, b) => a - b);
  console.log(sortGifts);
  console.log(maxBudget);
  let counter = 0;
  for (let i = 0; i < sortGifts.length; i++) {
    if (maxBudget - sortGifts[i] >= 0 && i == gifts.length - 1) {
      maxBudget = maxBudget - sortGifts[i];
      counter++;
      return counter;
    } else if (maxBudget - sortGifts[i] >= 0 && i != gifts.length - 1) {
      maxBudget = maxBudget - sortGifts[i];
      counter++;
    } else {
      return counter;
    }
  }
}
