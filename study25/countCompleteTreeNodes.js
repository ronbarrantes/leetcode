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

var countNodes = function (root) {};

countNodesTest.forEach(({ input, expected }) => {
  const result = countNodes(input);
  test(result, expected);
});
