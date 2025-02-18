/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  const result = [];

  const traverse = (nums, curr = []) => {
    // base case
    if (nums.length === 0) {
      result.push([...curr]);
      return;
    }
    // loop
    for (let i = 0; i < nums.length; i++) {
      //choose
      const currNum = nums[i];
      curr.push(currNum);
      //explore
      const restArr = [...nums.slice(0, i), ...nums.slice(i + 1)];
      traverse(restArr, curr);
      //unchoose
      curr.pop();
    }
  };

  traverse(nums);

  return result;
};

console.log(permute([1, 2, 3]));
