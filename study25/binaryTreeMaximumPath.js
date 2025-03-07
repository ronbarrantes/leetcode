import { test } from '../utils/basicUtils.js';
import { binaryTreeMaximumPathTests } from './testData/binaryTree.js';
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
 * @return {number}
 */
var maxPathSum = function (root) {
  // what do we need??
  let max = -Infinity;

  // will return the value

  // we need to keep track of the highest sum (a max function)
  // we need to traverse and keep track of be returning the value
  // we can be checking on the sum and updating the highest value
  const traverse = (root) => {
    if (!root) return 0;

    // Recursively get max path sum from left and right subtrees
    const left = Math.max(0, traverse(root.left)); // Ignore negative values
    const right = Math.max(0, traverse(root.right));

    // Compute max path sum passing through this node
    const sum = root.val + left + right;

    // Update global max
    max = Math.max(max, sum);

    // Return max contribution to the parent (choosing one side)
    return root.val + Math.max(left, right);
  };

  traverse(root);
  return max;
};

binaryTreeMaximumPathTests.forEach(({ input, expected }) => {
  test(maxPathSum(input), expected);
});
