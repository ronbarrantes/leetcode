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

  if (root.val && !root.left && !root.right) {
    return targetSum === 0;
  }

  const left = hasPathSum(root?.left, targetSum - root.val);
  const right = hasPathSum(root?.right, targetSum - root.val);

  return left || right;

  // [[targetSum, root.val], targetSum - root.val]
};
