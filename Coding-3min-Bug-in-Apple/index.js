// https://www.codewars.com/kata/56fe97b3cc08ca00e4000dc9/train/javascript

// Task:
// Find out "B"(Bug) in a lot of "A"(Apple).

// There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

// input: string Array apple

// output: Location of "B", [x,y]

// SAMPLE TEST 
// describe("Tests", () => {
//     it("test", () => {
//   var apple=[
//   ["B","A","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"]
//   ],answer=[0,0];
//   Test.assertSimilar(sc(apple), answer, "good luck!");  
  
//   apple=[
//   ["A","A","A","A","A"],
//   ["A","B","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"]
//   ],answer=[1,1];
//   Test.assertSimilar(sc(apple), answer, "good luck!"); 
  
//   apple=[
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","A","A","A","A"],
//   ["A","B","A","A","A"]
//   ],answer=[4,1];
//   Test.assertSimilar(sc(apple), answer, "good luck!"); 
//     });
//   });
  
// input : array of strings that represet the apple
// for loop to iterate thru the apple
// nested for loop to iterate each row
// output : array of 2 integers that represent the index of B in the apple
function sc(apple){
    for (let i=0; i<apple.length; i++)
      for (let j=0; j<apple[i].length; j++) {
        if (apple[i][j] == "B")
          return [i,j];
       }   
    return null;
  }