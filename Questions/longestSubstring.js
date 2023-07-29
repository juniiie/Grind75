var lengthOfLongestSubstring = function (s) {
  var letters = s.split("");
  count = 0;
  var x = [];

  for (let letter of letters) {
    for (let letter2 of letters) {
      if (letter == letter2) {
        if (!x.includes(letter)) {
          x.push(letter);
        } else continue;
      }
    }
  }
  console.log(x);
};

// lengthOfLongestSubstring("abcabcb");
lengthOfLongestSubstring("pwwkew");
