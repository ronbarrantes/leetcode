const { basicTest: test } = require('../utils/basicUtils')

// Add any extra import statements you may need here
const change = (target, denoms, currSum = 0) => {
	if(denoms.length === 0 || currSum > target){
		return false
	}

	for(let i = denoms.length -1; i >= 0; i--){
// choose
		const tempDenom = denoms.splice(i, 1)[0]

		while(currSum + tempDenom < target){
			currSum += tempDenom
		}

		if(currSum + tempDenom === target)
			return true
// explore

		const isTrue = change(target, denoms, currSum)
		if(isTrue) return true
// unchoose
		denoms.splice(i, 0, tempDenom)
	}

	return false
}

// Add any helper functions you may need here

function canGetExactChange(targetMoney, denominations) {
// Write your code here
	return change(targetMoney, denominations)
}

var target1 = 94
var arr1 = [5, 10, 25, 100, 200]
var expected1 = false
var output1 = canGetExactChange(target1, arr1)
test(arr1, output1, expected1)

var target2 = 75
var arr2 = [4, 17, 29]
var expected2 = true
var output2 = canGetExactChange(target2, arr2)
test(arr2, output2, expected2)