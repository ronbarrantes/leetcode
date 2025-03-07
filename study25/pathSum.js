import { test } from '../utils/basicUtils.js';
import { hasPathSumTest } from './testData/binaryTree.js';

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  if (!root.left && !root.right) return targetSum - root.val === 0;

  const left = hasPathSum(root.left, targetSum - root.val);
  const right = hasPathSum(root.right, targetSum - root.val);

  return left || right;
};

hasPathSumTest.forEach((testData) => {
  const input = testData.input;
  const ts = testData.targetSum;
  const expected = testData.expected;
  test(hasPathSum(input, ts), expected);
});
