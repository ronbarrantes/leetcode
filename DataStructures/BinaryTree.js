const BaseNode = require('./BaseNode')

class BinaryTree extends BaseNode {
	constructor(val, left, right){
		super(val)
		this.left = (left===undefined ? null : left)
		this.right = (right===undefined ? null : right)
	}
}

module.exports = BinaryTree