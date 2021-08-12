const Tree = require('../DataStructures/BinaryTree')

const node1 = new Tree(1)
const node2 = new Tree(2)
const node3 = new Tree(3)
const node4 = new Tree(4)

const node5 = node3
node5.val = 15

node1.left = node2
node1.right = node4
node2.left = node3

const traverse = (root) => {
	if(!root) return null

	console.log(root.val)
	traverse(root.left)
	traverse(root.right)
}

traverse(node1)
