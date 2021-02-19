/**
 * @param {number} x
 * @return {number}
 */

 // -231 <= x <= 231 - 1

const isInRange = (num) => {
	if(-(2 ** 31) > num || num > (2 ** 31) - 1)
		return 0
	return num
}

var reverse = function(x) {

	let isNegative = false
	if(x < 0)
		isNegative = true

	let s = x.toString()
	let reversed = ''

	for(let i = s.length - 1; i >= 0; i--){
		reversed += s[i]
	}

	x = isNegative ? -(parseInt(reversed)) : parseInt(reversed)
	return isInRange(x)
}

const val1 = -123
const val2 = 1534236469
// const val3

console.log(`REVERSE OF ${val1} should be -321 ||`, reverse(val1) === -321)
console.log(`REVERSE OF ${val2} should be 0 ||`, reverse(val2) === 0)