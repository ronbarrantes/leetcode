/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  const result = [];

  const traverse = (nums, curr = []) => {
    // fill in the result
    // base case
    if (nums === 0) {
      console.log('entered here');
      result.push([...nums]);
    } else {
      // loop
      for (let i = 0; i < nums.length; i++) {
        //choose
        const currNum = nums[i];
        console.log('NUM', nums, curr);
        curr.push(currNum);
        //explore
        // traverse([...nums.slice(0, i), ...nums.slice(i + 1)], curr);
        const rest = [...nums.slice(0, i), ...nums.slice(i + 1)];
        console.log('REST', rest);
        traverse(rest, curr);
        //unchoose
        curr.pop();
      }
    }
  };

  traverse(nums);

  return result;
};

console.log(permute([1, 2, 3, 4]));
