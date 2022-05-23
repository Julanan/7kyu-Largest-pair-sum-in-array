// https://www.codewars.com/kata/5aa3af22ba1bb5209f000037/train/javascript

// Given a mathematical equation that has *,+,-,/, reverse it as follows:

// solve("100*b/y") = "y/b*100"
// solve("a+b-c/d*30") = "30*d/c-b+a"
// More examples in test cases.

// SAMPLE TEST 
// describe("Basic tests", function(){
//     Test.assertEquals(solve("100*b/y"),"y/b*100");
//     Test.assertEquals(solve("a+b-c/d*30"),"30*d/c-b+a");
//     Test.assertEquals(solve("a*b/c+50"),"50+c/b*a");
//     });

//input: given string of mathematical equations
//split strings into an arr and split it by the math operator using regex
//reverse method on the arr
//return the arr into the str
//output: reverse the string


const solve = (eq) => eq.split(/([*+-/])/).reverse('').join('');