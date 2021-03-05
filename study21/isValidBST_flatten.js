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

/// FLATTEN TREE SOLUTION
const flattenTree = (root, arr = []) => {
	if(!root){
		return null
	}

	flattenTree(root.left, arr)
	arr.push(root.val)
	flattenTree(root.right, arr)
	return arr
}

var isValidBST = function(root) {
	const flatten = flattenTree(root)

	for(let i = 1; i < flatten.length; i++){
		if(flatten[i] <= flatten[i-1]){
			return false
		}
	}

	return true
}