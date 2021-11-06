const { testIterator } = require('../utils/basicUtils')
// NOT DONE
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
	// const reg = /^(\+|-)?(\d+)?\.(\d+|\d(\+|-)?(e|E)?\d+)/
	const arrNums = s.split(/[eE]/)

	if(arrNums.length > 2)
		return false

	const withDot = /^(\+|-)?(\d*\.)/
	const withoutDot = /\d/

	// TEST FRONT SIDE FROM E

	// TEST REAR FROM E
	console.log(arrNums)

	const frontResult = withDot.test(arrNums)
	const rearResult = withoutDot.test(arrNums)

	return frontResult && rearResult
}

const validTest = ['2', '0089', '-0.1', '+3.14', '-9', '4.', '-.9',
	'2e10', '-90E3', '-90E3e4', '3e+7', '+6e-1', '53.5e93', '-123.456e789']
const invalidTest = ['abc', '1a', '1e', 'e3', '99e2.5', '--6', '-+3', '95a54e53', '-']

console.log('START ===>>>')

testIterator(isNumber, validTest, 'VALID TEST')
testIterator(isNumber, invalidTest, 'INVALID TEST')