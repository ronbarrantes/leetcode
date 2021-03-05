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

const trees = require('../dummyData/BSTs')

const validate = (root, low = -Infinity, high = Infinity) => {
	if(!root)
		return true

	if(root.val <= low || root.val >= high){
		return false
	}

	return validate(root.right, root.val, high) && validate(root.left, low, root.val)
}

var isValidBST = function(root) {
	return validate(root)
}

console.log('Should be true', isValidBST(trees.smallValidBST))
console.log('Should be false', isValidBST(trees.smallTree))