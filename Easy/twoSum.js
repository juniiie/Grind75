function twoSum(nums, target) {
  var array = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        array.push(i, j);
      }
    }
  }
  console.log(array);
}

twoSum([3, 3], 6);
// twoSum([2, 7, 11, 15], 9);
