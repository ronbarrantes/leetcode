
const testArray = (array, testFunction, titleFlag = '') => {
	console.log(`###${titleFlag}###`)
	for(const item of array){

	}
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
	const reg = /\d/ // /^(\+|\-)?(\d+.?|(^\d*.(^\d+|\d(e|E)?\d+)))$/

	return reg.test(s)
}

const validTest = ['2', '0089', '-0.1', '+3.14', '4.', '-.9', '2e10', '-90E3', '3e+7', '+6e-1', '53.5e93', '-123.456e789']
const invalidTest = ['abc', '1a', '1e', 'e3', '99e2.5', '--6', '-+3', '95a54e53']

// for()