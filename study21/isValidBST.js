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
 * @return {boolean}
 */

/// SOLUTION INTERVIWER PROBABLY WANTS

const traverse = (root, low = -Infinity, high = Infinity) => {
	if(!root)
		return true

	if(root.val <= low || root.val >= high){
		return false
	}

	return traverse(root.right, root.val, high) && traverse(root.left, low, root.val)
}

var isValidBST = function(root) {
	return traverse(root)
}
