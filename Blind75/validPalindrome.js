/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var text = s
    .replace(/[_\W]+/g, "")
    .toLowerCase()
    .split("");
  var reversedText = s
    .replace(/[_\W]+/g, "")
    .toLowerCase()
    .split("")
    .reverse();

  for (let i = 0; i < text.length; i++) {
    if (text[i] == reversedText[i]) continue;
    else return false;
  }
  return true;
};

isPalindrome("A man, a plan, a canal: Panama");

/*

PSUEDOCODE

1 - Convert input into lowercase + add regex (replace()) to remove all non alphanumeric characters. Now you have a string
2 - Convert that string into an array using split('') method which splits it by each char
3 - Create a new variable and redo the above statements while adding the reverse() function 
4 - Create a for loop statement to loop through each index of the array 
5 - compare the index of the arr to arr2 and continue if they are true
6 - Else return false
7 - Out of the for loop return true when the for loop finishes executing meaning it is palindrome


*/
