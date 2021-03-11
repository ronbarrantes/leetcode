/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const util = require('util')

const tree = {
    val: 1,
    right:{
        val: 5,
        right:  { val: 7,
            right: { val: 9, right: null, left: null },
            left: { val: 8, right: null, left: null } },
        left: { val: 6, right: null, left: null },
    },
    left: {
        val: 2,
        right:  { val: 4, right: null, left: null },
        left:  { val: 3, right: null, left: null },
    },
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    const traverse = root => {
        if(root === null)
            return null
        let left = root.left
        let right = root.right

        root.left = null
        root.right = traverse(left)

        let temp = root

        while(temp.right !== null)
            temp = temp.right
        temp.right = traverse(right)
        return root
    }

    return traverse(root)
}
module.exports = flatten

// console.log(tree)

console.log(util.inspect(flatten(tree), false, null, true))
