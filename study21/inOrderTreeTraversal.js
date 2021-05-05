const tree = require('../dummyData/BSTs').inOrderTree//.inOrderTree

const arr = []

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

inOrderTraversal(tree)

console.log(arr)