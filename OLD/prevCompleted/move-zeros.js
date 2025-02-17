/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  let steps = 1;

  while (steps < nums.length - steps) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      steps++;
    }

    if (nums[i] !== 0) i++;
  }
};
