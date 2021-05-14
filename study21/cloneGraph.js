/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

const assert = require('assert').strict
const Node = require('../DataStructures/Graph')
const { smallGraph } = require('../dummyData/graphData')

var cloneGraph = function(node) {
	const visited = new Map()

	const cloneGraphHelper = (node) => {
		if(!node)
			return node

		if(visited.has(node))
			return visited.get(node)

		const cloneNode = new Node(node.val)
		visited.set(node, cloneNode)

		for(const nb of node.neighbors){
			const newNB = cloneGraphHelper(nb)
			cloneNode.neighbors.push(newNB)
		}
		return cloneNode
	}

	const result = cloneGraphHelper(node)
	return result
}

const clone = cloneGraph(smallGraph)
console.log(clone)
// console.log(assert.deepStrictEqual(clone, smallGraph), 'IS NOT EQUAL')