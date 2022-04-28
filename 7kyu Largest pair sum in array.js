// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.




//input= given integers
//output= sequence contains two elements and every element is an integers (largest pair sum)
//use the sort method 
const largestPairSum = (numbers) => numbers.sort((a,b)=>b-a)[0]+numbers.sort((a,b)=>b-a)[1]