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

const symmetry = (t1, t2) => {
	if(t1 === null && t2 === null) return true
	if(t1 === null && t2 === null) return false

	const leftSym = symmetry(t1.left, t2.right)
	const rightSym = symmetry(t1.right, t2.left)
	return t1.val === t2.val && leftSym && rightSym
}

var isSymmetric = function(root) {
	return symmetry(root, root)
}
