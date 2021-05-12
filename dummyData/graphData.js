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

module.exports = { smallGraph }