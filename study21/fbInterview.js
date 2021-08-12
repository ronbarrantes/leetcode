const utils = require('../utils/basicUtils')
const TreeNode = require('../DataStructures/BinaryTree')

var root2 = new TreeNode(10)
root2.left = new TreeNode(8)
root2.right = new TreeNode(15)
root2.left.left = new TreeNode(4)
root2.left.left.right = new TreeNode(5)
root2.left.left.right.right = new TreeNode(6)
root2.right.left = new TreeNode(14)
root2.right.right = new TreeNode(16)

const traverse = (root, num = 0) => {
	if (!root) return null
	traverse(root.left, num)
	console.log(utils.addSpaces(num*3), root.val)
	traverse(root.right, num+1)
}

traverse(root2)