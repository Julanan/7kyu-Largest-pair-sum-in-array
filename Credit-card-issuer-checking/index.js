// https://www.codewars.com/kata/5701e43f86306a615c001868/train/javascript

// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |
// Examples
// getIssuer(4111111111111111) == "VISA"
// getIssuer(4111111111111) == "VISA"
// getIssuer(4012888888881881) == "VISA"
// getIssuer(378282246310005) == "AMEX"
// getIssuer(6011111111111117) == "Discover"
// getIssuer(5105105105105100) == "Mastercard"
// getIssuer(5105105105105106) == "Mastercard"
// getIssuer(9111111111111111) == "Unknown"

// SAMPLE TEST 
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(getIssuer(4111111111111111), 'VISA');
//   Test.assertEquals(getIssuer(378282246310005), 'AMEX');
//   Test.assertEquals(getIssuer(9111111111111111), 'Unknown');
//     });
//   });
  

//input: int of card of num
//output: str
//return the str of AMEX, Discover, Mastercard, VISA 
//depending on the result we will return the particular 
//if str cannnot match return Unknown

function getIssuer(number) {
    if(/^[34|37]/.test(number) && number.toString().length == 15) return "AMEX";
    else if(/^6011/.test(number) && number.toString().length == 16) return "Discover";
    else if(/^(51|52|53|54|55)/.test(number) && number.toString().length == 16)return "Mastercard";
    else if(/^4/.test(number) && (number.toString().length == 13 || number.toString().length == 16)) return "VISA";
    else return "Unknown";
  }

