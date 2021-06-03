const { basicTest: test } = require('../utils/basicUtils')
const data = require('../dummyData/fbBT')

// const addSpaces

const traverse = (node, level = 0) => {
	if(!node)
		return null

	traverse(node.left, level+1)
	console.log()
	traverse(node.right, level+1)
}

traverse(data.bt1)