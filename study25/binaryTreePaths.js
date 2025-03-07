import { test } from '../utils/basicUtils.js';
import { binaryTreePathsTests } from './testData/binaryTree.js';
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
 * @return {string[]}
 */

var binaryTreePaths = function (root) {
  // I need a place to put the paths
  const paths = [];

  // I need some kind of function that traverses the tree
  // and keeps track of the paths

  // easiest way would be with recursion

  const traverse = (root, nodeList) => {
    // base
    // at the base we check if we are at the end
    // we push the paths as a string form with a -> separator
    if (!root) return null;

    if (!root.left && !root.right) {
      paths.push([...nodeList, root.val].join('->'));
      return null;
    }

    traverse(root?.left, [...nodeList, root.val]);
    traverse(root?.right, [...nodeList, root.val]);
  };

  traverse(root, []);
  return paths;
};

binaryTreePathsTests.forEach(({ input, expected }) => {
  test(binaryTreePaths(input), expected);
});
