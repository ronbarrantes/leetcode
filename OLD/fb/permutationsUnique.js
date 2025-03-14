import { performance } from 'perf_hooks';

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function (nums) {
  const solution = [];

  // traverse function
  const traverse = (nums, curr = []) => {
    // console.log(nums)
    if (nums.length === 0) {
      solution.push([...curr]);
    } else {
      for (let i = 0; i < nums.length; i++) {
        // this ensure uniqueness
        if (nums[i] === nums[i - 1]) continue;
        // choose
        curr.push(nums[i]);
        // expore
        traverse([...nums.slice(0, i), ...nums.slice(i + 1)], curr);
        //unchoose
        curr.pop();
      }
    }
  };

  nums = nums.sort((a, b) => a - b);

  traverse(nums);
  return solution;
};

let t0 = performance.now();
console.log('ANSWER -->', permuteUnique([1, 2, 3, 4]));
let t1 = performance.now();
let time = (t1 - t0).toFixed(2);

// console.log(`EXPECT -->`, [
//   [1, 1, 2],
//   [1, 2, 1],
//   [2, 1, 1],
// ])
console.log(`Function took ${time} ms`);
