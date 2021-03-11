const trees = require('../dummyData/BSTs')

var levelOrder = function(root) {
	const levels = []
	if(!root){
		return levels
	}

	const traverseLevels = (node, level) => {
		if(!node){
			return null
		}

		if(levels.length === level)
			levels.push([])

		levels[level].push(node.val)

		if(node.left)
			traverseLevels(node.left, level + 1)
		if(node.right)
			traverseLevels(node.right, level + 1)
	}

	traverseLevels(root, 0)
	return levels
}

console.log(levelOrder(trees.bigValidTree))

