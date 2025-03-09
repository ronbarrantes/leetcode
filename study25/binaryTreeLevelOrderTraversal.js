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

var levelOrder = function (root) {
  const result = [];
  const queue = [];
  queue.push([root, 0]);

  if (!root) return result;

  while (queue.length !== 0) {
    const [node, level] = queue.shift();
    console.log('node:', node?.val, ' -- lvl', level);
    // check if we have an index that conrrespond with the level
    if (result.length - 1 < level) result.push([]);

    result[level].push(node.val);

    // operate in the current node
    // check node left
    // check node right
    if (node?.left) {
      queue.push([node.left, level + 1]);
    }

    if (node?.right) {
      queue.push([node.right, level + 1]);
    }
  }

  // level order is done with a queue
  // nodes are put in a queue
  // I got to keep track of the current level
  //
  console.log(result);

  return result;
};

levelOrderTest.forEach(({ input, expected }) => {
  test(levelOrder(input), expected);
});
