// const tree = require('../dummyData/moreBTs')
const { deserializeTree: makeTree } = require('../utils/basicUtils')

const longestPath = (root) => {
	let currBest = 0

	const traverse = (root) => {
		if(!root)
			return 0

		const left = traverse(root.left)
		const right = traverse(root.right)

		const newNum = Math.max(left, right) + 1
		currBest = Math.max(currBest, left + right + 1)
		return newNum
	}

	traverse(root)
	return currBest
}

const tree1 = makeTree([1, 2, 3, 4, null, null, 5, null, null, 6, 7])
const tree2 = makeTree([1, 2, 3])
const tree3 = makeTree([1, 2, 3, 4, 5, null, null, 6, null, 7, null, null, 8, null, 9, null, 10, null, 11])

const t1 = longestPath(tree3)

console.log(t1)