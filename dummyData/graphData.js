const Graph = require('../DataStructures/Graph')

const child1 = new Graph(1)
const child2 = new Graph(2)
const child3 = new Graph(3)
const child4 = new Graph(4)

child1.neighbors = [child2]
child2.neighbors = [child4, child3]
child3.neighbors = [child2, child4]
child4.neighbors = [child2, child3]

const smallGraph = child1

//////

const graphA1 = new Graph(1)
const graphA2 = new Graph(2)
const graphA3 = new Graph(3)
const graphA4 = new Graph(4)
const graphA5 = new Graph(5)

graphA1.neighbors = [graphA2, graphA3]
graphA2.neighbors = [graphA1, graphA3, graphA4]
graphA3.neighbors = [graphA2]
graphA4.neighbors = [graphA5, graphA2]

const directedGraphA = graphA1

module.exports = { smallGraph, directedGraphA }