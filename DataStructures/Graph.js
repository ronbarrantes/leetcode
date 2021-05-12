// function Node(val, neighbors) {
// 	   this.val = val === undefined ? 0 : val
// 	   this.neighbors = neighbors === undefined ? [] : neighbors
// }

const BaseNode = require('./BaseNode')

/**
 * @param {Node} node
 * @return {Node}
 */
class Graph extends BaseNode {
	/**
	 * @param {*} val
	 * @param {*} neighbors
	 */
	constructor(val, neighbors){
		super(val)
		this.neighbors = neighbors === undefined ? [] : neighbors
	}
}

module.exports = Graph