/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  const result = [];

  const traverse = (start = 0, curr = []) => {
    // Add the current combination
    result.push([...curr]);

    // Loop through remaining elements
    for (let i = start; i < nums.length; i++) {
      // choose
      curr.push(nums[i]);
      // explore
      traverse(i + 1, curr);
      // unchoose
      curr.pop();
    }
  };

  traverse();

  return result;
};

console.log(permute([1, 2, 3]));
