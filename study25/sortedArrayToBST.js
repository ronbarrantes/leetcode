/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Given an integer array nums where the elements are sorted in ascending order,
// convert it to a height-balanced binary search tree.

import { test } from '../utils/basicUtils.js';
import { sortedArrayToBSTTest } from './testData/binaryTree.js';

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // how do I do this???
  // first thing first, find the center of the array, where we want to start
  //
  // divide and conquer
  // find what the next center is going to be after dividing
  // rince and repeat
  //
  //
  // what to do then???
  //
  // got to split each array down the middle leaving the middle as the main node
  //
  // ensure to add the null nodes
  let tree = null;

  const build = (nums) => {
    // base
    if (nums.length === 0) {
      return null;
    }
    //
    // build
    // lets find the center

    const midPoint = Math.floor(nums.length / 2);

    const currNodeVal = nums[midPoint];
    const leftNums = nums.slice(0, midPoint);
    const rightNums = nums.slice(midPoint + 1);

    const node = {
      val: currNodeVal,
      left: build(leftNums),
      right: build(rightNums),
    };
    return node;
  };

  tree = build(nums);

  return tree;
};

sortedArrayToBSTTest.forEach(({ input, expected }) => {
  const result = sortedArrayToBST(input);
  test(result, expected);
});
