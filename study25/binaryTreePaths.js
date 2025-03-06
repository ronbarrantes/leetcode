import { test } from '../utils/basicUtils.js';
import TreeNode from '../DataStructures/BinaryTree.js';
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

const tests = [
  {
    input: new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(5)),
      new TreeNode(3)
    ),
    expected: ['1->2->5', '1->3'],
  },
  {
    input: new TreeNode(1),
    expected: ['1'],
  },
  {
    input: new TreeNode(
      1,
      new TreeNode(2),
      new TreeNode(3, new TreeNode(4), new TreeNode(5))
    ),
    expected: ['1->2', '1->3->4', '1->3->5'],
  },
];

tests.forEach(({ input, expected }) => {
  test(binaryTreePaths(input), expected);
});
