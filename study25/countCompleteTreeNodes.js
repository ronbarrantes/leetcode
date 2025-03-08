// Given the root of a complete binary tree, return the number of the nodes in the tree.
// According to Wikipedia, every level, except possibly the last, is completely
// filled in a complete binary tree, and all nodes in the last level are as far
// left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

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

import { test } from '../utils/basicUtils.js';
import { countNodesTest } from './testData/binaryTree.js';

var countNodes = function (root) {
  if (!root) return 0;

  const left = countNodes(root?.left);
  const right = countNodes(root?.right);

  return left + right + 1;
};

countNodesTest.forEach(({ input, expected }) => {
  const result = countNodes(input);
  test(result, expected);
});
