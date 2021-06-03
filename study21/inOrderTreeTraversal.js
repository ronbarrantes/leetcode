const tree = require('../dummyData/BSTs').inOrderTree//.inOrderTree
const { addSpaces } = require('../utils/basicUtils')

const arr = []

const traversal = (node, level = 0) => {
	if(!node)
		return null

	traversal(node.left, level + 1)
	console.log(addSpaces(level * 3), node.val)
	traversal(node.right, level + 1)
}

const inOrderTraversal = (root) => {
	if (!root)
		return null

	const queue = []
	const valQ = [] // [to reference, not needed] DELETE LATER

	queue.push(root)
	valQ.push(root.val)

	while(queue.length > 0){
		arr.push(queue[0].val)

		let node = queue.shift()
		valQ.shift() // DELETE LATER

		if (node.left){
			queue.push(node.left)
			valQ.push(node.left.val) // DELETE LATER
		}

		if (node.right){
			queue.push(node.right)
			valQ.push(node.right.val) // DELETE LATER
		}
	}
}

traversal(tree)

inOrderTraversal(tree)

console.log(arr)