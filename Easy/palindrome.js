/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  let arr = x.toString().split("");
  let arr2 = x.toString().split("").reverse();

  for (let x = 0; x < arr.length; x++) {
    if (arr[x] == arr2[x]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
  //   return true;
};

isPalindrome(1211);
