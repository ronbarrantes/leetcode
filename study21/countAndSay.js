/**
 * @param {number} n
 * @return {string}
 */

const helper = (val) => {
	let times = 1
	let result = ''

	for(let i = 0; i < val.length; i++){
		if(val[i] !== val[i+1]) {
			result += `${times}${val[i]}`
			times = 1
		} else {
			times++
		}
	}

	return result
}

var countAndSay = function(n) {
	let tempVal = ''
	let currVal = '1'

	for(let i = 1; i < n; i++){
		tempVal = helper(currVal)
		currVal = tempVal
		tempVal = ''
	}
	return currVal
}

const asw1 = countAndSay(1) //?
const asw2 = countAndSay(5) //?

console.log(`Should be 11, ==> ${asw1} `, asw1 === '11')
console.log(`Should be 312211, ==> ${asw2} `, asw2 === '312211')
