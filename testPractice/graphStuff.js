const { directedGraphA } = require('../dummyData/graphData')

// ADD PROTOTYPES
Array.prototype.enqueue = Array.prototype.push
Array.prototype.dequeue = Array.prototype.shift

// TRAVERSE A GRAPH

const graphStuff = (graph) => {
	const visited = new Set()
	const traverse = (graph) => {
		if(visited.has(graph))
			return

		console.log(graph.val)
		visited.add(graph)

		for(let i = 0; i < graph.neighbors.length; i++){
			console.log(graph.neighbors)
			traverse(graph.neighbors[i])
		}
	}

	traverse(graph)
}

const graphHasValue = (graph, val) => {
	const visited = new Set()

	let isFound = false

	const traverse = (graph, val) => {
		if(visited.has(graph)){
			return false
		}

		visited.add(graph)

		if(graph.val === val){
			isFound = true
		}

		for(let i = 0; i < graph.neighbors.length; i++){
			if(!isFound)
				traverse(graph.neighbors[i], val)
		}
	}

	traverse(graph, val)
	return isFound
}

const graphPathToValue = (graph, val) => {
	const visited = new Set()
	const arr = []
	let isFound = false

	const traverse = (graph, val, parent = null) => {
		if(visited.has(graph)){
			return false
		}

		visited.add(graph)

		if(graph.val === val){
			return true
		}

		for(let i = 0; i < graph.neighbors.length; i++){
			const res = traverse(graph.neighbors[i], val, graph)
			if(res){
				arr.push(parent.val)
			}
		}
	}

	return traverse(graph, val) || false
}

console.log(graphPathToValue(directedGraphA, 3))
