const { basicTest: test, addSpaces } = require('../utils/basicUtils')
const data = require('../dummyData/fbBT')

// the things that we want to find are the longest left branch, longest right branch, and the current longest sum

const longestPath = (node) => {

	// const traverse = (node, level = 0, longestLevel, longestPath) => {
	// 	if(!node)
	// 		return null //{ longestLevel: null, longestPath: null }

	// 	const leftLevel = node.left && traverse(node.left, level+1)
	// 	const rightLevel = node.right && traverse(node.right, level+1)

	// 	// return leftLevel + rightLevel + level
	// 	return Math.max(leftLevel, rightLevel, level)
	// }

	// return traverse(node)
}

console.log(longestPath(data.bt1.tree))