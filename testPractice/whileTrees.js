const { spacer, deserializeTree } = require('../utils/basicUtils')

const dfsTree = deserializeTree([1, 2, 5, 3, 4, null, 6])
const bfsTree = deserializeTree([1, 2, 3, 4, 5, null, 6])

// RECURSION TREE
const recursiveDFS = (root) => {
	if (!root) return null

	console.log(root.val)
	recursiveDFS(root.left)
	recursiveDFS(root.right)
}

spacer('DFS RECURSIVE')
recursiveDFS(dfsTree)

Array.prototype.enqueue = Array.prototype.push
Array.prototype.dequeue = Array.prototype.shift

const whileBFS = (root) => {
	if(!root) return null

	// make a queue
	const queue = []
	queue.enqueue(root)

	while(queue.length > 0){
		let node = queue.dequeue()
		console.log(node.val)
		if(node && node.left)
			queue.enqueue(node.left)
		if(node && node.right)
			queue.enqueue(node.right)
	}
}

spacer('BFS WHILE')
whileBFS(bfsTree)

const whileDFS = (root) => {
	if(!root) return null

	// make a stack
	const stack = []
	stack.push(root)

	while(stack.length > 0){
		const node = stack.pop()

		console.log(node.val)

		if(node && node.right)
			stack.push(node.right)

		if(node && node.left)
			stack.push(node.left)
	}
}

spacer('DFS WHILE')
whileDFS(dfsTree)