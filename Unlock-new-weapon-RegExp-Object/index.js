// https://www.codewars.com/kata/5735e39313c205fe39001173/train/javascript

// Task
// Coding in function countAnimals. function accept two parameters: animals, a string contains some animals; count, an array list of which animals we should count. The result should be a number array.
// Sample Test
// describe("Tests", () => {
//     it("test", () => {
//       Test.assertSimilar(countAnimals("dog,cat",["dog","cat"]) , [1,1]);
//       Test.assertSimilar(countAnimals("dog,cat",["dog","cat","pig"]) , [1,1,0]);
//       Test.assertSimilar(countAnimals("dog,dog,cat",["dog","cat"]) , [2,1]);
//       Test.assertSimilar(countAnimals("dog,dog,cat",["pig","cow"]) , [0,0]);

//     });
//   });

// given: strings of animals and list of animals to count
// output: result should be a number array

function countAnimals(animals, count) {
  var newArr = [];
  for (var i = 0; i < count.length; i++) {
    newArr.push((animals.match(new RegExp(count[i], "g")) || []).length);
  }
  return newArr;
}
