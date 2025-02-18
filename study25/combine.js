/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  const result = [];

  const traverse = (nums, start, curr = []) => {
    result.push([...curr]);

    for (let i = start; i < nums.length; i++) {
      curr.push(nums[i]);
      traverse(nums, i + 1, curr);
      curr.pop();
    }
  };

  traverse(nums, 0);

  return result;
};

console.log(permute([1, 2, 3]));
