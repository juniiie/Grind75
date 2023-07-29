function containsDuplicate(nums) {
  for (let num = 0; num < nums.length; num++) {
    for (let num2 = num + 1; num2 < nums.length; num2++) {
      if (nums[num] == nums[num2]) {
        console.log(true);
        return true;
      }
    }
  }
  console.log(false);
  return false;
}

containsDuplicate([1, 2, 3, 1]);
