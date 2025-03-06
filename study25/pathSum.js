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
  // base

  if (!root) return false;

  if (!root.left && !root.right) {
    return targetSum - root.val === 0;
  }

  const left = hasPathSum(root.left, targetSum - root.val);
  const right = hasPathSum(root.right, targetSum - root.val);

  return left || right;
};

const root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: { val: 7, left: null, right: null },
      right: { val: 2, left: null, right: null },
    },
    right: null,
  },
  right: {
    val: 8,
    left: { val: 13, left: null, right: null },
    right: {
      val: 4,
      left: null,
      right: { val: 1, left: null, right: null },
    },
  },
};

const targetSum = 22;
console.log(hasPathSum(root, targetSum)); // Should print true or false based on the tree structure and targetSum
