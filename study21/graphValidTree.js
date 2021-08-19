/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

const buildAdjacencyList = (numNodes, edges) => {
	const list = []
	for(let i = 0; i < numNodes; i++){
		list.push([])
	}

	for(const edge of edges){
		const [e1, e2] = edge
		list[e1].push(e2)
		list[e2].push(e1)
	}

	return list
}

var validTreeIter = function(n, edges) {
	if(n !== edges.length + 1) return false
	// BUILD ADJACENCY LIST
	const adjacencyList = buildAdjacencyList(n, edges)

	const parent = new Map()
	parent.set(0, -1)

	const stack = new Array()
	stack.push(0)

	while(stack.length !== 0){
		let node = stack.pop()

		for(const neighbor of adjacencyList[node]){
			if(parent.get(node) === neighbor)
				continue

			if(parent.has(neighbor))
				return false

			stack.push(neighbor)
			parent.set(neighbor, node)
		}
	}

	return parent.size === n
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

var validTreeRec = function(n, edges) {
	if(n !== edges.length + 1) return false
	const adjacencyList = buildAdjacencyList(n, edges)

	const seen = new Set()

	// DFS
	const dfs = (node, parent) => {// return boolean
		// BASE
		if(seen.has(node)) return false
		seen.add(node)

		// EXPLORE
		for(const neighbor of adjacencyList[node]){
			if(parent !== neighbor){
				const result = dfs(neighbor, node)
				if(!result) return false
			}
		}

		return true
	}

	return dfs(0, -1) && seen.size === n
}

console.log(validTreeIter(5, [[0, 1], [0, 2], [0, 3], [1, 4]]), true) /// true
console.log(validTreeRec(5, [[0, 1], [0, 2], [0, 3], [1, 4]]), true) /// true

console.log(validTreeIter(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]), false)
console.log(validTreeRec(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]), false)