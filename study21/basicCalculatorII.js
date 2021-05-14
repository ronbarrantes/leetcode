/**
 * @param {string} s
 * @return {number}
 */
const { longAssAddition, shortAddition } = require('../dummyData/longAssAddition')

// process multi
const processMulti = (numArr, signArr) => {
	const additionArr = []
	additionArr.push(numArr.shift())
	let i = 0

	while(i < numArr.length){
		const sign = signArr[i]
		const num = numArr[i]
        // if multi/div
		if(/[*/]/.test(sign)){
			const idx = additionArr.length - 1
			let temp = additionArr[idx]
			if(/\*/.test(sign))
				additionArr[idx] = temp * num
			if(/\//.test(sign))
				additionArr[idx] = Math.floor(temp/num)
		}
        // if add/sub
		if(/[+-]/.test(sign)){
			additionArr.push(sign)
			additionArr.push(num)
		}
		i++
	}

	return additionArr
}

// process adds
const processAdditions = (arr) => {
	let result = arr.shift()

	for(let i = 1; i < arr.length; i += 2){
		const sign = arr[i-1]
		const num = arr[i]
		if(sign === '+')
			result += num
		else
			result -= num
	}

	return result
}

var calculate = function(s) {
	let numArr = s.match(/[\d]+/g).map(chr => +chr)
	let signArr = s.match(/[+\-*/]/g)

	// PROCESS PRODUCTS
	const additionArr = processMulti(numArr, signArr)

    // PROCESS ADDITIONS
	const result = processAdditions(additionArr)
	return result
}

const input1 = '2*3-8-10/2/1'

// console.log('TOTAL 1:', calculate(input1))
console.log('TOTAL 2:', calculate(longAssAddition))