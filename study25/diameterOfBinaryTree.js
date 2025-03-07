/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

import { test } from '../utils/basicUtils.js';
import { diameterOfBinaryTreeTests } from './testData/binaryTree.js';

/**
 * @param {TreeNode} root
 * @return {number}
 */

/*        
          3
        /  \
       5    1 
     /  \
    6    9
   / \    \
  8   7   10
 /         \
2           3

*/

var diameterOfBinaryTree = function (root) {
  // I got to keep track of the length of each branch

  // only return the length of the longest one

  // only return the longest branch

  // each time add the branches and update the diameter

  // return the diameter
  //
  //

  let diameter = 0;

  const traverse = (root) => {
    // base
    if (!root) return 0;
    // explore
    // get the left and right branches
    const left = traverse(root?.left);
    const right = traverse(root?.right);

    // try to figure out the length of the branches and return the longest branch

    diameter = Math.max(diameter, left + right);
    return Math.max(left, right) + 1; // a number
  };

  traverse(root);

  return diameter;
};

diameterOfBinaryTreeTests.forEach((testData) => {
  test(diameterOfBinaryTree(testData.input), testData.expected);
});
