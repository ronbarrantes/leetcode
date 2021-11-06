const colors = require('colors')
const BinaryTree = require('../DataStructures/BinaryTree')

/**
 * Add a number of spaces as a string
 * @param num The number of spaces to be added
 * @returns spaces*num
 */
const addSpaces = (num) => {
	let space = ''
	for(let i = 0; i < num; i++){
		space += ' '
	}
	return space
}

/**
 * Displays a linked list like an array
 * @param list The linked list
 * @returns a list [ item1, item2, ...item N]
 */
const printLinkedList = function(list) {
	let arr = []
	while (list) {
		arr = [...arr, list.val]
		list = list.next
	}
	return arr
}

let testNum = 1 // Creates a closure for the basicTest
/**
 * Logs a basic test with an input, an output and what's expected
 * @param input Raw input with no modifications
 * @param output The function with it's input, e.g. fn(input)
 * @param expected The expected output
 */

const basicTest = (input, output, expected) => {
	const pass = `TEST #${testNum} | √ PASS`.green.bold
	const fail = `TEST #${testNum} | X FAIL`.red.bold

	const isPassing = output === expected
	const result = isPassing ? pass : fail

	console.log('|', result, '|', input, '|', output, '|', expected)
	console.log('+------------------+')
	testNum++
}

/**
 * Takes an array and converts it into a tree
 * @param arr that represents the tree by level (Breadth First)
 *
 * (Visit the link below for more info)
 * @link https://leetcode.com/problems/recover-binary-search-tree/discuss/32539/Tree-Deserializer-and-Visualizer-for-Python
 */
const deserializeTree = (arr) => {
	if (arr.length === 0) return null

	const nodes = arr.map(node => {
		if(node === null)
			return null
		else
			return new BinaryTree(node)
	})

	const kids = [...nodes].reverse()
	let root = kids.pop()

	for(const node of nodes){
		if(node){
			if(kids.length > 0)
				node.left = kids.pop()
			if(kids.length > 0)
				node.right = kids.pop()
		}
	}

	return root
}

/**
 * Adds a divider on the console
 * @param string Adds a message
 */
const spacer = (message = null) => {
	let space = ''
	if(message) space += `\n${message}\n`
	space += '-------------------------'
	console.log(space)
}

/**
 * Test a function multiple times with an array of values
 * @param {function} testFunction Function to be tested
 * @param {string[]} array Array of values to be iterated over
 * @param {string} titleFlag A title to be given (just in case)
 */
const testIterator = (testFunction, array, titleFlag = '') => {
	console.log(`###${titleFlag}###`)
	for(const item of array){
		const testResult = testFunction(item)
		const resultColor = testResult ? 'bgGreen' : 'bgRed'
		const validationMessage = `-${testFunction(item)}-`.toUpperCase()[resultColor].black

		console.log(validationMessage, item)
	}
	console.log(``)
}

module.exports = {
	addSpaces, printLinkedList,
	basicTest, deserializeTree,
	spacer, testIterator,
}