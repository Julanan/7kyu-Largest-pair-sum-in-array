// https://www.codewars.com/kata/567bed99ee3451292c000025/train/javascript

// Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.

// SAMPLE TEST

// describe('vowel', () => {
//     it('Basic tests', () => {
//       Test.assertEquals(''.vowel(), false);
//       Test.assertEquals('a'.vowel(), true);
//       Test.assertEquals('E'.vowel(), true);
//       Test.assertEquals('ou'.vowel(), false);
//       Test.assertEquals('z'.vowel(), false);
//       Test.assertEquals('lol'.vowel(), false);
//     });
//   });


String.prototype.vowel = function() {
    return /^[aeiou]$/i.test(this)
   };