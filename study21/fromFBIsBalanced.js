const { basicTest: test } = require('../utils/basicUtils')

function isBalanced(s) {
	const stack = []
	const map = new Map([['{', '}'], ['[', ']'], ['(', ')']])

	for(const item of s){
		if(stack[stack.length - 1] === item)
			stack.pop()
		else if(map.has(item))
			stack.push(map.get(item))
		else
			return false
	}

	return true
}

var s1 = '{[(])}'
var expected1 = true
var output1 = isBalanced(s1)
test(s1, output1, expected1)

var s2 = '{{[[(())]]}}'
var expected2 = true
var output2 = isBalanced(s2)
test(s2, output2, expected2)