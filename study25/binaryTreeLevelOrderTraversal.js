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
 * @return {number[][]}
 */

import { test } from '../utils/basicUtils.js';
import { levelOrderTest } from './testData/binaryTree.js';

// Given the root of a binary tree, return the level order traversal of its
// nodes' values. (i.e., from left to right, level by level).

var levelOrder = function (root) {};

levelOrderTest.forEach(({ input, expected }) => {
  test(levelOrder(input), expected);
});
