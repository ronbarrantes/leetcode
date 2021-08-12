const BaseNode = require('./BaseNode')
const utils = require('../utils/basicUtils')

class BinaryTree extends BaseNode {
	constructor(val, left, right){
		super(val)
		this.left = (left===undefined ? null : left)
		this.right = (right===undefined ? null : right)
	}

	printTree(node = this, level = 0){
		if(!node)
			return null

		const val = node.val
		this.printTree(node.left, level + 1)
		console.log(utils.addSpaces(level * 2), val)
		this.printTree(node.right, level + 1)
	}
}

module.exports = BinaryTree